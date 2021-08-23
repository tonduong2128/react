import React from 'react';

import NumberContext from './NumberContext'


export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            number: 5
        };
        this.updateNumber=this.updateNumber.bind(this);
    }
    updateNumber(){
        this.setState({
            number: Math.floor(Math.random()*10)
        })
    }
    render() {
        return (
            <NumberContext.Provider value={
                {
                    number: this.state.number,
                    updateNumber: this.updateNumber
                }
            }>
                {this.props.children}
            </NumberContext.Provider>
        )
    }
}