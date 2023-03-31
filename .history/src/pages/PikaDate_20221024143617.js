import React, { useState } from 'react'
import DatePicker  from 'react-pikaday-datepicker';
import "pikaday/css/pikaday.css"
export default function PikaDate() {
    const [date,setDate]=useState('2022-10-24')
    const [month, setMonth]=useState()

  return (
    <div className='bod'>
         <DatePicker 
         className="pikaDay"
         i18n= {{
            previousMonth : 'Oldingi oy',
            nextMonth     : 'Keyingi oy',
            months        : ['Yanvar', 'Fevral', "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust", "Sentabr", "Oktabr", "Noyabr", "Dekabr"],
            weekdays      : ['Yakshanba', 'Dushanba','Seshanba','Chorshanba','Payshanba','Juma','Shanba'],
            weekdaysShort : [ 'YA', 'DU','Sesh','Chor','Pay','Ju','Shan']
        }}
            placeholder="Select Date"
            format="DD-MM-YYYY"
            firstDay={1}
            maxDate={new Date('2022-10-26')}
            minDate={new Date('2019-10-26')}
            value={new Date(date)}
            // onChange={::this.onDateChange}
        />
    </div>
  )
}
