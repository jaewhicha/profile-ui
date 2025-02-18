import React, { useEffect } from 'react'
import Jump from 'jump.js'
import './Footer.scss'

export function Footer() {

    useEffect(() => {
        updatePreloader()
        initializeAlertBoxes()
        initializeBackToTop()
        initializeSmoothScroll()
    })

    const updatePreloader = () => {
        const preloader = document.querySelector('#preloader')
        if (!preloader) return

        window.addEventListener('load', function() {
            
            document.querySelector('body').classList.remove('ss-preload')
            document.querySelector('body').classList.add('ss-loaded')

            preloader.addEventListener('transitionend', function(e) {
                if (e.target.matches("#preloader")) {
                    this.style.display = 'none'
                }
            })

        })

        // force page scroll position to top at page refresh
        // window.addEventListener('beforeunload' , function () {
        //     window.scrollTo(0, 0)
        // })
    }

    const initializeAlertBoxes = () => {
        const boxes = document.querySelectorAll('.alert-box')
  
        boxes.forEach(function(box) {

            box.addEventListener('click', function(e){
                if (e.target.matches(".alert-box__close")) {
                    e.stopPropagation()
                    e.target.parentElement.classList.add("hideit")

                    setTimeout(function() {
                        box.style.display = "none"
                    }, 500)
                }    
            })

        })
    }

    const initializeBackToTop = () => {
        const pxShow = 900
        const goTopButton = document.querySelector(".ss-go-top")

        if (!goTopButton) return

        // Show or hide the button
        if (window.scrollY >= pxShow) goTopButton.classList.add("link-is-visible")

        window.addEventListener('scroll', function() {
            if (window.scrollY >= pxShow) {
                if(!goTopButton.classList.contains('link-is-visible')) goTopButton.classList.add("link-is-visible")
            } else {
                goTopButton.classList.remove("link-is-visible")
            }
        })
    }

    const initializeSmoothScroll = () => {
        const triggers = document.querySelectorAll(".smoothscroll")

        triggers.forEach(function(trigger) {
            trigger.addEventListener("click", function() {
                const target = trigger.getAttribute("href")

                Jump(target, {
                    duration: 1200,
                })
            })
        })
    }

    
    return (
        <footer className="s-footer">
            <div className="row">
                <div className="column large-4 medium-6 w-1000-stack s-footer__social-block">
                    <ul className="s-footer__social">
                        <li>
                            <a className="icon-anchor" title="LinkedIn" href="https://www.linkedin.com/in/jay-witcher/">
                                <span className="sr-only">My LinkedIn</span>
                                <i className="fab fa-linkedin-in" aria-hidden="true" ></i>
                            </a>
                        </li>
                        <li>
                            <a className="icon-anchor" title="Twitter" href="https://twitter.com/_JayWitcher">
                                <span className="sr-only">My Twitter</span>
                                <i className="fab fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                        <a className="icon-anchor" title="Gitlab" href="https://gitlab.com/jaewhicha">
                                <span className="sr-only">My Gitlab</span>
                                <i className="fab fa-gitlab" aria-hidden="true"></i>
                            </a>
                            
                        </li>
                        <li>
                        <a className="icon-anchor" title="GitHub" href="https://github.com/jaewhicha">
                                <span className="sr-only">My GitHub</span>
                                <i className="fab fa-github" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="column large-7 medium-6 w-1000-stack ss-copyright">
                    <span>© Copyright Jay Witcher 2021</span> 
                    <span>Design by <a href="https://www.styleshout.com/">StyleShout</a></span>
                </div>
            </div>

            <div className="ss-go-top">
                <a className="smoothscroll" title="Back to Top" href="#top">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z"/></svg>
                </a>
            </div>
        </footer>
    )
}
