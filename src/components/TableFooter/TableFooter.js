import React from "react";

import "./TableFooter.css"

import cancel from "../../images/cancel.png"

function TableFooter() {
  const [domains, setDomains] = React.useState(JSON.parse(localStorage.getItem('domains')));

  function handleDelete(index) {
    domains.splice(index, 1)
    localStorage.setItem('domains', JSON.stringify(domains))
    setDomains(JSON.parse(localStorage.getItem('domains')))
  }

  return (
    <tfoot>
      <tr>
        <td className="table-footer"><a href="*" className="table-footer__link">Привязанные домены</a></td>
        <td colSpan="6">
          <ul className="table-footer__list">
            {domains.map(({title, description}) => (
              <li>
                <a href="*" className="table-footer__link table-footer__link_bold">{title}</a>
                <div className="table-footer__item">
                  <span>{description}</span>
                  <button className="table-footer__button" onClick={handleDelete}><img src={cancel} alt="" className="table-footer__image"/></button>
                </div>
              </li>
            ))}
          </ul>
        </td>
      </tr>
    </tfoot>
  )
}

export default TableFooter
