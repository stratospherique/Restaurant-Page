import _ from 'lodash';
import './main.scss';

function handleScrolls(index){
  [1,2,3].forEach(i=>container.classList.remove(`tab${i}`));
  container.classList.add(`tab${index+1}`);
}

const links = document.querySelectorAll('.links');
const infos = document.querySelectorAll('.tab');
const container = document.querySelector('.tabs');
const header = document.querySelector('header');
const scroller = document.querySelector('.arrows')

scroller.addEventListener('click',()=>{
  window.scrollTo(0,container.offsetTop);
})
links.forEach((link,index)=>{ link.addEventListener('click', () => {handleScrolls(index)})})
