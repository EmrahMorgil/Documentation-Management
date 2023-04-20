import React from 'react'
import { user } from '../types/Type'

const UsersList = ({item}: {item: user}) => {
  return (
    <div>
        <div style={{border: "1px solid black"}}>
        <p>Kullanıcı Adı : {item.name}</p>
        <p>{item.surname}</p>
        <p>{item.password}</p>
        <p>{item.createdPerson}</p>
        </div>
        
    </div>
  )
}

export default UsersList