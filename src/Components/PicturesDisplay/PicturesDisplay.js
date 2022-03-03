import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

const PicturesDisplay = ({ slides, playerNames }) => {

    const [current, setCurrent] = useState(0);
    const [currentName, setCurrentName] = useState(0);
    const length = slides.length
    const nameLength = playerNames.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
        setCurrentName(currentName === nameLength - 1 ? 0 : currentName + 1)
    }

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
        setCurrentName(currentName === 0 ? nameLength - 1 : current - 1)
    }

    console.log(current);


    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    if (!Array.isArray(playerNames) || playerNames.nameLength <= 0) {
        return null;
    }

    

    return (
        <div className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {SliderData.map((slide, index) => {
                return (
                    <div className= {index === current ? 'slide active' : 'slide'} key = {index}>
                        {index === current && (<img src={slide.image} alt="first pic" className='image' />)}
                        
                    </div>
                )

            })}
            {SliderData.map((playerNames, index) => {
                return (
                    <div className= {index === current ? 'playerName-active' : 'playerName'} key = {index}>
                        {index === current && playerNames.name}
                        
                    </div>
                )

            })}
        </div>

    );
};

export default PicturesDisplay