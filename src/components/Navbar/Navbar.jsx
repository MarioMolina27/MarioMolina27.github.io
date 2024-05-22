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
        const logo = document.querySelector('.logo');
        const accecibility = document.querySelector('.accessibility-info-container');
        if(isOpen) {
            porfolio.style.overflow = 'hidden';
            nav.classList.remove('nav-close-mobile-not-home');
            logo.style.display = 'none';
            accecibility.style.display = 'none';

        } else {
            porfolio.style.overflow = 'auto';
            accecibility.style.display = 'block';
            if(infoSection !== null) {
                const infoRect = infoSection.getBoundingClientRect();
                if (infoRect.top > 0) {
                    nav.classList.remove('nav-close-mobile-not-home');
                    logo.style.display = 'none';
                } else {
                    setTimeout(() => {
                        // 1 SEGUNDO QUE TARDA LA ANIMACIÓN DE CIERRE DE LA NAV
                        nav.classList.add('nav-close-mobile-not-home');
                        logo.style.display = 'block';

                    }, 800);
                }
            }
        }

    }, [isOpen]);

    useEffect(() => {
        const nav = document.querySelector('nav');
        const infoSection = document.getElementById('info-section');
        const porfolio = document.querySelector('.porfolio-content');

        handleScroll(infoSection,nav);
       
        porfolio.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            porfolio.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        const nav = document.querySelector('nav');
        const infoSection = document.getElementById('info-section');
        const logo = document.querySelector('.logo');

        if (!infoSection) return;

        const infoRect = infoSection.getBoundingClientRect();

        if (infoRect.top > 50) {
            nav.classList.remove('nav-close-mobile-not-home');
            logo.style.display = 'none';
        } else {
            nav.classList.add('nav-close-mobile-not-home');
            logo.style.display = 'block';
        }

    };


    return(
        <>  <img src="logo.png" alt="logo" className="logo" />
            <nav className={`navbar-${isOpen ? 'open' : 'close'}`}>
                <div className={`burger-menu ${isOpen ? 'open' : 'close'}`} onClick={toggleMenu}>                
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
        
    )
}