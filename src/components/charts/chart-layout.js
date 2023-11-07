'use client'
import { useEffect } from 'react';
import Chart from 'react-apexcharts'
import { useState } from 'react';
export default function ChartLayout({chartData, chartOptions, type}){

    const [updateChartData, setUpdateChartData] = useState([]);
    const [updateChartOptions, setUpdateChartOptions] = useState({});

    useEffect(()=>{
        setUpdateChartOptions(chartOptions);
        setUpdateChartData(chartData);
    },[])
    return<Chart 
    options={chartOptions} 
    series={chartData}
    type={type}
    width={'100%'}
    height={'100%'}
     />
    
}