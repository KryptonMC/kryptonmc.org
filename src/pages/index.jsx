import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import './index.scss'
import './general.scss'
import Sections from '../resources/home-sections.yml'
import GenericSection from '../components/GenericSection'
import GeneralHeader from '../components/GeneralHeader'
import { Helmet } from 'react-helmet'

export default class index extends Component {

    render() {
        return (
            <div>
                <GeneralHeader />
                <Helmet>
                    <title>Krypton - a Minecraft server written from scratch</title>
                    <meta name="description" content="A fast, lightweight Minecraft server, written from scratch in Kotlin" />
                    <link rel="canonical" href="https://kryptonmc.org/" />
                </Helmet>
                <div style={{display: "flex", flexFlow: "column", height: "100vh"}}>
                    <Navbar />
                    <div style={{overflow: "auto"}}>
                        <div className="header">
                            <span>
                                <h1>Krypton</h1>
                                <h2>A Minecraft server, written from scratch in Kotlin</h2>
                            </span>
                        </div>
                        <div className="footer">
                            <h1>Ⓒ 2021 KryptonMC & Minestom. All rights reserved.</h1>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
