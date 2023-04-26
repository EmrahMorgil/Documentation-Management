import React from "react";
import { content } from "../../types/Type";
import DeleteContent from "./DeleteContent";
import UpdateContent from "./UpdateContent";

interface IContent {
  item: content;
}

const Content: React.FC<IContent> = ({ item }) => {
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
          <DeleteContent id={item.id} />
        </td>
      </tr>
    </>
  );
};

export default Content;
