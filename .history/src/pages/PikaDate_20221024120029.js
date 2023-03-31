import React, { useState } from 'react'
import 'react-daypicker/lib/DayPicker.css';
import DayPicker from 'react-daypicker';
export default function PikaDate() {
    const [date,setDate]=useState(null)
  return (
    <div>
       <DayPicker
  active={new Date()}
  onDayClick={}
/>
    </div>
  )
}
