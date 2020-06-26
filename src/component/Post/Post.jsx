import React from 'react';
import './Post.css';
import 'bootstrap/dist/css/bootstrap.css';

const Post = (props) => {
    return (
        <div className="container container1">
            <div className="card card1 mt-2">
                <img className="card-img-top" src="https://placeimg.com/200/150/tech" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.body}</p>
                    <button className="btn btn-danger btn-sm mr-2" onClick={() => props.btnRemove(props.data.id)}>Remove</button>
                    <button className="btn btn-primary btn-sm" onClick={() => props.btnUpdate(props.data)}>Update</button>
                </div>
            </div>
        </div>
    )
}

export default Post;