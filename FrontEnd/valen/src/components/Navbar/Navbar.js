import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import logoicon from '../../valenicon.png';
import './Navbar.css';

class Navbar extends Component{

    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    
    render() {
        return(
            <nav className="NavbarItems">
                <a style={{ textDecoration: 'none' }} href="/"><h1 className="navbar-logo">Valen<img className="logo-icon" src={logoicon} /></h1></a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    { MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}> 
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar