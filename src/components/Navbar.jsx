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
        const width = typeof window === "undefined" ? 0 : window.innerWidth;
        const isSmall = width <= 650;
        return (
            <div className="navbar">
                <span>
                    <img
                        src={isSmall ? KryptonLogo : KryptonBanner}
                        alt="Krypton"
                        width={isSmall ? "40px" : "200px"}
                        height="40px"
                        onClick={isSmall && this.toggle}
                    />
                    {isSmall && <i className="fas fa-caret-down" onClick={this.toggle} />}
                    {isSmall && <span className={`toggle-container ${this.state.toggled ? "on" : "off"}`}>
                        {InternalLinks.map(link => (<NavbarLink {...link} />))}
                    </span>}
                </span>
                {isSmall && <div className="navbar-right">
                    {ExternalLinks.map(link => (<NavbarLink {...link} />))}
                </div>}
            </div>
        )
    }

    toggle() {
        this.setState({toggled: !this.state.toggled})
    }
}
