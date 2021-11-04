import React, { Component } from 'react';
import Swiper from 'swiper';
import './Testimonials.scss';

export default class Testimonials extends Component {

    componentDidMount() {
        this.initializeSwiper();
    }

    initializeSwiper = () => {
        // eslint-disable-next-line
        const mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },          
            breakpoints: {
                // when window width is >= 401px
                401: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 801px
                801: {
                    slidesPerView: 2,
                    spaceBetween: 48
                }
            }
         });
    }

    render() {
        return (
            <section id="testimonials" className="s-testimonials target-section">
                <div className="s-testimonials__bg"></div>
                <div className="row s-testimonials__header">
                    <div className="column large-12">
                        <h3>Hear What My Clients Say</h3>
                    </div>
                </div>
                <div className="row s-testimonials__content">
                    <div className="column">
                        <div className="swiper-container testimonial-slider">
                            <div className="swiper-wrapper">
                                <div className="testimonial-slider__slide swiper-slide">
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-02.jpg" alt="Author 1" className="testimonial-slider__avatar" />
                                        <cite className="testimonial-slider__cite">
                                            <strong>Tim Cook</strong>
                                            <span>CEO, Apple</span>
                                        </cite>
                                    </div>
                                    <p>
                                        Molestiae incidunt consequatur quis ipsa autem nam sit enim magni. Voluptas tempore rem. 
                                        Explicabo a quaerat sint autem dolore ducimus ut consequatur neque.  Nisi dolores quaerat fuga rem nihil nostrum.
                                        Laudantium quia consequatur molestias delectus culpa.
                                    </p>
                                </div>
                                <div className="testimonial-slider__slide swiper-slide">
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-03.jpg" alt="Author 2" className="testimonial-slider__avatar" />
                                        <cite className="testimonial-slider__cite">
                                            <strong>Sundar Pichai</strong>
                                            <span>CEO, Google</span>
                                        </cite>
                                    </div>
                                    <p>
                                        Excepturi nam cupiditate culpa doloremque deleniti repellat. Veniam quos repellat voluptas animi adipisci.
                                        Nisi eaque consequatur. Voluptatem dignissimos ut ducimus accusantium perspiciatis.
                                        Quasi voluptas eius distinctio. Atque eos maxime.
                                    </p>
                                </div>
                                <div className="testimonial-slider__slide swiper-slide">
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-04.jpg" alt="Author 3" className="testimonial-slider__avatar" />
                                        <cite className="testimonial-slider__cite">
                                            <strong>Satya Nadella</strong>
                                            <span>CEO, Microsoft</span>
                                        </cite>
                                    </div>
                                    <p>
                                        Repellat dignissimos libero. Qui sed at corrupti expedita voluptas odit. Nihil ea quia nesciunt. Ducimus aut sed ipsam.  
                                        Autem eaque officia cum exercitationem sunt voluptatum accusamus. Quasi voluptas eius distinctio.
                                        Voluptatem dignissimos ut.
                                    </p>
                                </div>
                                <div className="testimonial-slider__slide swiper-slide">
                                    <div className="testimonial-slider__author">
                                        <img src="images/avatars/user-05.jpg" alt="Author 4" className="testimonial-slider__avatar" />
                                        <cite className="testimonial-slider__cite">
                                            <strong>Jeff Bezos</strong>
                                            <span>CEO, Amazon</span>
                                        </cite>
                                    </div>
                                    <p>
                                        Nunc interdum lacus sit amet orci. Vestibulum dapibus nunc ac augue. Fusce vel dui. In ac felis 
                                        quis tortor malesuada pretium. Curabitur vestibulum aliquam leo. Qui sed at corrupti expedita voluptas odit. 
                                        Nihil ea quia nesciunt. Ducimus aut sed ipsam.
                                    </p>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
