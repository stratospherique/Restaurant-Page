let UIcontroller = (() => {
let links = document.querySelectorAll('.links');
let infos = document.querySelectorAll('.tab');
let container = document.querySelector('.tabs');
let header = document.querySelector('header');
let scroller = document.querySelector('.arrows')
let content = document.querySelector('#content')
function handleScrolls(index){
  [1,2,3].forEach(i=>container.classList.remove(`tab${i}`));
  container.classList.add(`tab${index+1}`);
}

  const updateSelector = () => {
   links = document.querySelectorAll('.links');
 infos = document.querySelectorAll('.tab');
 container = document.querySelector('.tabs');
 header = document.querySelector('header');
 scroller = document.querySelector('.arrows')
 content = document.querySelector('#content')
  } 
 const updateListeners = () => {
  scroller.addEventListener('click',()=>{
    window.scrollTo(0,container.offsetTop);
  })
  links.forEach((link,index)=>{ link.addEventListener('click', () => {handleScrolls(index)})})
 }

 return {links, infos, container, header, scroller, content, updateListeners, updateSelector}
  
})();

export {UIcontroller as default}