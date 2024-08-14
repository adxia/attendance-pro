import './Banner.scss'
import CountUp from 'react-countup';
const Banner = ({items}) => {
    return ( 
        <div className="banner">
            {items.map((item,index)=>(
                
                <div className={`card ${item.key}`} key={index}>
                
                <div className="leftb">
                    <div className='icon'>{item.Icon}</div>
                </div>
                <div className='rightb'>
                <p style={{fontWeight:'400',fontSize:'0.9rem',color:'#A0A0A0',letterSpacing:'1px'}}>{item.CardTitle}</p>
                <CountUp
                start={0}
                end={item.Cardcont}
                duration={0.6}
                separator=","
                className='count'
                />
                </div>
            
            </div>

        ))}
        </div>
     );
}
 
export default Banner;