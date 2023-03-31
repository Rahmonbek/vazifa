import React, { useState } from 'react'
import DatePicker  from 'react-pikaday-datepicker';
export default function PikaDate() {
    const [date,setDate]=useState({})
  return (
    <div>
         <DatePicker 
            placeholder="Select Date"
            format="YYYY/MM/DD"
            maxDate={new Date('2020-07-26')}
            value={new Date(date)}
            // onChange={::this.onDateChange}
        />
    </div>
  )
}
