const form = (() => {
  const nav = document.createElement('nav');
  const form = document.createElement('form');
  form.setAttribute('class', 'form-group');
  const input = document.createElement('input');
  input.setAttribute('type', 'form-control');
  input.setAttribute('class', 'search');
  input.setAttribute('placeholder', 'Enter a city');

  form.appendChild(input);
  nav.appendChild(form);
  return nav;
})();

export default form;