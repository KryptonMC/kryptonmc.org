import React, { Component } from 'react'
import { Helmet } from 'react-helmet'

export default class GeneralHeader extends Component {
    render() {
        return (
            <Helmet htmlAttributes={{lang: "en"}}>
                <meta name="theme-color" content="#2A3030" />
                <link href="/favicon.ico" rel="icon" />
                <script async src="https://kit.fontawesome.com/2db51182d1.js" crossorigin="anonymous" />
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-694DME689X" />
                <script async src="/static/js/gtag.js" />
            </Helmet>
        )
    }
}
