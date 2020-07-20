import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ActionType from '../../../redux/reducer/globalActionType';


class CardProduct extends Component {
    // state = {
    //     JOrder: 1
    // }

    // handleCounterChange = (newValue) => {
    //     this.props.onCounterChange(newValue)
    // }

    // btnPlus = () => {
    //     this.setState({
    //         JOrder: this.state.JOrder + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.JOrder)
    //     })

    // }
    // btnMinus = () => {
    //     if (this.state.JOrder > 0) {
    //         this.setState({
    //             JOrder: this.state.JOrder - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.JOrder)
    //         })
    //     }
    // }
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <div className="input-group container">
                    <p type="text" name="title" className="form-control">{this.props.order}</p>
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button" onClick={this.props.btnMinus}>-</button>
                        <button className="btn btn-outline-secondary" type="button" onClick={this.props.btnPlus}>+</button>
                    </div>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const dispatchToProps = (dispatch) => {
    return {
        btnPlus: () => dispatch({ type: ActionType.ADD_ORDER }),
        btnMinus: () => dispatch({ type: ActionType.MINUS_ORDER })
    }
}
export default connect(mapStateToProps, dispatchToProps)(CardProduct);