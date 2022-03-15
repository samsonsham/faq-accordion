const accListener = () => {
  const accs = document.querySelectorAll('.accordion-header');
  accs.forEach((acc) => {
    acc.addEventListener('click', (e) => {
      const panel = e.currentTarget.nextElementSibling;
      if (panel.style.maxHeight) {
        e.currentTarget.classList.toggle('active');
        panel.style.maxHeight = null;
      } else {
        collaspeAllPanels(accs);
        e.currentTarget.classList.toggle('active');
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });
};
const collaspeAllPanels = (accs) => {
  accs.forEach((acc) => {
    const panel = acc.nextElementSibling;
    panel.style.maxHeight = null;
    acc.classList.remove('active');
  });
};
const init = () => {
  accListener();
};
init();
