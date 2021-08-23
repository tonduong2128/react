import React from 'react';


export const CardContext=React.createContext()


export class CardProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            cardItems: [],
        }
        this.addToCard =this.addToCard.bind(this)
    }
    addToCard(product){
        this.setState({
            cardItems: this.state.cardItems.concat(product)
        })
    }
    render() {
        return (
            <CardContext.Provider value={
                {
                    cardItems: this.state.cardItems,
                    addToCard: this.addToCard,
                }
            }>
                {this.props.children}
            </CardContext.Provider>
        )
    }
}
