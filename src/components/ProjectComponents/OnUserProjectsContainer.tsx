import React, { useState } from 'react'
import { project, user } from '../../types/Type'
import OnUserProjectAddButton from './OnUserProjectAddButton'
import OnUserProjectRemoveButton from './OnUserProjectRemoveButton'

const OnUserProjectsContainer = ({item, userId}: {item: project, userId?:string}) => {

  const [addButtonControl, setAddButtonControl] = useState(false);
  const [dynamicId, setDynamicId] = useState<string>();

  return (
    <>
    <OnUserProjectAddButton userId={userId} item={item} addButtonControl={addButtonControl} setAddButtonControl={setAddButtonControl} setDynamicId={setDynamicId}/>
    <OnUserProjectRemoveButton userId={userId} item={item} addButtonControl={addButtonControl} setAddButtonControl={setAddButtonControl} dynamicId={dynamicId}/>
    </>
  )
}

export default OnUserProjectsContainer