import React from 'react';
import Slider from "react-slick";

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        arrows: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        fade: true,
    };

    const slides = [
        {
            image: "https://i.ibb.co.com/ymQgnbcX/How-to-Start-Event-Management-Business-in-Bangladesh.jpg",
        },
        {
            image: "https://i.ibb.co.com/4ZprDPrZ/Seminars-1.jpg",
            heading: "Start Learning This Week – Join the Free Workshop!",
            subText: "When the city lights dim and the stars begin to shine, something magical is about to begin. This isn't just another evening—this is the event everyone's been waiting for."
        },
        {
            image: "https://i.ibb.co.com/6zHdzWH/banner3.jpg",
            heading: "Learn from the Experts – Registration Now Open",
            subText: "When the city lights dim and the stars begin to shine, something magical is about to begin. This isn't just another evening—this is the event everyone's been waiting for."
        }
    ];

    return (
        <div className="relative w-11/12 mx-auto py-6">
            <Slider {...settings}>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <div
                            className="w-full h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center"
                            style={{ backgroundImage: `url('${slide.image}')` }}
                        >
                            {(slide.heading || slide.subText) && (
                                <div className="p-4 rounded-lg text-center max-w-xl mx-auto">
                                    <h3 className="text-xl md:text-3xl font-bold text-black">{slide.heading}</h3>
                                    <p className="text-sm md:text-base text-black mt-2">{slide.subText}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;

