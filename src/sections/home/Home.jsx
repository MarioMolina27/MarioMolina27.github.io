/* eslint-disable react/prop-types */
import './Home.css';
import { useRef } from 'react';

import CallToScroll from '../../components/CallToScroll/CallToScroll';

export default function Home({ setLoading }) {
    const homeRef = useRef(null);


    return (
        <div className='home-section d-flex flex-column align-items-start full-width-section' id='home' ref={homeRef}>
            <video id="background-video" autoPlay loop muted poster="background-video-poster.jpg" onCanPlay={()=>{setLoading(false)}}>
                <source src="background-video2.mp4" type="video/mp4" />
            </video>
            <div className='home-content'>
                <div className='info-home'>
                <h1 className="text-home ms-5">
                    Hola,
                    <br />
                    soy <span className="my-name-home">Mario Molina</span>
                </h1>
                <h2 className='text-category gradient-text ms-5 mt-4'>&lt;FullStack Developer /&gt;</h2>
                </div>
            </div>
            <CallToScroll />
        </div>
    );
}