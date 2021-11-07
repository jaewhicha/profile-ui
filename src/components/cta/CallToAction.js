import React from 'react'
import './CallToAction.scss'

export function CallToAction() {
    
    return (
        <section className="s-cta">
            <div className="row">
                <div className="column">
                    <h3 className="h2 section-desc">
                        Looking for a good recipe for that special meal?
                    </h3>
                </div>
            </div>
            <div className="row cta-content">
                <div className="column">
                    <p>
                        Check out our recipes at <a href="https://deviandjay.com/recipes">deviandjay.com</a>.<br/>
                        <em>(Expected launch date spring 2022)</em><br/>
                        New dishes will be added monthly. Subscribe to get the newest creations in your inbox!
                    </p>
                    <a href="https://deviandjay.com/recipes" className="btn btn--primary h-full-width">Bon Appétit</a>
                </div>
            </div>
        </section>
    )
}
