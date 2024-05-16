import './EyesAnimation.css'
import { useState, useEffect} from 'react'

export default function EyesAnimation() {
    
    const [pupilTop, setPupilTop] = useState("0.813008%");
    const [pupilLeft, setPupilLeft] = useState("14%");
    const [pupilTransform, setPupilTransform] = useState("translate(0.813008%, -14%)");

    function handleMouseMove(event) {
        let x = (event.clientX * 105) / window.innerWidth + "%";
        let y = (event.clientY * 105) / window.innerHeight + "%";
        setPupilLeft(x);
        setPupilTop(y);
        setPupilTransform(`translate(-${x},-${y})`);
    }

    useEffect(() => {
        const handleDeviceOrientation = (event) => {
            const { beta, gamma } = event;
            let x = (gamma * 100) / 90 + 50;
            let y = (beta * 100) / 90 + 50;
            x = Math.min(Math.max(x, 0), 100);
            y = Math.min(Math.max(y, 0), 100);
            setPupilLeft(x + "%");
            setPupilTop(y + "%");
            setPupilTransform(`translate(-${x}%, -${y}%)`);
        };

        document.querySelector('.porfolio-content').addEventListener('mousemove', handleMouseMove);

        if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleDeviceOrientation);
        }

        return () => {
            window.removeEventListener('deviceorientation', handleDeviceOrientation);
            document.querySelector('.porfolio-content').removeEventListener('mousemove', handleMouseMove);
        };
    }, []);
    
    return (
        <div className="eyesanimation-section normal-width-section" id="eyesanimation" style={{ minHeight: '100vh' }}>
            <div className="container-fluid">
                <div className='margin-start-section'>
                    <div className='eyes-content '>
                        <h3 className='eyes-main-title'>Que te ha parecido <br /> todo lo que has visto?</h3>
                        <h3 className='eyes-secondary-title'>Continua scrolleando <br /> que aún no lo has visto todo</h3>
                    </div>
                    <div>
                        <div className='eyes-animation-container'>
                            <div className='eyes-animation'>
                                <div className='eye'>
                                    <div className='pupil' style={{
                                    top: pupilTop,
                                    left: pupilLeft,
                                    transform: pupilTransform
                                    }}></div>
                                </div>
                                <div className='eye'>
                                    <div className='pupil' style={{
                                    top: pupilTop,
                                    left: pupilLeft,
                                    transform: pupilTransform
                                    }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}