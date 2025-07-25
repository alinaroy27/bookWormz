import React from 'react'
import list from "../../public/list.json"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "../components/Cards";

function Freebook() {
    const filterData=list.filter((data)=>data.category==="Free");

    var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
    
  return (
    <><div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-3xl text-pink-800 pb-2">Get your hands on free books now!</h1>
          <p className="text-xl">Get your hands on amazing books for free! From fiction and self-help to history and more, explore a wide variety of genres without spending a penny. Start your reading journey today — no fees, just pure knowledge and entertainment!</p>
        </div>

        <div className="mt-8">
  <Slider {...settings}>
    {filterData.map((item) => (
      <Cards item={item} key={item.id} />
    ))}
  </Slider>
</div>
      </div>
    </>
    
  );
}

export default Freebook