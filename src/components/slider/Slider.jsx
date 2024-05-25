/* eslint-disable react/prop-types */
import { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css';
import ImageModal from "../modalSlider/modalSlider";

export default function SliderImages({images}) {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        swipeToSlide: true,
        arrows: false,
    };

    const openModal = (image) => {
        setSelectedImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div className="project-screenshot-container" key={image + index} onClick={() => openModal(image)}>
                        <img src={"." + image} alt="" className='project-screenshot' />
                    </div>
                ))}
            </Slider>
            <ImageModal isOpen={modalOpen} image={selectedImage} onClose={closeModal} />
        </>
    );
}
