/* eslint-disable react/prop-types */
import './Navbar.css';
import { useEffect } from 'react';
export default function Navbar({ isOpen, setIsOpen }) {


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const porfolio = document.querySelector('.porfolio-content');
        const infoSection = document.getElementById('info-section');
        const nav = document.querySelector('nav');
        if(isOpen) {
            porfolio.style.overflow = 'hidden';
            nav.classList.remove('nav-close-mobile-not-home');

        } else {
            porfolio.style.overflow = 'auto';
            if(infoSection !== null) {
                const infoRect = infoSection.getBoundingClientRect();
                if (infoRect.top > 0) {
                    nav.classList.remove('nav-close-mobile-not-home');
                } else {
                    setTimeout(() => {
                        // 1 SEGUNDO QUE TARDA LA ANIMACIÓN DE CIERRE DE LA NAV
                        nav.classList.add('nav-close-mobile-not-home');
                    }, 800);
                }
            }
        }

    }, [isOpen]);

    useEffect(() => {
        const nav = document.querySelector('nav');
        const infoSection = document.getElementById('info-section');
        const porfolio = document.querySelector('.porfolio-content');

        const handleScroll = () => {
            
            if (!infoSection) return;

            const infoRect = infoSection.getBoundingClientRect();

            if (infoRect.top > 0) {
                nav.classList.remove('nav-close-mobile-not-home');
            } else {
                nav.classList.add('nav-close-mobile-not-home');
            }

        };

        porfolio.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            porfolio.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return(
        <>
            <nav className={`navbar-${isOpen ? 'open' : 'close'}`}>
                <div className={`burger-menu ${isOpen ? 'open' : 'close'}`} onClick={toggleMenu}>                
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
        
    )
}