import React from 'react'
import { Card, CardBody, CardImg, Row, Col, } from 'reactstrap'

export default function CardChess(props) {
  return (
    <>
      <Card className='card-parts'>
        <Row>
          <Col>
            <CardBody>
              <h4 className='names-card'>{props.title}</h4>
              <p className='names-card'>{props.description}</p>
              <Col className='aling-part'>
                <CardImg style={{ width: '100px', height: '100px' }} src={props.img} alt='imagem King'></CardImg>
                <p className='names-card'>{props.amount}</p>
              </Col>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </>
  )
}