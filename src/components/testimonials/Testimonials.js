import React, { Component } from 'react';
import Swiper, {Pagination} from 'swiper';
import 'swiper/swiper.scss';
import './Testimonials.scss';

import Peer1 from '../../assets/images/avatars/peer-01.jpeg';

export default class Testimonials extends Component {

    componentDidMount() {
        this.initializeSwiper();
    }

    initializeSwiper = () => {
        Swiper.use([Pagination]);
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
                    spaceBetween: 0
                },
                // when window width is >= 801px
                801: {
                    slidesPerView: 1,
                    spaceBetween: 0
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
                        <h3>What My Peers Have to Say</h3>
                    </div>
                </div>
                <div className="row s-testimonials__content">
                    <div className="column">
                        <div className="swiper-container testimonial-slider">
                            <div className="swiper-wrapper center">
                                <div className="testimonial-slider__slide swiper-slide">
                                    <div className="testimonial-slider__author">
                                        <img src={Peer1} alt="Roy Condrey" className="testimonial-slider__avatar" />
                                        <cite className="testimonial-slider__cite">
                                            <strong>Roy Condrey</strong>
                                            <span>Project Manager, Perficient</span>
                                        </cite>
                                    </div>
                                    <p>
                                    Jay has been a true asset to the Scrum development team. He is always willing to do whatever is needed in 
                                    order to deliver on the tasks that he is working on. Jay is diligent about learning new technologies as 
                                    needed and is more than willing to teach others what he has learned. I highly recommend Jay Witcher to 
                                    anyone and everyone that is looking for a hard worker that is willing step out of his comfort zone.
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
