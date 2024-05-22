import { useState } from "react"
import './colorSelector.css'

export default function ColorSelector() {
    const [showColor, setShowColor] = useState(false)

    const handleShowColor = () => {
        setShowColor(!showColor)
    }

    const handleChangeAccentColor = (color) => {
        switch (color) {
            case 'lila':
                return () => {
                    const accentColor1 = getComputedStyle(document.documentElement).getPropertyValue('--accent-color-1');
                    document.documentElement.style.setProperty('--accent-color', accentColor1);
                    setShowColor(false)
                }
            case 'rojo':
                return () => {
                    const accentColor2 = getComputedStyle(document.documentElement).getPropertyValue('--accent-color-2');
                    document.documentElement.style.setProperty('--accent-color', accentColor2);                    
                    setShowColor(false)
                }
            case 'verde':
                return () => {
                    const accentColor3 = getComputedStyle(document.documentElement).getPropertyValue('--accent-color-3');
                    document.documentElement.style.setProperty('--accent-color', accentColor3);                    
                    setShowColor(false)
                }
        }
    }

    return (
        <>
            {!showColor ? (
                <div onClick={handleShowColor} className='custom-color-container'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--main-color)" height={'2rem'}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
                    </svg>
                    <p className='mb-0 ms-2'>Colors</p>
                </div>
            ) : (
                <div className='custom-colors-selector-container'>
                    <div className='color-selector' onClick={handleChangeAccentColor('lila')}>
                        <div className='color-lila'></div>
                        <p className='mb-0 me-5'>Lila</p>
                    </div>
                    <div className='color-selector' onClick={handleChangeAccentColor('rojo')}>
                        <div className='color-rojo'></div>
                        <p className='mb-0 me-5'>Rojo</p>
                    </div>
                    <div className='color-selector' onClick={handleChangeAccentColor('verde')}>
                        <div className='color-verde'></div>
                        <p className='mb-0'>Verde</p>
                    </div>
                </div>
            )}
        </>
    );
    
}