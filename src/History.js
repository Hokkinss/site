import React from 'react';
import './history.css';

const History = () => {
  return (
    <div className="history-page">
      <header>
        <button className="burger">
          <h4>☰</h4>
        </button>
        <h3>История</h3>
        <h2 className="service-name">Стеклокрош</h2>
      </header>
      <div className="order">
        <ul>
          <li>
            <select name="" id="" className="order1">
              <option value="" disabled selected hidden>
                Изделие №1
              </option>
              <option value="">Заготовка из стекла 5мм</option>
            </select>
          </li>
          <li>
            <select name="" id="" className="order2">
              <option value="" disabled selected hidden>
                Изделие №2
              </option>
              <option value="">Заготовка из стекла 10мм</option>
            </select>
          </li>
          <li>
            <select name="" id="" className="order3">
              <option value="" disabled selected hidden>
                Изделие №3
              </option>
            </select>
          </li>
          <li>
            <select name="" id="" className="order4">
              <option value="" disabled selected hidden>
                Изделие №4
              </option>
            </select>
          </li>
          <li>
            <select name="" id="" className="order5">
              <option value="" disabled selected hidden>
                Изделие №5
              </option>
              <option value="">Круглая заготовка 1мм</option>
            </select>
          </li>
          <li>
            <select name="" id="" className="order6">
              <option value="">Заготовка из стекла 10мм</option>
              <option value="" disabled selected hidden>
                Изделие №6
              </option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default History;