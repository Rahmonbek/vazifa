import React, { useState } from 'react'
import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';
export default function PikaDate() {
    const [date,setDate]=useState(null)
  return (
    <div>
         <DayPicker 
            placeholder="Select Date"
            format="YYYY/MM/DD"
            maxDate={new Date('2020-07-26')}
            value={new Date(date)}
            // onChange={::this.onDateChange}
        />
    </div>
  )
}
