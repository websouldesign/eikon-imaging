import { useEffect, useState } from "react";
import Home from "./Component/Home/Home";
import Footer from "./Component/common/Footer";
import Header from "./Component/common/Header";
import gsap from 'gsap';
import Preloader from "./Component/common/Preloader";
import BackToTopButton from "./Component/common/BackToTopButton";

function App() {
  useEffect(() => {
    function mousemoveHandler(e) {
      try {
        const target = e.target;

        let tl = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          }
        });
        let t2 = gsap.timeline({
          defaults: {
            x: e.clientX,
            y: e.clientY,
          }
        });

        // Home Page Client Cursor
        if (target.closest(".testimonial__img")) {
          tl.to(".client_cursor", {
            opacity: 1,
            ease: "power4.out"
          }, "-=0.3");
        }
        else {
          t2.to(".client_cursor", {
            opacity: 0,
            ease: "power4.out"
          }, "-=0.3");
        }

        // Team Page Team Cursor
        if (target.closest(".team__slider")) {
          tl.to(".team_cursor", {
            opacity: 1,
            ease: "power4.out"
          }, "-=0.3");
        }
        else {
          t2.to(".team_cursor", {
            opacity: 0,
            ease: "power4.out"
          }, "-=0.3");
        }

        // Portfolio Cursor
        if (target.closest(".portfolio__item-6")) {
          tl.to(".portf_cursor_6", {
            opacity: 1,
            ease: "power4.out"
          }, "-=0.3");
        }
        else {
          t2.to(".portf_cursor_6", {
            opacity: 0,
            ease: "power4.out"
          }, "-=0.3");
        }
        // Portfolio Cursor
        if (target.closest(".portfolio__item-6")) {
          tl.to(".portf_cursor_6", {
            opacity: 1,
            ease: "power4.out"
          }, "-=0.3");
        }
        else {
          t2.to(".portf_cursor_6", {
            opacity: 0,
            ease: "power4.out"
          }, "-=0.3");
        }

        // Featured Cursor
        if (target.closest(".portfolio__slider-3")) {
          tl.to(".featured_cursor", {
            opacity: 1,
            ease: "power4.out"
          }, "-=0.3");
        }
        else {
          t2.to(".featured_cursor", {
            opacity: 0,
            ease: "power4.out"
          }, "-=0.3");
        }

        // Featured Cursor
        if (target.closest(".portfolio__area-5")) {
          tl.to(".portfolio4_cursor", {
            opacity: 1,
            ease: "power4.out"
          }, "-=0.3");
        }
        else {
          t2.to(".portfolio4_cursor", {
            opacity: 0,
            ease: "power4.out"
          }, "-=0.3");
        }

        // Main Cursor Moving
        tl.to(".cursor1", {
          ease: "power2.out"
        }).to(".cursor2", {
          ease: "power2.out"
        }, "-=0.4");
      } catch (error) {
        console.log(error);
      }
    }

    document.addEventListener("mousemove", mousemoveHandler);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousemove", mousemoveHandler);
    };
  }, []);


  // loading animation
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate an asynchronous operation, such as fetching data from an API
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Replace with your actual loading logic
  }, []);

  return (
    <div className="App">
 {isLoading ? (
        <Preloader />
      ) : (
      <>
    <div class="cursor1"></div>
    <div class="cursor2"></div>

      <Header/>
      <Home/>
      <BackToTopButton/>
      <Footer/>
      </>

      )}
    </div>
  );
}

export default App;
