import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import './CharacterVideo.css'
import { CSSTransition, SwitchTransition } from 'react-transition-group';

gsap.registerPlugin(ScrollTrigger)

const lowPassFilter = (newValue, prevValue, alpha) => alpha * newValue + (1 - alpha) * prevValue

const textValues = [
    { text: 'Aquí podéis ver un pequeño resultado de como acabo quedando visualmente el juego en su etapa final.', start: 0, end: 2 },
    { text: 'Lo que comenzó como un proyecto de investigación se convirtió rápidamente en una verdadera pasión cuando descubrí el poder de la programación para dar vida a ideas y conceptos', start: 2, end: 4 },
    { text: 'Gracias a los problemas que conseguimos solventar, encontré mi propia vocación', start: 4, end: 6 },
    { text: 'Desde entonces, he seguido cultivando mi habilidad y conocimiento gracias a mis estudios en desarrollo de aplicaciones multiplataforma y aplicaciones web', start: 6, end: 10 },
    { text: 'Cada día que pasa me estoy acercando más hacia mi objetivo de convertirme en un desarrollador y persona en la cual se pueda confiar y competente', start: 10, end: 15 },
    { text: 'Tengo un compromiso personal con las personas y un deseo de mejorar y aprender constantemente, gracias a estos dos me permiten seguir adelante, enfrentando cada nuevo desafío con determinación y creatividad', start: 15, end: 20},
    { text: 'Y para conseguir mejorar personalmente he desarrollado bastantes proyectos de los cuales te he dejado una pequeña selección a continuación', start: 20, end: 250},
    ]

function initializeInteractiveVideoLoaded(videoRef, videoCurrentTimeTarget, setTextValue) {
    callToActionAnimationActivator(videoRef, videoCurrentTimeTarget)
    callToActionAnimation(videoRef, videoCurrentTimeTarget, setTextValue)
}

function callToActionAnimationActivator(videoRef, videoCurrentTimeTarget) {
    ScrollTrigger.create({
        scroller: '.porfolio-content',
        trigger: '.charactervideo-section',
        start: 'top bottom',
        end: 'bottom top',
        onToggle: e => {
            videoCurrentTimeTarget.current = e.isActive ? videoRef.current.currentTime : videoCurrentTimeTarget.current
            e.isActive && interactiveVideoMovement(videoRef, videoCurrentTimeTarget)
        }
    })
}

function callToActionAnimation(videoRef, videoCurrentTimeTarget, setTextValue) {
    gsap.to(videoRef.current, {
        scrollTrigger: {
            scroller: '.porfolio-content',
            trigger: '.charactervideo-section',
            start: '25% bottom',
            end: '70% bottom',
            scrub: true,
            onUpdate: e => {
                videoCurrentTimeTarget.current = e.progress * videoRef.current.duration
                setTextValue(getTextForTime(videoCurrentTimeTarget.current))
            }
        }
    })
}

function interactiveVideoMovement(videoRef, videoCurrentTimeTarget) {
    videoRef.current.currentTime = lowPassFilter(videoCurrentTimeTarget.current, videoRef.current.currentTime, 0.8)
    videoRef.current.addEventListener('canplay', () => interactiveVideoMovement(videoRef, videoCurrentTimeTarget), { once: true })
}

function getTextForTime(currentTime) {
    for (const item of textValues) {
        if (currentTime >= item.start && currentTime < item.end) {
            return item.text;
        }
    }
    return '';
}


export default function CharacterVideo() {
    const videoRef = useRef(null)
    const bubbleTextRef = useRef(null)
    const videoCurrentTimeTarget = useRef(0)
    const [textValue, setTextValue] = useState(textValues[0].text)


    useEffect(() => {
        callToActionLoadingController()
        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill())
        }
    }, [])

    function callToActionLoadingController() {
        videoRef.current.duration ? initializeInteractiveVideoLoaded(videoRef, videoCurrentTimeTarget, setTextValue) : videoRef.current.addEventListener('loadedmetadata', () => initializeInteractiveVideoLoaded(videoRef, videoCurrentTimeTarget, setTextValue), { once: true })
    }

    return (
        <div className="charactervideo-section normal-width-section" id="charactervideo">
            <div className='video-container'>
                <video ref={videoRef} className="charactervideo" src="interactive-video.mp4" muted></video>

                <div className='video-interactive-section'>
                    <span id="bubble">

                    <SwitchTransition>
                        <CSSTransition
                            key={textValue}
                            nodeRef={bubbleTextRef}
                            classNames="text-transition"
                            unmountOnExit
                            addEndListener={(done) => {
                                bubbleTextRef.current.addEventListener("transitionend", done, false);
                            }}
                        >
                            <p ref={bubbleTextRef} className='text mb-0'>{textValue}</p>
                        </CSSTransition>
                    </SwitchTransition>

                    </span>
                </div>
            </div>
        </div>
    )
}
