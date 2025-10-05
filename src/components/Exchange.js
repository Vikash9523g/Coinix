import React, { useEffect, useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { Baseurl } from './baseUrl'
import Loader from './Loader'
import Hero from './Hero'
import Space from './Space'
import Footer from './Footer'

const Exchange = () => {
  const [Loading, setLoading] = useState(true);
  const [currency, setCurrency] = useState("inr");
  const currencySymbol = currency === "inr" ? "₹" : "$";
  const[exchanges, setExchanges]=useState([])
  useEffect(() => {
    const getData = async () => {
      try{
      const {data} = await axios.get(`${Baseurl}/exchanges`)
      console.log(data);
      setLoading(false);
      setExchanges(data);
      } catch(error){
        console.log("API LIMIT EXCEED");
        setLoading(false);
      }
    };
    getData();
  },[])
  return (

    <>
    {
    Loading ? <Loader/> : <>
    <Header/>
    <Hero/>
    <Space/>
    <div className="heading" style={{marginTop:" 4rem", maxWidth:"1220px", marginLeft:"auto", marginRight:"auto", paddingLeft: "18px", paddingRight: "18px"}}>
                <h6>Top 10 Crypto's according to their trust scores.</h6>
            </div>
      <div>
        {
        exchanges.slice(0,10).map((item,i)=> {
          return(
        <div key={i} className="ex-cards"> 
           <div className="image">
            <img src={item.image} alt="coinLogo" height={"40px"}/>
           </div>
           <div className="name">{item.name}</div>
           <div className="price">{currencySymbol}{" "}{item.trade_volume_24h_btc.toFixed(0)}</div>
           <div className="rank">{item.trust_score_rank}</div>
        </div>
        )
      })
      }
      </div>
      <Footer/>
      </>
    }
    </>
  )
}

export default Exchange
