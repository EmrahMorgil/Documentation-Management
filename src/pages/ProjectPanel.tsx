import React from 'react'
import AddProject from '../components/ProjectComponents/ProjectModalConnection/AddProject'
import { Link } from 'react-router-dom'
import ProjectsList from '../components/ProjectComponents/ProjectsList'

const ProjectPanel: React.FC = () => {

  
  return (
    <>
    <div className='container d-flex mt-5'>
      <AddProject />
      <Link to="/projects"><button className="btn btn-danger">Back</button></Link>
    </div>
    <ProjectsList projectsControl={"projectPanel"} userId="" filterValue=''/>
    </>
  )
}

export default ProjectPanel