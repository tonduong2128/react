import React,{Component} from 'react';
import axios from 'axios'
import uniqid from 'uniqid'

import CardItem from '../components/CardItem'

class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount() {
        const _this=this;
        axios.get('http://localhost:3000/products')
            .then(function (response) {
                _this.setState({
                    products:response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            })
      }
    render() {
        return (
            <div className="container mt-5">
                <div className="row ">
                    {
                        this.state.products.map((product)=>{
                            return (
                                <div key={uniqid()} className="col-sm-6 col-md-4 col-lg-3 mb-4">
                                    <CardItem product={product}></CardItem>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Products;