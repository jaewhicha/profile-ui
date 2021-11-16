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
                            At Pariveda Solutions I am an Associate II and my current role is Lead Software 
                            Engineer for a team of Pariveda developers at EDF Energy North America. I communicate with 
                            my stakeholders directly and lead a small team with other cross-functional engineers to develop 
                            new features based on product requirements. The current project I work on revolves around a 
                            modernization of a pricing application for prospective customers. Previously, I've 
                            worked on a product that allows a better online car buying experience with a major automotive 
                            manufacturer and their dealers.
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
                            Designed, developed, tested, documented, and maintained multiple client-side applications 
                            for a national healthcare organization’s re-designed client facing web portal. Worked closely 
                            with stakeholders and partnered with a Scrum team of developers to create a fluid user 
                            experience so customers can manage profile settings, notification settings, view medical 
                            bills, payment history and statement history. Helped pave the way in designing a scalable 
                            and reusable component-based content repository using Adobe Experience Manager. Created 
                            applications that are accessible, maintainable, interoperable, responsive, and interactive 
                            to a wide customer base with specific needs.
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
                            <h4 className="h3">Louisiana State University A&amp;M</h4>
                            <p className="resume-block__header-meta">
                                <span>Bachelor in Science, Information Systems</span> 
                                <span className="resume-block__header-date">
                                    May 2015
                                </span>
                            </p>
                        </div>
                        <p>
                            At LSU I earned a Bachelor of Science degree in Information Systems &amp; Decision 
                            Sciences from the E.J. Ourso College of buiness. My focus was on more of the IT 
                            and sofware engineering side of Information Systems.  My senior project centered 
                            around a college scholarship selection app that my team and I built as a web app using
                            .NET MVC and SQL Server.
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
                            My expertise resides in the full stack of web engineering and I am well versed in multiple 
                            frameworks. I am a ninja when it comes to turning requirements and compositions into 
                            intuitive, robust, and scalable web applications. I have extensive knowledge of client-side 
                            frameworks, libraries, and tools such as Angular, React, RxJS, Redux, and Vue.js. 
                            Additionally, I have experience implementing RESTful web services using robust frameworks such 
                            as .NET Core, Spring Boot, and Express within Docker containers as well as database experience using MS SQL Server, 
                            PostgreSQL, and MongoDB. Addtionally, I have worked almost exclusively within the top three major cloud platforms. 
                            My goal is to continue to gain more knowledge in the entire stack in order to become an architect in the world of web applications.
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
