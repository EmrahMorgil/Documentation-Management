import React, {useEffect} from 'react'
import AddProject from '../components/ProjectComponents/AddProject'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getProductsAsync } from '../services/projectService'
import ProjectsList from '../components/ProjectComponents/ProjectsList'

const ProjectPanel: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [])
  


  return (
    <>
    <div style={{ display: "flex", justifyContent: "center", margin: "30px" }}>
      <AddProject />
      <Link to="/home"><button className="btn btn-danger">Back</button></Link>
    </div>
    <ProjectsList />
    </>
  )
}

export default ProjectPanel