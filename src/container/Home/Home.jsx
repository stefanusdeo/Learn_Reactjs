import React, { Component } from 'react';
import BlogPost from '../../component/BlogPost/BlogPost';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Product from '../Product/Product';

class Home extends Component {
    render() {
        return (
            <Router>
                <Route path="/" exact component={BlogPost} />
                <Route path="/Card" component={Product} />
            </Router>
        )
    }
}



export default Home;