import { Icon } from "@iconify/react/dist/iconify.js";
import Banner from "../components/Banner";
import { BarChat, PieChart } from "../components/Echart";
import Table from "../components/Table";
import './Home.scss'
const getitems = (key,CardTitle,Cardcont,Icon)=>{
    return {
        key,
        CardTitle,
        Cardcont,
        Icon,
    }
}
const Home = () => {
    const items = [
        getitems("TotalQty","本月贴标总量",321023, <Icon icon="quill:signature" />),
        getitems("TotalQty","本日贴标数量",14203, <Icon icon="ph:activity-light" />),
        getitems("TotalQty","库存可贴标量",102344, <Icon icon="solar:diagram-up-bold" />),
        getitems("TotalQty","库存待收",14023, <Icon icon="solar:diagram-down-linear"   />),   
    ]
    const data = [
        {name:'可贴标量',value:72344,itemStyle: {
            color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 1,
                y2: 1,
                colorStops: [
                    { offset: 0, color: '#ff7777' },  // 浅红色
                    { offset: 1, color: '#ff5555' }   // 深红色
                ]
            }
        }
    },{name:'待判定',value:14023,itemStyle: {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
                { offset: 0, color: '#66ccff' },  // 浅蓝色
                { offset: 1, color: '#3366ff' }   // 深蓝色
            ]
        }
    }},{name:'待放行',value:62344,itemStyle: {
        color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
                { offset: 0, color: '#99ff99' },  // 浅紫色
            { offset: 1, color: '#33cc33' }   // 深紫色
            ]
        }
    }
},{name:'已完成',value:16000,itemStyle: {
    color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 1,
        y2: 1,
        colorStops: [
            { offset: 0, color: '#cc99ff' },  // 浅绿色
            { offset: 1, color: '#9933ff' }  // 深绿色
        ]
    }
}}

    ]
    const columns = [
        { header: 'Index', accessor: 'id' },
        { header: 'Product Series', accessor: 'address' },
        { header: 'Asn', accessor: 'name' },
        { header: 'Qty', accessor: 'address' },
        { header: 'Date', accessor: 'date' },
        
        { header: 'Status', accessor: 'Status'},
      ];
    
      const data1 = [
        { name: 'OCDI2024080912', age: 707950, email: '41230909021',address:'1980' },
        { name: 'OCDI2024080913', age: 6801715, email: '41230909021',address:'1200'},
        { name: 'OCDI2024080914', age: 6844471, email: '41230909021',address:'324' },
      ];
    
    return ( 
        <div className="Home">
        <Banner items={items}/>
        <div    style={{display:'flex',justifyContent:'space-between'}}>
        <BarChat width="60%" height={"390px"} minWidth={"500px"} ydata={[14201,22221,23000,10653,16083,17093,19019]} xdata={["周一","周二","周三","周四","周五","周六","周日"]}  title={"KPI跟踪"}/>
        <PieChart  width='calc(100% - 10px - 60%)' minWidth={'400px'} height={'390px'}  title={"库存分析"} data={data} />
        </div>
        <div style={{width:'100%',marginTop:'10px',background:'#fff',padding:'10px',borderRadius:'6px'}}>
            <div className="tablehead">
                <p className="tabletitle">新入库记录</p>
                <button className="detailbtn" style={{marginLeft:'auto'}}>查看详情</button>
                <Icon icon="material-symbols:keyboard-double-arrow-right-rounded" style={{marginLeft:'2px',fontSize:'18px',color:'#7466f9'}}/>
            </div>
            <Table columns={columns} data={data1} />
        </div>
        
        

           
       

        

        </div>
     );
}
 
export default Home;