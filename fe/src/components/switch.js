import * as React from 'react';
import './switch.css';
import {useState} from 'react'

function Selector({text1, text2, text3,activeBox}) {
    const [active, setActive] = useState(activeBox)
    
    console.log(activeBox)
    return (
      <div className='box-list'>

        <span className={` ${active == 'text1' ? 'active' : 'nonactive'}`}> {text1} </span>
        <span className={`mid-box ${active== 'text2'? 'active' : 'nonactive'}`}> {text2} </span>
        <span className={`${active== 'text3'? 'active' : 'nonactive'}`}> {text3} </span>
      </div>
    );
  }
  
export default Selector;
