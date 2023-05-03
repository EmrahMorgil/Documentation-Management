import React, {useEffect, useState} from 'react'
import AddProject from '../components/ProjectComponents/ProjectModalConnection/AddProject'
import { Link } from 'react-router-dom'
import ProjectsList from '../components/ProjectComponents/ProjectsList'

const ProjectPanel: React.FC = () => {

  
  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", margin: "30px" }}>
      <AddProject />
      <Link to="/projects"><button className="btn btn-danger">Back</button></Link>
    </div>
    <ProjectsList projectsControl={"projectPanel"} userId="" filterValue=''/>
    </>
  )
}

export default ProjectPanel