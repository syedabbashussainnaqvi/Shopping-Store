import React from "react";
import { Slide } from "react-slideshow-image";
import classes from "./slider.module.css";
import images from "../../../Assets/slide_1.jpg";
import images2 from "../../../Assets/slide_2.jpg";
const slideImages = [images, images2, images];

const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  pauseOnHover: true,
  onChange: (oldIndex, newIndex) => {
    // console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  },
};

const Slideshow = () => {
  return (
    <div className={classes.slide_container}>
      <Slide {...properties}>
        <div className={classes.each_slide}>
          <img src={slideImages[0]} alt="banner" />
        </div>
        <div className={classes.each_slide}>
          <img src={slideImages[1]} alt="banner" />
        </div>
        <div className={classes.each_slide}>
          <img src={slideImages[0]} alt="banner" />
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
