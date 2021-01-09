const toggle = () => {
  const header = document.querySelector('.header');
  const toggleLabel = document.createElement('label');
  toggleLabel.className = 'toggle-label';

  const toggleInput = document.createElement('input');
  toggleInput.className = 'toggle-input';
  toggleInput.type = 'checkBox';

  const span = document.createElement('span');
  span.className = 'slide circle';

  toggleLabel.appendChild(toggleInput);
  toggleLabel.appendChild(span);
  header.appendChild(toggleLabel);

  return header;
};

export default toggle;
