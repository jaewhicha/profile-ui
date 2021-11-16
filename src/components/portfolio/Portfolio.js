import React, { useEffect } from 'react'
import * as basicLightbox from 'basiclightbox'
import './Portfolio.scss'

import jwdotcom from '../../assets/images/portfolio/jay-witcher-profile-1x.png'
import jwdotcom2x from '../../assets/images/portfolio/jay-witcher-profile-2x.png'
import jwdotcomBig from '../../assets/images/portfolio/gallery/jay-witcher-profile-big.png'
import fuzzyFormulas from '../../assets/images/portfolio/fuzzy-formulas-1x.png'
import fuzzyFormulas2x from '../../assets/images/portfolio/fuzzy-formulas-1x.png'
import fuzzyFormulasBig from '../../assets/images/portfolio/gallery/fuzzy-formulas-big.png'



export function Portfolio() {
    
    useEffect(() => {
        initializeLightBox()
    })

    const initializeLightBox = () => {
        const folioLinks = document.querySelectorAll('.folio-item a')
        const modals = []

        folioLinks.forEach(function(link) {
            let modalbox = link.getAttribute('href')
            let instance = basicLightbox.create(
                document.querySelector(modalbox),
                {
                    onShow: function(instance) {
                        //detect Escape key press
                        document.addEventListener("keydown", function(evt) {
                            evt = evt || window.event
                            if(evt.keyCode === 27){
                            instance.close()
                            }
                        })
                    }
                }
            )
            modals.push(instance)
        })

        folioLinks.forEach(function(link, index) {
            link.addEventListener("click", function(e) {
                e.preventDefault()
                modals[index].show()
            })
        })
    }

    return (
        <section id="portfolio" className="s-portfolio target-section">
            <div className="row s-portfolio__header">
                <div className="column large-12">
                    <h3>My Latest Creations</h3>
                </div>
            </div>
            <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
                <div className="column folio-item">
                    <a href="#modal-01" className="folio-item__thumb">
                        <img src={jwdotcom} srcSet={`${jwdotcom} 1x, ${jwdotcom2x} 2x`} alt="" />
                    </a>
                </div>
                <div className="column folio-item">
                    <a href="#modal-02" className="folio-item__thumb">
                        <img src={fuzzyFormulas} srcSet={`${fuzzyFormulas} 1x, ${fuzzyFormulas2x} 2x`} alt="" />
                    </a>
                </div>
            </div>
            <div id="modal-01" hidden>
                <div className="modal-popup">
                    <img src={jwdotcomBig} alt="Profile Site Pictuer" />
                    <div className="modal-popup__desc">
                        <h5>This Website</h5>
                        <p>Built using React and Redux and integrated with microservices. App is built using Gitlab CI/CD and is served by Nginx while running in a container on Google Cloud Platform - Cloud Run</p>
                        <ul className="modal-popup__cat">
                            <li>Frontend</li>
                            <li>Integration</li>
                            <li>Ajax</li>
                            <li>Docker</li>
                            <li>Nginx</li>
                            <li>Cloud Run</li>
                        </ul>
                    </div>
                    <a href="https://gitlab.com/jaewhicha-profile" rel="noreferrer" target="_blank" className="modal-popup__details">Project link</a>
                </div>
            </div>
            <div id="modal-02" hidden>
                <div className="modal-popup">
                    <img src={fuzzyFormulasBig} alt="Fuzzy Formulas on Github" />
                    <div className="modal-popup__desc">
                        <h5>Fuzzy Formulas Package</h5>
                        <p>Public NPM package for commonly forgotten formulas</p>
                        <ul className="modal-popup__cat">
                            <li>Package</li>
                            <li>Dependency</li>
                            <li>Publishing</li>
                        </ul>
                    </div>
                    <a href="https://github.com/jaewhicha/fuzzy-formulas" rel="noreferrer" target="_blank" className="modal-popup__details">Project link</a>
                </div>
            </div>
        </section>
    )
}
