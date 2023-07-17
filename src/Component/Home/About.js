import React from 'react'
import AboutImage from '../../assets/images/about11.png'



export default function About() {
return (
<div>    
  <section class="solution__area-4 " style={{ 
      backgroundImage: `url(${AboutImage})` 
    }}>
    <div class="container">
      <div class="row">
        <div class="col-xxl-6 offset-xxl-7 col-xl-5 offset-xl-7 col-lg-6 offset-lg-6 col-md-6 offset-md-6">
          <div class="solution__content">
            <h2 class="sec-subtile-6">About Us</h2>
            <h3 class="sec-title-6 title-anim" style={{perspective: '400px',}}>
              <div
                style={{display: 'block', textAlign: 'start', position: 'relative', translate: 'none', rotate: 'none', scale: 'none', 'transformOrigin': '225.5px 25.4219px', transform: 'translate3d(0px, 0px, 0px)', opacity: '1',}}>
                Welcome to Eikon</div>
            
            </h3>
            <p className='text-white'> We at Eikon provide our services to different industries like Healtchare, NDT, Home Security to name a few.</p>
              <p className='text-white'>Our product IDEATOR, is an AI enabled system and software solution. It has been successfully installed and perfoming well in hospitals and at OEMs in India. Our product is mainly used by endo-spine surgeons, urologists, orthopaedics, neurologists and radiologists. IDEATOR's main USP is the best image quality at lower X-ray Dose and seamless UI/UX.
</p>

<a class="btn-started-white btn-hover mt-5"  style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1',}}>Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
)
}