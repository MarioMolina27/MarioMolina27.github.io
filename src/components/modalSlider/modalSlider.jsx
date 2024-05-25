/* eslint-disable react/prop-types */
import './modalSlider.css';

export default function ImageModal({ isOpen, image, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className='modal-close-container'>
            <p className="modal-close mb-0" onClick={onClose}>&times;</p>
        </div>
        <img src={'../'+image} alt="Modal" className="modal-image" />
      </div>
    </div>
  );
}