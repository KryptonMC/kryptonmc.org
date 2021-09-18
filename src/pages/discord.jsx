import React, { Component } from 'react'
import { Helmet } from 'react-helmet'
import GeneralHeader from '../components/GeneralHeader'

export default class discord extends Component {
    render() {
        return (
            <div>
                <Helmet>
                    <title>Krypton - Discord</title>
                    <meta name="description" content="Invite to the official Krypton Discord server" />
                    <meta http-equiv="refresh" content="0; URL=https://discord.gg/4QuwYACDRX" />
                </Helmet>
                <GeneralHeader />
                <a href="https://discord.gg/4QuwYACDRX">If you don't get redirected, use this link.</a>
            </div>
        )
    }
}
