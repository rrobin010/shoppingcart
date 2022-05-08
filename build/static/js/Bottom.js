import React from "react";
import {Arr} from "./Arr";

const Bottom = (props) => {
   let totItemns=Arr.length;
   function sumprice(){
    let sum=0;
    Arr.map(({priceNum})=>{
      sum+=priceNum;
      
    })
    return sum;
  }
    

    return(
        <>
        
        <div className="proceed">
            <h3 className="total">Subtotal Rs{sumprice()}</h3>
            <button className="pro_btn">Proceed to buy({totItemns} items)</button>
        </div>
        </>
    )
}
export default Bottom;