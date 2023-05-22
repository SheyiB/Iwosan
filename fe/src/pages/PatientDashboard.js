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
import Avatar from '../assets/Avatar.png'
import Bell from '../assets/Bell.png'
import Search from '../assets/Search.png'
import ToggleSwitch from '../components/ToggleSwitch'
import light from '../assets/light.svg'
import AppointmentGraph from '../assets/AppointmentGraph.png'
import CausesRange from '../assets/CausesRange.png'
import Covid19 from '../assets/Covid19.png'
import Diagnostics from '../assets/Diagnostics.png'
import HealthIndex from '../assets/HealthIndex.png'
import Patients from '../assets/Patients.png'
import AppointmentBox from '../components/box';
import Selector from '../components/switch';
import DoctorBox from '../components/doctorBox';
import ChatsLight from '../assets/ChatsLight.png';
import DoctorsLight from '../assets/DoctorsLight.png'
import ExpandIconLight from '../assets/ExpandIconLight.png'
import LogoLight from '../assets/LogoLight.png'
import LogoutLight from '../assets/LogoutLight.png'
import PathologyResultsLight from '../assets/PathologyResultsLight.png'
import SettingsLight from '../assets/SettingsLight.png'


const navtopContents = [{ 'title' : 'Overview', 'image': Overview }, { 'title' : 'Appointments', 'image': Appointments }, { 'title' : 'Doctors', 'image':  DoctorsLight }, { 'title' : 'Pathology Results', 'image': PathologyResultsLight }, { 'title' : 'Chats', 'image': ChatsLight, 'notification': Notification }]

const navbottomContents = [{ 'title' : 'Settings', 'image':  SettingsLight }, { 'title' : 'Logout', 'image':  LogoutLight}]

const upcomingAppointments = [{ 'name': 'Dr. Ibrahim Yekeni', 'color': 'blue', 'type' : 'Emergency', 'date' : 'Tuesday, October 24'}, { 'name': 'Dr. Ebuka Kelechi', 'color': 'yellow', 'type' : 'Examination', 'date' : 'Monday, November 2'}, { 'name': 'Dr. Bridget Olowojeje', 'color': 'purple', 'type' : 'Consultation', 'date' : 'Friday, November 13'}, { 'name': 'Dr. Michael Stwart', 'color': 'red', 'type' : 'Routine Checkup', 'date' : 'Thursday, December 9'}]

const previousAppointments = [{ 'name': 'Dr. Scut Tom', 'color': 'skyblue', 'type' : 'SICK VISIT', 'date' : 'Friday, August 11'}, { 'name': 'Dr. Amina Ahmed', 'color': 'purple', 'type' : 'Consultation', 'date' : 'Tuesday, July 30'}, { 'name': 'Dr. Ibrahim Yekeni', 'color': 'yellow', 'type' : 'Examination', 'date' : 'Wednesday, July 12'}, { 'name': 'Dr. Barnabas Paul', 'color': 'blue', 'type' : 'Emergency', 'date' : 'Monday, June 14'}]

const doctorsList =[{'name' : 'Dr. Ibrahim Yekeni', 'role': 'Heart Surgeon', 'bookedAppointment': '66', 'bookedStatus' : 'BOOK'}, {'name' : 'Dr. Ebuka Kelechi', 'role': 'Health Specialist', 'bookedAppointment': '66', 'bookedStatus' : 'BOOK'}, {'name' : 'Dr. Bridget Olowojeje', 'role': 'Family Doctor', 'bookedAppointment': '66', 'bookedStatus' : 'BOOKED'} ]                            

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

  const [image, setImage] = React.useState([LogoLight, ExpandIconLight]);

    
  React.useEffect(() => {
    // Create a new mutation observer
    const observer = new MutationObserver((mutationsList, observer) => {
      // Look through all mutations that just occured
      for(let mutation of mutationsList) {
        // If the addedNodes property has a node
        if (mutation.attributeName === 'class') {
          const isDarkTheme = document.body.classList.contains('dark');
          setImage(isDarkTheme ? [Logo, ExpandIcon] : [LogoLight, ExpandIconLight]);
        }
      }
    });
    // Start observing the document.body with configured parameters
    observer.observe(document.body, {attributes: true});

    return () => observer.disconnect();
  }, []); // Run only on initial render

  
    return (
      <div className='flex main'>
        <div className='sidebar   '>
            <div className='nav-heading'>
            <img src={image[0]} />
            <img src={image[1]} />
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

              <span className='dashboard-search'>
                <span className='search-icon'> <img src={Search}/> </span>  
                <input className='search-box' type='search' placeholder='Search pathology Results'/> 
              </span>

              <span className='bell'> <span className='bell-container'> <img className='bell-icon' src={Bell} /> </span> </span>
              
              <span className='profile'> 
               <img className='avatar' src={Avatar} /> 
                <span className='user-info'>
                  <span> Ola Boluwatife </span>
                  <span className='user-type'> PATIENT </span>
                </span>
              </span>

            </div>
            
            <div className='dashboard-mid'>
              <span className='dashboard-mid-left'> 
                <span className='dashboard-mid-left-header'>Welcome Boluwatife</span>
                <span className='dashboard-mid-left-text'> How are you feeling today?</span>
              </span>

              <span className='dashboard-mid-right'>  
                <img src={light} />
                <span> 
                  <span> <ToggleSwitch/> </span>
                </span>
              </span>
            </div>
            
            <div className='dashboard-main'>
              <div className='Diagnostics dashboard-boxes'> <img src={Diagnostics} /> </div>
              <div className='Patients dashboard-boxes' > <img src={Patients} /> </div>
              <div className='HealthIndex dashboard-boxes'> <img src={HealthIndex} /> </div>
              <div className='AppointmentsTable dashboard-boxes'> 
              <div className='Appointment-Top'> <img src={AppointmentGraph} /> </div>
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
              <div className='Covid19 dashboard-boxes'> <img src={Covid19} /> </div>
              <div className='CausesRange dashboard-boxes'> <img src={CausesRange} /> </div>
              <div className='Doctors dashboard-boxes'> 

              <span className='doctors-top'>
                <span className='doctors-title'>DOCTORS </span>
                <span className='doctors-search'> 
                   <img src={Search}/>  
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
