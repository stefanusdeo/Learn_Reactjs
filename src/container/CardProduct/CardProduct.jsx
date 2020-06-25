import React, { Component } from 'react';

class CardProduct extends Component {
    state = {
        JOrder: 1
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    btnPlus = () => {
        this.setState({
            JOrder: this.state.JOrder + 1
        }, () => {
            this.handleCounterChange(this.state.JOrder)
        })

    }
    btnMinus = () => {
        if (this.state.JOrder > 0) {
            this.setState({
                JOrder: this.state.JOrder - 1
            }, () => {
                this.handleCounterChange(this.state.JOrder)
            })
        }
    }
    render() {
        return (
            <section>
                <div>
                    <button onClick={this.btnMinus}>-</button>
                    <input value={this.state.JOrder}></input>
                    <button onClick={this.btnPlus}>+</button>
                </div>
            </section>
        )
    }
}

export default CardProduct;