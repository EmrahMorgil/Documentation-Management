import React from 'react'
import { content } from '../../types/Type'
import DeleteContent from './DeleteContent'
import UpdateContent from './UpdateContent'

interface IContent{
    item: content
}

const Content: React.FC<IContent> = ({item}) => {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Content Name </th>
            <th>Created Date</th>
            <th>Updated Date</th>
            <th>Created Person</th>
            <th>Updated Person</th>
            <th>Content Version</th>
            <th>Content</th>
            <th>Content Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <td>{item.id}</td>
          <td>{item.contentName}</td>
          <td>{item.createdDate}</td>
          <td>{item.updatedDate}</td>
          <td>{item.createdPerson}</td>
          <td>{item.updatedPerson}</td>
          <td>{item.version}</td>
          <td>{item.content}</td>
          <td>{item.contentTags}</td>
          <td style={{ display: "flex", flexDirection: "column" }}>
            <UpdateContent item={item}/>
            <DeleteContent id={item.id}/>
          </td>
        </tbody>
      </table>
    </div>
  )
}

export default Content