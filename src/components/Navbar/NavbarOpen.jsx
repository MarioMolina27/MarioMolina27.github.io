/* eslint-disable react/prop-types */
import './NavbarOpen.css';
import { useState, useEffect, useRef, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ColorSelector from '../colorSelector/colorSelector';

export default function NavbarOpen({ isOpen, setIsOpen }) {
    const [showList, setShowList] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    const location = useLocation();
    const navigate = useNavigate();

    const observerRef = useRef(null);

    const items = useMemo(() => [
        { id: 'home', label: 'Home' },
        { id: 'aboutme', label: 'Sobre mi' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'experience', label: 'Experiencia' },
        { id: 'skills', label: 'Habilidades' }
    ], []);

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

    // Intersection Observer para cambiar el item seleccionado en el navbar
    useEffect(() => {
        const setupObserver = () => {
            const porfolioContent = document.querySelector('.porfolio-content');
            const sections = items.map(item => document.getElementById(item.id));
            
            if (sections[0] === null) {
                setTimeout(setupObserver, 100);
                return;
            }

            const options = {
                root: porfolioContent,
                rootMargin: '0px',
                threshold: 0.5
            };

            const callback = (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = items.findIndex(item => item.id === entry.target.id);
                        setSelectedItem(index);
                    }
                });
            };

            observerRef.current = new IntersectionObserver(callback, options);
            sections.forEach(section => {
                if (section) {
                    observerRef.current.observe(section);
                }
            });
        };

        setupObserver();

        return () => {
            if (observerRef.current) {
                const sections = items.map(item => document.getElementById(item.id));
                sections.forEach(section => {
                    if (section) {
                        observerRef.current.unobserve(section);
                    }
                });
            }
        };
    }, [items]);

  

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
