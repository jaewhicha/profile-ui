import React, { Component } from 'react';
import './Hero.scss';

export default class Hero extends Component {
    render() {
        return (
            <section id="hero" class="s-hero target-section">
                <div class="s-hero__bg rellax" data-rellax-speed="-7"></div>
                <div class="row s-hero__content">
                    <div class="column">
                        <div class="s-hero__content-about">
                            <h1>I'm Jonathan Doe.</h1>
                            <h3>
                            I'm a Manila based <span>graphic designer</span>, <span>illustrator</span> and <span>webdesigner</span> creating awesome and
                            effective visual identities for companies of all sizes around the globe. Let's <a class="smoothscroll" href="#about">start scrolling</a>
                            and learn more <a class="smoothscroll" href="#about">about me</a>.
                            </h3>
                            <div class="s-hero__content-social">
                                <a href="#0"><i class="fab fa-facebook-square" aria-hidden="true"></i></a>
                                <a href="#0"><i class="fab fa-twitter" aria-hidden="true"></i></a>
                                <a href="#0"><i class="fab fa-instagram" aria-hidden="true"></i></a>
                                <a href="#0"><i class="fab fa-dribbble" aria-hidden="true"></i></a>
                                <a href="#0"><i class="fab fa-behance" aria-hidden="true"></i></a>
                                <a href="#0"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="s-hero__scroll">
                    <a href="#about" class="s-hero__scroll-link smoothscroll">
                        <span class="scroll-arrow">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:rgba(0, 0, 0, 1);transform:;-ms-filter:"><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"></path></svg>
                        </span>
                        <span class="scroll-text">Scroll Down</span>
                    </a>
                </div>
            </section>
        )
    }
}
