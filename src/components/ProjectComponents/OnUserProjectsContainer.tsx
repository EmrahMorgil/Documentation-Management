import React, { useState } from 'react'
import { project, user } from '../../types/Type'
import OnUserProjectAddButton from './OnUserProjectAddButton'
import OnUserProjectRemoveButton from './OnUserProjectRemoveButton'

const OnUserProjectsContainer = ({item, userId}: {item: project, userId:string}) => {

  const [addButtonControl, setAddButtonControl] = useState(false);

  return (
    <>
    <OnUserProjectAddButton userId={userId} item={item} addButtonControl={addButtonControl} setAddButtonControl={setAddButtonControl}/>
    <OnUserProjectRemoveButton userId={userId} item={item} addButtonControl={addButtonControl} setAddButtonControl={setAddButtonControl}/>
    </>
  )
}

export default OnUserProjectsContainer