import React, { useState } from 'react'
import DatePicker  from 'react-pikaday-datepicker';
import "pikaday/css/pikaday.css"
export default function PikaDate() {
    const [date,setDate]=useState('2020-10-26')
    const [month, setMonth]=useState('Yanvar', 'Fevral', "Mart", "Aprel")
  return (
    <div className='bod'>
         <DatePicker 
         className="pikaDay"
            placeholder="Select Date"
            format="DD-MM-YYYY"
            maxDate={new Date('2022-10-26')}
            minDate={new Date('2019-10-26')}
            value={new Date(date)}
            // onChange={::this.onDateChange}
        />
    </div>
  )
}
