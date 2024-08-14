import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import { Layout } from 'antd';
import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from "./assets/logo.svg";
import { useState } from "react";
import Header from "./components/Header";
import "./index.css"



const { Content, Sider } = Layout;
const RootLayout = () => {
 
    const getitems = (key,label,path,icon)=>{
        return {
            key,
            label,
            path,
            icon,
        }
    }
    const [key, setKey] = useState('home')
    const items = [
        getitems("home","主页","/",key==="home" ? <Icon icon="solar:home-angle-2-bold" style={{color:'white'}}/>:<Icon icon="solar:home-angle-2-linear" />),
        getitems("Setting","任务","/Setting",key== "Setting" ? <Icon icon="solar:settings-minimalistic-bold" style={{color:'white'}}/>:<Icon icon="solar:settings-minimalistic-linear" />),
        getitems("Form","报表","/Form",key== "Form" ? <Icon icon="solar:chart-square-bold" style={{color:'white'}}/>:<Icon icon="solar:chart-square-linear" />),

    ]
    return ( 
        <Layout 
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible width={200} collapsed={false} trigger={null} style={{background: '#fff'}}>
        <div className="demo-logo-vertical" >
            <img src={Logo} alt="logo" style={{width:'30px',height:'30px'}}/>
            <strong style={{fontSize:'20px',fontWeight:'500',marginLeft:'2px',color:'#121212'}}>Task Sysem</strong>
        </div>
        <Menu items={items} selectitem={(key)=>{setKey(key)}}/>
      </Sider>
      <Layout style={{background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.9), rgba(240, 240, 255, 0.7) 20%, rgba(230, 240, 255, 0.5) 50%, rgba(220, 230, 240, 0.3) 80%, rgba(210, 220, 230, 0.1)), linear-gradient(135deg, #f3f4f6, #e0e5eb)'}}>
        <Header title="Task Manager"/>
        <Content
          style={{
            // margin: '0 16px',
            background: '#E3EAF500',
            overflowY:'scroll',
            height:'calc(100vh - 64px)',
            scrollbarWidth:'none',
          }}
        >
          
          <div
            style={{
            //   padding: 24,
              margin:'0px 16px',
              minHeight: 360,
              
              // background: 'linear-gradient(135deg, #6656f9, #6a82fb, #fc5c7d);',
              
            }}
          >
           <Outlet/>
          </div>
        </Content>
        {/* <Footer
          style={{
            background: '#E3EAF5',
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  
     );
}
 
export default RootLayout;