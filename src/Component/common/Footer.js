import React from 'react'
import Logo from '../../assets/images/logoEcon.png'
import Facebook from '../../assets/images/facebook.png'
import Instagram from '../../assets/images/instagram.png'
import Twitter from '../../assets/images/twitter.png'
import Linkdin from '../../assets/images/linkedin.png'
import Location from '../../assets/images/placeholder.png'
import Call from '../../assets/images/phone-call.png'
import Msg from '../../assets/images/new-email.png'

export default function Footer() {
  return (
    <div>
        <footer class="footer__area-6">
        <div class="container g-0 line_4">
          <div class="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div class="row">
            <div class="col-xxl-12">
              <div class="footer__top-6 pt-100 pb-100">
                <div class="footer__item-6">
                  <img class="footer__logo logo-light" src={Logo} alt="Footer Logo" />
                  <img class="footer__logo logo-dark" src={Logo} width={'100%'} alt="Footer Logo"/>
                  <p>We aim to make global healthcare products and services more human-technology efficient and connected; to better address patient & care seeker needs, optimize costs & build value for all stakeholders.

</p>
                  <ul class="footer__social-6">
                    <li><a ><span><img src={Facebook} width={'30px'} /> </span></a></li>
                    <li><a ><span><img src={Instagram} width={'30px'} /></span></a></li>
                    <li><a ><span><img src={Twitter} width={'30px'} /></span></a></li>
                    <li><a ><span><img src={Linkdin} width={'30px'} /></span></a></li>
                  </ul>
                </div>

                <div class="footer__item-6">
                  <h2 class="footer__item-title">Information</h2>
                  <ul class="footer__link-6">
                    <li><a> Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Product</a></li>
                    <li><a >Blog</a></li>
                    <li><a >Career</a></li>
                    <li><a >Contact Us</a></li>
                  </ul>
                </div>
                <div class="footer__item-6">
                  <h2 class="footer__item-title">Products & Services</h2>
                  <ul class="footer__link-6">
                    <li><a>Ideator</a></li>
                    <li><a>TappDoc</a></li>
                    <li><a>AI Consultation</a></li>
                    <li><a >Product Planning</a></li>
                    <li><a >End-to-End System Design</a></li>
                    <li><a >Sales & Marketing</a></li>
                  </ul>
                </div>
                <div class="footer__item-6">
                  <h2 class="footer__item-title">Contact Us</h2>
                  <ul class="footer__info-6">
                    <li><a className='d-flex '><img src={Location} height={'23px'} className='me-1 mt-1' /> 504, 5-B, Manasarovar Complex
Sector-34, Kamothe
Navi Mumbai-410209 .  </a></li>
                    <li><a target='_blank'  class=""><img src={Call}  width={'20px'}  /> +91-992-0728-890</a></li>
                    <li><a target='_blank'><img src={Msg} width={'20px'} /> support@eikonimaging.ai</a></li>
                  </ul>
                </div>
                {/* <div class="footer__item-6">
                  <h2 class="footer__item-title">newsletter</h2>
                  <form action="#">
                    <div class="footer__newsletter-6">
                      <input type="email" name="email" required="" placeholder="Enter your email"/>
                      <button type="submit"><i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div class="footer__chekbox">
                      <input type="checkbox" id="check_box" name="checkbox"/>
                      <label>I’m okay with getting emails and having that activity and privacy policy.</label>
                    </div>
                  </form>
                </div> */}
              </div>
              <div class="footer__btm-6">
                <div class="row">
                  <div class="col-xxl-12">
                    <div class="footer__copyright-6">
                      <p className='text-center'>Copyright © 2023 Eikon All Right Reserved
                      </p>
                    </div>
                  </div>
                  <div class="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                    <div class="footer__nav">
                      {/* <ul class="footer-menu menu-anim">
                        <li><a ><div class="menu-text"><span>a</span><span>b</span><span>o</span><span>u</span><span>t</span><span style="width: 5px;"> </span><span>u</span><span>s</span></div></a></li>
                        <li><a ><div class="menu-text"><span>c</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span></div></a></li>
                        <li><a ><div class="menu-text"><span>C</span><span>a</span><span>r</span><span>e</span><span>e</span><span>r</span></div></a></li>
                        <li><a ><div class="menu-text"><span>F</span><span>A</span><span>Q</span><span>s</span></div></a></li>
                      </ul> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
