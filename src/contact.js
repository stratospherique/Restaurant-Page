// contains the code for creating the food tab content


const loadContact = () => {
  const container = document.createElement('div');
  const h2 = document.createElement('h2');
  const ul = document.createElement('ul');


  container.id = 'contact';
  container.classList.add('tab');
  h2.innerText = 'Our Contact Info';
  ul.classList.add('contact-list');
  ul.innerHTML = `
  <li><strong>Adress:</strong><em>Pizza's Street, Italy</em></li>
  <li><strong>Email:</strong><em>pizza@pizzaria.it</em></li>
  <li><strong>Phone:</strong><em>+23 4879646555</em></li>
  `;
  container.appendChild(h2);
  container.appendChild(ul);
  return container;
};

export { loadContact as default };
