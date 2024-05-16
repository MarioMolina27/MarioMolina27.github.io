import './Skills.css';

export default function Skills() {
    const skills = [
        {
            title: 'HTML',
            color: '#E44D26',
            image: 'logos/html.png'
        },
        {
            title: 'CSS',
            color: '#264DE4',
            image: 'logos/css.png'
        },
        {
            title: 'JavaScript',
            color: '#F0DB4F',
            image: 'logos/js.png'
        },
        {
            title: 'React',
            color: '#A9E2F1',
            image: 'logos/react.png'
        },
        {
            title: 'Vue',
            color: '#4FC08D',
            image: 'logos/vue.png'
        },
        {
            title: 'Bootstrap',
            color: '#7952B3',
            image: 'logos/bootstrap.svg'
        },
        {
            title: 'PHP',
            color: '#8892BF',
            image: 'logos/php.png'
        },
        {
            title: 'Laravel',
            color: '#E44D26',
            image: 'logos/laravel.png'
        },
        {
            title: '.NET',
            color: '#028DDB',
            image: 'logos/.net.png'
        },
        {
            title: 'C#',
            color: '#A179DC',
            image: 'logos/csharp.webp'
        },
        {
            title: 'Java',
            color: '#71A1FA',
            image: 'logos/java.png'
        },
        {
            title: 'Python',
            color: '#3776AB',
            image: 'logos/python.webp'
        },
        {
            title: 'MySQL',
            color: '#4479A1',
            image: 'logos/mysql.png'
        },
        {
            title: 'SQL Server',
            color: '#CC2927',
            image: 'logos/sqlserver.png'
        }
    ];
    return(
        <div className="skills normal-width-section" id="skills" style={{ minHeight: '100vh' }}>
            <div className="container-fluid experience-content">
                <div className='row'>
                    <div className="col-12">
                        <div className='margin-start-section'>
                            <h2 className="title-section">Hablilidades</h2>
                        </div>
                    </div>
                    <div className='text-skills'>
                        <p>Todas mis <span className='accent-text'>habilidades</span> tecnicas adquiridas <br/> en estos años de <span className='accent-text'>esfuerzo</span>. </p>
                    </div>
                    <div className="skills-container col-12 pt-2">
                        <div className='margin-start-section'>
                            {skills.reduce((acc, curr, index) => {
                                if (index % 6 === 0) acc.push([]);
                                acc[acc.length - 1].push(
                                    <div key={index} className="col-lg-2 col-md-3 col-6 d-flex flex-column align-items-center justify-content-center mb-5">
                                        <div key={index} className='skill-item d-flex flex-column align-items-center justify-content-center' style={{backgroundColor: `${curr.color}a1`}}>
                                            <img src={curr.image} alt={curr.title} className='skill-image' />
                                        </div>
                                    </div>
                                );
                                return acc;
                            }, []).map((group, index) => (
                                <div key={index} className="row d-flex flex-row justify-content-center align-items-center">
                                    {group}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}