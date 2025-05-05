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
    return (
        <div className='container relative  mx-auto py-6' >
            <Slider {...settings}>
                <div>
                    <div
                        style={{
                            backgroundImage:
                                "url('https://i.ibb.co.com/4ZprDPrZ/Seminars-1.jpg')",
                            width: "100%",
                            
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: "60vh", // optional, to make it fill screen
                        }}
                    >
                        <div className="text-center justify-center items-center h-full">
                            <h3 className="text-black text-3xl">"Start Learning This Week – Join the Free Workshop!"</h3>
                            <p className='text-black'>When the city lights dim and the stars begin to shine, something magical is about to <br />
                                This isn't just another evening—this is the event everyone's been waiting for.</p>
                        </div>
                        
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            backgroundImage:
                                "url('https://i.ibb.co.com/6zHdzWH/banner3.jpg')",
                            width: "100%",
                            hight:"50%",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: "60vh", // optional, to make it fill screen
                        }}
                    >
                        <div className=" text-center justify-center items-center h-full">
                            <h3 className="text-black text-3xl">"Learn from the Experts – Registration Now Open"</h3>
                            <p className='text-black'>When the city lights dim and the stars begin to shine, something magical is about to <br />
                                This isn't just another evening—this is the event everyone's been waiting for.</p>
                        </div>
                      
                    </div>
                </div>
                <div>
                    <div
                        style={{
                            backgroundImage:
                                "url('https://i.ibb.co.com/FLvPMt60/images.jpg')",
                            width: "100%",
                            hight: "50%",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            height: "60vh", // optional, to make it fill screen
                        }}
                    >
                        <div className="text-center justify-center items-center">
                            <h3 className="text-white text-3xl">"The Ultimate Networking Opportunity – Don’t Miss Out!"</h3>
                            <p className='text-white'>When the city lights dim and the stars begin to shine, something magical is about to happen. <br/>
                                This isn't just another evening—this is the event everyone's been waiting for.</p>
                        </div>
                        
                    </div>
                </div>

            </Slider>
      </div>
    );
};

export default Banner;