import './Footer.css';
export default function Footer() {
    return(
        <div className='footer full-width-section d-flex flex-column justify-content-end' id="footer" style={{minHeight:'100vh'}}>
            <p className='p-0 name-footer'>mmolina</p>
            <div className="footer-container">
                <div className='row footer-info normal-width-section d-flex justify-content-between mb-5'>
                    <div className='col-lg-6 col-12 footer-item footer-item-1'>
                        <p className='title-footer'>ME PUEDES ENCONTRAR EN</p>
                        <a className='footer-text' href="">Github</a>
                        <a className='footer-text' href="">Linkedin</a>
                    </div>

                    <div className='col-lg-6 col-12 footer-item footer-item-2'>
                        <p className='title-footer'>CONTACTO</p>
                        <a className='footer-text' href="">+34 644019793</a>
                        <a className='footer-text' href="">mariomolinaballesteros@gmail.com</a>
                    </div>
                </div>
            </div>
        </div>
    )
}