import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from '../TableBody/TableBody';
import TableFooter from "../TableFooter/TableFooter";

import './Table.css'

function Table() {
  return (
    <div className="table">
      <h1  className="table__heading">АККАУНТЫ ХОСТИНГА</h1>
    <table cellSpacing="0" className="table__table">
      <TableHeader />
      <TableBody /> 
      <TableFooter />
    </table>
    </div>
  )
}

export default Table
