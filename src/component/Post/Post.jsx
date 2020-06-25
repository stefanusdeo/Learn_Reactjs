import React from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.css';

const Post = (props) => {
    return (
        <div className="card card1">
            <img className="card-img-top" src="https://placeimg.com/200/150/tech" alt="" />
            <div className="card-body">
                <h5 className="card-title">{props.data.title}</h5>
                <p className="card-text">{props.data.desc}</p>
                <button className="btn btn-danger btn-sm" onClick={() => props.btnRemove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;