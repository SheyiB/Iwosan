import Appointments from '../assets/Appointments.png'
import Overview from '../assets/Overview.png'
import Notification from '../assets/Notification.png'
import ChatsLight from '../assets/ChatsLight.png';
import DoctorsLight from '../assets/DoctorsLight.png'
import LogoutLight from '../assets/LogoutLight.png'
import PathologyResultsLight from '../assets/PathologyResultsLight.png'
import SettingsLight from '../assets/SettingsLight.png'

const navtopContents = [{ 'title' : 'Overview', 'image': Overview }, { 'title' : 'Appointments', 'image': Appointments }, { 'title' : 'Doctors', 'image':  DoctorsLight }, { 'title' : 'Pathology Results', 'image': PathologyResultsLight }, { 'title' : 'Chats', 'image': ChatsLight, 'notification': Notification }]

const navbottomContents = [{ 'title' : 'Settings', 'image':  SettingsLight }, { 'title' : 'Logout', 'image':  LogoutLight}]

const upcomingAppointments = [{ 'name': 'Dr. Ibrahim Yekeni', 'color': 'blue', 'type' : 'Emergency', 'date' : 'Tuesday, October 24'}, { 'name': 'Dr. Ebuka Kelechi', 'color': 'yellow', 'type' : 'Examination', 'date' : 'Monday, November 2'}, { 'name': 'Dr. Bridget Olowojeje', 'color': 'purple', 'type' : 'Consultation', 'date' : 'Friday, November 13'}, { 'name': 'Dr. Michael Stwart', 'color': 'red', 'type' : 'Routine Checkup', 'date' : 'Thursday, December 9'}]

const previousAppointments = [{ 'name': 'Dr. Scut Tom', 'color': 'skyblue', 'type' : 'SICK VISIT', 'date' : 'Friday, August 11'}, { 'name': 'Dr. Amina Ahmed', 'color': 'purple', 'type' : 'Consultation', 'date' : 'Tuesday, July 30'}, { 'name': 'Dr. Ibrahim Yekeni', 'color': 'yellow', 'type' : 'Examination', 'date' : 'Wednesday, July 12'}, { 'name': 'Dr. Barnabas Paul', 'color': 'blue', 'type' : 'Emergency', 'date' : 'Monday, June 14'}]

const doctorsList =[{'name' : 'Dr. Ibrahim Yekeni', 'role': 'Heart Surgeon', 'bookedAppointment': '66', 'bookedStatus' : 'BOOK'}, {'name' : 'Dr. Ebuka Kelechi', 'role': 'Health Specialist', 'bookedAppointment': '66', 'bookedStatus' : 'BOOK'}, {'name' : 'Dr. Bridget Olowojeje', 'role': 'Family Doctor', 'bookedAppointment': '66', 'bookedStatus' : 'BOOKED'} ]                            

export{ navbottomContents, navtopContents, upcomingAppointments, previousAppointments, doctorsList}