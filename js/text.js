/**
 * Represents a text rotator.
 * @class
 */
class TxtRotate {
  /**
   * @constructor
   * @param {HTMLElement} el - The element to rotate the text in.
   * @param {Array} toRotate - The array of strings to rotate.
   * @param {number} period - The period of rotation in milliseconds.
   */
  constructor(el, toRotate, period) {
    this.el = el;
    this.toRotate = toRotate;
    this.period = parseInt(period, 10) || 2000;
    this.loopNum = 0;
    this.txt = '';
    this.isDeleting = false;
    this.tick();
  }

  /**
   * Performs the text rotation.
   */
  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    const delta = this.isDeleting ? 150 : 500 - Math.random() * 100;

    if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
    } else if (!this.isDeleting && this.txt === fullTxt) {
      this.isDeleting = true;
      this.delta = this.period;
    }

    setTimeout(() => this.tick(), delta);
  }
}

window.onload = () => {
  document.querySelectorAll('.txt-rotate').forEach((el) => {
    const toRotate = JSON.parse(el.getAttribute('data-rotate'));
    const period = el.getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(el, toRotate, period);
    }
  });

  // INJECT CSS
  const css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
  document.head.appendChild(css);
};
