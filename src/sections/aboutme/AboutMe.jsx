import './AboutMe.css';
import { useRef, useState } from 'react';

export default function AboutMe() {

    const imageMeRef = useRef(null);
    const aboutMeRef = useRef(null);
    const [imageSrc] = useState('./me.png'); 

    return(
        <div ref={aboutMeRef} className='aboutme normal-width-section' id="aboutme" style={{minHeight:'100vh'}}>
            <div className="container-fluid aboutme-content">
                <div className='row'>
                    <div className="col-lg-5 col-12">
                        <div className='margin-start-section'>
                            <h2 className="title-section">Sobre Mi</h2>
                            <p className="text-services mt-3">
                            Desarollo Web <br/> Desarollo de Software & <br/> Desarollo Mobil
                            </p>
                            <div className='d-flex align-items-start mt-3'>
                                <img ref={imageMeRef} src={imageSrc} alt="Mi cara" className='img-face' />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12 d-flex flex-column">
                        <img src="./mountain.jpg" alt="Mi cara" className='img-mountain-about' />
                        <div className='d-flex flex-row contact-container'>
                            <a href="https://www.linkedin.com/in/mario-molina-ballesteros-a45a14277" className='contact-link'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">    
                                    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"/>
                                </svg>
                            </a>
                            <a href="https://github.com/MarioMolina27" className='contact-link'>
                            <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 15 15" >
                                <path d="M9.35762 2.14496C8.13548 1.86102 6.86444 1.86102 5.6423 2.14497C4.93642 1.71169 4.39704 1.51286 4.00502 1.42909C3.79189 1.38354 3.62296 1.37216 3.4959 1.37556C3.43249 1.37725 3.38001 1.38261 3.33821 1.38905C3.31733 1.39226 3.29919 1.39573 3.28375 1.39911C3.27603 1.4008 3.26899 1.40247 3.26264 1.40408L3.25362 1.40643L3.2495 1.40756L3.24753 1.40811L3.24563 1.40865C3.24562 1.40865 3.24563 1.40864 3.24563 1.40865C3.2452 1.40884 3.24731 1.41452 3.38299 1.88895L3.24563 1.40865C3.1036 1.44926 2.9868 1.55061 2.92657 1.68549C2.75841 2.06202 2.66657 2.46816 2.65635 2.88041C2.64875 3.18677 2.68634 3.49199 2.76743 3.78633C2.55433 4.04445 2.3807 4.33349 2.25276 4.64407C2.08484 5.05173 1.99894 5.4885 1.99998 5.92939C2.00011 7.48194 2.45815 8.52582 3.23873 9.19657C3.78563 9.66653 4.45048 9.91658 5.11619 10.0598C5.00626 10.3652 4.97773 10.6883 4.99998 11.0176V11.6158C4.59263 11.7015 4.31135 11.6744 4.11082 11.6082C3.85884 11.525 3.66566 11.3578 3.48139 11.1175C3.38806 10.9959 3.30208 10.8623 3.21179 10.7161L3.15448 10.6228C3.08377 10.5073 3.00746 10.3828 2.93045 10.2692C2.73964 9.9878 2.45813 9.63616 2.00195 9.51639L1.51834 9.38942L1.2644 10.3566L1.74801 10.4836C1.82746 10.5045 1.93204 10.5786 2.10279 10.8304C2.16553 10.9229 2.22538 11.0206 2.29372 11.1321C2.31518 11.1671 2.33753 11.2036 2.36102 11.2417C2.45488 11.3936 2.56253 11.5627 2.68796 11.7262C2.94119 12.0563 3.28597 12.389 3.79742 12.5578C4.14883 12.6738 4.54603 12.7016 4.99998 12.6319V14.5C4.99998 14.7761 5.22384 15 5.49998 15H9.49998C9.77613 15 9.99998 14.7761 9.99998 14.5V10.9375C9.99998 10.6217 9.98623 10.333 9.89735 10.0636C10.5597 9.92381 11.2193 9.67353 11.7626 9.20319C12.5429 8.52773 13 7.47445 13 5.9125L13 5.91089C12.9975 5.13212 12.7242 4.38197 12.2325 3.78635C12.3136 3.492 12.3512 3.18678 12.3436 2.88041C12.3334 2.46816 12.2416 2.06202 12.0734 1.68549C12.0131 1.55057 11.8963 1.44921 11.7542 1.40861L11.6169 1.88937C11.7542 1.40861 11.7528 1.40821 11.7523 1.40807L11.7504 1.40752L11.7462 1.4064L11.7372 1.40405C11.7309 1.40245 11.7238 1.40078 11.7161 1.39909C11.7007 1.39571 11.6826 1.39225 11.6617 1.38904C11.6199 1.38261 11.5674 1.37725 11.504 1.37556C11.3769 1.37216 11.2079 1.38354 10.9947 1.42908C10.6026 1.51286 10.0633 1.71168 9.35762 2.14496Z" />
                            </svg>
                            </a>
                        </div>
                        <h3 className='my-name mt-3'>MARIO MOLINA <br/>BALLESTEROS</h3>
                        <p className='text-description-myself mt-3'>
                        Me llamo Mario Molina. Soy un desarrollador FullStack <br/>
                        Estoy especializado sobre todo en Laravel, Vue, React y .NET <br/>
                        Si quieres seguir conociéndome aún te queda mucho así que te animo a continuar <br/>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}