import React from "react";

import './Menu.css'

import arrow from '../../images/arrow-up.svg'
import plus from "../../images/plus-white.png"

const submenuItems = [
  "VDS/VPS", "Домены/Почта", "Сертификаты", "Хостинг", "Реклама и Продвижение"
]

function Menu() {
  const [openMenu, setOpenMenu] = React.useState(false);

  function handleToggleMenu() {
    setOpenMenu(!openMenu)
  }
  
  return (
      <ul className="menu">
        <div className="menu__list">
          <li className="menu__item">
            <button className="menu__button"><img alt="" src={plus} className="menu__image" /></button>
            <span className="menu__text">ЗАКАЗАТЬ</span>
          </li>
          <li className="menu__item">
            <button className="menu__button"><img alt="" src={plus} className="menu__image" /></button>
            <span className="menu__text">ПРОДЛИТЬ / ИЗМЕНИТЬ</span>
          </li>
          <li className="menu__item">
            <button className="menu__button"><img alt="" src={plus} className="menu__image" /></button>
            <span className="menu__text">ФИНАНСЫ</span>
          </li>
          <li className="menu__active">
            <div className="menu__item menu__item_drop">
              <button className={`menu__button ${openMenu ? 'menu__button_click' : ''}`} onClick={handleToggleMenu}>
                {openMenu ? <img alt="" src={arrow} className="menu__image" /> : <img alt="" src={plus} className="menu__image" />}
              </button>
              <span className={`menu__text ${openMenu ? 'menu__text_open' : ''}`}>УПРАВЛЕНИЕ</span>
            </div>
              <ul className={`menu__submenu ${openMenu ? 'menu__submenu_open' : ''}`}>
                {submenuItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
          </li>
        </div>
    </ul>
  )
}

export default Menu
