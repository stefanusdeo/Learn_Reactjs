import React, { Component } from 'react';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
        JOrder: 1
    }

    handleConterChange = (newValue) => {
        this.setState({
            JOrder: newValue
        })
    }
    render() {
        return (
            <section>
                <div>
                    <p>Jumlah Product: <span><b>{this.state.JOrder}</b></span></p>
                </div>
                <CardProduct onCounterChange={(value) => this.handleConterChange(value)} />
            </section>
        )
    }
}

export default Product;