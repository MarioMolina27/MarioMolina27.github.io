import './Projects.css';
import Project from '../../components/project/Project.jsx';

export default function Projects() {
    const projects = [
        {
            title: 'StreetFeed',
            category: 'Web',
            techologies: ['Laravel', 'Vue','PrimeVue', 'Mapbox'],
            description: 'Descripción del proyecto 1',
            img: './projects-img/streetfeed_thumbail.png'
        },
        {
            title: 'aCEP',
            category: 'Desktop & Mobile',
            techologies: ['.NET Framework', 'Kotlin'],
            description: 'Descripción del proyecto 2',
            img: './projects-img/aCep_thumbnail.png'
        },
        {
            title: 'Cientifiks en Joc',
            category: 'Web',
            techologies: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
            description: 'Descripción del proyecto 3',
            img: './projects-img/cej_thubmail.png'
        },
        {
            title: 'FilmZ',
            category: 'Desktop & Mobile',
            techologies: ['.NET Framework', 'Kotlin'],
            description: 'Descripción del proyecto 3',
            img: './projects-img/filmz_thumbnail.png'
        }
    ];
    return(
        <div className="projects normal-width-section" id="projects">
            <div className="container-fluid projects-content">
            <div className='row'>
                    <div className="col-12">
                        <div className='margin-start-section'>
                            <h2 className="title-section">Proyectos</h2>
                        </div>
                    </div>
                    <div className='projects col-12 pt-2 '>
                        <div className='margin-start-section'>
                            {projects.map((project, index) => (
                                <Project key={index} project={project} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}