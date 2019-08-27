// contains the code for creating the home tab content

import Image from './images/1.jpg';

const loadHome = () => {
  const container = document.createElement('div');
  const h2 = document.createElement('h2');
  const p = document.createElement('p');
  const img = document.createElement('img');

  container.id = 'home';
  container.classList.add('tab');
  h2.innerText = 'Pizza Time Restaurant';
  img.src = Image;
  img.classList.add('thumbnail');
  p.insertAdjacentElement('beforeEnd',img);
  p.insertAdjacentText('beforeend',"Pizza Time is an American restaurant chain and international franchise which was founded in 1958 in Wichita, Kansas by Dan and Frank Carney. The company is known for its Italian-American cuisine menu, including pizza and pasta, as well as side dishes and desserts. Pizza Hut has 18,431 restaurants worldwide as of December 31, 2018,[4] making it the world's largest pizza chain in terms of locations. It is a subsidiary of Yum! Brands, Inc., one of the world's largest restaurant companies.");
  container.appendChild(h2);
  container.appendChild(p);
  return container;
}

export {loadHome as default}