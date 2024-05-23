import Home from './home/Home.jsx'
import TextAnimation from './textanimation/TextAnimation.jsx'
import AboutMe from './aboutme/AboutMe.jsx'
import Projects from './projects/Projects.jsx'
import CharacterVideo from './charactervideo/CharacterVideo.jsx'
import EyesAnimation from './eyesanimation/EyesAnimation.jsx'
import Experience from './experience/Experience.jsx'
import Skills from './skills/Skills.jsx'
import Footer from './footer/Footer.jsx'
import Loader from '../components/loader/loader.jsx'

import { useState } from 'react'

export default function MainContent() {
    const [loading, setLoading] = useState(true);

    return(
        <>
            <Home setLoading={setLoading} />
            <Loader loading={loading} />
            <div className='info-sections' id="info-section">
                <TextAnimation />
                <AboutMe />
                <CharacterVideo />
                <Projects />
                <EyesAnimation />
                <Experience />
                <Skills />
                <Footer />
            </div>
        </>
    )
}