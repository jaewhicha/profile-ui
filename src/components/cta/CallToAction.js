import React, { Component } from 'react';
import './CallToAction.scss';

export default class CallToAction extends Component {
    render() {
        return (
            <section class="s-cta">
                <div class="row">
                    <div class="column">
                        <h3 class="h2 section-desc">
                            Need a great reliable web hosting?
                        </h3>
                    </div>
                </div>
                <div class="row cta-content">
                    <div class="column">
                        <p>
                            We highly recommend <a href="https://www.dreamhost.com/r.cgi?287326">DreamHost</a>.
                            Powerful web and Wordpress hosting. Guaranteed.
                            Starting at $2.95 per month.
                        </p>
                        <a href="https://www.dreamhost.com/r.cgi?287326" class="btn btn--primary h-full-width">Get Started</a>
                    </div>
                </div>
            </section>
        )
    }
}
