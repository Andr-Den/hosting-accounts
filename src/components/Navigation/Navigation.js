import React from 'react'
import './Navigation.css'

import arrowYellow from "../../images/yellow-arrow.png"
import backdoor from "../../images/backdoor.png"
import bag from "../../images/bag.png"
import coin from "../../images/coin.png"
import mails from "../../images/mails.png"

function Navigation({isOpen, onClose}) {
  return (
    <div className={`navigation ${isOpen ? 'navigation_opened' : ''}`}>
      <div className="navigation__container">
      <button className="navigation__close-icon" onClick={onClose}/>
      <ul className="navigation__list">
              <li className="navigation__item">
                <span className="">Кусакина Людмила</span>
              </li>
              <li className="navigation__item">
                <img src={coin} alt="coins" className="header__icon"/>
                <span className="">Основной л/с: 204.02 руб.</span>
              </li>
              <li className="navigation__item">
                <img src={mails} alt="mail" className="header__icon header__icon_link"/>
                <span className="">0</span>
              </li>
              <li className="navigation__item">
                <img src={bag} alt="bag" className="header__icon header__icon_link"/>
                <span className="">0</span>
              </li>
              <li className="navigation__item">
                <img src={arrowYellow} alt="yellow arrow" className="header__icon"/>
                <img src={backdoor} alt="backdoor" className="header__icon header__icon_link"/>
              </li>
            </ul>
      </div>
    </div>
  );
}

export default Navigation;