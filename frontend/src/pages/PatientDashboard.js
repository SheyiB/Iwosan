import * as React from 'react';
import { useNavigate } from 'react-router-dom';

//Import CSS
import './PatientDashboard.css';


//Import Images
import Logo from '../assets/Logo.png'
import ExpandIcon from '../assets/ExpandIcon.png'
import Chats from '../assets/Chats.png'
import Doctors from '../assets/Doctors.png'
import Emergency from '../assets/Emergency.png'
import PathologyResults from '../assets/PathologyResults.png'
import Settings from '../assets/Settings.png'
import Logout from '../assets/Logout.png'
import Avatar from '../assets/Avatar.png'
import Bell from '../assets/Bell.png'
import Search from '../assets/Search.png'
import light from '../assets/light.svg'
import AppointmentGraph from '../assets/AppointmentGraph.png'
import CausesRange from '../assets/CausesRange.png'
import Covid19 from '../assets/Covid19.png'
import Diagnostics from '../assets/Diagnostics.png'
import HealthIndex from '../assets/HealthIndex.png'
import Patients from '../assets/Patients.png'
import ChatsLight from '../assets/ChatsLight.png';
import DoctorsLight from '../assets/DoctorsLight.png'
import ExpandIconLight from '../assets/ExpandIconLight.png'
import LogoLight from '../assets/LogoLight.png'
import LogoutLight from '../assets/LogoutLight.png'
import PathologyResultsLight from '../assets/PathologyResultsLight.png'
import SettingsLight from '../assets/SettingsLight.png'

//Import Components
import ToggleSwitch from '../components/ToggleSwitch'
import AppointmentBox from '../components/box';
import Selector from '../components/switch';
import DoctorBox from '../components/doctorBox';
import NavItem from '../components/NavItem';

//Import Data
import {doctorsList, navbottomContents, navtopContents, previousAppointments, upcomingAppointments } from '../helpers/data'



function PatientDashboard() {

  const patientMail = localStorage.getItem("patientMail")
  
  const navigate = useNavigate();

  // Check if patientMail is empty or null
  if (!patientMail || patientMail === '') {
    // Redirect to login
    
    React.useEffect(()=>{
      navigate('/');
    })
  }

  const [image, setImage] = React.useState([LogoLight, ExpandIconLight, ChatsLight, DoctorsLight, PathologyResultsLight, SettingsLight, LogoutLight]);

  React.useEffect(() => {
    if (typeof MutationObserver !== 'undefined'){
    // Create a new mutation observer
    const observer = new MutationObserver((mutationsList, observer) => {
      // Look through all mutations that just occured
      for(let mutation of mutationsList) {
        // If the addedNodes property has a node
        if (mutation.attributeName === 'class') {
          const isDarkTheme = document.body.classList.contains('dark');
          setImage(isDarkTheme ? 
            [Logo, ExpandIcon, Chats, Doctors, PathologyResults, Settings, Logout] : 
            [LogoLight, ExpandIconLight, ChatsLight, DoctorsLight, PathologyResultsLight, SettingsLight, LogoutLight]);
        }
      }
      
    });
    // Start observing the document.body with configured parameters
    observer.observe(document.body, {attributes: true});

    return () => observer.disconnect();}
    else {
      // Handle the case when MutationObserver is not supported
      console.warn('MutationObserver is not supported in this environment.');
    }
  },  []); // Run only on initial render

  
    return (
      
      <div className='flex main'>
        <div className='sidebar   '>
            <div className='nav-heading'>
            <img src={image[0]} alt=''/>
            <img src={image[1]} alt=''/>
            </div>
            <div className='nav-content'>
                {navtopContents.map( item =>  <NavItem key={item.title} item={item.title} icon={item.image} notification={item.notification}/> )}
                <h3 className='nav-mid-header'> ACCOUNT </h3>
                {navbottomContents.map( item =>  <NavItem key={item.title} item={item.title} icon={item.image} notification={item.notification} /> )}
            </div>
            
            <div className='nav-footer'>
            
              <span className='nav-footer-image'> <img src={Emergency} alt='' /> </span>
              <span className='nav-footer-texts'>
                <span className='nav-footer-head'>Emergency Hotlines</span>
                <span className='nav-footer-content'>+234 92 928 2891 &nbsp; +234 60 621 2098</span>
              </span>
            
            </div>


        </div>

        <div className='dashboard w-96'>
            <div className='dashboard-header'>

              <span className='dashboard-search'>
                <span className='search-icon'> <img src={Search} alt=''/> </span>  
                <input className='search-box' type='search' placeholder='Search pathology Results'/> 
              </span>

              <span className='bell'> <span className='bell-container'> <img className='bell-icon' src={Bell} alt='' /> </span> </span>
              
              <span className='profile'> 
               <img className='avatar' src={Avatar} alt=''/> 
                <span className='user-info'>
                  <span> {patientMail} </span>
                  <span className='user-type'> PATIENT </span>
                </span>
              </span>

            </div>
            
            <div className='dashboard-mid'>
              <span className='dashboard-mid-left'> 
                <span className='dashboard-mid-left-header'>Welcome {patientMail}</span>
                <span className='dashboard-mid-left-text'>How are you feeling today?</span>
              </span>

              <span className='dashboard-mid-right'>  
                <img src={light} alt=''/>
                <span> 
                  <span> <ToggleSwitch/> </span>
                </span>
              </span>
            </div>
            
            <div className='dashboard-main'>
              <div className='Diagnostics dashboard-boxes'> <img src={Diagnostics} alt=''/> </div>
              <div className='Patients dashboard-boxes' > <img src={Patients} alt=''/> </div>
              <div className='HealthIndex dashboard-boxes'> <img src={HealthIndex} alt=''/> </div>
              <div className='AppointmentsTable dashboard-boxes'> 
              <div className='Appointment-Top'> <img src={AppointmentGraph} alt=''/> </div>
              <div className='Appointment-Mid' > 
                <span>UPCOMING APPOINTMENTS</span>
               <span className='upcoming-appointments'>  {upcomingAppointments.map( item => <AppointmentBox color={item.color} date={item.date} name={item.name} type={item.type} key={item.date} />  )} </span>
              </div>
              <div className='Appointment-End'> 
              <span>PREVIOUS APPOINTMENTS</span> 
              <span className='selector'> <Selector text1='DAY' text2='WEEK' text3='MONTH' activeBox='text2' /> </span> 
              <span className='prev-appointments'> {previousAppointments.map( item => <AppointmentBox color={item.color} date={item.date} name={item.name} type={item.type} key={item.date} />  )}</span> 
              </div>
              
              
              </div>
              <div className='Covid19 dashboard-boxes'> <img src={Covid19} alt='' /> </div>
              <div className='CausesRange dashboard-boxes'> <img src={CausesRange} alt=''/> </div>
              <div className='Doctors dashboard-boxes'> 

              <span className='doctors-top'>
                <span className='doctors-title'>DOCTORS </span>
                <span className='doctors-search'> 
                   <img src={Search} alt=''/>  
                  <input type='search' placeholder='Search Doctors by name or title'/>
                </span>
                <span className='doctor-gender' >
                    <Selector text1='ALL' text2='MEN' text3='WOMEN' activeBox='text1' />
                </span>
              </span>

              <span className='doctors-mid'>
                
                <span className='doctors-table-header'>
                <span className='doc-name'> NAME </span>
                <span> ROLE </span>
                <span> BOOKED APPOINTMENTS </span>
                <span> CHAT </span>
                <span> BOOK NEW APPOINTMENTS </span>
                </span>

                <span className='doctor-table'>
                  {doctorsList.map(item => <DoctorBox name={item.name} role={item.role} bookedAppointments={item.bookedAppointment} bookStatus={item.bookedStatus} key={item.name} />)}                  
                </span>
              
              </span>

              
              <span className='doctors-end'>
                <button>GO TO DOCTORS</button>
              </span>
              </div>
            </div>
        </div>
      </div>
    );
  }
  
export default PatientDashboard;
