import React, { Component } from 'react';
import BlogPost from '../../component/BlogPost/BlogPost';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Product from '../Product/Product';

class Home extends Component {
    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Film</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/card">Card</Link>
                            </li>


                        </ul>
                    </div>
                </nav>
                <Route path="/" exact component={BlogPost} />
                <Route path="/Card" component={Product} />
            </Router>
        )
    }
}



export default Home;