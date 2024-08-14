// import { Icon } from "@iconify/react";
// import { Input } from "antd";
import './Header.scss'

const Header = () => {
    // const minized = ()=>{
    //     window.electronAPI.minimizeWindow()
    // }
    // const maxized = ()=>{
    //     window.electronAPI.maximizeWindow()
    // }
    // const closed = ()=>{
    //     window.electronAPI.closeWindow()
    // }
    return ( 
        <div className="header">
        <div className="left">
                {/* <h1>{title}</h1>    */}
                {/* <Input placeholder="搜索" prefix={<Icon icon="ic:baseline-search" style={{fontSize:'18px',color:'#d2d2d2'}} />} className="search"/>          */}
        </div>
        <div className="right">
            {/* <button type="primary" className="minized" onClick={minized}>
            <Icon icon="material-symbols-light:check-indeterminate-small" style={{fontSize:'24px',marginTop:'1px'}}/>
            </button>
            <button className="maxized" onClick={maxized}>
                <Icon icon="fluent:maximize-20-regular" style={{fontSize:'16px',marginTop:'1px'}}/>
            </button>
            <button className="closed" onClick={closed}>
                <Icon icon="material-symbols-light:close-rounded" style={{fontSize:'24px',marginTop:'0px'}}/>
            </button> */}
            
        </div>
        </div>
     );
}
 
export default Header;