import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IContentList, content } from "../../types/Type";
import Content from "./Content";
import SortByContentName from "./ContentFilters/SortByContentName";
import SortByCreatedDate from "./ContentFilters/SortByCreatedDate";
import SortByUpdatedDate from "./ContentFilters/SortByUpdatedDate";
import SortByContentVersion from "./ContentFilters/SortByContentVersion";

const ContentList: React.FC<IContentList> = ({ projectId }) => {
  const contents = useSelector((state: RootState) => state.contents.contents);
  const [filterValues, setFilterValues] = useState({
    contentName: "",
    createdDate: "",
    updatedDate: "",
    contentTags: "",
  });

  const handleChange = (e: any) => {
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <table className="table table-striped table-dark">
        <thead className="thead-dark">
          <th scope="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
              style={{
                width: "20px",
                verticalAlign: "baseline",
                textAlign: "center",
                color: "white",
              }}
            >
              <path
                fillRule="evenodd"
                d="M3.792 2.938A49.069 49.069 0 0112 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 011.541 1.836v1.044a3 3 0 01-.879 2.121l-6.182 6.182a1.5 1.5 0 00-.439 1.061v2.927a3 3 0 01-1.658 2.684l-1.757.878A.75.75 0 019.75 21v-5.818a1.5 1.5 0 00-.44-1.06L3.13 7.938a3 3 0 01-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836z"
                clipRule="evenodd"
              />
            </svg>
          </th>
          <th scope="col">
            <input
              placeholder="Search..."
              name="contentName"
              size={7}
              onChange={handleChange}
            />
          </th>
          <th scope="col">
            <input
              placeholder="Search Date"
              name="createdDate"
              size={7}
              onChange={handleChange}
            />
          </th>
          <th scope="col">
            <input
              placeholder="Search Date"
              name="updatedDate"
              size={7}
              onChange={handleChange}
            />
          </th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col"></th>
          <th scope="col">
            <input
              placeholder="Tag Search"
              name="contentTags"
              size={7}
              onChange={handleChange}
            />
          </th>
        </thead>
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <SortByContentName />
            <SortByCreatedDate />
            <SortByUpdatedDate />
            <th scope="col">Created Person</th>
            <th scope="col">Updated Person</th>
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
                .includes(filterValues.contentName.toLowerCase()) &&
              content.createdDate.includes(
                filterValues.createdDate.toLowerCase()
              ) &&
              content.updatedDate.includes(
                filterValues.updatedDate.toLowerCase()
              )
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
