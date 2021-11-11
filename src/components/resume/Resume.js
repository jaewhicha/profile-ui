import React from 'react'
import './Resume.scss'

export function Resume() {
    
    return (
        <section id="resume" className="s-resume target-section">
            <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                    <h3 className="section-header-allcaps">Career</h3>
                </div>
                <div className="column large-9 tab-12">
                    <div className="resume-block">
                        <div className="resume-block__header">
                            <h4 className="h3">Pariveda Solutions</h4>
                            <p className="resume-block__header-meta">
                                <span>Lead Software Engineer, Senior Associate</span> 
                                <span className="resume-block__header-date">
                                    July 2017 - Present
                                </span>
                            </p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                        </p>

                    </div>
                    <div className="resume-block">
                        <div className="resume-block__header">
                            <h4 className="h3">Perficient</h4>
                            <p className="resume-block__header-meta">
                                <span>Software Engineer, Technical Consultant</span> 
                                <span className="resume-block__header-date">
                                    May 2015 - July 2017
                                </span>
                            </p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                        </p>
                    </div>
                </div>
            </div>

            <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                    <h3 className="section-header-allcaps">Education</h3>
                </div>
                <div className="column large-9 tab-12">
                    <div className="resume-block">
                        <div className="resume-block__header">
                            <h4 className="h3">Louisiana State University A&M</h4>
                            <p className="resume-block__header-meta">
                                <span>Bachelor in Science, Information Systems</span> 
                                <span className="resume-block__header-date">
                                    May 2015
                                </span>
                            </p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                        </p>

                    </div>
                </div>
            </div>

            <div className="row s-resume__section">
                <div className="column large-3 tab-12">
                    <h3 className="section-header-allcaps">Skills</h3>
                </div>
                <div className="column large-9 tab-12">
                    <div className="resume-block">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore 
                            vero quidem nobis maxime dolorem aliquam quisquam eum ipsum amet. Vitae 
                            aut atque fuga dolorem. Vel voluptatibus fugiat nam. Impedit aperiam 
                            nesciunt facilis! Porro architecto dicta inventore tempora ratione quia odio.
                        </p>
                        <ul className="skill-bars-fat">
                            <li>
                                <div className="progress percent95"></div>
                                <strong>Angular</strong>
                            </li>
                            <li>
                                <div className="progress percent75"></div>
                                <strong>React</strong>
                            </li>
                            <li>
                                <div className="progress percent90"></div>
                                <strong>Express</strong>
                            </li>
                            <li>
                                <div className="progress percent95"></div>
                                <strong>Javascript</strong>
                            </li>
                            <li>
                                <div className="progress percent80"></div>
                                <strong>Node</strong>
                            </li>
                            <li>
                                <div className="progress percent75"></div>
                                <strong>HTML5</strong>
                            </li>
                            <li>
                                <div className="progress percent70"></div>
                                <strong>CSS3</strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
