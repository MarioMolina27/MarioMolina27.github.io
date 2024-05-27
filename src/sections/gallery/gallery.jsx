import './gallery.css';
export default function gallery () {
  return (
    <div
      className="gallery-section normal-width-section"
      id="gallery-section"
      style={{ minHeight: "100vh" }}
    >
      <div className="container-fluid">
        <div className="margin-start-section">
          <div className="gallery-content">
            <div className='points-separator'>
                <div className='point'></div>
                <div className='point'></div>
                <div className='point'></div>
            </div>
            <div className='gallery-text'>
                <p>A continuación tienes algunas <span className='accent-text'>imagenes</span> <br/> para conocerme mejor a nivel personal.</p>
            </div>
          </div>
          <div>
            <div className="grid-wrapper">
              <div className='wide'>
                <img
                  src="./gallery/img1.jpg"
                  alt=""
                  className="gallery-img"
                />
              </div>
              <div className='big'>
                <img
                  src="./gallery/img2.jpg"
                  alt=""
                  className="gallery-img"
                />
              </div>
              <div className='tall'>
                <img
                  src="./gallery/img3.jpg"
                  alt=""
                  className="gallery-img"
                />
              </div>
              <div className='wide'>
                <img
                  src="./gallery/img4.jpg"
                  alt=""
                  className="gallery-img"
                />
              </div>
              <div className='tall'>
                <img
                  src="./gallery/img5.jpg"
                  alt=""
                  className="gallery-img"
                />
              </div>
              <div className='wide'>
                <img
                  src="./gallery/img6.jpeg"
                  alt=""
                  className="gallery-img"
                />
              </div>
              <div className='wide'>
                <img
                  src="./gallery/img7.jpg"
                  alt=""
                  className="gallery-img"
                />
              </div>
              <div >
                <img
                  src="./gallery/img8.jpg"
                  alt=""
                  className="gallery-img"
                />
              </div>
              <div >
                <img
                  src="./gallery/img9.jpg"
                  alt=""
                  className="gallery-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
