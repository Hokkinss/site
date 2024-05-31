import React from 'react';
import ReactDOM from 'react-dom';
import Materials from './Materials';
import './materials.css';

function initPopUp() {
  const openPopUp = document.getElementById('open_pop_up');
  const closePopUp = document.getElementById('pop_up_close');
  const popUp = document.getElementById('pop_up');

  openPopUp.addEventListener('click', function(e){
      e.preventDefault();
      popUp.classList.add('active');
  })

  closePopUp.addEventListener('click', () => {
      popUp.classList.remove('active');
  })
}

ReactDOM.render(<Materials />, document.getElementById('root'));

initPopUp();