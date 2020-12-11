const form = () => {
  const { body } = document;
  const nav = document.createElement('nav');
  nav.className = ' row flex m-5 align-content-center justify-content-between header';
  const form = document.createElement('form');
  form.className = 'form-group flex align-items-center justify-content-center ';
  const input = document.createElement('input');
  input.setAttribute('type', 'form-control rounded');
  input.className = 'search';
  input.setAttribute('placeholder', 'Enter a city');


  form.appendChild(input);
  nav.appendChild(form);
  body.appendChild(nav);
  return body;
};

export default form;