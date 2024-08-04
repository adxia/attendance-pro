import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import { Layout } from 'antd';
import { Icon } from "@iconify/react/dist/iconify.js";
import Logo from "./assets/logo_normal.svg";
import { useState } from "react";
import "./index.css"



const { Header, Content, Footer, Sider } = Layout;
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
        getitems("home","主页","/",key==="home" ? <Icon icon="solar:home-angle-2-bold" style={{color:'#61B9B9'}}/>:<Icon icon="solar:home-angle-2-linear" />),
        getitems("Setting","任务","/Setting",key== "Setting" ? <Icon icon="solar:settings-minimalistic-bold" style={{color:'#61B9B9'}}/>:<Icon icon="solar:settings-minimalistic-linear" />),
        getitems("Form","报表","/Form",key== "Form" ? <Icon icon="solar:chart-square-bold" style={{color:'#61B9B9'}}/>:<Icon icon="solar:chart-square-linear" />),

    ]
    return ( 
        <Layout 
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible width={220} collapsed={false} theme="dark" trigger={null} style={{background: '#1B1F1F'}}>
        <div className="demo-logo-vertical" >
            <img src={Logo} alt="logo" style={{width:'40px',height:'40px'}}/>
            <p style={{fontSize:'24px',fontWeight:'500',marginLeft:'2px',color:'white'}}>Atten</p>
        </div>
        <Menu items={items} selectitem={(key)=>{setKey(key)}}/>
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: '#323232',
            
          }}
        />
        <Content
          style={{
            // margin: '0 16px',
            background: '#fff',
          }}
        >
          
          <div
            style={{
            //   padding: 24,
            margin: 10,
              minHeight: 360,
              background: '#fff',
              
            }}
          >
           <Outlet/>
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  
     );
}
 
export default RootLayout;