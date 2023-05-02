import React from "react";
import { content } from "../../types/Type";
import DeleteContent from "./DeleteContent";
import UpdateContent from "./UpdateContent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface IContent {
  item: content;
  projectId?: string;
}

const Content: React.FC<IContent> = ({ item, projectId }) => {

  const adminLoggedIn = useSelector((state: RootState)=>state.users.adminLoggedIn);

  return (
    <>
      <tr>
        <td scope="row">{item.id}</td>
        <td scope="row">{item.contentName}</td>
        <td scope="row">{item.createdDate}</td>
        <td scope="row">{item.updatedDate}</td>
        <td scope="row">{item.createdPerson}</td>
        <td scope="row">{item.updatedPerson}</td>
        <td scope="row">{item.version}</td>
        <td scope="row">{(item.content).substring(0,20)+"..."}</td>
        <td scope="row">{item.contentTags}</td>
        <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
          <UpdateContent item={item} />
          {adminLoggedIn && <DeleteContent id={item.id} projectId={projectId}/>}
        </td>
      </tr>
    </>
  );
};

export default Content;
