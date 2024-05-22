import { useState, useEffect } from 'react'
import './accessibilityInfo.css'

export function AccessibilityInfo() {
    const [showAccessibilityInfo, setShowAccessibilityInfo] = useState(false)

    const handleClick = () => {
        setShowAccessibilityInfo(!showAccessibilityInfo)
    }

    useEffect(() => {
        // setTimeout(() => {
        //     setTooltip(false)
        // }, 10000)

        const handleKeyDown = (event) => {
            if ((event.ctrlKey || event.metaKey) && event.key === 'i') {
                event.preventDefault()
                setShowAccessibilityInfo(prevState => !prevState)
            }
        }

        window.addEventListener('keydown', handleKeyDown)

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [])


    return (
        <div className='accessibility-info-container'>
            {!showAccessibilityInfo && (
                <>
                    <div className='tootlip'>
                        Ctrl + I
                    </div>
                    <button onClick={handleClick} className='accessibility-info-button'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} className='accesibility-svg' height={'60px'}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                        </svg>
                    </button>
                </>
            )}
            {showAccessibilityInfo && (
                <div className='modal-accecibility'>
                    <div className='container accessibility-info'>
                        <button onClick={handleClick} className='close-button'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--secondary-color)" height={'60px'}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h2 className='modal-title mb-4'>Accesibilidad</h2>
                        <div className='row h-100'>
                            <div className='col-md-4 d-flex justify-content-center align-items-center img-modal-container'>
                                <img src='char.png' alt='Accesibilidad' className='img-modal-accecibility' />
                            </div>
                            <div className='col-md-8 d-flex justify-content-center align-items-center flex-column'>
                                <div className='grid-container'>
                                    <div className='grid-item'>
                                        <img src="CTRL+O.svg" alt="" height={'60px'} />
                                        <p className='item-modal mb-0'>Para abrir la nav con el teclado pulsa Ctrl + O</p>
                                    </div>
                                    <div className='grid-item'>
                                        <img src="TAB.svg" alt="" height={'60px'} />
                                        <p className='item-modal mb-0'>Para moverte por el menú utiliza la tecla TAB</p>
                                    </div>
                                    <div className='grid-item'>
                                        <img src="colors.svg" alt="" height={'60px'} />
                                        <p className='item-modal mb-0'>Puedes cambiar el color de acción desde el menú de la Navbar</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}