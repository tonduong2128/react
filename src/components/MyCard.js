import React from 'react';
import uniqid from 'uniqid'

import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
  

import { CardContext} from "../contexts/Card"
import CardItem from './CardItem';

export default class MyCard extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="container">
                <div className="row mt-4">
                    <CardContext.Consumer>
                        {({cardItems})=>{
                            return cardItems.map((cardItem)=>{
                                    return (
                                        <div key={uniqid()} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                            <Card>
                                                <CardImg top width="100%" src={cardItem.img} alt="Card image cap" />
                                                <CardBody>
                                                    <CardTitle tag="h5">{cardItem.title}</CardTitle>
                                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Sản phẩm công nghệ mới</CardSubtitle>
                                                    <CardText>{cardItem.description}</CardText>
                                                    <Button >Xem chi tiết</Button>
                                                </CardBody>
                                            </Card>
                                        </div>
                                    )
                            })
                        }}
                    </CardContext.Consumer>
                </div>
            </div>
        )
    }
}