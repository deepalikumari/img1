import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currIndex: 0
    };
  }

  incr = () => {
    const { currIndex } = this.state;
    if (currIndex >= images.length - 1) {
      this.setState({ currIndex: 0 });
    } else {
      this.setState({ currIndex: currIndex + 1 });
    }
  };

  decr = () => {
    const { currIndex } = this.state;
    if (currIndex === 0) {
      this.setState({ currIndex: images.length - 1 });
    } else {
      this.setState({ currIndex: currIndex - 1 });
    }
  };

  render() {
    const { currIndex } = this.state;

    return (
      <div className="carouselContainer flex">
        <div className="leftarrow arrowdiv flex" onClick={this.decr}>
          <ArrowBackIosIcon className="chevron" />
        </div>
        <h2 className="title">{images[currIndex].title}</h2>
        <img src={images[currIndex].img} alt="" />
        <h4 className="text">{images[currIndex].subtitle}</h4>
        <div className="rightarrow arrowdiv flex" onClick={this.incr}>
          <ArrowForwardIosIcon className="chevron" />
        </div>
      </div>
    );
  }
}

export default Carousel;
