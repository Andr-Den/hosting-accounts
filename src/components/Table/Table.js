import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from '../TableBody/TableBody';

import './Table.css'

function Table() {
  return (
    <div className="table">
      <h1>АККАУНТЫ ХОСТИНГА</h1>
    <table cellSpacing="0" className="table__table">
      <TableHeader />
      <TableBody /> 
    </table>
    </div>
  )
}

export default Table
