import React, { Component } from 'react';
import BlogPost from '../../component/BlogPost/BlogPost';

class Home extends Component {
    render() {
        return (
            <section>
                {/* <div>
                    <CardName name="Stefanus Deo" job="Full stack Dev" />
                    <CardName name="Agung" job="Back End" />
                    <CardName name="Reza" job="Front End" />
                    <CardName />

                </div>
                <div>
                    <Product />
                </div> */}
                <p>Blog Post</p>
                <hr />
                <BlogPost />
            </section>
        )
    }
}



export default Home;