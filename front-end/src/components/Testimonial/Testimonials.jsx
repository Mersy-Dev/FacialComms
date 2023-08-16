import React from 'react'
import './testimonial.css'
import Hero from '../../assets/testimonialHero.png';
import { TestimonialsData } from '../../Data/Testimonials';
import { Swiper, SwiperSlide } from 'swiper/react';

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div className="wrapperr">
                <div className="containn">
                    <span>Top Rated</span>
                    <span>Seedily say has suitable disposal and disposing. Exercise compatisizing rejoice now</span>

                </div>


                <img src={Hero} alt="" />

                <div className="containn">
                    <span>100k</span>
                    <span>Happy Customer with us</span>
                </div>

            </div>

            <div className="reviews">
                Reviews
            </div>

            <div className="carousels">
                <Swiper
                slidesPerView={3}
                slidesPerGroup={1}
                spaceBetween={20}
                className='tCarousel'
                >
                    {
                        TestimonialsData.map((testimonials, i ) =>(
                            <SwiperSlide>
                                <div className="testimonial">
                                    <img src={testimonials.image} alt="" />
                                    <span>{testimonials.comment}</span>
                                    <hr />
                                    <span>{testimonials.name}</span>
                                </div>

                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default Testimonials