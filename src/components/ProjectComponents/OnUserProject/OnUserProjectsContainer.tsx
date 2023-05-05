import React, { useState } from 'react'
import { project } from '../../../types/Type'
import OnUserProjectAddButton from './OnUserProjectAddButton'
import OnUserProjectRemoveButton from './OnUserProjectRemoveButton'

interface IOnUserProjectsContainer{
  project: project;
  userId?: string;
}

const OnUserProjectsContainer: React.FC<IOnUserProjectsContainer> = ({project, userId}) => {

  return (
    <>
    <OnUserProjectAddButton userId={userId} project={project}/>
    </>
  )
}

export default OnUserProjectsContainer