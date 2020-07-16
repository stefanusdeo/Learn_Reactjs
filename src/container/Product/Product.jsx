import React, { Component } from 'react';
import CardProduct from './CardProduct/CardProduct';
import { connect } from 'react-redux';

class Product extends Component {
    render() {
        return (
            <section>
                <div className="d-flex justify-content-center mt-5">
                    <p>Jumlah Product: <span><b>{this.props.order}</b></span></p>
                </div>
                <CardProduct />
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);