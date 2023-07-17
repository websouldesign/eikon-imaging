import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/logoEcon.png'
import Menu from '../../assets/images/hamburger.png'
import SideMenu from './SideMenu';

export default function Header() {

  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };


  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.pageYOffset;
      if (scroll < 150) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
        <header class={`header__area-3 ${isSticky ? 'sticky' : ''}`}>
    <div class="header__inner-3">
      <div class="header__logo-2">
        <a  class="logo-dark"><img src={Logo} width={'250px'} alt="Site Logo"/></a>
        {/* <a  class="logo-light"><img src={Logo} alt="Site Logo"/></a> */}
      </div>
      <div class="header__nav-2">
        <ul class="main-menu-3 menu-anim">
          <li class="has-megamenu"><a >home</a>
           
          </li>
          <li><a>about us</a>
           
          </li>
          <li class="has-megamenu"><a >product</a>
          <ul class="mega-menu">
              <li>
                <a>Veterinarian</a>
              
              </li> 
              <li>
                <a>human sector</a>
              
              </li>

              <li>
                <a>Dental sector</a>
              
              </li>
             
            </ul>
          </li>
          <li><a >services</a>
          
          </li>
          <li><a >Blog</a>
           
          </li>
          <li><a >Contact Us</a>
           
          </li>
        </ul>
      </div>
      <div class="header__nav-icon-3">
      
      <button id="open_offcanvas" onClick={openMenu}>
        <img src={Menu} width={'40px'} alt="Menubar Icon" />
      </button>
      {isMenuOpen && (
              <div className="overlay" >
                <SideMenu closeMenu={closeMenu} />
              </div>
            )}
      </div>
    </div>
  </header>


    </div>
  )
}
