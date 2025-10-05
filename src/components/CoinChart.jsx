import React, { useState, useEffect } from "react";
import { Baseurl } from "./baseUrl";
import { useParams } from "react-router-dom";
import axios from "axios";
import './coinDetail.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js"
  import { Line } from 'react-chartjs-2';
  import Loader from "./Loader";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
const CoinChart = ({currency}) => {
    const {id} = useParams()
    const [days,setDays] = useState(1)
    const [chartData, setChartData]=useState([])
    const CoinChartData = async () =>{
        try{
            const{data} = await axios.get(`${Baseurl}/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`)
            setChartData(data.prices)
            console.log(data.prices)
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        CoinChartData()
    },[currency,id,days])

    let x = '3', y = 1;

    if(window.innerWidth <= 600){
      x = '1';
      y = 0.3;
    }

    const myData={
        labels: chartData.map((value) => {
            const date = new Date(value[0])
            const time = date.getHours()>12 
            ? `${date.getHours()-12} : ${date.getMinutes()} PM`
            : `${date.getHours()} : ${date.getMinutes()} AM`
            return days===1?time:date.toLocaleDateString()
        }),
        datasets:[
            {
            label: `Price in Past Days ${days} in ${currency}`,
            data:  chartData.map((value)=>value[1]),
            borderColor: '#0E2026',
             borderWidth: x
            }
        ]
    }
  return (
    <>
     {
      chartData.length === 0 ? ( <Loader style={{width:"70%"}}/>) : (

        <div className='line'>
        {/* <Line data={myData} />  */}
        <Line data={myData} options={{
          elements:{
              point:{
                  radius:y, 
              }
          }
        }} style={{marginTop:"3rem", width:"60rem", strokewidth: "50"}} />
  
  <div className='btns-2' style={{marginTop:"15px"}}>
               <button onClick={()=>setDays(1)} >24 hours</button>
               <button onClick={()=>setDays(30)}>1 Month</button>
               <button onClick={()=>setDays(365)}>1 Year</button>
             </div>
      </div>
      )
     }
     </>
  )
}

export default CoinChart
