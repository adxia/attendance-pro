import {Link} from "react-router-dom"
import { Button } from "antd";
import "./Menu.css"
const Menu = ({items}) => {
    return ( 
        <div className="menu">
           
            {items.map((item, index) => (
                <Link to={item.path} key={index} className="item"><Button className="btn">{item.key}</Button></Link>
            ))}
          
        </div>
     );
}
 
export default Menu;