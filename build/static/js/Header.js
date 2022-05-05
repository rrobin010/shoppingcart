import React from "react";
import SearchIcon from '@mui/icons-material/Search';
const logo = new URL("../images/Logo.png",import.meta.url)
const vec= new URL("../images/Vector.png",import.meta.url)


const Header = () => {
    return(
        <>
        <div className="head_main">
            <div className="lv">
                <img src={vec} className="vect"/>
                <img src={logo} className="log"/>
            </div>
            <div className="smain">
            <div className="search">
                    <SearchIcon style={{position:"absolute",left:"10px",color:"rgba(71, 71, 71, 0.7)",fontSize:"22px"}}/>
                <input type="text" name="search" placeholder="Search" />
                </div>
                </div>
        </div>

        </>
    )
}
export default Header;