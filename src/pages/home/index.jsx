import React from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';

import HeaderTitle from '../../components/HeaderTitle'
import CardChess from '../../components/CardChess';

import King from '../../assets/king.svg'
import Queen from '../../assets/queen.svg'
import Rook from '../../assets/tower.svg'
import Pawn from '../../assets/pawn.svg'
import Knight from '../../assets/horse.svg'
import Bishop from '../../assets/bishop.svg'


export default function Home() {
  return (
    <>
      <Col>
        <HeaderTitle name='envolve' />
      </Col>
      <Col className='d-flex justify-content-center'>
        <Card className='card'>
          <CardHeader>
            <h3 className='header-subtitle'>Selecione peças</h3>
          </CardHeader>
          <CardBody>
            <Row className='aling-card '>
              <CardChess
                title='King'
                description='The most important piece in the game'
                img={King}
                amount='1000'
              />

              <CardChess
                title='Queen'
                description='A versatile and powerful piece'
                img={Queen}
                amount='500'
              />

              <CardChess
                title='Rook'
                description='A piece that moves in a straight line'
                img={Rook}
                amount='300'
              />
            </Row>
          </CardBody>
          <CardBody>

            <Row className='aling-card'>
              <CardChess
                title='Pawn'
                description='The basic piece of the game'
                img={Pawn}
                amount='100'
              />

              <CardChess
                title='Knight'
                description='A piece that moves in an "L" shape'
                img={Knight}
                amount='150'
              />

              <CardChess
                title='Bishop'
                description='A piece that moves diagonally'
                img={Bishop}
                amount='200'
              />
            </Row>
          </CardBody>
        </Card>
      </Col>

    </>
  )
};


