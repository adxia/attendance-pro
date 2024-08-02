import { Outlet } from "react-router-dom";
import Menu from "./components/Menu";
import { Layout } from 'antd';


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
    const items = [
        getitems("home","home","/"),
        getitems("Stting","Setting","/Setting"),
    ]
    return ( 
        <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={false} theme="light" trigger={null}>
        <div className="demo-logo-vertical" />
        <Menu items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: '#fff',
            
          }}
        />
        <Content
          style={{
            margin: '0 16px',
          }}
        >
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              
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