import React, { useState } from 'react'
import DatePicker  from 'react-pikaday-datepicker';
import "pikaday/css/pikaday.css"
export default function PikaDate() {
    const [date,setDate]=useState('2020-10-26')
    const [month, setMonth]=useState()

  return (
    <div className='bod'>
         <DatePicker 
         className="pikaDay"
         i18n= {{
            previousMonth : 'Oldingi oy',
            nextMonth     : 'Keyingi oy',
            months        : ['Yanvar', 'Fevral', "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"],
            weekdays      : ['Yakshanba','Dushanba','Seshanba','Chorshanba','Payshanba','Friday','Saturday'],
            weekdaysShort : ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
        }}
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
