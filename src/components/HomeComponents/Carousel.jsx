import React from "react";
import HeroSlider, {  Slide, MenuNav } from "hero-slider";
import slideOne from "../../assets/images/slide1.jpg";
import slideTwo from "../../assets/images/slide2.jpg";
function Carousel(props) {
  return (
    <HeroSlider
      slidingAnimation="right_to_left"
      height={"100vh"}
       autoplay='true'
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.log("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.log(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    
    >
      
      <Slide
        background={{
          backgroundImageSrc: slideOne,
          backgroundAttachment: "fixed",
          backgroundImageSizes:"cover",
         backgroundImageClassName:'h-auto'
        }}
        />
      <Slide
        background={{
          backgroundImageSrc: slideTwo,
          backgroundAttachment: "fixed",
          backgroundImageSizes:"cover",
          backgroundImageClassName:'h-auto'
        }}
      />

    </HeroSlider>
  );
}

export default Carousel;
