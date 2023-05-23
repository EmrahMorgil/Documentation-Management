import React from "react";
import { DateRangePicker } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { mdlContent } from "../../../../types/Type";
import { setContents } from "../../../../redux/contents/contentsSlice";
export interface IContentFilterInputs {
  filterValues: {
    contentName: string;
    createdDate: string;
    updatedDate: string;
    contentTags: string;
  };
  setFilterValues: React.Dispatch<
    React.SetStateAction<{
      contentName: string;
      createdDate: string;
      updatedDate: string;
      contentTags: string;
    }>
  >;
}

const ContentFilters: React.FC<IContentFilterInputs> = ({filterValues,setFilterValues}) => {
  const handleChange = (e: any) => {
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
  };

  const allContents = useSelector((state: RootState)=>state.contents.allContents);
  const dispatch = useDispatch();

  const createdDateRangeFilter = (value: any) => {

    let startDate = new Date(value ? value[0] : "");
    let endDate = new Date(value ? value[1] : "");

    let filteredDates = allContents.filter(function(date: mdlContent) {
      return new Date(date.createdDate) >= startDate && new Date(date.createdDate) <= endDate;
    });
    dispatch(setContents(filteredDates));
  };

  const updatedDateRangeFilter = (value: any) => {

    let startDate = new Date(value ? value[0] : "");
    let endDate = new Date(value ? value[1] : "");

    let filteredDates = allContents.filter(function(date: mdlContent) {
      return new Date(date.updatedDate) >= startDate && new Date(date.updatedDate) <= endDate;
    });
    dispatch(setContents(filteredDates));
  };






  return (
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
          value={filterValues.contentName}
          style={{height: "24.40", padding: "3.5px", borderRadius: "5px", paddingLeft: "12px", color: "black"}}
        />
      </th>
     <th scope="col">
      <DateRangePicker onOk={createdDateRangeFilter} onClean={()=>dispatch(setContents(allContents))} size="sm"/>
      </th>
      <th scope="col">
      <DateRangePicker onOk={updatedDateRangeFilter} onClean={()=>dispatch(setContents(allContents))} size="sm"/>
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
          value={filterValues.contentTags}
          onChange={handleChange}
          style={{height: "24.40", padding: "3.5px", borderRadius: "5px", paddingLeft: "12px", color: "black"}}
        />
      </th>
    </thead>
  );
};

export default ContentFilters;
