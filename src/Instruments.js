import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './instruments.css';

function Instruments() {
  const [instruments, setInstruments] = useState([]);
  const [newInstrument, setNewInstrument] = useState({ name: '', description: '', price: '' });

  useEffect(() => {
    fetchInstruments();
  }, []);

  const fetchInstruments = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/instruments');
      setInstruments(response.data);
    } catch (error) {
      console.error('Error fetching instruments:', error);
    }
  };

  const handleAdd = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/v1/instrument', newInstrument);
      setInstruments([...instruments, response.data]);
      setNewInstrument({ name: '', description: '', price: '' });
    } catch (error) {
      console.error('Error adding instrument:', error);
    }
  };

  const handleEdit = (instrument) => {
    // Код для редактирования инструмента
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/v1/instruments/${id}`);
      setInstruments(instruments.filter(instrument => instrument.id !== id));
    } catch (error) {
      console.error('Error deleting instrument:', error);
    }
  };

  return (
    <div className="container">
      <header>
        <div className="header">
          <button className="burger">
            <h4>☰</h4>
          </button>
          <h3>Мои инструменты</h3>
          <h2 className="service-name">Стеклокрош</h2>
        </div>
      </header>

      <div className="content"> {/* Добавлен div content */}
        <div className="instruments-wrapper"> {/* Добавлен wrapper для инструментов */}
          <div className="instruments">
            {instruments.map(instrument => (
              <div key={instrument.id} className={`instr${instrument.id % 3 + 1}`}> {/* Изменен класс */}
                <p>{instrument.name}</p> {/* Убран "Инструмент №" */}
                <input type="text" value={instrument.description} readOnly />
                <div className="actions"> {/* Добавлен div actions */}
                  <a href="#" className="edit" onClick={() => handleEdit(instrument)}>
                    Редактировать
                  </a>
                  <a href="#" className="delete" onClick={() => handleDelete(instrument.id)}>
                    Удалить
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="add-instruments">
            <h1>Добавить инструмент</h1>
            <div className="console-add"> {/* Добавлен div console-add */}
              <div className="instrument-list">
                <ul className="instr-list">
                  <li>Название инструмента</li>
                  <li>Описание инструмента</li>
                  <li>Цена инструмента</li>
                </ul>
              </div>
              <div className="input-list">
                <ul>
                  <li>
                    <div className="name">
                      <input
                        type="text"
                        placeholder="Введите текст"
                        className="placeholder"
                        value={newInstrument.name}
                        onChange={e => setNewInstrument({ ...newInstrument, name: e.target.value })}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="description">
                      <input
                        type="text"
                        placeholder="Введите текст"
                        className="placeholder"
                        value={newInstrument.description}
                        onChange={e => setNewInstrument({ ...newInstrument, description: e.target.value })}
                      />
                    </div>
                  </li>
                  <li>
                    <div className="price">
                      <input
                        type="number"
                        placeholder="Введите цену"
                        className="placeholder"
                        value={newInstrument.price}
                        onChange={e => setNewInstrument({ ...newInstrument, price: parseFloat(e.target.value) })}
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <button className="save" onClick={handleAdd}>
              Сохранить
            </button>
          </div>
        </div> {/* Закрывающий div instruments-wrapper */}
      </div> {/* Закрывающий div content */}
    </div>
  );
}

export default Instruments;