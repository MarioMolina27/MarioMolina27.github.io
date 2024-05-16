/* eslint-disable react/prop-types */
import './ExperienceItem.css';

export default function ExperienceItem({ experience, isLastItem }) {
    return (
        <div className="experience-item d-flex flex-row mb-5">
            <div className='timeline'>
                    <div className='circle'></div>
                    <p className='timeline-year mb-1'>{experience.startYear}</p>
                    {!isLastItem && <div className='line-timeline'></div>}
            </div>
            <div className='experience-item-container d-flex'>
                <img src={experience.image} alt='experience' className='image-experience' />
                <div>
                    <div className='experience-info'>
                        <h3 className='experience-main-title'>{experience.title}</h3>
                        <div className='companyanddate d-flex flex-row'>
                            <p className='experience-company me-5'>{experience.company || experience.institution}</p>
                            <p className='experience-date'>{experience.startYear} - {experience.endYear}</p>
                        </div>
                    </div>
                    <div className='experience-description-container ms-3'>
                        <p className='experience-description'>{experience.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
