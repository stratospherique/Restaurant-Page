// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './main.scss';
import UIcontroller from './uinterface';
import loadHome from './home';
import loadFood from './food';
import loadContact from './contact';

const { content, updateSelector, updateListeners } = UIcontroller;

const navigation = (parentElement) => {
  const element = document.createElement('nav');
  const a1 = document.createElement('a');
  a1.href = '#content';
  a1.classList.add('links');
  const a2 = document.createElement('a');
  a2.href = '#content';
  a2.classList.add('links');
  const a3 = document.createElement('a');
  a3.href = '#content';
  a3.classList.add('links');


  a1.innerText = 'Home';
  a2.innerText = 'Food';
  a3.innerText = 'Contact';


  element.append(a1, a2, a3);
  parentElement.appendChild(element);
  updateSelector();
  updateListeners();
};

const mainContent = (parentElement) => {
  const contenaire = document.createElement('div');
  const sousContenaire = document.createElement('div');
  contenaire.classList.add('information');
  sousContenaire.classList.add('tabs');
  sousContenaire.appendChild(loadHome());
  sousContenaire.appendChild(loadFood());
  sousContenaire.appendChild(loadContact());
  contenaire.appendChild(sousContenaire);
  parentElement.appendChild(contenaire);
};

window.addEventListener('load', () => {
  navigation(content);
  mainContent(content);
  updateSelector();
  updateListeners();
});
