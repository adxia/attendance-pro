import {Link} from "react-router-dom"
import { useState } from "react";

import "./Menu.scss"
const Menu = ({items,selectitem}) => {
    const [Class, setClass] = useState("home")
    const [isselect, setisselect] = useState(false)
    const handellick = (key) => {
        setClass(key)
        selectitem(key)
        setisselect(!isselect)
    }
    return ( 
        <div className="menu">
            <div className={`backbtn ${Class}`}></div>
           
            {items.map((item, index) => (
                <Link to={item.path} key={index} className="item" onClick={() => handellick(item.key)} >{item.icon}<span className={`text ${Class==item.key?"active":""}`}>{item.label}</span></Link>
            ))}

        </div>
     );
}
 
export default Menu;