import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="w-16 h-6 bg-purple-300 rounded-md text-white flex justify-center items-center" data-value="1">1</div>,
    <div className="w-16 h-6 bg-purple-300 rounded-md text-white flex justify-center items-center" data-value="2">2</div>,
    <div className="w-16 h-6 bg-purple-300 rounded-md text-white flex justify-center items-center" data-value="3">3</div>,
    <div className="w-16 h-6 bg-purple-300 rounded-md text-white flex justify-center items-center" data-value="4">4</div>,
    <div className="w-16 h-6 bg-purple-300 rounded-md text-white flex justify-center items-center" data-value="5">5</div>,
];

const NavigationCarousel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="responsive "
    />
);

export default NavigationCarousel;