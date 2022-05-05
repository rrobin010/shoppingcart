import React from "react";
import Items from "./Items";
import Bottom from "./Bottom";
import Header from "./Header";
import {Arr}  from "./Arr";

const App = () => {  

  return(
    <>
    <Header/>
    {Arr.map((val,ind)=>{
        return(
        <Items 
        key={ind}
        id={ind}
        imag={val.imge} 
        title={val.name} 
        prc={val.price} 
        avail={val.availability} 
        clr={val.color}
        />

        )
    }
  )}
    
    <Bottom/>
    </>
  )
}
export default App;