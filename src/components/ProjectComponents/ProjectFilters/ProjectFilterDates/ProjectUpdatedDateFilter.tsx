import React, {useState} from 'react'
import { IProjectDateFilter } from './ProjectCreatedDateFilter'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { dateFilterClear, setProjects, setVisibilityProjects } from '../../../../redux/projects/projectsSlice';
import { DateRangePicker } from 'rsuite';
import { mdlProject } from '../../../../types/Type';

const ProjectUpdatedDateFilter: React.FC<IProjectDateFilter> = ({adminLoggedIn}) => {
    
    const dispatch = useDispatch();
    const allProjects = useSelector((state: RootState)=>state.projects.allProjects);
    const projects = useSelector((state: RootState)=>state.projects.projects);
    const [updatedDateFilter, setUpdatedDateFilter] = useState();

    const updatedDateRangeFilter = (value: any) => {

        
          let startDate = new Date(value ? value[0] : "");
          let endDate = new Date(value ? value[1] : "");
          let filteredDates = allProjects.filter(function(date: mdlProject) {
            return new Date(date.updatedDate) >= startDate && new Date(date.updatedDate) <= endDate;
          });
          setUpdatedDateFilter(projects);
          dispatch(setProjects(filteredDates));
        
      };


  return (
    <DateRangePicker onOk={updatedDateRangeFilter} onClean={()=>dispatch(setProjects(updatedDateFilter))} size="sm"/>
  )
}

export default ProjectUpdatedDateFilter