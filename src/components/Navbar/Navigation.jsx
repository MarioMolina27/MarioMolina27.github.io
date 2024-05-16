import Navbar from "./Navbar";
import NavbarOpen from "./NavbarOpen";
import { useState } from 'react';


export default function Navigation() {
    const [isOpen, setIsOpen] = useState(null);

    return (
        <>
            <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
            <NavbarOpen isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}