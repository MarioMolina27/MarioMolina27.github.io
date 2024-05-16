/* eslint-disable react/prop-types */
import './Navbar.css';
import { useEffect } from 'react';
export default function Navbar({ isOpen, setIsOpen }) {


    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const porfolio = document.querySelector('.porfolio-content');
        if(isOpen) {
            porfolio.style.overflow = 'hidden';
        } else {
            porfolio.style.overflow = 'auto';
        }
    }, [isOpen]);


    return(
        <>
            <nav>
                <div className={`burger-menu ${isOpen ? 'open' : 'close'}`} onClick={toggleMenu}>                
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>
        
    )
}