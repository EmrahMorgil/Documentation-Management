import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'rsuite'
import { setContents} from '../../../../redux/contents/contentsSlice';
import { mdlContent } from '../../../../types/Type';
import { RootState } from '../../../../redux/store';

const ContentCreatedDateFilter: React.FC = () => {

    const contents = useSelector((state: RootState)=>state.contents.contents);
    const dispatch = useDispatch();
    const [createdDateFilter, setCreatedDateFilter] = useState();


    const createdDateRangeFilter = (value: any) => {
        let startDate = new Date(value ? value[0] : "");
        startDate.setDate(startDate.getDate()-1);
        let endDate = new Date(value ? value[1] : "");
        
        let filteredDates = contents.filter(function(date: mdlContent) {
          return new Date(date.createdDate) >= startDate && new Date(date.createdDate) <= endDate;
        });
        setCreatedDateFilter(contents);
        dispatch(setContents(filteredDates));
      };
  return (
    <DateRangePicker onOk={createdDateRangeFilter} onClean={()=>dispatch(setContents(createdDateFilter))} size="sm"/>
  )
}

export default ContentCreatedDateFilter