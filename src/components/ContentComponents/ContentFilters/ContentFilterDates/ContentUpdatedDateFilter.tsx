import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DateRangePicker } from 'rsuite'
import { setContents} from '../../../../redux/contents/contentsSlice';
import { mdlContent } from '../../../../types/Type';
import { RootState } from '../../../../redux/store';

const ContentUpdatedDateFilter: React.FC = () => {

  const contents = useSelector((state: RootState)=>state.contents.contents);
  const dispatch = useDispatch();
  const [updatedDateFilter, setUpdatedDateFilter] = useState();

    const updatedDateRangeFilter = (value: any) => {

        let startDate = new Date(value ? value[0] : "");
        startDate.setDate(startDate.getDate()-1);
        let endDate = new Date(value ? value[1] : "");
    
        let filteredDates = contents.filter(function(date: mdlContent) {
          return new Date(date.updatedDate) >= startDate && new Date(date.updatedDate) <= endDate;
        });
        setUpdatedDateFilter(contents);
        dispatch(setContents(filteredDates));
      };
    
    
  return (
    <DateRangePicker onOk={updatedDateRangeFilter} onClean={()=>dispatch(setContents(updatedDateFilter))} size="sm"/>
  )
}

export default ContentUpdatedDateFilter