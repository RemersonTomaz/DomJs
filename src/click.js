let incrementarButton = document.getElementById('incrementarButton');

let incremento; 

window.onload = function () {

  incremento =
    localStorage.getItem('incremento') == null
      ? { valor: 1 }
      : JSON.parse(localStorage.getItem('incremento'));


  let j = 1;
  while (j < incremento.valor) {
    let itensUl = document.getElementById('itensUl');
    itensUl.insertAdjacentHTML('beforeend', `<li>${j}</li>`);
    j++;
  }
};


incrementarButton.onclick = () => {
  let itensUl = document.getElementById('itensUl');
  itensUl.insertAdjacentHTML('beforeend', `<li>${incremento.valor}</li>`);

  incremento.valor++;
  localStorage.setItem('incremento', JSON.stringify(incremento));
};


incrementarButton.onmouseover = () => {
  incrementarButton.style.backgroundColor = 'blue';
};

incrementarButton.onmouseout = () => {
  incrementarButton.style.backgroundColor = 'gray';
};

incrementarButton.addEventListener('dblclick', () => {
  console.log('Clicou no dblclick');
});
