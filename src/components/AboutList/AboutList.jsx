/* eslint-disable no-use-before-define */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import menu from '../../JSON/footerAboutList.json'
import List from '../List'
import { useEffect } from 'react';


const AboutList = (props) => {
    useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    window.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, [handleClick]);

 
function handleClick(event) {
  if (event.currentTarget !== event.target && event.target.textContent==="Про Компанию") {
      props.onClose();
  }
  
  }

  function handleKeyDown(event) {
    if (event.code === 'Escape') {
      props.onClose();
    }
  }
        
    return (
        
        <List menu={menu} onClick={handleClick} />
       
    )
   
   
}
export default AboutList