import React from "react";

const Bottom = (props) => {
    let num=props.id+1;
    console.log(num)
    

    return(
        <>
        
        <div className="proceed">
            <h3 className="total">Subtotal Rs13500</h3>
            <button className="pro_btn">Proceed to buy({num})</button>
        </div>
        </>
    )
}
export default Bottom;