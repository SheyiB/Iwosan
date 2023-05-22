import * as React from 'react';
import './doctorBox.css';
import Avatar from '../assets/Avatar.png'
import Chats from '../assets/ChatsLight.png'

function DoctorBox({name, role, bookedAppointments, bookStatus }) {
    return (
      <div className='doctor-box-main'>
       
       <span className='doctor-name'>
            <img className='avatar' src={Avatar} alt='' />
            <span >{name}</span>
       </span>

       <span >
            {role}
       </span>

       <span className='doctor-booked-appointments'>
            {bookedAppointments}
       </span>

       <span className='doctor-chats'>
            <img className='avatar' src={Chats} alt='' />
       </span>
       
       <span className='doctor-appointments'>
            <span className={`doctor-button ${bookStatus === 'BOOKED'? 'booked' : 'free'}`}> {bookStatus}</span>
            <span> ... </span>
       </span>
       

      </div>
    );
  }
  
export default DoctorBox;
