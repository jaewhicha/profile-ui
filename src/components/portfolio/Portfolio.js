import React, { useEffect } from 'react'
import * as basicLightbox from 'basiclightbox'
import './Portfolio.scss'

import droplet from '../../assets/images/portfolio/droplet.jpg'
import droplet2x from '../../assets/images/portfolio/droplet@2x.jpg'
import dropletBig from '../../assets/images/portfolio/gallery/g-droplet.jpg'
import lamp from '../../assets/images/portfolio/lamp.jpg'
import lamp2x from '../../assets/images/portfolio/lamp@2x.jpg'
import lampBig from '../../assets/images/portfolio/gallery/g-lamp.jpg'
import minimalismo from '../../assets/images/portfolio/minimalismo.jpg'
import minimalismo2x from '../../assets/images/portfolio/minimalismo@2x.jpg'
import minimalismoBig from '../../assets/images/portfolio/gallery/g-minimalismo.jpg'
import shutterbug from '../../assets/images/portfolio/shutterbug.jpg'
import shutterbug2x from '../../assets/images/portfolio/shutterbug@2x.jpg'
import shutterbugBig from '../../assets/images/portfolio/gallery/g-shutterbug.jpg'

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
                    <h3>A Few Of My Latest Creations</h3>
                </div>
            </div>
            <div className="row collapse block-large-1-4 block-medium-1-3 block-tab-1-2 block-500-stack folio-list">
                <div className="column folio-item">
                    <a href="#modal-01" className="folio-item__thumb">
                        <img src={droplet} srcSet={`${droplet} 1x, ${droplet2x} 2x`} alt="" />
                    </a>
                </div>
                <div className="column folio-item">
                    <a href="#modal-02" className="folio-item__thumb">
                        <img src={lamp} srcSet={`${lamp} 1x, ${lamp2x} 2x`} alt="" />
                    </a>
                </div>
                <div className="column folio-item">
                    <a href="#modal-03" className="folio-item__thumb">
                        <img src={minimalismo} srcSet={`${minimalismo} 1x, ${minimalismo2x} 2x`} alt="" />
                    </a>
                </div>
                <div className="column folio-item">
                    <a href="#modal-04" className="folio-item__thumb">
                    <img src={shutterbug} srcSet={`${shutterbug} 1x, ${shutterbug2x} 2x`} alt="" />
                    </a>
                </div>
            </div>
            <div id="modal-01" hidden>
                <div className="modal-popup">
                    <img src={dropletBig} alt="" />
        
                    <div className="modal-popup__desc">
                        <h5>Droplet</h5>
                        <p>Odio soluta enim quos sit asperiores rerum rerum repudiandae cum. Vel voluptatem alias qui assumenda iure et expedita voluptatem. Ratione officiis quae.</p>
                        <ul className="modal-popup__cat">
                            <li>Branding</li>
                            <li>Product Design</li>
                        </ul>
                    </div>
        
                    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                </div>
            </div>
            <div id="modal-02" hidden>
                <div className="modal-popup">
                    <img src={lampBig} alt="" />
        
                    <div className="modal-popup__desc">
                        <h5>The Lamp</h5>
                        <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                        <ul className="modal-popup__cat">
                            <li>Branding</li>
                        </ul>
                    </div>
        
                    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                </div>
            </div>
            <div id="modal-03" hidden>
                <div className="modal-popup">
                    <img src={minimalismoBig} alt="" />
        
                    <div className="modal-popup__desc">
                        <h5>Minimalismo</h5>
                        <p>Exercitationem reprehenderit quod explicabo consequatur aliquid ut magni ut. Deleniti quo corrupti illum velit eveniet ratione necessitatibus ipsam mollitia.</p>
                        <ul className="modal-popup__cat">
                            <li>Product Design</li>
                        </ul>
                    </div>
        
                    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                </div>
            </div>
            <div id="modal-04" hidden>
                <div className="modal-popup">
                    <img src={shutterbugBig} alt="" />
        
                    <div className="modal-popup__desc">
                        <h5>Shutterbug</h5>
                        <p>Dolores velit qui quos nobis. Aliquam delectus voluptas quos possimus non voluptatem voluptas voluptas. Est doloribus eligendi porro doloribus voluptatum.</p>
                        <ul className="modal-popup__cat">
                            <li>E-Commerce</li>
                        </ul>
                    </div>
        
                    <a href="https://www.behance.net/" className="modal-popup__details">Project link</a>
                </div>
            </div>
        </section>
    )
}
