import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import About from '../About/About';
import Repository from '../Repositories/GithubProfile';
import Slide from '../Slider/Slider';
import Home from '../Home';


class Navbar extends Component {
    state = { clicked: false}
    
    toTheTop =()=> {
        window.scrollTo({ top:0, left: 0, behavior: 'smooth'});
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    render() {
        return(
            <div>
            <Router>
                <nav className="NavbarItems sticky-nav">
                    <h1 onClick={this.toTheTop} className="navbar-logo">PortFolio<i className="fab fa-react" ></i></h1>
                    <div className="menu-icon" onClick={this.handleClick}>
                        <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                    <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} >
                        {MenuItems.map((item, index) => {
                        return(<Link to={item.url} key={index}><a className="nav-links" onClick={this.toTheTop} href={item.url}>{item.title}</a></Link>)
                        })}
                    </ul>
                </nav>
                <Switch>
                    <Route path='/About'>
                        <About />
                    </Route>
                    <Route path='/Repositories'>
                        <Repository />
                    </Route>
                    <Route path='/Projects'>
                        <Slide />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                    
                </Switch>
            </Router>
            </div>
        );
    }
}

export default Navbar;