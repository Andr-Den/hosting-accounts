import React from "react";
import { legendItems } from "../../consts";

import './TableBody.css'

const firstBodyItems = [
  'IP-адрес',
  'Объем баз данных',
  'Объем почты',
  'Объем файлов',
  'Комментарий',
  'Услуга',
  'Логин',
  'Имя хоста FTP',
  'Пароль FTP',
  'Имя хоста SSH',
  'Пароль SSH',
  'Имя хоста MySQL',
  'Имя хоста PgSQL', 
]

function TableBody() {

  const [editMode, setEditMode] = React.useState(false);
  const [comment, setComment] = React.useState(JSON.parse(localStorage.getItem('comment')));
  const [addInput, setAddInput] = React.useState('')

  function handleEditComment() {
    setEditMode(true)
  }

  function handleAddComment() {
    localStorage.setItem('comment', JSON.stringify(addInput))
    setComment(JSON.parse(localStorage.getItem('comment')))
  }

  function handleChangeAddInput(e) {
    setAddInput(e.target.value);
  }

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
        <td colSpan="6">
           <ul className="table-body__lists">
              <li><span>31.28.24.122</span></li>
              <li><span>10.89 Mb</span></li>
              <li><span>522.43 Mb</span></li>
              <li><span>141.7 Mb</span></li>
              <li>
                {editMode ?
                  <form onSubmit={handleAddComment}>
                      <input onChange={handleChangeAddInput} defaultValue={comment}/> 
                      <button className="table-body__button">Добавить</button> 
                    </form> : 
                  <>
                    <span>{comment}</span>
                    <button className="table-body__button" onClick={handleEditComment}>(Изменить)</button>
                  </>
                }

              </li>
              <li><span>Бета-SSD</span></li>
              <li><span>login</span></li>
              <li>
                <a href="*" className="table-body__link">login.hoster.ru</a>
              </li>
              <li>
                <span>password</span>
                <button className="table-body__button">(Изменить)</button>
                <button className="table-body__button">(Выключить)</button>
              </li>
              <li><span>host</span></li>
              <li>
                <span>password</span>
                <button className="table-body__button">(Изменить)</button>
                <button className="table-body__button">(Выключить)</button>
              </li>
              <li><span>host</span></li>
              <li><span>host</span></li>
          </ul>
        </td>
      </tr>
    </tbody>
  )
}

export default TableBody
