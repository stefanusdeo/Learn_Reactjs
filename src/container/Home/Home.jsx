import React, { Component } from 'react';
import BlogPost from '../../component/BlogPost/BlogPost';

class Home extends Component {
    render() {
        return (
            <section>
                <h3>Blog Post</h3>
                <hr />
                <BlogPost />
            </section>
        )
    }
}



export default Home;