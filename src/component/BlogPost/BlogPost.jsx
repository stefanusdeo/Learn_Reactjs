import React, { Component, Fragment } from 'react';
import Post from '../Post/Post';
import './BlogPost.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: [],
        formPost: {
            userid: 1,
            title: '',
            body: '',
            id: 1
        }
    }

    getData = () => {
        //dilakukan secara desc dengan mempertimbangkan id
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    }

    postData = () => {
        axios.post('http://localhost:3004/posts', this.state.formPost).then((res) => {
            console.log(res);
        }, (err) => {
            console.log('error', err);
        })
    }

    hendleRemove = async (data) => {
        await axios.delete(`http://localhost:3004/posts/${data}`)
        this.getData()
    }

    hendleForChange = (event) => {
        let formPostNew = { ...this.state.formPost };
        let timestamp = new Date().getTime();
        formPostNew['id'] = timestamp;
        formPostNew[event.target.name] = event.target.value;
        this.setState({
            formPost: formPostNew
        })
    }

    handleSubmit = () => {
        this.postData();
    }

    //memanggil API (fetch & axios)
    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        // axios.get('http://localhost:3004/posts')
        //     .then((res) => {
        //         this.setState({
        //             post: res.data
        //         })
        //     })
        this.getData();
    }

    render() {
        return (
            <Fragment>
                <h1>Blog Post</h1>
                <div className="container">
                    <div className="card card1">
                        <div className="card-body">
                            <h5 className="card-title">Add Film</h5>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" aria-describedby="emailHelp"
                                        placeholder="Enter title" name="title" onChange={this.hendleForChange} />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Enter body"
                                        name="body" onChange={this.hendleForChange} />
                                </div>
                                <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    //pengulangan
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} btnRemove={this.hendleRemove} />
                    })

                }
            </Fragment>
        )
    }
}

export default BlogPost;