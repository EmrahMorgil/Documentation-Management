import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { content } from "../../types/Type";
import Content from "./Content";


interface IContentList{
  projectId?: string;
}

const ContentList: React.FC<IContentList> = ({projectId}) => {
  const contents = useSelector((state: RootState) => state.contents.contents);

  return (
    <div className="container">
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Content Name </th>
            <th scope="col">Created Date</th>
            <th scope="col">Updated Date</th>
            <th scope="col">Created Person</th>
            <th scope="col">Updated Person</th>
            <th scope="col">Content Version</th>
            <th scope="col">Content</th>
            <th scope="col">Content Tags</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content: content, i: number) => {
            return <Content content={content} key={i} projectId={projectId}/>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContentList;
