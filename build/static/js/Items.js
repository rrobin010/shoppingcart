import React, { useState } from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveIcon from '@mui/icons-material/Remove';
const csstyle={
    width:"20px",
    heigth:"20px",
    color:"rgba(60, 60, 60, 1)"
}

const img = new URL("../images/watch.png",import.meta.url)
const Items = (props) => {
    let count=0
    const [cval,upval]=useState(count);
    const incval = () => {
        upval(cval + 1)
    }
    const decval = () => {
        if(cval>0){
            upval(cval - 1)
        }
        else{
            upval(0);
        }
    }
    return(
        <>
        <div className="main">
            <div className="child_1">
                <div className="img_cont">
                    <img src={props.imag}/>
                </div>
                <div className="item_quantity"><RemoveIcon style={csstyle} onClick={decval} />{cval}<AddCircleOutlineIcon style={csstyle} onClick={incval}/></div>
            </div>
            <div className="child_2">
                <div className="item_des">
                    <h3 className="item_name i">{props.title}</h3>
                    <p className="item_price i">{props.prc}</p>
                    <p className="item_color i">Color:<span className="clr">{props.clr}</span></p>
                    <p className="item_avail i">{props.avail}</p>
                </div>
                <div className="btns">
                    <div className="del_btn">
                        <button className="del b">Delete</button>
                    </div>
                    <div className="more_btn">
                        <button className="more b">See more like this</button>
                    </div>
                </div>

            </div>
           

        </div>
        
        </>
    )
}
export default Items;
