import React from "react";
import { content } from "../../types/Type";
import DeleteContent from "./DeleteContent";
import UpdateContent from "./ContentModalConnection/UpdateContent";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

interface IContent {
  content: content;
  projectId?: string;
}

const Content: React.FC<IContent> = ({ content, projectId }) => {

  const adminLoggedIn = useSelector((state: RootState)=>state.users.adminLoggedIn);

  return (
    <>
      <tr>
        <td scope="row">{content.id.substring(0,2)+"..."}</td>
        <td scope="row">{content.contentName}</td>
        <td scope="row">{content.createdDate}</td>
        <td scope="row">{content.updatedDate}</td>
        <td scope="row">{content.createdPerson}</td>
        <td scope="row">{content.updatedPerson}</td>
        <td scope="row">{content.version}</td>
        <td scope="row">{(content.content).substring(0,20)+"..."}</td>
        <td scope="row">{content.contentTags}</td>
        <td scope="row" style={{ display: "flex", flexDirection: "column" }}>
          <UpdateContent content={content} />
          {adminLoggedIn && <DeleteContent id={content.id} projectId={projectId}/>}
        </td>
      </tr>
    </>
  );
};

export default Content;
