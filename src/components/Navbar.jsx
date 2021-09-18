import React, { Component } from 'react'
import NavbarLink from './NavbarLink'
import './Navbar.scss';
import ExternalLinks from '../resources/external-links.json'
import InternalLinks from '../resources/internal-links.json'
import KryptonLogo from '../resources/img/banner.png'
import KryptonBanner from '../resources/img/banner.png'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
        this.state = {
            toggled: false
        }
    }

    render() {
        return (
            <div className="navbar">
                <span>
                    <img
                        src={window.innerWidth <= 650 ? KryptonLogo : KryptonBanner}
                        alt="Krypton"
                        width="200px"
                        height="40px"
                        onClick={window.innerWidth <= 650 && this.toggle}
                    />
                    {window.innerWidth <= 650 && <i className="fas fa-caret-down" onClick={this.toggle} />}
                    {window.innerWidth <= 650 && <span className={`toggle-container ${this.state.toggled ? "on" : "off"}`}>
                        {InternalLinks.map(link => (<NavbarLink {...link} />))}
                    </span>}
                </span>
                {window.innerWidth > 650 && <div className="navbar-right">
                    {ExternalLinks.map(link => (<NavbarLink {...link} />))}
                </div>}
            </div>
        )
    }

    toggle() {
        this.setState({toggled: !this.state.toggled})
    }
}
