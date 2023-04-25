import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { project } from '../../types/Type';
import Project from './Project';

const ProjectsList = () => {

    const projects = useSelector((state: RootState) => state.projects.projects);

  return (
    <>
        {projects.map((item: project, i: number) => (
        <Project item={item} key={i} />
      ))}
    </>
  )
}

export default ProjectsList