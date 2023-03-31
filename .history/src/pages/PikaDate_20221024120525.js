import React, { useState } from 'react'
import DatePicker  from 'react-pikaday-datepicker';
import "pikaday/css/pikaday.css"
export default function PikaDate() {
    const [date,setDate]=useState('2020-10-26')
  return (
    <div className='bod'>
         <DatePicker 
         className="pikaDay"
            placeholder="Select Date"
            format="YYYY/MM/DD"
            maxDate={new Date('2022-10-26')}
            minDate={new Date('2019-10-26')}
            value={new Date(date)}
            // onChange={::this.onDateChange}
        />
    </div>
  )
}
