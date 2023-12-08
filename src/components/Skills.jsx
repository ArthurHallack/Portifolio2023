import React from 'react'
import htmlImg from '../img/html.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import cssImg from '../img/css.png'
import reactImg from '../img/react.png'
import nodeImg from '../img/node.png'
import sqlImg from '../img/sql.png'
import gitImg from '../img/git.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

const estilo1 = {
    width: '60px'
}

const estilo2 = {
    width: '90px'
}

function Skills () {
    return (
        <div id='slide-container'>
            <div className='slide-content'>
                <div className='card-wrapper'>
                    <Swiper spaceBetween={0}
                            slidesPerView={3}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='image-content'>
                                    <span className='over-lay'></span>
                                    <div className='card-image'>
                                        <img src={htmlImg} alt="html" className='card-img' />
                                    </div>
                                </div>
                                <div className='card-content'>
                                    <h2 className='name'>HTML5</h2>
                                    <p className='descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque laborum harum voluptate quaerat placeat magnam, aut at aliquam tempora autem vel maiores nulla minus quasi odit modi ratione dicta!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='image-content'>
                                    <span className='over-lay'></span>
                                    <div className='card-image'>
                                        <img src={htmlImg} alt="html" className='card-img' />
                                    </div>
                                </div>
                                <div className='card-content'>
                                    <h2 className='name'>HTML5</h2>
                                    <p className='descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque laborum harum voluptate quaerat placeat magnam, aut at aliquam tempora autem vel maiores nulla minus quasi odit modi ratione dicta!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='card'>
                                <div className='image-content'>
                                    <span className='over-lay'></span>
                                    <div className='card-image'>
                                        <img src={htmlImg} alt="html" className='card-img' />
                                    </div>
                                </div>
                                <div className='card-content'>
                                    <h2 className='name'>HTML5</h2>
                                    <p className='descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque laborum harum voluptate quaerat placeat magnam, aut at aliquam tempora autem vel maiores nulla minus quasi odit modi ratione dicta!</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Skills