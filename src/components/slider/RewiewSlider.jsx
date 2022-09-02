import axios from "../../web/axios";
import React, { useState } from "react";
import Slider from "react-slick";
import Rewiew from "../review/Rewiew";
import { ProgressBar } from "react-loader-spinner";

import "./styles/style.css";

const RewiewSlider = () => {
  const [isCommentsLoad, setLoad] = useState(false);
  const [rewiews, setRewiew] = useState();

  React.useEffect(() => {
    axios
      .get("/api/comments")
      .then((res) => {
        setRewiew(res.data);
        setLoad(true);
      })
      .catch((err) => console.warn(err));
  }, []);
  let settings = {
    dots: true,
    infinite: true,
    speed: 1200,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
          centerMode: true,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };;

  if (isCommentsLoad) {
    if (rewiews.length < 3) {
      settings.slidesToShow = 1;
      settings.responsive[0].slidesToShow = 1;
    }
  }
  if (!isCommentsLoad) {
    return (
      <ProgressBar
        height="80"
        width="100%"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
      />
    );
  }
  return (
    <Slider {...settings}>
      {rewiews.map((item) => (
        <Rewiew className="slider__rewiew-item">{item}</Rewiew>
      ))}
    </Slider>
  );
};

export default RewiewSlider;
