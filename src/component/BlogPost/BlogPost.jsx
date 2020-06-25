import React, { Component, Fragment } from 'react';
import Post from '../Post/Post';
import './BlogPost.css';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

class BlogPost extends Component {
    state = {
        post: []
    }

    getData = () => {
        axios.get('http://localhost:3004/posts')
            .then((res) => {
                this.setState({
                    post: res.data
                })
            })
    }

    hendleRemove = async (data) => {
        await axios.delete(`http://localhost:3004/posts/${data}`)
        this.getData()
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