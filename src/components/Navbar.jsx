import React, { Component } from 'react'
import NavbarLink from './NavbarLink'
import './Navbar.scss';
import ExternalLinks from '../resources/external-links.json'
import InternalLinks from '../resources/internal-links.json'
import KryptonBanner from '../resources/img/banner.png'

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this)
        this.state = {
            toggled: false,
            width: 0
        }
    }

    render() {
        return (
            <div className="navbar">
                <span>
                    <img
                        src={KryptonBanner}
                        alt="Krypton"
                        width="200px"
                        height="40px"
                        onClick={this.state.width <= 650 && this.toggle}
                    />
                    {this.state.width <= 650 && <i className="fas fa-caret-down" onClick={this.toggle} />}
                    {this.state.width <= 650 && <span className={`toggle-container ${this.state.toggled ? "on" : "off"}`}>
                        {InternalLinks.map(link => (<NavbarLink {...link} />))}
                    </span>}
                </span>
                {this.state.width > 650 && <div className="navbar-right">
                    {ExternalLinks.map(link => (<NavbarLink {...link} />))}
                </div>}
            </div>
        )
    }

    componentDidMount() {
        this.updateDimensions()
        window.addEventListener('resize', this.updateDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions)
    }

    updateDimensions() {
        this.setState({ width: document.body.scrollWidth })
    }

    toggle() {
        this.setState({toggled: !this.state.toggled})
    }

    isSmall() {
        return this.state.width <= 650
    }
}
