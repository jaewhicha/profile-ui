import React, { Component } from 'react'
import './Loader.scss'

export default class Loader extends Component {
    render() {
        return (
            <div id="preloader">
                <div id="loader"></div>
            </div>
        )
    }
}
