import React, { useEffect } from 'react'
import Rellax from 'rellax'
import './Hero.scss'

 export function Hero() {

    useEffect(() => {
        initializeRellax()
    })

    const initializeRellax = () => {
        Rellax.call(this, '.rellax')
    }
    
    return (
        <section id="hero" className="s-hero target-section">
            <div className="s-hero__bg rellax" data-rellax-speed="-7"></div>
            <div className="row s-hero__content">
                <div className="column">
                    <div className="s-hero__content-about">
                        <h1>I'm Jay Witcher.</h1>
                        <h3>
                        I'm a USA based <span>full-stack engineer</span>, <span>innovator</span>, and <span>leader</span> creating awesome and
                        effective product experiences for the world to use. <br />Let's <a className="smoothscroll" href="#about">start scrolling</a> and learn more <a className="smoothscroll" href="#about">about me</a>.
                        </h3>
                        <div className="s-hero__content-social">
                            <a title="LinkedIn" href="https://www.linkedin.com/in/jay-witcher/">
                                <span className="sr-only">My LinkedIn</span>
                                <i className="fab fa-linkedin-in" aria-hidden="true" ></i>
                            </a>
                            <a title="Twitter" href="https://twitter.com/_JayWitcher">
                                <span className="sr-only">My Twitter</span>
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                            </a>
                            <a title="DEV" href="https://dev.to/jaewhicha">
                                <span className="sr-only">My DEV</span>
                                <i className="fab fa-dev" aria-hidden="true"></i>
                            </a>
                            <a title="Medium" href="https://medium.com/@jaewhicha/about">
                                <span className="sr-only">My Medium</span>
                                <i className="fab fa-medium" aria-hidden="true"></i>
                            </a>
                            <a title="Gitlab" href="https://gitlab.com/jaewhicha">
                                <span className="sr-only">My Gitlab</span>
                                <i className="fab fa-gitlab" aria-hidden="true"></i>
                            </a>
                            <a title="GitHub" href="https://github.com/jaewhicha">
                                <span className="sr-only">My GitHub</span>
                                <i className="fab fa-github" aria-hidden="true"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="s-hero__scroll">
                <a href="#about" className="s-hero__scroll-link smoothscroll">
                    <span className="scroll-arrow">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'rgba(0, 0, 0, 1)',transform:'-ms-filter:'}}><path d="M18.707 12.707L17.293 11.293 13 15.586 13 6 11 6 11 15.586 6.707 11.293 5.293 12.707 12 19.414z"></path></svg>
                    </span>
                    <span className="scroll-text">Scroll Down</span>
                </a>
            </div>
        </section>
    )
}
