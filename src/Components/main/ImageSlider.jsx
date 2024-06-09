import React from 'react';
import Slider from 'react-slick';
import { Box, Image, ChakraProvider } from '@chakra-ui/react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
    const images = [
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/e44ac643d6f84ef7.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f241e768f8367561.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f999a60b31df4225.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f888f8f443a8a927.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/17a2c4ed00866b1a.jpg?q=20',
        'https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/cc633426b89ad841.png?q=20'
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true
    };

    const customArrowStyle = {
        position: 'absolute',
        zIndex: 2,
        top: '50%',
        transform: 'translateY(-50%)',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer'
    };

    return (
        <ChakraProvider>
            <style>{`
                .slick-next {
                    right: 20px !important;
                }
                
                .slick-prev {
                    left: 20px !important;
                }
                
                .slick-dots {
                    position: absolute;
                    bottom: 20px; /* Adjust this value as needed */
                    left: 50%;
                    transform: translateX(-50%);
                    display: flex !important;
                    justify-content: center;
                    width: 100%;
                }
                
                .slick-dots li {
                    margin: 0 5px;
                }
                
                .slick-dots li button:before {
                    font-size: 12px;
                    color: white;
                    opacity: 0.75;
                }
                
                .slick-dots li.slick-active button:before {
                    color: white;
                    opacity: 1;
                }
            `}</style>
            <Box w={"95%"} textAlign="center" py={3}>
                <Box className="image-slider" position="relative">
                    <Slider
                        {...settings}
                        nextArrow={<div style={{ ...customArrowStyle, right: '20px' }}>→</div>}
                        prevArrow={<div style={{ ...customArrowStyle, left: '20px' }}>←</div>}
                    >
                        {images.map((image, index) => (
                            <Box key={index}>
                                <Image src={image} alt={`slide-${index}`} width="86%" marginLeft="10%" height="auto" />
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>
        </ChakraProvider>
    );
};

export default ImageSlider;
