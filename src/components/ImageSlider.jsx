import React, { useState, useEffect } from 'react';
import slider1 from "../../thumbnail/slider1.png"
import slider2 from "../../thumbnail/slider2.png"
import slider3 from "../../thumbnail/slider3.png"
import slider4 from "../../thumbnail/slider4.png"
import slider5 from "../../thumbnail/slider5.png"

const ImageSlider = () => {
    const images = [
        {
            src: {slider1},
            alt: 'Image 1',
        },
        {
            src: {slider2},
            alt: 'Image 2',
        },
        {
            src: {slider3},
            alt: 'Image 3',
        },
        {
            src: {slider4},
            alt: 'Image 4',
        },
        {
            src: {slider5},
            alt: 'Image 5',

        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);

        return () => clearInterval(interval);
    }, [images.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
<div className='bg-purple-50'>
    <div className="relative w-full h-[70vh] overflow-hidden"> {/* Adjusted height to fit various devices */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center p-5 w-full max-w-md">
            <h2 className="text-gray-700 text-3xl md:text-4xl font-bold">50+ Beautiful Rooms <br /> Inspiration</h2>
            <p className="text-lg md:text-2xl text-gray-500">Our designer already made a lot of beautiful <br /> prototypes of rooms that inspire you</p>
            <button className="w-40 h-10 mt-4 text-white bg-yellow-600 hover:bg-yellow-500 transition duration-300">Explore More</button>
        </div>
        <img
            className="w-full h-full object-cover transition-opacity duration-500"
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
        />
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-yellow-700 rounded-full p-2 hover:bg-purple-100">
            &#10094; 
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-yellow-700 rounded-full p-2 hover:bg-purple-100">
            &#10095; 
        </button>
    </div>
</div>

    );
};

export default ImageSlider;
