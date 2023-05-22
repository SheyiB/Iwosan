import * as React from 'react';
import './box.css';
import Avatar from '../assets/Avatar.png'

function AppointmentBox({name, type, color, date}) {
    return (
      <div className='box-main'>
       <div className='box-left'>
        <img className='avatar' src={Avatar} alt='' />
        <span className='left-texts'>
            <span className='name'>{name}</span>
            <span className='type' style={{color: `${color}`}} >{type}</span>
        </span>
       </div>

       <div className='box-right'>
        <span> ...</span>
        <span className='date'> {date} </span>
       </div>
      </div>
    );
  }
  
export default AppointmentBox;
