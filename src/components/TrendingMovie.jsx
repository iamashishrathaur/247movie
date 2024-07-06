import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import movieBanner from '../assets/movie-banner-1-sm.webp';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const PreviousArrow = ({ onClick, currentSlide }) => {
  return (
    <button
      className={`custom-prev-arrow ${currentSlide === 0 ? 'hidden' : ''}`}
      onClick={onClick}
    >
      <FaAngleLeft />
    </button>
  );
}

const NextArrow = ({ onClick, slideCount, currentSlide, slidesToShow }) => {
  return (
    <button
      className={`custom-next-arrow ${currentSlide >= slideCount - slidesToShow ? 'hidden' : ''}`}
      onClick={onClick}
    >
      <FaAngleRight />
      {console.log(currentSlide)}
    </button>
  );
}

const slidesToShow = 6;

function UnevenSetsInfinite() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:5000,
    slidesToShow: slidesToShow,
    nextArrow: <NextArrow slideCount={movies.length} currentSlide={currentSlide} slidesToShow={slidesToShow} />,
    prevArrow: <PreviousArrow currentSlide={currentSlide} />,
    afterChange: (current) => setCurrentSlide(current),
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          nextArrow: <NextArrow slideCount={movies.length} currentSlide={currentSlide} slidesToShow={5} />,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          nextArrow: <NextArrow slideCount={movies.length} currentSlide={currentSlide} slidesToShow={3} />,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          nextArrow: <NextArrow slideCount={movies.length} currentSlide={currentSlide} slidesToShow={2} />,
        }
      },
    ]
  };

  return (
    <div className="slider_main_container">
      <div className="text-white mb-4">
        <div className="top_ten_title mb-6 px-0 sm:px-1 text-xl">
          <h5 className="main_title font-semibold">Top 10 Trending Movies </h5>
        </div>
        <Slider {...settings}>
          {movies.map((data, index) => (
            <div key={index} className="block-poster">
              <div className="movie-poster">
                <a  href="#" className="poster-overlay rounded-xl">
                  <img
                    src={data.image}
                    className="poster_img rounded-s px-2 2xl:px-1 xl:px-0.5 sm:px-0 w-full max-w-xs md:max-w-md lg:max-w-lg"
                    alt="Movie Poster"
                  />
                </a>
                <div className="top_ten_numbers">{index + 1}</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const movies = [
  { title: "John Wick", image: 'https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-07.webp', link: "/" },
  { title: "John Wick", image: 'https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-06.webp', link: "/" },
  { title: "John Wick", image: movieBanner, link: "/" },
  { title: "John Wick", image: 'https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-05.webp', link: "/" },
  { title: "John Wick", image: 'https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-04.webp', link: "/" },
  { title: "John Wick", image: 'https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-01.webp', link: "/" },
  { title: "John Wick", image: 'https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/home1-sm.webp', link: "/" },
  { title: "John Wick", image: 'https://wordpress.iqonic.design/product/wp/streamit/wp-content/uploads/2023/10/r-02.webp', link: "/" },
  { title: "John Wick", image: movieBanner, link: "/" },
  { title: "John Wick", image: movieBanner, link: "/" },
];

export default UnevenSetsInfinite;
