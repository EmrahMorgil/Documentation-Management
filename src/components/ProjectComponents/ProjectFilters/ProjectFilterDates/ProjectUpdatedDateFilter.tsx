import React from 'react'
import { IProjectDateFilter } from './ProjectCreatedDateFilter'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { dateFilterClear, setProjects, setVisibilityProjects } from '../../../../redux/projects/projectsSlice';
import { DateRangePicker } from 'rsuite';
import { mdlProject } from '../../../../types/Type';

const ProjectUpdatedDateFilter: React.FC<IProjectDateFilter> = ({adminLoggedIn}) => {
    
    const dispatch = useDispatch();
    const allProjects = useSelector((state: RootState)=>state.projects.allProjects);
    const allVisibilityProjects = useSelector((state: RootState)=>state.projects.allVisibilityProjects);

    const updatedDateRangeFilter = (value: any) => {

        if(adminLoggedIn)
        {
          let startDate = new Date(value ? value[0] : "");
          let endDate = new Date(value ? value[1] : "");
          let filteredDates = allProjects.filter(function(date: mdlProject) {
            return new Date(date.updatedDate) >= startDate && new Date(date.updatedDate) <= endDate;
          });
          dispatch(setProjects(filteredDates));
        }else{
          let startDate = new Date(value ? value[0] : "");
          let endDate = new Date(value ? value[1] : "");
          let filteredDates = allVisibilityProjects.filter(function(date: mdlProject) {
            return new Date(date.updatedDate) >= startDate && new Date(date.updatedDate) <= endDate;
          });
          dispatch(setVisibilityProjects(filteredDates));
        }
      };


  return (
    <DateRangePicker onOk={updatedDateRangeFilter} onClean={()=>dispatch(dateFilterClear())} size="sm"/>
  )
}

export default ProjectUpdatedDateFilter