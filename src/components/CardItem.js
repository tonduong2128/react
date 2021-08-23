import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

import { CardContext } from '../contexts/Card';

const CardItem = (props) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={props.product.img} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">{props.product.title}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Sản phẩm công nghệ mới</CardSubtitle>
          <CardText>{props.product.description}</CardText>
          <CardContext.Consumer>
            {({cardItems,addToCard})=>{
              return <Button onClick={()=>addToCard(props.product)} >Thêm sản phầm</Button>
            }}
          </CardContext.Consumer>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardItem;