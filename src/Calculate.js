import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './materials.css'; // Импортируем CSS файл

const MaterialItem = ({ material, deleteMaterial }) => (
  <div className="instruments">
    <div className="instr">
      <p>{material.type}</p>
      <input type="text" />
      <a href="#" className="edit">Редактировать</a>
      <a href="#" className="delete" onClick={() => deleteMaterial(material.id)}>Удалить</a>
    </div>
  </div>
);

const Materials = () => {
  const [materials, setMaterials] = useState([]);
  const [newMaterial, setNewMaterial] = useState({
    type: '',
    description: '',
    quantity: 0,
  });

  useEffect(() => {
    fetchMaterials();
  }, []);

  const fetchMaterials = async () => {
    const response = await axios.get('http://localhost:8080/api/v1/components');
    setMaterials(response.data);
  };

  const handleInputChange = (event) => {
    setNewMaterial({
      ...newMaterial,
      [event.target.name]: event.target.value,
    });
  };

  const addMaterial = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:8080/api/v1/component', newMaterial);
    fetchMaterials();
    setNewMaterial({ type: '', description: '', quantity: 0 });
  };

  const deleteMaterial = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/components/${id}`);
    fetchMaterials();
  };

  return (
    <div className="container">
      <header className="header">
        <button className="burger"><h4>☰</h4></button>
        <h3>Мои материалы</h3>
        <h2 className="service-name">Стеклокрош</h2>
      </header>
      {materials.map((material) => (
        <MaterialItem key={material.id} material={material} deleteMaterial={deleteMaterial} />
      ))}
      <div className="add-instruments">
        <h1>Добавить материал</h1>
        <form onSubmit={addMaterial}>
          <div className="name">
            <p>Название материала</p>
            <input
              type="text"
              name="type"
              placeholder="Введите текст"
              value={newMaterial.type}
              onChange={handleInputChange}
            />
          </div>
          <div className="description">
            <p>Описание материала</p>
            <input
              type="text"
              name="description"
              placeholder="Введите текст"
              value={newMaterial.description}
              onChange={handleInputChange}
            />
          </div>
          <div className="price">
            <p>Количество материала</p>
            <input
              type="number"
              name="quantity"
              placeholder="Введите кол-во"
              value={newMaterial.quantity}
              onChange={handleInputChange}
            />
          </div>
          <button className="save" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
};

export default Materials;