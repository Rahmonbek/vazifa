import React from 'react'
import Pikaday from 'react-pikaday';
export default function PikaDate() {
  return (
    <div>
        <Pikaday value={date} onChange={this.handleChange} />

    </div>
  )
}
