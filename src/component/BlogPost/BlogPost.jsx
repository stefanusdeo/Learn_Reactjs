import React, { Component, Fragment } from 'react';
import Post from '../Post/Post';
import './BlogPost.css';
import axios from 'axios';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            formPost: {
                userid: 1,
                title: '',
                body: '',
                id: 1
            },
            isUpdate: false,
            showPost: false
        }
        this.hendleShowPost = this.hendleShowPost.bind(this);
    }

    getData = async () => {
        //dilakukan secara desc dengan mempertimbangkan id
        const data = await axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        this.setState({
            post: data.data
        })
    }

    postData = async () => {
        try {
            const data = await axios.post('http://localhost:3004/posts', this.state.formPost)
            console.log(data);

        } catch (err) {
            console.log('error', err);

        }
    }

    putData = async () => {
        await axios.put(`http://localhost:3004/posts/${this.state.formPost.id}`, this.state.formPost)
        this.getData();
        this.setState({
            isUpdate: false,
            formPost: {
                userid: 1,
                title: '',
                body: '',
                id: 1
            }
        })
    }

    hendleRemove = async (data) => {
        await axios.delete(`http://localhost:3004/posts/${data}`)
        this.getData()
    }

    hendleUpdate = (data) => {
        this.setState({
            formPost: data,
            isUpdate: true
        })
    }

    hendleForChange = (event) => {
        let formPostNew = { ...this.state.formPost };
        let timestamp = new Date().getTime();
        if (!this.state.isUpdate) {
            formPostNew['id'] = timestamp;
        }
        formPostNew[event.target.name] = event.target.value;
        this.setState({
            formPost: formPostNew
        })
    }

    handleSubmit = () => {
        //validasi button
        if (this.state.isUpdate) {
            this.putData();
        } else {
            this.postData();
        }
    }

    //memanggil API (fetch & axios)
    componentDidMount() {
        this.getData();
    }

    hendleShowPost = () => {
        this.setState({
            showPost: true
        })
    }

    render() {
        return (
            <Fragment>
                <h1>Blog Post</h1>
                <div className="container">
                    <div className="card card1">
                        <div className="card-body">
                            <div>
                                <h5 className="card-title">Add Film</h5>
                            </div>
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" aria-describedby="emailHelp"
                                        placeholder="Enter title" name="title" onChange={this.hendleForChange}
                                        value={this.state.formPost.title} />
                                </div>
                                <div className="form-group">
                                    <textarea type="text" className="form-control" placeholder="Enter body"
                                        name="body" onChange={this.hendleForChange} value={this.state.formPost.body} />
                                </div>
                                <button onClick={this.handleSubmit} className="btn btn-primary">Submit</button>
                                <button onClick={() => { this.handleShowPost() }} className="btn btn-danger ml-2">Show Title</button>
                            </form>
                        </div>
                    </div>
                </div>
                {//pengulangan
                    this.state.post.map(post => {
                        return <Post key={post.id} data={post} btnRemove={this.hendleRemove} btnUpdate={this.hendleUpdate} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;