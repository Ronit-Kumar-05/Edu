import React from 'react';
import "./About.css";
import images from '../../constants/images';

const About = () => {
  return (
    <div className='abouuut'>
    <section className='about section-p' id = "about">
        <div className='container'>
            <div className='about-content grid text-center'>
                <div className = "content-left">
                    <img src = {images.log1} alt = "" />
                </div>
                <div className='content-right'>
                    <div className='section-t'>
                        <h3 className='moto'>OUR MOTTO</h3>
                    </div>
                    <p className = "text">The motto of the Order is “He who loaves knowledge loves discipline”. Keeping this motto in mind, the fathers have established educational institutions, especially all over North India. They are also engaged in humanitarian works, non-formal education, catering to the spiritual needs of the people.</p>
                </div>
            </div>
        </div>
    </section>
    </div>
  )
}

export default About