/* eslint-disable react/prop-types */
import './NavbarOpen.css';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ColorSelector from '../colorSelector/colorSelector';

export default function NavbarOpen({ isOpen, setIsOpen }) {
    const [showList, setShowList] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const items = [
        { id: 'home', label: 'Home' },
        { id: 'aboutme', label: 'Sobre mi' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'experience', label: 'Experiencia' },
        { id: 'skills', label: 'Habilidades' }
    ];

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

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (isOpen) {
                if (event.key === 'Tab') {
                    event.preventDefault();
                    setSelectedItem((prev) => (prev + 1) % items.length);
                }
                if (event.key === 'Enter') {
                    handleClick(items[selectedItem].id);
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, selectedItem, items]);

    const handleClick = (id) => {
        setIsOpen(false);
        setTimeout(() => {
            if (location.pathname === '/') {
                scrollToSection(id);
            } else {
                navigate(`/`);
                setTimeout(() => {
                    scrollToSection(id, 'instant');
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
                {showList && items.map((item, index) => (
                    <li
                        key={item.id}
                        style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                        onClick={() => handleClick(item.id)}
                        className={`item-nav-open ${selectedItem === index ? 'active' : ''}`}
                    >
                        <a>{item.label}</a>
                    </li>
                ))}
            </ul>
            <ColorSelector />
        </div>
    );
}
