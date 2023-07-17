import React, { useEffect, useState } from 'react'

export default function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Add a scroll event listener to check if the user has scrolled enough to show the button
      window.addEventListener('scroll', handleScroll);
      return () => {
        // Clean up the scroll event listener when the component is unmounted
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const isVisible = scrollTop > 300; // Change this value to determine when to show the button
      setIsVisible(isVisible);
    };
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    };
  return (


    
    <div>
            <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <i className='fa fa-long-arrow-up' ></i>
    </button>
    </div>
  )
}
