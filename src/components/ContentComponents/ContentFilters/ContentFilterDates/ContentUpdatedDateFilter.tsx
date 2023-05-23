import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'rsuite'
import { setContents} from '../../../../redux/contents/contentsSlice';
import { mdlContent } from '../../../../types/Type';
import { RootState } from '../../../../redux/store';

const ContentUpdatedDateFilter = () => {
    const allContents = useSelector((state: RootState)=>state.contents.allContents);
    const dispatch = useDispatch();

    const updatedDateRangeFilter = (value: any) => {

        let startDate = new Date(value ? value[0] : "");
        let endDate = new Date(value ? value[1] : "");
    
        let filteredDates = allContents.filter(function(date: mdlContent) {
          return new Date(date.updatedDate) >= startDate && new Date(date.updatedDate) <= endDate;
        });
        dispatch(setContents(filteredDates));
      };
    
    
  return (
    <DateRangePicker onOk={updatedDateRangeFilter} onClean={()=>dispatch(setContents(allContents))} size="sm"/>
  )
}

export default ContentUpdatedDateFilter