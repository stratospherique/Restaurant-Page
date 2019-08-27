// contains the code for creating the food tab content

import Image1 from './images/21.jpg';
import Image2 from './images/22.jpg';

const loadFood = () => {
  const container = document.createElement('div');
  const box = document.createElement('div');
  const box2 = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const p2 = document.createElement('p');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');

  container.id = 'food';
  container.classList.add('tab');
  h2.innerText = 'Wide Range of choices';
  box.classList.add('box');
  img1.src = Image1;
  img1.classList.add('thumbnail');
  p.insertAdjacentElement('beforeEnd', img1);
  p.insertAdjacentText('beforeend', 'Ultricies integer quis auctor elit sed vulputate mi sit amet. At consectetur lorem donec massa. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sodales ut eu sem integer vitae justo eget.');
  container.appendChild(h2);
  box.appendChild(p);
  container.appendChild(box);
  // second square
  box2.classList.add('box');
  img2.src = Image2;
  img2.classList.add('thumbnail');
  p2.insertAdjacentElement('beforeEnd', img2);
  p2.insertAdjacentText('beforeend', 'Wach Tebi Ultricies integer quis auctor elit sed vulputate mi sit amet. At consectetur lorem donec massa. Pellentesque massa placerat duis ultricies lacus sed turpis tincidunt. Sodales ut eu sem integer vitae justo eget.');
  box2.appendChild(p2);
  container.appendChild(box2);
  return container;
};

export { loadFood as default };
