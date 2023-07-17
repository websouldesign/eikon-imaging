import React, { useState } from 'react'
import star from '../../assets/images/6_2.png'
import Bstar from '../../assets/images/15.png'
import Location from '../../assets/images/placeholder.png'
import Call from '../../assets/images/phone-call.png'
import Msg from '../../assets/images/new-email.png'
import Side_logo from '../../assets/images/Side_logo.png'



export default function SideMenu({ closeMenu }) {


    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleCollapse = () => {
      setIsExpanded(!isExpanded);
    };

return (
<div>
  <div class="offcanvas__area" style={{opacity: '1' , visibility: 'visible' ,}}>
    <div class="offcanvas__body">
      <div class="offcanvas__left">
        <div class="offcanvas__logo">
          <a ><img src={Side_logo} width={'200px'} alt="Offcanvas Logo" /></a>
        </div>
        <div class="offcanvas__social">
          <h3 class="social-title">Follow Us</h3>
          <ul>
          
            <li><a className='text-white'>Facebook</a></li>
            <li><a  className='text-white'>Twitter</a></li>
            <li><a  className='text-white'>Instagram</a></li>
            <li><a  className='text-white'>Linkdin</a></li>
          </ul>
        </div>
     
      </div>
      <div class="offcanvas__mid">
        <div class="offcanvas__menu-wrapper mean-container">
          <div class="mean-bar"><a  class="meanmenu-reveal" style={{right: '0px' , left: 'auto' ,
              display: 'inline' ,}}><span><span><span></span></span></span></a>
            <nav class="mean-nav">
              <ul class="menu-anim" style={{display: 'none' }}>
                <li><a>
                    <div class="menu-text"><span>h</span><span>o</span><span>m</span><span>e</span></div>
                  </a>

                </li>
                <li>
                  <a>
                    <div class="menu-text">
                      <span>a</span><span>b</span><span>o</span><span>u</span><span>t</span>
                    </div>
                  </a>
              
                </li>
                <li>
      <a onClick={toggleCollapse}>
        <div className="menu-text">
          <span>p</span>
          <span>r</span>
          <span>o</span>
          <span>d</span>
          <span>u</span>
          <span>c</span>
          <span>t</span>
        </div>
      </a>
      <ul style={{ display: isExpanded ? 'block' : 'none' }}>
        <li>
          <a>Veterinarian</a>
        </li>
        <li>
          <a>Human Sector</a>
        </li>
        <li>
          <a>Dental Sector</a>
        </li>
      </ul>
      <a className="mean-expand" style={{ fontSize: '36px' }} onClick={toggleCollapse}>
        {isExpanded ? '-' : '+'}
      </a>
    </li>
                <li>
                  <a>
                    <div class="menu-text">
                      <span>S</span><span>e</span><span>r</span><span>v</span><span>i</span><span>c</span><span>e</span>
                    </div>
                  </a>

                </li>
               
                <li><a>
                    <div class="menu-text"><span>b</span><span>l</span><span>o</span><span>g</span></div>
                  </a>
                
                </li>
                <li class="mean-last"><a >
                    <div class="menu-text">
                      <span>c</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span>
                    </div>
                  </a></li>

                  <li><a>
                    <div class="menu-text"><span>c</span><span>a</span><span>r</span><span>e</span><span>e</span><span>r</span></div>
                  </a>
                
                </li>
              </ul>
            </nav>
          </div>
          <div class="mean-push"></div>
          <nav class="offcanvas__menu" style={{display: 'none' }}>
           
          </nav>
        </div>
      </div>
      <div class="offcanvas__right">
        <div class="offcanvas__search">
        
        </div>
        <div class="offcanvas__contact">
          <h3>Get in touch</h3>
          <ul>

          <li><a target='_blank'  class=""><img src={Call}  width={'20px'}  /> +91-992-0728-890</a></li>
               <br/>     <li><a target='_blank'><img src={Msg} width={'20px'} /> support@eikonimaging.ai</a></li>
               <br/>    <li><a><img src={Location} width={'20px'} /> 504, 5-B, Manasarovar Complex
Sector-34, Kamothe
Navi Mumbai-410209  </a></li>
                    
          </ul>
        </div>
        <img src={star} alt="shape" class="shape-1" />
        <img src={Bstar} class="shape-2" />
      </div>
      <div class="offcanvas__close">
        <button type="button" id="close_offcanvas"  onClick={closeMenu}><i class="fa fa-times"></i></button>
      </div>
    </div>
  </div>
</div>
)
}