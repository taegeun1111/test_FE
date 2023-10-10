import React, {useEffect} from 'react';
import {findList, findLogin} from "./apis/loginApi";

const CustomCalendar = () => {
  useEffect(()=>{
    findList()
    findLogin()
  },[])

  return (
    <div>

    </div>
  );
};

export default CustomCalendar;