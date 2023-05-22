import * as React from 'react';
import './NavItem.css';

function NavItem({item, icon, notification}){  
    return (
      <div className='nav-items'>
        <span><img src={icon} alt='' /> </span>
        <span>{item}</span>
        <span><img src={notification} alt='' /> </span>
      </div>
      
    )
  }
  
export default NavItem;
