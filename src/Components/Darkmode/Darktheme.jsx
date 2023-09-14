import React, { useState } from 'react'
import Themeheader from './Themeheader';
import { mycontext } from './Mycontext';

const Darktheme = () => {
    const[state,Setstate] = useState(["black","white"])
    
    const setdata = ()=>
    {
        if(state[0] == "black"){
            Setstate([
                "white","black"
              ])
        }
        else{
            Setstate([
                "black","white"
              ])  
        }
    }
  return (
    <div>
        <mycontext.Provider value={state}>
           <Themeheader />
           <button onClick={setdata}>toggle button {state[1]} </button>
        </mycontext.Provider>
    </div>
  )
}

export default Darktheme
