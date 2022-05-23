import React from "react";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from '../TableBody/TableBody';
import TableFooter from "../TableFooter/TableFooter";

import './Table.css'

import question from "../../images/question.png"

function Table({list}) {
  return (
    <div className="table">
      <div className="table__up">
        <h1 className="table__heading">АККАУНТЫ ХОСТИНГА</h1>
        <img alt="" src={question} className="table__question"/>
      </div>
      <table cellSpacing="0" className="table__table">
        <TableHeader />
        <TableBody /> 
        <TableFooter list={list}/>
      </table>
    </div>
  )
}

export default Table
