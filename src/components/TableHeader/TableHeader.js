import React from "react";

import './TableHeader.css'

function TableHeader() {
  return (
    <thead className="table__header">
          <tr>
              <th rowspan="2">Аккаунт</th>
              <th colspan="4">Статистика</th>
              <th rowspan="2" className="table__big-cols">Состояние</th>
              <th rowspan="2">Действия</th>
          </tr>
          <tr>
              <th className="table__small-cols">Занято/<br/>Всего(Mb)</th>
              <th className="table__small-cols">Cron</th>
              <th className="table__small-cols">MySQL</th>
              <th className="table__small-cols">FTP</th>
          </tr>
      </thead>
  )
}

export default TableHeader
