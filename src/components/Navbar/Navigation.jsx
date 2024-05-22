import Navbar from "./Navbar";
import NavbarOpen from "./NavbarOpen";
import { useState, useEffect } from 'react';


export default function Navigation() {
    const [isOpen, setIsOpen] = useState(null);


    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'o') {
                event.preventDefault();
                setIsOpen(prevState => !prevState);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <NavbarOpen isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}