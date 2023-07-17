import React from 'react'
import Arrow from '../../assets/images/arrow-icon.png'
import Sono from '../../assets/images/sonography.jpeg'
import Box from '../../assets/images/8_1.png'
import star from '../../assets/images/6_2.png'
import Bstar from '../../assets/images/15.png'



export default function Slider() {
return (
<div>
    <section class="hero__area-6">
        <div class="container g-0 line_4">
            <div class="line-col-4">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="row">
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="hero__content-6 hero__six_anim">
                        <img class="hero__arrow-icon" src={Arrow} alt="Arrow Icon" />
                        <h1 class="hero__title-6 ">
                            <div
                                style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: '1', visibility: 'inherit', transform:' translate(0px, 0px)',}}>
                               From
radiography
to artificial
intelligence</div>
                        </h1>
                        <p>
                        <div
                            style={{position: 'relative', display: 'inline-block', translate: 'none', rotate: 'none', scale: 'none', opacity: '1', visibility: 'inherit', transform:' translate(0px, 0px)',}}>
"Unveils World's One Of The Most Compact
Fastest Processing Unit, Based On SSD Technology

                        
                        </div>
                        
                        </p>
                        <a class="btn-started btn-hover" 
                            style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>Read More
                            </a>
                    </div>
                </div>
                <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                    <div class="hero__right-6">
                        <img src={Sono} width={'100%'} alt="Hero Image"
                         className='flip-box'   style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}} />
                    </div>
                </div>
            </div>
        </div>
        <img class="hero__shape" src={Bstar} alt="Shape Image" />
        <img class="hero__shape-2" src={Box}  alt="Layout" />
        <img class="hero__shape-3" src={star} alt="Star Icon" />
        <img class="shape-4" src={star} alt="Star Icon" />
    </section>
</div>
)
}