import { useEffect, useRef } from 'react';
import * as echarts from 'echarts/dist/echarts.js';
import './Echart.scss';

export const BarChat = ({ ydata,xdata,title,width,height,minWidth }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current);

        const option = {
            title: {
                text: title,
                left: 'center',
            },
            legend: {
                top: 'bottom',
                left: 'center',
                data: ['贴标量']
              },
            xAxis: {
                name: '日期',
                type: 'category',
                data: xdata,
                splitLine: {
                    show: false,
                },
                axisLine: {
                    lineStyle: {
                        color: '#a5a5a5',  // 深黑色
                        width: 1
                    }
                },
                axisTick: {
                    show: false
                  },
            },
            yAxis: {
                interval: 7500,
                max: function (value) {
                    // 计算最大值，使其为interval的整数倍
                    return Math.ceil(value.max / 7500) * 7500;
                },
                    // axisLabel: {
                    //     formatter: '{value}'  // 自定义刻度标签格式化
                    // },
                splitLine: {
                    show: false,  // 取消网格线
                    
                    lineStyle: {
                        
                        color: '#878787',  // 设置横向线颜色
                        width: 1,       // 设置线条宽度
                        type: 'dashed'   // 设置线条类型：实线、虚线、点线
                    }
                },
                type: 'value',
            },
           
            series: [
                
                {
                    markLine: {
                        silent: true,  // 不触发事件
                        symbol: ['none', 'none'],
                        lineStyle: {
                            color: '#ff5555',  // 设置横向线颜色
                            width: 2,       // 设置线条宽度
                            type: 'solid',   // 设置线条类型：实线、虚线、点线
                            
                        },
                        data: [
                            { xAxis: 15000, yAxis: 15000},
                            
                              ] },
                    name: '贴标量',
                    data: ydata,
                    type: 'bar',
                    label: {
                        show: true,            // 显示标签
                        position: 'top',       // 标签显示在顶部
                        formatter: '{c}',
                        color: '#939393',     // 标签内容，{c} 表示数据值
                    },
                    barWidth: '26%',
                    
                    smooth: true,
                    
                    itemStyle: {
                        borderRadius:[4,4,0,0],
                        color:{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 1,
                            colorStops: [
                                { offset: 0, color: '#968bf9' },  // 浅紫色
                                { offset: 1, color: '#7466f9' }   // 深红色
                            ]
                        }
                    },
                },
            ],
        };

        // 使用配置项生成图表
        chartInstance.setOption(option);

        const handleRasize = () => {
            chartInstance.resize();
        };
        window.addEventListener('resize', handleRasize);

        // 在组件卸载时销毁图表实例
        return () => {
            chartInstance.dispose();
        };
    }, [xdata, title,ydata]);

    return (
    <div className='echartbox' style={{width:width,height:height,minWidth:minWidth}}>
    <div ref={chartRef} style={{ height: '100%', width: '100%', padding: '10px 0px'}} />
    </div>


    );
};

export const PieChart=({data,title,width,height,minWidth,color})=>{
    const chartRef = useRef(null);
    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current);

        const option = {
            title: {
                text: title,
                left: 'center',
            },
            tooltip: {
                trigger: 'item'
              },
            legend: {
                top: 'bottom',
                left: 'center',
                data: data

              },
           
            series: [
                {
                  name: '库存分析',
                  type: 'pie',
                  radius: ['38%', '72%'],
                  avoidLabelOverlap: false,
                  padAngle: 5,
                  itemStyle: {
                    borderRadius: 10,
                    
                  },
                  label: {
                    show: true,
                    position: 'inside',
                    formatter: ' {d}%', 
                    fontSize: 12,
                    fontWeight: 'bold',
                    color: '#fefefe'
                  },
                  emphasis: {
                    label: {
                      show: true,
                      fontSize: 20,
                      fontWeight: 'bold'
                    }
                  },
                  labelLine: {
                    show: false
                  },
                  data: data,
                }
              ]
        };
        // 使用配置项生成图表
        chartInstance.setOption(option);

        const handleRasize = () => {
            chartInstance.resize();
        };
        window.addEventListener('resize', handleRasize);

        // 在组件卸载时销毁图表实例
        return () => {
            chartInstance.dispose();
        };
    }, [data, title,color]);

    return (
        <div className='echartbox' style={{width:width,height:height,minWidth:minWidth,padding: '10px 10px'}}>
        <div ref={chartRef} style={{ height: '100%', width: '100%' }} />
        </div>
    );
}