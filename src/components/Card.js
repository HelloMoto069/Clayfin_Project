import React, { Component } from 'react'
import CardDisplay from './CardDisplay';

export default class Card extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }


    componentDidMount() {
        // make fetch request
        fetch('https://myntradata.herokuapp.com/womens')
            .then((response) => response.json())
            .then(productsList => {
                this.setState({ products: productsList });
            });

    }

    // componentWillUnmount() {
    //     // make fetch request
    // }

    render() {
        return (
            <>
                <CardDisplay products={this.state.products} />
                
            </>
        )
    }
}
