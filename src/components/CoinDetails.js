import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import { Baseurl } from "./baseUrl";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/Exchange.css";
import "../components/coinDetail.css";
import {IoPulseOutline} from "react-icons/io5";
import CoinChart from "./CoinChart";

const CoinDetails = () => {
  const [Loading, setLoading] = useState(true);
  const { id } = useParams();
  const [currency, setCurrency] = useState("inr");
  const [coins, setCoins] = useState([]);
  const currencySymbol = currency === "inr" ? "₹" : "$";
  useEffect(() => {
    const getCoin = async () => {
      try {
        const { data } = await axios.get(`${Baseurl}/coins/${id}`);
        //  console.log(data)
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCoin();
  }, [id]);
  const profit = coins.market_data?.price_change_percentage_24h > 0;
  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <div className=" coin-detail" >
            <div className="coin-info">
              {/* <Space direction="vertical" className="btns">
                <Switch
                  checkedChildren={() => setCurrency("inr")}
                  unCheckedChildren={() => setCurrency("usd")}
                  defaultChecked
                />
              </Space> */}
              <div className="time">{coins.last_updated}</div>
              <div className="coin-image">
                <img height={"150px"} src={coins.image.large} alt="" />
              </div>
              <div className="coin-name">{coins.name}</div>
              <div className="coin-price">
                {currencySymbol} {coins.market_data.current_price[currency]}
              </div>
              <div
                className="coin-profit"
                style={profit ? { color: "green" } : { color: "red" }}
              >
                <IoPulseOutline color='orange'width='80px'/>
                (
                {profit
                  ? "+" +
                    coins.market_data.price_change_percentage_24h.toFixed(2)
                  : coins.market_data.price_change_percentage_24h.toFixed(2)})%
              </div>
              <div className='market-rank'>
               #{coins.market_cap_rank}
              </div>
              <div className="coin-desc">
                <p> {coins.description["en"].split(".")[0]} </p>
              </div>
            </div>
            <CoinChart  currency={currency}/>
          </div>
          
        </>
      )}
    </>
  );
};

export default CoinDetails;
