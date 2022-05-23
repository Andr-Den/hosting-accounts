import React from "react";
import { legendItems } from "../../consts";

import './TableBody.css'

const firstBodyItems = [
  'IP-адрес',
  'Объем баз данных',
  'Объем почты',
  'Объем файлов',
  'Комментарии',
  'Услуга',
  'Логин',
  'Имя хоста FTP',
  'Пароль FTP',
  'Имя хоста SSH',
  'Пароль SSH',
  'Имя хоста MySQL',
  'Имя хоста PgSQL', 
]

const secondBodyItems = [
  {
    name: '31.28.24.122',
  },
  {
    name: '10.89 Mb',
  },
  {
    name: '522.43 Mb',
  },
  {
    name: '141.7 Mb',
  },
  {
    name: 'Нет комментариев',
    change: true,
    off: ''
  },
  {
    name: 'Бета-SSD',
  },
  {
    name: 'login',
  },
  {
    name: `<a href="*" class="table-body__link">login.hoster.ru</a>`,
  },
  {
    name: 'password',
    change: true,
    off: true
  },
  {
    name: 'host',
  },
  {
    name: 'password',
    change: true,
    off: true
  },
  {
    name: 'host',
  },
  {
    name: 'host',
  },
]

function TableBody() {
  return (
    <tbody className="table-body">
      <tr className="table-body__start">
        <td className="table-body__left-col">srv164042 (Бета-SSD)</td>
        <td>675.02/<br/>7000</td>
        <td>0</td>
        <td>1</td>
        <td>0</td>
        <td><a href="*" className="table-body__link">Включен</a></td>
        <td className="table-body__actions">
        {legendItems.map(({src, description}) => (
            <img alt={description} src={src} className="table-body__image"/>
        ))}
        </td>
      </tr>
      <tr className="table__middle">
        <td>
          <ul className="table-body__lists table-body__lists_left">
            {firstBodyItems.map((item) => (
              <li>
                <span className="table-body__left-col">{item}</span>
              </li>
            ))}
          </ul>
        </td>
        <td colspan="6">
          <ul className="table-body__lists">
            {secondBodyItems.map(({name, change, off}) => (
              <li>
                <span dangerouslySetInnerHTML={{ __html: name }} />
                {change ? <button className="table-body__button">(Изменить)</button> : ''}
                {off ? <button className="table-body__button">(Выключить)</button> : ''}
              </li>
            ))}
          </ul>
        </td>
      </tr>
      <tr>
        <td>Привязанные домены</td>
        <td></td>
      </tr>
    </tbody>
  )
}

export default TableBody
