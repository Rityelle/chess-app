import React from "react"
import { Col } from "reactstrap"

import Union from '../assets/union.png'

export default function HeaderTitle(props) {
  return (
    <>
      <Col className="alingHerder">
        <img src={Union} alt="Logo" className="header-logo mr-2" />
        <h1 className="header-title">{props.name}</h1>
      </Col>
      <hr className=" header-hr mx-2" />
    </>
  )
}