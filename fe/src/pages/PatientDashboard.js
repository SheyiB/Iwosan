import * as React from 'react';
import './PatientDashboard.css';
import Logo from '../assets/Logo.png'
import ExpandIcon from '../assets/ExpandIcon.png'
import Appointments from '../assets/Appointments.png'
import Chats from '../assets/Chats.png'
import Doctors from '../assets/Doctors.png'
import Emergency from '../assets/Emergency.png'
import Overview from '../assets/Overview.png'
import Notification from '../assets/Notification.png'
import PathologyResults from '../assets/PathologyResults.png'
import Settings from '../assets/Settings.png'
import Logout from '../assets/Logout.png'






const navtopContents = [{ 'title' : 'Overview', 'image': Overview }, { 'title' : 'Appointments', 'image': Appointments }, { 'title' : 'Doctors', 'image': Doctors }, { 'title' : 'Pathology Results', 'image': PathologyResults }, { 'title' : 'Chats', 'image': Chats, 'notification': Notification }]


const navbottomContents = [{ 'title' : 'Settings', 'image': Settings }, { 'title' : 'Logout', 'image':  Logout}]

function NavItem({item, icon, notification}){
  return (
    <div className='nav-items'>
      <span><img src={icon} /> </span>
      <span>{item}</span>
      <span><img src={notification} /> </span>
    </div>
    
  )
}

function PatientDashboard() {
    return (
      <div className='flex main'>
        <div className='navbar border-8 border-indigo-600 w-24'>
            <div className='nav-heading'>
            <img src={Logo} />
            <img src={ExpandIcon} />
            </div>
            <div className='nav-content'>
                {navtopContents.map( item =>  <NavItem key={item.title} item={item.title} icon={item.image} notification={item.notification}/> )}
                <h3 className='nav-mid-header'> ACCOUNT </h3>
                {navbottomContents.map( item =>  <NavItem key={item.title} item={item.title} icon={item.image} notification={item.notification} /> )}
            </div>
            
            <div className='nav-footer'>
            
              <span className='nav-footer-image'> <img src={Emergency} /> </span>
              <span className='nav-footer-texts'>
                <span className='nav-footer-head'>Emergency Hotlines</span>
                <span className='nav-footer-content'>+234 92 928 2891 &nbsp; +234 60 621 2098</span>
              </span>
            
            </div>


        </div>

        <div className='dashboard w-96'>
            <div className='dashboard-header'>
              <span> <input type='search' placeholder='Search pathology Results'/> </span>
              <span>  </span>
              <span> </span>
            </div>
            <div className='dashboard-mid'></div>
            <div className='dashboard-main'></div>
        </div>
      </div>
    );
  }
  
export default PatientDashboard;
