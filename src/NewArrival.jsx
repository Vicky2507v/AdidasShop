import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const NewArrival = () => {
  let sliderRef;

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const arrivals = [
    "src/assets/Images/new1.png",
    "src/assets/Images/new2.png",
    "src/assets/Images/new3.png",
    "src/assets/Images/new4.png",
    "src/assets/Images/new5.png",
    "src/assets/Images/new6.png"
  ];

  return (
    <section id="NewArrival" className="new-arrival-section">
      <div className="section-header">
        <h2> New Arrivals</h2>
        <div className="slider-buttons">
          <button onClick={() => sliderRef.slickPrev()}>
            <FaArrowLeft />
          </button>
          <button onClick={() => sliderRef.slickNext()}>
            <FaArrowRight />
          </button>
        </div>
      </div>

      <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
        {arrivals.map((src, i) => (
          <div key={i} className="slide-item">
            <img src={src} alt={`New Arrival ${i}`} />
          </div>
        ))}
      </Slider>
    </section>
  );
};
