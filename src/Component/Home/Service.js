import React from 'react'
import Veterinary from '../../assets/images/Veterinary.jpeg'
import Veterinary1 from '../../assets/images/Veterinary.jpeg'

import Human from '../../assets/images/Human.jpeg'
import Dental from '../../assets/images/Dental.jpeg'


export default function Service() {
return (
<div>
    <section class="workflow__area-4 servicesss">
        <div class="container line_4 pt-100 pb-100">
            <div class="line-col-4">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>

            <div class="row animation_workflow_6">
                <div class="col-xxl-12">
                    <div class="title-wrapper-6 text-anim">
                        {/* <h2 class="sec-subtile-6">Processing</h2> */}
                        <h3 class="sec-title-6 title-anim" style={{ perspective: '400px' }}>
                            <div style={{ display: 'block' , textAlign: 'center' , position: 'relative' ,
                                translate: 'none' , rotate: 'none' , scale: 'none' , transformOrigin: '558px 25.4219px'
                                , transform: 'translate3d(0px, 0px, 0px)' , opacity: '1' , }}>
                                Applications
                            </div>
                        </h3>
                        <p style={{ perspective: '400px' }}>
                        <div style={{ display: 'block' , textAlign: 'center' , position: 'relative' , translate: 'none'
                            , rotate: 'none' , scale: 'none' , transformOrigin: ' 558px 13.5px' ,
                            transform: 'translate3d(0px, 0px, 0px)' , opacity: '1' , }}>
                            the best solutions in every application field

                        </div>
                        <div style={{ display: 'block' , textAlign: 'center' , position: 'relative' , translate: 'none'
                            , rotate: 'none' , scale: 'none' , transformOrigin: ' 558px 13.5px' ,
                            transform: 'translate3d(0px, 0px, 0px)' , opacity: '1' , }}>
                            development and instantly. </div>
                        </p>
                    </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                    <div class="workflow__item-4" style={{ translate: 'none' , rotate: 'none' , scale: 'none' ,
                        transform: 'translate(0px, 0px)' , opacity: '1' , }}>
                        <div class="blog__img-wrapper"><a>
                                <div class="img-box ">
                                    <img class="image-box__item"
                                        src={Veterinary} alt=""/>
                                            <img
                                        class="image-box__item" src={Veterinary}
                                        alt=""/></div>
                            </a></div>
                      <h4 class="workflow__title-4">Veterinarian</h4>
                        <p>Processing and management of veterinary radiological images in static detector handwriting mode.
                        </p>
                    </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                    <div class="workflow__item-4" style={{ translate: 'none' , rotate: 'none' , scale: 'none' ,
                        transform: 'translate(0px, 0px)' , opacity: '1' , }}>

<div class="blog__img-wrapper"><a>
                                <div class="img-box">
                                    <img class="image-box__item"
                                        src={Human} alt=""/>
                                            <img
                                        class="image-box__item" src={Human}
                                        alt=""/></div>
                            </a></div>
                        {/* <img src={Human} width={'100%'} alt="Work Image" /> */}
                        <h4 class="workflow__title-4">Human</h4>
                        <p> Processing and management of radiological digital images in graphy and fluoroscopy modality
                        </p>
                    </div>
                </div>
                <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                    <div class="workflow__item-4" style={{ translate: 'none' , rotate: 'none' , scale: 'none' ,
                        transform: 'translate(0px, 0px)' , opacity: '1' , }}>
                             <div class="img-box">
                                    <img class="image-box__item"
                                        src={Dental} alt=""/>
                                            <img
                                        class="image-box__item" src={Dental}
                                        alt=""/></div>
                        {/* <img src={Dental} width={'100%'} alt="Work Image" /> */}
                        <h4 class="workflow__title-4">Dental</h4>
                        <p>Processing and management of radiological digital images in graphy and fluoroscopy modality
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</div>
)
}