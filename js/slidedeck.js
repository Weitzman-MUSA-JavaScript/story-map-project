/** Keep the map in step with the narrative, including keyboard navigation. */
class SlideDeck {
  constructor(container, slides, map, slideOptions = {}) {
    this.container = container;
    this.slides = slides;
    this.map = map;
    this.slideOptions = slideOptions;
    this.dataLayer = L.layerGroup().addTo(map);
    this.currentSlideIndex = -1;
    this.slideData = {};
    this.slideLayers = {};
    this.pendingLoads = {};
    this.requestId = 0;
    this.animationFrame = null;
    this.animatedRoutes = [];
    this.motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.motionPreference.addEventListener('change', () => {
      this.finishAnimation();
    });
  }

  async loadSlide(id) {
    // The introduction and conclusion share the same boundary geometry.
    const dataId = ['title-slide', 'conclusion'].includes(id) ? 'rwanda-context' : id;
    if (!this.pendingLoads[dataId]) {
      this.pendingLoads[dataId] = (async () => {
        const response = await fetch(`data/${dataId}.json`);
        if (!response.ok) throw new Error(`Scene ${dataId}: HTTP ${response.status}`);
        const data = await response.json();
        if (data.type !== 'FeatureCollection' || !Array.isArray(data.features)) {
          throw new Error(`Scene ${dataId}: invalid map data`);
        }
        return data;
      })().catch((error) => {
        delete this.pendingLoads[dataId];
        throw error;
      });
    }
    this.slideData[id] = await this.pendingLoads[dataId];
    if (!this.slideLayers[id]) {
      this.slideLayers[id] = L.geoJSON(this.slideData[id], this.slideOptions[id]);
    }
  }

  updateMapAccess(slide) {
    const wrapper = document.querySelector('.map-container');
    const desktop = window.matchMedia('(min-width: 761px)').matches;
    const covered = desktop && ['title-slide', 'conclusion'].includes(slide.id);
    if (covered && wrapper.contains(document.activeElement)) {
      slide.querySelector('h1, h2').focus({ preventScroll: true });
    }
    wrapper.inert = covered;
    wrapper.classList.toggle('map-covered', covered);
    wrapper.setAttribute('aria-hidden', String(covered));
  }

  async syncMapToCurrentSlide() {
    const slide = this.slides[this.currentSlideIndex];
    const requestId = ++this.requestId;
    const status = document.querySelector('#map-status');
    const message = document.querySelector('#map-status-message');
    const retry = document.querySelector('#retry-map');
    this.updateMapAccess(slide);
    this.finishAnimation();
    // Never leave a previous scene's routes behind the next scene's text.
    this.dataLayer.clearLayers();
    status.hidden = false;
    message.textContent = `Loading map: ${slide.querySelector('h1, h2').textContent}…`;
    if (document.activeElement === retry) message.focus({ preventScroll: true });
    retry.hidden = true;
    try {
      await this.loadSlide(slide.id);
      if (requestId !== this.requestId) return;
      const layer = this.slideLayers[slide.id];
      this.dataLayer.addLayer(layer);
      this.map.invalidateSize({ pan: false });
      const collection = this.slideData[slide.id];
      const bounds = collection.bbox
        ? L.latLngBounds(
            [collection.bbox[1], collection.bbox[0]],
            [collection.bbox[3], collection.bbox[2]],
          )
        : layer.getBounds();
      const desktop = window.matchMedia('(min-width: 761px)').matches;
      this.map.fitBounds(bounds, {
        animate: false,
        paddingTopLeft: [50, 35],
        paddingBottomRight: desktop ? [440, 35] : [35, 30],
      });
      if (document.activeElement === message) {
        slide.querySelector('h1, h2').focus({ preventScroll: true });
      }
      status.hidden = true;
      this.animateRoutes(slide.id, layer);
    } catch (error) {
      if (requestId !== this.requestId) return;
      console.error(error);
      message.textContent = 'This map scene could not load. You can still read the story and travel-time table.';
      retry.hidden = false;
    }
  }

  finishAnimation() {
    cancelAnimationFrame(this.animationFrame);
    this.animationFrame = null;
    for (const route of this.animatedRoutes) route.layer.setLatLngs(route.points);
    this.animatedRoutes = [];
  }

  animateRoutes(id, layer) {
    this.finishAnimation();
    if (this.motionPreference.matches) return;
    const kinds = {
      'ruli-road': ['road'],
      'ruli-flight': ['air'],
      'six-comparison': ['road', 'air'],
    }[id];
    if (!kinds) return;

    layer.eachLayer((routeLayer) => {
      const kind = routeLayer.feature.properties.kind;
      if (routeLayer.feature.geometry.type !== 'LineString' || !kinds.includes(kind)) return;
      const points = routeLayer.getLatLngs();
      const distances = [0];
      for (let i = 1; i < points.length; i++) {
        distances.push(distances[i - 1] + points[i - 1].distanceTo(points[i]));
      }
      this.animatedRoutes.push({
        layer: routeLayer, points, distances,
        delay: kinds.indexOf(kind) * 2200,
      });
      routeLayer.setLatLngs([]);
    });

    const started = performance.now();
    const draw = (now) => {
      let complete = true;
      for (const route of this.animatedRoutes) {
        const progress = Math.max(0, Math.min(1, (now - started - route.delay) / 2200));
        if (progress < 1) complete = false;
        if (progress === 0) continue;
        const target = progress * route.distances.at(-1);
        let end = 1;
        while (end < route.points.length - 1 && route.distances[end] < target) end++;
        const before = route.points[end - 1];
        const after = route.points[end];
        const length = route.distances[end] - route.distances[end - 1];
        const fraction = length === 0 ? 1 : (target - route.distances[end - 1]) / length;
        const tip = L.latLng(
          before.lat + (after.lat - before.lat) * fraction,
          before.lng + (after.lng - before.lng) * fraction,
        );
        route.layer.setLatLngs([...route.points.slice(0, end), tip]);
      }
      if (complete) this.finishAnimation();
      else this.animationFrame = requestAnimationFrame(draw);
    };
    this.animationFrame = requestAnimationFrame(draw);
  }

  calcCurrentSlideIndex(force = false) {
    const mobile = window.matchMedia('(max-width: 760px)').matches;
    const threshold = mobile
      ? document.querySelector('.map-container').getBoundingClientRect().bottom + 70
      : window.innerHeight * 0.55;
    let index = 0;
    for (let i = this.slides.length - 1; i > 0; i--) {
      if (this.slides[i].getBoundingClientRect().top <= threshold) {
        index = i;
        break;
      }
    }
    if (force || index !== this.currentSlideIndex) {
      this.currentSlideIndex = index;
      this.syncMapToCurrentSlide();
    }
  }
}

export { SlideDeck };
