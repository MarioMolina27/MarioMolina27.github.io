import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './ProjectDetail.css'
import Slider from '../../components/slider/Slider.jsx'


export default function ProjectDetail() {
  const { name } = useParams()
  const [project, setProject] = useState(null)

  function findProjectByName(name) {
    return projects.find(project => project.title === name)
  }

  const projects = [
    {
      title: 'StreetFeed',
      category: 'Web',
      techologies: ['Laravel', 'Vue', 'PrimeVue', 'Mapbox'],
      description: 'StreetFeed es una aplicación web solidaria de reparto de comida donde los usuarios pueden participar como providers o riders. Los providers pueden ofrecer menús para donar, y los riders se encargan de recoger y entregar estos alimentos a personas necesitadas. Además, cualquier usuario puede añadir pines en el mapa para indicar lugares donde hay personas que necesitan ayuda, fomentando así la solidaridad y el apoyo comunitario. La aplicación ha sido desarrollada utilizando Laravel para el backend y Vue.js para el frontend, con funcionalidades de mapas integradas gracias a la API de Mapbox.',
      img: './projects-img/streetfeed-main.png',
      imgs: ['./projects-img/streetfeed-1.jpg', './projects-img/streetfeed-2.jpg', './projects-img/streetfeed-3.jpg', './projects-img/streetfeed-4.jpg', './projects-img/streetfeed-5.jpg'],
      año: 'Enero 2024 - Mayo 2024',
      video: './projects-videos/streetfeed.mp4',
      github: 'https://github.com/MarioMolina27/Streetfeed',
      link: 'http://daw.abp-politecnics.com/daw07/Streetfeed/public/index.php/'
    },
    {
      title: 'aCEP',
      category: 'Desktop & Mobile',
      techologies: ['.NET Framework', 'Kotlin'],
      description: 'aCEP es una aplicación de movil de un centro educativo que permite a los alumnos indicar su assistencia a las clases, justificar faltas, consultar las notas y los horarios de las clases. Y a los profesores confirmar la assistencia de los alumnos y consultar los horarios de las clases. La aplicación ha sido desarrollada utilizando .NET Framework para el backend con APIS y Kotlin para el frontend. Además también se ha desarollado una app de escritorio con Windows Forms para administrar la base de datos.',
      img: './projects-img/aCEP-main.png',
      imgs: ['./projects-img/aCEP-1.jpg', './projects-img/aCEP-2.jpg', './projects-img/aCEP-3.jpg', './projects-img/aCEP-4.jpg', './projects-img/aCEP-5.jpg'],
      año: 'Enero 2023 - Mayo 2023',
      video: './projects-videos/aCEP.mp4',
      github: 'https://github.com/DavidSoru/Android'
    },
    {
      title: 'Cientifiks en Joc',
      category: 'Web',
      techologies: ['HTML', 'CSS', 'PHP', 'JavaScript', 'MySQL'],
      description: 'Descripción del proyecto 3',
      img: './mountain.jpg',
      imgs: ['./mountain.jpg', './mountain.jpg', './mountain.jpg'],
      año: '2021',
      video: './a.mp4',
      github: ''
    },
    {
      title: 'FilmZ',
      category: 'Desktop & Mobile',
      techologies: ['.NET Framework', 'Kotlin'],
      description: 'Descripción del proyecto 3',
      img: './mountain.jpg',
      imgs: ['./mountain.jpg', './mountain.jpg', './mountain.jpg'],
      año: '2021',
      video: './a.mp4'
    }
  ]

  useEffect(() => {
    const project = findProjectByName(name)
    setProject(project)
  }, [])

  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };


  if (!project) {
    return <div>Loading...</div>
  }

  return (
    <div className='normal-width-section'>
      <div className='project-container'>
        <img src={"." + project.img} alt="" className='project-main-image mt-5' />
        <h2 className='mt-3 project-main-title'>{project.title}</h2>
        <div className='project-main-divider'></div>
        <div className='links-project-container d-flex flex-row'>
          <a href={project.github} className='project-link-github'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15" fill='white' height={"30px"} className='me-2' >
              <path d="M9.35762 2.14496C8.13548 1.86102 6.86444 1.86102 5.6423 2.14497C4.93642 1.71169 4.39704 1.51286 4.00502 1.42909C3.79189 1.38354 3.62296 1.37216 3.4959 1.37556C3.43249 1.37725 3.38001 1.38261 3.33821 1.38905C3.31733 1.39226 3.29919 1.39573 3.28375 1.39911C3.27603 1.4008 3.26899 1.40247 3.26264 1.40408L3.25362 1.40643L3.2495 1.40756L3.24753 1.40811L3.24563 1.40865C3.24562 1.40865 3.24563 1.40864 3.24563 1.40865C3.2452 1.40884 3.24731 1.41452 3.38299 1.88895L3.24563 1.40865C3.1036 1.44926 2.9868 1.55061 2.92657 1.68549C2.75841 2.06202 2.66657 2.46816 2.65635 2.88041C2.64875 3.18677 2.68634 3.49199 2.76743 3.78633C2.55433 4.04445 2.3807 4.33349 2.25276 4.64407C2.08484 5.05173 1.99894 5.4885 1.99998 5.92939C2.00011 7.48194 2.45815 8.52582 3.23873 9.19657C3.78563 9.66653 4.45048 9.91658 5.11619 10.0598C5.00626 10.3652 4.97773 10.6883 4.99998 11.0176V11.6158C4.59263 11.7015 4.31135 11.6744 4.11082 11.6082C3.85884 11.525 3.66566 11.3578 3.48139 11.1175C3.38806 10.9959 3.30208 10.8623 3.21179 10.7161L3.15448 10.6228C3.08377 10.5073 3.00746 10.3828 2.93045 10.2692C2.73964 9.9878 2.45813 9.63616 2.00195 9.51639L1.51834 9.38942L1.2644 10.3566L1.74801 10.4836C1.82746 10.5045 1.93204 10.5786 2.10279 10.8304C2.16553 10.9229 2.22538 11.0206 2.29372 11.1321C2.31518 11.1671 2.33753 11.2036 2.36102 11.2417C2.45488 11.3936 2.56253 11.5627 2.68796 11.7262C2.94119 12.0563 3.28597 12.389 3.79742 12.5578C4.14883 12.6738 4.54603 12.7016 4.99998 12.6319V14.5C4.99998 14.7761 5.22384 15 5.49998 15H9.49998C9.77613 15 9.99998 14.7761 9.99998 14.5V10.9375C9.99998 10.6217 9.98623 10.333 9.89735 10.0636C10.5597 9.92381 11.2193 9.67353 11.7626 9.20319C12.5429 8.52773 13 7.47445 13 5.9125L13 5.91089C12.9975 5.13212 12.7242 4.38197 12.2325 3.78635C12.3136 3.492 12.3512 3.18678 12.3436 2.88041C12.3334 2.46816 12.2416 2.06202 12.0734 1.68549C12.0131 1.55057 11.8963 1.44921 11.7542 1.40861L11.6169 1.88937C11.7542 1.40861 11.7528 1.40821 11.7523 1.40807L11.7504 1.40752L11.7462 1.4064L11.7372 1.40405C11.7309 1.40245 11.7238 1.40078 11.7161 1.39909C11.7007 1.39571 11.6826 1.39225 11.6617 1.38904C11.6199 1.38261 11.5674 1.37725 11.504 1.37556C11.3769 1.37216 11.2079 1.38354 10.9947 1.42908C10.6026 1.51286 10.0633 1.71168 9.35762 2.14496Z" />
            </svg>
            Github</a>
          {
            project.link && <a href={project.link} className='project-link-project'>
            <svg xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 0 68 67" fill="none" className='me-2'>
              <g clipPath="url(#clip0_251_1009)">
                <path d="M38.625 16.75H15.5938C13.9279 16.75 12.3302 17.4118 11.1522 18.5897C9.97427 19.7677 9.3125 21.3654 9.3125 23.0313V52.3438C9.3125 54.0096 9.97427 55.6073 11.1522 56.7853C12.3302 57.9632 13.9279 58.625 15.5938 58.625H44.9063C46.5721 58.625 48.1698 57.9632 49.3478 56.7853C50.5257 55.6073 51.1875 54.0096 51.1875 52.3438V29.3125M21.875 46.0625L59.5625 8.375M59.5625 8.375H44.9063M59.5625 8.375V23.0313" stroke="#F9FBFD" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_251_1009">
                  <rect width="67" height="67" fill="white" transform="translate(0.9375)" />
                </clipPath>
              </defs>
            </svg>
            Proyecto</a>
          }
        </div>
        <div className='container mt-5'>
          <div className="row info-container">
            <div className="col-lg-6 col-12">
              <div className="info-grid">
                <div className="info-item info-item-title"><strong>Año:</strong></div>
                <div className="info-item">{project.año}</div>
                <div className="info-item info-item-title"><strong>Categoría:</strong></div>
                <div className="info-item">{project.category}</div>
                <div className="info-item info-item-title"><strong>Tecnologías:</strong></div>
                <div className="info-item">{project.techologies.join(', ')}</div>
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        </div>
        <div className='container project-screenshots mt-5 mb-3'>
          <h4 className='img-project-title'>Imagenes y Video</h4>
          <div className='images-container mb-5'>
            <Slider images={project.imgs} settings={settings} />
          </div>
          <div className='container p-0'>
            <video controls className='video-project'>
              <source src={"." + project.video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}