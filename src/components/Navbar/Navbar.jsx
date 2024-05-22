/* eslint-disable react/prop-types */
import './Navbar.css'
import { useEffect } from 'react'
export default function Navbar({ isOpen, setIsOpen }) {


    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const porfolio = document.querySelector('.porfolio-content')
        const infoSection = document.getElementById('info-section')
        const nav = document.querySelector('nav')
        const logo = document.querySelector('.logo')
        const accecibility = document.querySelector('.accessibility-info-container')
        if (isOpen) {
            porfolio.style.overflow = 'hidden'
            nav.classList.remove('nav-close-mobile-not-home')
            logo.style.display = 'none'
            accecibility.style.display = 'none'

        } else {
            porfolio.style.overflow = 'auto'
            accecibility.style.display = 'block'
            if (infoSection !== null) {
                const infoRect = infoSection.getBoundingClientRect()
                if (infoRect.top > 0) {
                    nav.classList.remove('nav-close-mobile-not-home')
                    logo.style.display = 'none'
                } else {
                    setTimeout(() => {
                        // 1 SEGUNDO QUE TARDA LA ANIMACIÓN DE CIERRE DE LA NAV
                        nav.classList.add('nav-close-mobile-not-home')
                        logo.style.display = 'block'

                    }, 800)
                }
            }
        }

    }, [isOpen])

    useEffect(() => {
        const nav = document.querySelector('nav')
        const infoSection = document.getElementById('info-section')
        const porfolio = document.querySelector('.porfolio-content')

        handleScroll(infoSection, nav)

        porfolio.addEventListener('scroll', handleScroll)

        handleScroll()

        return () => {
            porfolio.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const handleScroll = () => {
        const nav = document.querySelector('nav')
        const infoSection = document.getElementById('info-section')
        const logo = document.querySelector('.logo')

        if (!infoSection) return

        const infoRect = infoSection.getBoundingClientRect()

        if (infoRect.top > 50) {
            nav.classList.remove('nav-close-mobile-not-home')
            logo.style.display = 'none'
        } else {
            nav.classList.add('nav-close-mobile-not-home')
            logo.style.display = 'block'
        }

    }


    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369 350" className='logo'>
                <rect x="18" y="19" width="99" height="331" rx="49.5" fill="var(--secondary-color)" />
                <rect x="282.5" y="2" width="99" height="331" rx="49.5" transform="rotate(30 282.5 2)" fill="var(--secondary-color)" />
                <rect y="49.5" width="99" height="333.375" rx="49.5" transform="rotate(-30 0 49.5)" fill="var(--accent-color)" />
                <path d="M251.442 68.3823C251.198 41.0453 273.161 18.6863 300.498 18.4421C327.835 18.1978 350.194 40.1609 350.438 67.4979L352.511 299.489C352.755 326.826 330.792 349.185 303.455 349.429C276.118 349.673 253.759 327.71 253.515 300.373L251.442 68.3823Z" fill="var(--accent-color)" />
            </svg>

            <nav className={`navbar-${isOpen ? 'open' : 'close'}`}>
                <div className={`burger-menu ${isOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </>

    )
}