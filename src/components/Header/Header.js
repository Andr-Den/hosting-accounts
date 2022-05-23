import React from 'react';
import Container from '../Container/Container';
import './Header.css';

import arrowGrey from "../../images/grey-arrow.png"
import arrowYellow from "../../images/yellow-arrow.png"
import backdoor from "../../images/backdoor.png"
import badge from '../../images/badge.png'
import bag from "../../images/bag.png"
import coin from "../../images/coin.png"
import mails from "../../images/mails.png"

function Header() {
  return (
      <header className="header">
        <Container>
          <ul className="header__list">
            <ul className="header__sublist">
              <li className="header__item">
                <img src={arrowGrey} alt="back" className="header__icon  header__icon_rotate header__icon_link"/>
                <span className="header__text_white">ГЛАВНАЯ</span>
              </li>
              <li className="header__item"><span className="header__text_primary">ПАРТНЕРСКАЯ ПРОГРАММА</span></li>
              <li className="header__item">
                <img src={badge} alt="badge" className="header__icon"/>
                <span className="header__text_white">Д174181</span>
              </li>
            </ul>
            <ul className="header__sublist header__sublist_secondary">
              <li className="header__item  header__item_secondary">
                <span className="header__text_primary">Кусакина Людмила</span>
              </li>
              <li className="header__item header__item_secondary">
                <img src={coin} alt="coins" className="header__icon"/>
                <span className="header__text_secondary">Основной л/с: 204.02 руб.</span>
              </li>
              <li className="header__item header__item_secondary">
                <img src={mails} alt="mail" className="header__icon header__icon_link"/>
                <span className="header__text_primary">0</span>
              </li>
              <li className="header__item header__item_secondary">
                <img src={bag} alt="bag" className="header__icon header__icon_link"/>
                <span className="header__text_primary">0</span>
              </li>
              <li className="header__item header__item_secondary">
                <img src={arrowYellow} alt="yellow arrow" className="header__icon"/>
                <img src={backdoor} alt="backdoor" className="header__icon header__icon_link"/>
              </li>
            </ul>
          </ul>
        </Container>
      </header>
  );
}

export default Header;
