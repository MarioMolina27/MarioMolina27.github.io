/* eslint-disable react/prop-types */
import './TextAnimation.css';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
// import { useEffect } from 'react'


export default function TextAnimation() {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        const lineMasks = document.querySelectorAll('.line-mask')
        lineMasks.forEach(element => {
            gsap.to(`#${element.id}`, {
                scrollTrigger: {
                    scroller: '.porfolio-content',
                    trigger: `#${element.id}`,
                    start: 'top 65%',
                    end: 'bottom 35%',
                    scrub: 0.5
                },
                width: 0,
            });
        });
    })

    // useEffect(() => {
    //     let lastScrollTop = 0;
    //     let scrollDirection = '';
    //     let scrolling = false;
    //     let porfolio = document.querySelector('.porfolio-content');
    //     porfolio.addEventListener("scroll", function(){
    //         var st = porfolio.pageYOffset || porfolio.scrollTop;
    //         if (st > lastScrollTop) {
    //             scrollDirection = 'down';
    //         } else if (st < lastScrollTop) {
    //             scrollDirection = 'up';
    //         }
    //         lastScrollTop = st <= 0 ? 0 : st;
    //         const textanimation = document.getElementById('textanimation');
    //         const textanimationRect = textanimation.getBoundingClientRect();
    //         const textanimationTop = textanimationRect.top;
           
    //         if(textanimationTop >= 0) {
    //             if(scrollDirection === 'down' && !scrolling) {
    //                 document.getElementById('textanimation').scrollIntoView({ behavior: 'smooth' });
    //                 porfolio.addEventListener('endScroll', function(){
    //                     console.log('endScroll');
    //                     scrolling = false;
    //                 });
                   
    //             }
    //             else if(scrollDirection === 'up' && !scrolling) {
    //                 document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    //                 porfolio.addEventListener('endScroll', function(){
    //                     console.log('endScroll');
    //                     scrolling = false;
    //                 });
    //             }
    //         }
    //     });
    //     return () => {
    //         porfolio.removeEventListener("scroll", function(){});
    //     }
    // }, [])
    return (
        <div className='textanimation normal-width-section' id="textanimation" style={{position:'relative'}}>
            <div className="explanatory-text-container flex-center">
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">HOLA A TODOS</div>
                    <div id="line-mask-0" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">ME LLAMO MARIO MOLINA</div>
                    <div id="line-mask-1" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">SOY UN PROGRAMADOR</div>
                    <div id="line-mask-2" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">ENTUSIASTA POR LA </div>
                    <div id="line-mask-3" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">CREACIÓN DE SOFTWARE</div>
                    <div id="line-mask-4" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">COMPROMETIDO CON</div>
                    <div id="line-mask-5" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">LA CALIDAD, LA</div>
                    <div id="line-mask-6" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">PUNTUALIDAD Y LA</div>
                    <div id="line-mask-7" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">CREATIVIDAD.</div>
                    <div id="line-mask-8" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">TODO ESTE VIAJE EMPEZÓ</div>
                    <div id="line-mask-9" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">EN 2020 EN MIS AÑOS</div>
                    <div id="line-mask-10" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">DE BACHILLERATO.</div>
                    <div id="line-mask-11" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">CUANDO DECIDÍ CREAR</div>
                    <div id="line-mask-12" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">JUNTO A UN GRAN AMIGO</div>
                    <div id="line-mask-13" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">UN VIDEOJUEGO DESDE 0</div>
                    <div id="line-mask-14" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">COMO TRABAJO FINAL</div>
                    <div id="line-mask-15" className="line-mask"></div>
                </div>
                <div className="explanatory-line flex-center">
                    <div className="explanatory-text">DE BACHILLERATO</div>
                    <div id="line-mask-16" className="line-mask"></div>
                </div>
            </div>
        </div>
    );
}