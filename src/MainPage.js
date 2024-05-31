import React, { useState } from 'react';
import './style.css';
import { useNavigate } from 'react-router-dom';
import { register, login, refreshToken, getUserInfo } from './api';

const MainPage = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleContinueWithoutRegistration = () => {
    navigate('/myprofile');
  };

  const handleRegister = async () => {
    try {
      const response = await register(name, email, username, password);
      localStorage.setItem('token', response.accessToken);
      navigate('/myprofile');
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    } finally {
      navigate('/myprofile');
    }
  };

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      localStorage.setItem('token', response.accessToken);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <header>
        <div className="header">
          <button className="burger">
            <h3>☰</h3>
          </button>
          <h3 className="service-name">Стеклокрош</h3>
        </div>
      </header>
      <div className="description">
        <h3 className="descr-text">
          На нашем веб-сайте представлен широкий ассортимент инструментов и приспособлений
          для стеклорезчиков. Наши продукты предназначены для профессионалов и любителей,
          желающих создать уникальные изделия из стекла. Кроме того, на сайте можно найти
          массу полезной информации о стеклорезах и приемах работы с ними. Мы регулярно
          публикуем статьи и обзоры новинок рынка, чтобы помочь нашим клиентам быть в курсе
          последних тенденций и достижений в области стеклорезного дела. Наша цель -
          предоставить нашим клиентам максимально удобный и эффективный сервис, поэтому мы
          предлагаем быструю доставку, гибкую систему скидок и профессиональную
          консультацию. Заказывайте у нас и создавайте красочные и креативные изделия из
          стекла, которые порадуют вас и ваших близких на протяжении многих лет.
        </h3>
      </div>
      <div className="main-btns">
        <button className="register" onClick={openPopup}>
          <h4>Регистрация</h4>
        </button>
        <button className="enter">
          <h4 style={{ fontWeight: 400 }}>Вход</h4>
        </button>
        <button className="no-register" onClick={handleContinueWithoutRegistration}>
        Продолжить без регистрации
        </button>
      </div>

      <div className={`pop_up ${isPopupOpen? 'active' : ''}`} id="pop_up">
        <div className="pop_up_container">
          <div className="pop_up_body" id="pop_up_body">
            <p></p>
            <form action="">
              <h2>Стеклокрош</h2>
              <h5>Добро пожаловать! <br /> "идея сайта"</h5>
              <p>Адрес электронной почты</p>
              <input
                type="email"
                placeholder="Введите Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <p>Имя</p>
              <input
                type="text"
                placeholder="Введите Имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
             <p>Имя пользователя</p>
              <input
                type="text"
                placeholder="Введите Имя пользователя"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <p>Пароль</p>
              <input
                type="password"
                placeholder="Введите Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="continue-btn" onClick={handleRegister}>
                Продолжить
              </button>
            </form>
            <div className="pop_up_close" onClick={closePopup}>
              &#10006
            </div>
            <div className="have-enter">
              <h5>У вас уже есть профиль?</h5>
              <button className="enter-btn" onClick={handleLogin}>
                Войти
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default MainPage;