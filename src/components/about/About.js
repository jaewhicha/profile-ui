/* eslint-disable react/style-prop-object */
import React, { Component } from 'react'
import MeImage from '../../assets/images/avatars/me-01.jpg'
import './About.scss'

export default class About extends Component {
    render() {
        return (
            <section id="about" className="s-about target-section">
                <div className="row">
                    <div className="column large-3 tab-12">
                        <img className="s-about__pic" src={MeImage} alt="" />
                    </div>
                    <div className="column large-9 tab-12 s-about__content">
                        <h3>About Me</h3>
                        <p>
                            Welcome! I'm a software engineer with over six years of professional work experience leading teams in developing digital products for clients.
                            My current work involves performance optimizations of a pricing backend for a large energy company based out of Houston, TX.  I've worked
                            with both large <em>Fortune</em> Global 500 companies and companies with under 300 employees.  But size doesn't matter, what matters are
                            the problems to be solved and how technology can be leveraged to create solutions.  I have the knowledge and innovator spirit to break down
                            problems into beutifully designed and elegant solutions.<br /><br />
                            <em>Industry Experience: Energy, Automotive, Healthcare, Financial</em> 
                        </p>
                        <hr />
                        <div className="row s-about__content-bottom">
                            <div className="column w-1000-stack">
                            <a href="#0" className="btn btn--primary">
                                    Contact Me
                                </a>
                            </div>
                            <div className="column w-1000-stack">
                                <a href="#0" className="btn btn--download">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{fill:'rgba(0, 0, 0, 1)', transform:'-ms-filter:'}}><path d="M12 16L16 11 13 11 13 4 11 4 11 11 8 11z"></path><path d="M20,18H4v-7H2v7c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-7h-2V18z"></path></svg>
                                    Download CV
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section> 
        )
    }
}
