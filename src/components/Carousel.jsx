import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Carousel = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const incr = () => {
    if (currIndex >= images.length - 1) {
      setCurrIndex(0);
    } else {
      setCurrIndex(currIndex + 1);
    }
  };

  const decr = () => {
    if (currIndex === 0) {
      setCurrIndex(images.length - 1);
    } else {
      setCurrIndex(currIndex - 1);
    }
  };

  return (
    <>
      <div className="carouselContainer flex">
        <div className="leftarrow arrowdiv flex" onClick={decr}>
          <ArrowBackIosIcon className="chevron" />
        </div>
        <h2 className="title">{images[currIndex].title}</h2>
        <img src={images[currIndex].img} alt="" />
        <h4 className="text">{images[currIndex].subtitle}</h4>
        <div className="rightarrow arrowdiv flex" onClick={incr}>
          <ArrowForwardIosIcon className="chevron" />
        </div>
      </div>
    </>
  );
};

export default Carousel;