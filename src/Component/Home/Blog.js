import React, { useEffect, useState } from 'react'
import Blog1 from '../../assets/images/blog1.jpeg'
import Tag from '../../assets/images/label.png'
import Time from '../../assets/images/clock.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Mousewheel, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



export default function Blog() {
  const [swiper, setSwiper] = useState(null);


  const handleMousewheelComplete = () => {
    if (swiper) {
      swiper.mousewheel.disable(); // Disable mouse wheel scrolling
    }
  };

  return (
    <div>
      <section class="blog__area no-pb blog__animation">
        <div class="container g-0 line pt-30 pb-100">
          <span class="line-3"></span>
          <div class="row">
            <div class="col-xxl-12 col-xl-12 col-lg-12 col-md-12">
              <div class="sec-title-wrapper">
                {/* <h2 class="sec-sub-title">recent blog</h2> */}
                <h3 class="sec-title">Blog</h3>
              </div>
            </div>
          </div>

          <Swiper
            // loop={true}
      mousewheel={true}
      navigation={true}
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        '@0.00': {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        '@0.75': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.00': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '@1.50': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
      modules={[Mousewheel, Navigation, Pagination]}
      className="mySwiper"
      onSwiper={setSwiper}
      onReachEnd={handleMousewheelComplete}>
            <SwiperSlide>
              <article class="blog__item" style={{
                translate: 'none', rotate: 'none', scale: 'none', opacity: '1',
                transform: 'translate(0px, 0px)'
              }}>
                <div class="blog__img-wrapper">
                  <a>
                    <div class="img-box">
                      <img class="image-box__item" src={Blog1} alt="" />
                      <img class="image-box__item" src={Blog1} alt="" />
                    </div>
                  </a>
                </div>
                <h4 class="blog__meta"><a><img src={Tag} width={'18px'} /> News</a> | <img src={Time} width={'18px'} /> 12
                  July 2023</h4>
                <h5><a class="blog__title">Mayo Clinic launches first platform initiative</a></h5>
                <a class="blog__btn">Read More <span><i class="fa fa-long-arrow-right"></i></span></a>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="blog__item" style={{
                translate: 'none', rotate: 'none', scale: 'none', opacity: '1',
                transform: 'translate(0px, 0px)'
              }}>
                <div class="blog__img-wrapper">
                  <a>
                    <div class="img-box">
                      <img class="image-box__item" src={Blog1} alt="" />
                      <img class="image-box__item" src={Blog1} alt="" />
                    </div>
                  </a>
                </div>
                <h4 class="blog__meta"><a><img src={Tag} width={'18px'} /> News</a> | <img src={Time} width={'18px'} /> 12
                  July 2023</h4>
                <h5><a class="blog__title">Mayo Clinic launches first platform initiative</a></h5>
                <a class="blog__btn">Read More <span><i class="fa fa-long-arrow-right"></i></span></a>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="blog__item" style={{
                translate: 'none', rotate: 'none', scale: 'none', opacity: '1',
                transform: 'translate(0px, 0px)'
              }}>
                <div class="blog__img-wrapper">
                  <a>
                    <div class="img-box">
                      <img class="image-box__item" src={Blog1} alt="" />
                      <img class="image-box__item" src={Blog1} alt="" />
                    </div>
                  </a>
                </div>
                <h4 class="blog__meta"><a><img src={Tag} width={'18px'} /> News</a> | <img src={Time} width={'18px'} /> 12
                  July 2023</h4>
                <h5><a class="blog__title">Mayo Clinic launches first platform initiative</a></h5>
                <a class="blog__btn">Read More <span><i class="fa fa-long-arrow-right"></i></span></a>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="blog__item" style={{
                translate: 'none', rotate: 'none', scale: 'none', opacity: '1',
                transform: 'translate(0px, 0px)'
              }}>
                <div class="blog__img-wrapper">
                  <a>
                    <div class="img-box">
                      <img class="image-box__item" src={Blog1} alt="" />
                      <img class="image-box__item" src={Blog1} alt="" />
                    </div>
                  </a>
                </div>
                <h4 class="blog__meta"><a><img src={Tag} width={'18px'} /> News</a> | <img src={Time} width={'18px'} /> 12
                  July 2023</h4>
                <h5><a class="blog__title">Mayo Clinic launches first platform initiative</a></h5>
                <a class="blog__btn">Read More <span><i class="fa fa-long-arrow-right"></i></span></a>
              </article>
            </SwiperSlide>
            <SwiperSlide>
              <article class="blog__item" style={{
                translate: 'none', rotate: 'none', scale: 'none', opacity: '1',
                transform: 'translate(0px, 0px)'
              }}>
                <div class="blog__img-wrapper">
                  <a>
                    <div class="img-box">
                      <img class="image-box__item" src={Blog1} alt="" />
                      <img class="image-box__item" src={Blog1} alt="" />
                    </div>
                  </a>
                </div>
                <h4 class="blog__meta"><a><img src={Tag} width={'18px'} /> News</a> | <img src={Time} width={'18px'} /> 12
                  July 2023</h4>
                <h5><a class="blog__title">Mayo Clinic launches first platform initiative</a></h5>
                <a class="blog__btn">Read More <span><i class="fa fa-long-arrow-right"></i></span></a>
              </article>
            </SwiperSlide>

          </Swiper>




        </div>
      </section>
    </div>
  )
}