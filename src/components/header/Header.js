import React, { Component } from 'react';
import './Header.scss';

export default class Header extends Component {
    render() {
        return (
            <header class="s-header">
                <div class="row s-header__nav-wrap">
                    <nav class="s-header__nav">
                        <ul>
                            <li class="current"><a class="smoothscroll" href="#hero">Home</a></li>
                            <li><a class="smoothscroll" href="#about">About</a></li>
                            <li><a class="smoothscroll" href="#resume">Resume</a></li>
                            <li><a class="smoothscroll" href="#portfolio">Works</a></li>
                            <li><a class="smoothscroll" href="#testimonials">Testimonials</a></li>
                            <li><a class="smoothscroll" href="#contact">Say Hello</a></li>
                        </ul>
                    </nav>
                </div>
                <a class="s-header__menu-toggle" href="#0" title="Menu">
                    <span class="s-header__menu-icon"></span>
                </a>
            </header>
        )
    }
}
