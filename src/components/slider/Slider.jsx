/* eslint-disable react/prop-types */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';

export default function SliderImages({images}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        arrows: false,
      };
    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div className="project-screenshot-container" key={image+index}>
                    <img src={"."+image} alt="" className='project-screenshot' />
                </div>
            ))}
        </Slider>
    )
}