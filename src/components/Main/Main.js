import React from "react";
import Container from "../Container/Container";
import Legend from "../Legend/Legend";
import Menu from "../Menu/Menu";
import Table from "../Table/Table";

import './Main.css'

function Main({list}) {
  return (
    <section>
      <Container>
        <div className="main__items">
          <Menu />
          <Table list={list}/>
          <Legend />
        </div>
      </Container>
    </section>
  )
}

export default Main
