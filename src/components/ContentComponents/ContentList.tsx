import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IContentList, content } from "../../types/Type";
import Content from "./Content";
import SortByContentName from "./ContentFilters/ContentFilterButtons/SortByContentName";
import SortByCreatedDate from "./ContentFilters/ContentFilterButtons/SortByCreatedDate";
import SortByUpdatedDate from "./ContentFilters/ContentFilterButtons/SortByUpdatedDate";
import SortByContentVersion from "./ContentFilters/ContentFilterButtons/SortByContentVersion";
import ContentFilterInputs from "./ContentFilters/ContentFilterInputs/ContentFilterInputs";

const ContentList: React.FC<IContentList> = ({ projectId }) => {
  const contents = useSelector((state: RootState) => state.contents.contents);
  const [filterValues, setFilterValues] = useState({
    contentName: "",
    createdDate: "",
    updatedDate: "",
    contentTags: "",
  });

  return (
    <div className="container">
      <table className="table table-striped table-dark">
        <ContentFilterInputs filterValues={filterValues} setFilterValues={setFilterValues}/>
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <SortByContentName />
            <SortByCreatedDate />
            <SortByUpdatedDate />
            <th scope="col">Created Person ID</th>
            <th scope="col">Updated Person ID</th>
            <SortByContentVersion />
            <th scope="col">Content</th>
            <th scope="col">Content Tags</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((content: content, i: number) => {
            if (
              content.contentTags
                .toLowerCase()
                .includes(filterValues.contentTags.toLowerCase()) &&
              content.contentName
                .toLowerCase()
                .includes(filterValues.contentName.toLowerCase()) 
              
            ) {
              return (
                <Content content={content} key={i} projectId={projectId} />
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ContentList;
