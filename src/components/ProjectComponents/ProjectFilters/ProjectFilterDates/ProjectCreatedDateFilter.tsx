import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'rsuite'
import { dateFilterClear, setProjects, setVisibilityProjects } from '../../../../redux/projects/projectsSlice';
import { mdlProject } from '../../../../types/Type';
import { RootState } from '../../../../redux/store';


export interface IProjectDateFilter{
    adminLoggedIn: boolean;
}

const ProjectCreatedDateFilter: React.FC<IProjectDateFilter> = ({adminLoggedIn}) => {

    const dispatch = useDispatch();
    const allProjects = useSelector((state: RootState)=>state.projects.allProjects);
    const allVisibilityProjects = useSelector((state: RootState)=>state.projects.allVisibilityProjects);

    const createdDateRangeFilter = (value: any) => {

        if(adminLoggedIn)
        {
          let startDate = new Date(value ? value[0] : "");
          let endDate = new Date(value ? value[1] : "");
          let filteredDates = allProjects.filter(function(date: mdlProject) {
            return new Date(date.createdDate) >= startDate && new Date(date.createdDate) <= endDate;
          });
          dispatch(setProjects(filteredDates));
        }else{
          let startDate = new Date(value ? value[0] : "");
          let endDate = new Date(value ? value[1] : "");
          let filteredDates = allVisibilityProjects.filter(function(date: mdlProject) {
            return new Date(date.createdDate) >= startDate && new Date(date.createdDate) <= endDate;
          });
          dispatch(setVisibilityProjects(filteredDates));
        }
        };

  return (
    <DateRangePicker onOk={createdDateRangeFilter} onClean={()=>dispatch(dateFilterClear())} size="sm"/>
  )
}

export default ProjectCreatedDateFilter