import React, { useState } from 'react'
import { project } from '../../../types/Type'
import OnUserProjectAddButton from './OnUserProjectAddButton'
import OnUserProjectRemoveButton from './OnUserProjectRemoveButton'

interface IOnUserProjectsContainer{
  project: project;
  userId?: string;
}

const OnUserProjectsContainer: React.FC<IOnUserProjectsContainer> = ({project, userId}) => {

  const [addButtonControl, setAddButtonControl] = useState<boolean>(false);
  const [dynamicId, setDynamicId] = useState<string>();


  return (
    <>
    <OnUserProjectAddButton userId={userId} project={project} addButtonControl={addButtonControl} setAddButtonControl={setAddButtonControl} setDynamicId={setDynamicId}/>
    <OnUserProjectRemoveButton userId={userId} addButtonControl={addButtonControl} setAddButtonControl={setAddButtonControl} dynamicId={dynamicId}/>
    </>
  )
}

export default OnUserProjectsContainer