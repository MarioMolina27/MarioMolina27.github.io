import './CallToScroll.css';
import { useEffect } from 'react';
export default function CallToScroll() {

    const animation = () => {
        const highlightElement = document.querySelector('.highlight');
        highlightElement.classList.toggle('scaled');
        const handleTransitionEnd = () => {
            const highlightElement = document.querySelector('.highlight');
            highlightElement.removeEventListener('transitionend', handleTransitionEnd);
            animation(highlightElement);
        };

        highlightElement.addEventListener('transitionend', handleTransitionEnd);
    }

    
    // useEffect que tiene un setTimeout para esperar a ejecutar la animación por primera vez y asi evitar el bug de la animación por el strict mode
    useEffect(() => {
        let l = setTimeout(() => {
            animation();
        }, 100);

        return () => {
            clearTimeout(l);
        }
    }, []);

    
    return (
        <div className='callToScroll-container'>
            <a className="callToScroll" href='#textanimation' style={{ opacity: 1, visibility: 'visible' }}>
                <div className="line">
                    <div className="background" style={{ transform: 'translate(0px, 0px)' }}></div>
                    <div className="highlight"></div>
                </div>
                <p className="TextAnimator content mb-0" style={{ opacity: 1, visibility: 'inherit' }}>
                    <span className="mask">
                        <span className="content" style={{ transform: 'translate(0px, 0%)' }}>EMPIEZA</span>
                    </span>
                    <span className="mask">
                        <span className="content" style={{ transform: 'translate(0px, 0%)' }}>A</span>
                    </span>
                    <span className="mask">
                        <span className="content" style={{ transform: 'translate(0px, 0%)' }}>DESCUBRIRME</span>
                    </span>
                </p>
            </a>
        </div>
    )
}