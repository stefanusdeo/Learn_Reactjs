import React from 'react';
import './CardName.css'

const Card = (props) => {
    return (
        <div className="card">
            <h5>{props.name}</h5>
            <p>{props.job}</p>
        </div>
    )
}

Card.defaultProps = {
    name: 'Deo',
    job: 'IT'
}

export default Card;