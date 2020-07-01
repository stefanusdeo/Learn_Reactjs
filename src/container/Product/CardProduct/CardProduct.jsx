import React, { Component, Fragment } from 'react';

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
            <Fragment>
                <div className="input-group container">
                    <p type="text" name="title" className="form-control">{this.state.JOrder}</p>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.btnMinus}>-</button>
                        <button className="btn btn-outline-secondary" type="button" onClick={this.btnPlus}>+</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default CardProduct;