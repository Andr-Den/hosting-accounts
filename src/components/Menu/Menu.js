import React from "react";

import './Menu.css'

import plus from "../../images/plus.png"

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
          <li className="menu__item">
              <button className={`${openMenu ? 'menu__button_click' : 'menu__button'}`} onClick={handleToggleMenu}>
                {openMenu ? '' : <img alt="" src={plus} className="menu__image" />}
              </button>
              <span className="menu__text">УПРАВЛЕНИЕ</span>
            <ul className={`${openMenu ? 'menu__submenu_open' : 'menu__submenu'}`}>
            {submenuItems.map((item) => (
              <li>{item}</li>
            ))}
          </ul>
          </li>
        </div>
    </ul>
  )
}

export default Menu
