import React from "react";
import ProjectRefresh from "../../ProjectRefresh";
import { DateRangePicker } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { project } from "../../../../types/Type";
import { setProjects } from "../../../../redux/projects/projectsSlice";

export interface IProjectFilterInputs {
  filterValues: {
    projectName: string;
    createdDate: string;
    updatedDate: string;
    visibilityRole: number;
  };
  setFilterValues: React.Dispatch<
    React.SetStateAction<{
      projectName: string;
      createdDate: string;
      updatedDate: string;
      visibilityRole: number;
    }>
  >;
  projectsControl: string;
  adminLoggedIn: boolean;
}

const ProjectFilterInputs: React.FC<IProjectFilterInputs> = ({
  filterValues,
  setFilterValues,
  projectsControl,
  adminLoggedIn,
}) => {
  const handleChange = (e: any) => {
    setFilterValues({ ...filterValues, [e.target.name]: e.target.value });
    if (e.target.name === "visibilityRole") {
      setFilterValues({ ...filterValues, visibilityRole: e.target.value });
    }
  };

  const projects = useSelector((state: RootState)=>state.projects.projects);
  const dispatch = useDispatch();

  const handleDateChange = (value: any) => {

    // var dateArray = [new Date('2023-01-01'), new Date('2023-02-15'), new Date('2023-03-20'), new Date('2023-04-10')];

    var startDate = new Date(value[0] && value[0]);
    var endDate = new Date(value[1] && value[1]);

    var filteredDates = projects.filter(function(date: project) {
      debugger;
      return new Date(date.createdDate) >= startDate && new Date(date.createdDate) <= endDate;
    });
    // console.log(filteredDates);
    dispatch(setProjects(filteredDates));

    console.log('Başlangıç Tarihi:', new Date(value[0]).toLocaleDateString());
    console.log('Bitiş Tarihi:', new Date(value[1]).toLocaleDateString());
  };

  return (
    <thead className="thead-dark" style={{textAlign: "center"}}>
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
          placeholder="Project Name"
          name="projectName"
          size={10}
          onChange={handleChange}
        />
      </th>
      <th scope="col">
      <DateRangePicker cleanable onChange={handleDateChange} onClick={()=>console.log("tıklandı")}/>
      </th>
      <th scope="col">
        <input
          placeholder="Updated..."
          name="updatedDate"
          size={7}
          onChange={handleChange}
        />
      </th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      {(projectsControl !== "allProjects" || !adminLoggedIn) && (
        <th scope="col">
          <ProjectRefresh />
        </th>
      )}
    </thead>
  );
};

export default ProjectFilterInputs;
