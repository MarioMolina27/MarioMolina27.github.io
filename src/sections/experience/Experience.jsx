import { useState } from 'react';
import './Experience.css';
import Switch from '../../components/switch/Switch';
import ExperienceItem from '../../components/experienceItem/ExperienceItem';

export default function Experience() {
    const [selectedOption, setSelectedOption] = useState('Experiencia');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const experience = [
        {
            'title': 'Fullstack Developer',
            'company': 'Evotic',
            'startYear': '2024',
            'endYear': 'Actualidad',
            'description': 'Me encargo del mantenimiento y actualización del portal de tours de viajes de Vueltia.com, desarrollado con tecnologías de vanguardia como Laravel, Vue y Voyager.',
            'image': 'experiencia-img/vueltia.png'
        },
        {
            'title': 'Backend Developer',
            'company': 'Datapta',
            'startYear': '2023',
            'endYear': '2023',
            'description': 'Desarrollé parte de la aplicación tanto backend como de una pequeña parte del frontend de la aplicación web de Datapta Finasset. Utilicé Python para conectarme a APIs de terceros y para realizar WebScraping con el fin de obtener ciertos datos necesarios. En cuanto al frontend, se opto por el framework Dash para diseñar interfaces de usuario intuitivas, eficientes y de fácil mantenimiento.',
            'image': 'experiencia-img/datapta.jpg'
        }
    ];

    const studies = [
        {
            'title': 'Desarrollo de Aplicaciones Web',
            'institution': "Centre d'Estudis Politècnics",
            'startYear': '2023',
            'endYear': '2024',
            'description': 'Ciclo Superior de Desarrollo de Aplicaciones Web. Durante este año he podido desarollarme en el mundo del desarrollo web, aprendiendo tecnologias como Laravel y Vue, construyendo aplicaciones web completas y funcionales. Además de seguir desarrollando mis habilidades de trabajo en equipo y de comunicación.',
            'image': 'experiencia-img/cep.png'
        },
        {
            'title': 'Desarrollo de Aplicaciones Multiplataforma',
            'institution': "Centre d'Estudis Politècnics",
            'startYear': '2023',
            'endYear': '2021',
            'description': 'Ciclo Superior de Desarrollo de Aplicaciones Multiplataforma. Aqui puede aprender diversas tecnologias como .NET, desarrollo mobil gracias Kotlin y desarollo de aplicaciones de servidor utilizando hilos y sockets gracias a Java.',
            'image': 'experiencia-img/cep.png'
        },
        {
            'title': 'Bachillerato Tecnológico',
            'institution': "Salesians Sant Vicenç",
            'startYear': '2021',
            'endYear': '2019',
            'description': '',
            'image': 'experiencia-img/salesians.png'
        }
    ];

    return (
        <div className="experience normal-width-section" id="experience" style={{ minHeight: '100vh' }}>
            <div className="container-fluid experience-content">
                <div className='row'>
                    <div className="col-12">
                        <div className='margin-start-section'>
                            <h2 className="title-section">Experiencia</h2>
                        </div>
                    </div>
                    <div className='items-experience col-12 pt-2 '>
                        <div className='margin-start-section'>
                            <Switch selectedOption={selectedOption} handleOptionChange={handleOptionChange} />

                            <div className="experience-content">
                            {selectedOption === 'Experiencia' && experience.map((item, index) => (
                                <ExperienceItem experience={item} key={index} isLastItem={index === experience.length - 1} />
                            ))}
                            {selectedOption === 'Estudios' && studies.map((item, index) => (
                                <ExperienceItem experience={item} key={index} isLastItem={index === studies.length - 1} />
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
