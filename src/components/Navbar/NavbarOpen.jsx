/* eslint-disable react/prop-types */
import './NavbarOpen.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function NavbarOpen({ isOpen, setIsOpen }) {

    const [showList, setShowList] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();


    useEffect(() => {
        if (isOpen) {
            const timeout = setTimeout(() => {
                setShowList(true);
            }, 800);
            return () => clearTimeout(timeout);
        } else {
            setShowList(false);
        }
    }, [isOpen]);

    const handleClick = (id) => {
        setIsOpen(false);
        setTimeout(() => {
            if (location.pathname === '/') {
                scrollToSection(id);
            } else {
                navigate(`/`);
                setTimeout(() => {
                    scrollToSection(id,'instant');
                }, 500);
            }
        }, 500);
    };

    function scrollToSection(id, behavior = 'smooth') {
        const porfolio = document.querySelector('.porfolio-content');
        const element = document.getElementById(id);
    
        if (porfolio && element) {
            porfolio.scrollTo({
                top: element.offsetTop - porfolio.offsetTop,
                behavior: behavior
            });
        }
    }

    return (
        <div className={`nav-open ${isOpen === null ? 'notShown' : (isOpen ? 'slideInFromLeft' : 'slideOutToLeft')} d-flex justify-content-center`}>
            <ul className='d-flex justify-content-center flex-column p-0'>
                {showList && (
                    <>
                        <li style={{ animationDelay: '0.1s' }} onClick={() => handleClick('home')} className='item-nav-open'><a>Home</a></li>
                        <li style={{ animationDelay: '0.2s' }} onClick={() => handleClick('aboutme')} className='item-nav-open'><a>Sobre mi</a></li>
                        <li style={{ animationDelay: '0.3s' }} onClick={() => handleClick('projects')} className='item-nav-open'><a>Proyectos</a></li>
                        <li style={{ animationDelay: '0.4s' }} onClick={() => handleClick('experience')} className='item-nav-open'><a>Experiencia</a></li>
                        <li style={{ animationDelay: '0.5s' }} onClick={() => handleClick('skills')} className='item-nav-open'><a>Habilidades</a></li>
                    </>
                )}
            </ul>
        </div>
    );
}
