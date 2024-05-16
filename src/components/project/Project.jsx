/* eslint-disable react/prop-types */
import './Project.css';
import { Link } from "react-router-dom";

export default function Project({project}) {
    return(
        <Link className="project-item" to={'/project/'+project.title}>
            <div className='d-flex flex-row justify-content-between' style={{ width:"100%" }}>
                <div  style={{marginLeft: "10px"}}>
                    <h4 className='project-category' style={{textAlign:'start'}}>{project.category}</h4>
                    <h3 className='project-title' style={{textAlign:'start'}}>{project.title}</h3>
                    <div className='d-flex flex-row gap-2 mt-3 flex-wrap'>
                    {project.techologies.map((project, index) => (
                        <span key={index} className='tech'>{project}</span>
                            ))}
                    </div>
                </div>
                <div className='go-project-container ' style={{marginRight: "10px"}}>
                    <p className='mb-0 text-go-project'>Descúbrelo</p>
                    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" strokeWidth={1.5}  className="icon-go-project">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                </div>
            </div>
            <div className="mask-image">
                <img src={project.img} alt={project.title} className='project-img' />
            </div>
        </Link>
    )
}