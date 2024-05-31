import React, { useState, useEffect } from 'react';
import { getUserInfo } from './api';
import { useNavigate } from 'react-router-dom';
import './profile.css';


const MyProfile = () => {
  const navigate = useNavigate();
  const handleStuffClick = () => {
    navigate('/instruments');
  };
  const handleResourcesClick = () => {
    navigate('/calculate');
  };

  const handleHistoryClick = () => {
    navigate('/history');
  };
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    const fetchUserData = async () => {
      try {
        const response = await getUserInfo(token);
        setUserData(response.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="my-profile">
      <header>
        <div className="header">
          <button className="burger">
            <h4>☰</h4>
          </button>
          <h3>Мой профиль</h3>
          <h2 className="service-name">Стеклокрош</h2>
        </div>
      </header>
      <div className="info">
        <div className="email">
          <p>Адрес электронной почты</p>
          <input type="text" value={userData.email || ''} readOnly />
        </div>
        <div className="username">
          <p>Имя пользователя</p>
          <input type="text" value={userData.username || ''} readOnly />
        </div>
      </div>
      <div className="buttons">
      <button className="history" onClick={handleHistoryClick}>
        <p>История</p>
      </button>
        <button className="stuff" onClick={handleStuffClick}>
          <p>Мои инструменты</p>
        </button>
        <button className="resources" onClick={handleResourcesClick}>
          <p>Мои материалы</p>
        </button>
      </div>
      <div className="footer-btns">
        <button className="edit">
          <p>Редактировать профиль</p>
        </button>
        <button className="exit">
          <p>Выйти</p>
        </button>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default MyProfile;