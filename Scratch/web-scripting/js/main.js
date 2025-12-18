import {add} from './utils.js';

const sampleParagraph = document.getElementById('sampleParagraph');
sampleParagraph.innerHTML = `New sample content. The sum of  2 and 3 is: ${add(2,3)}`;