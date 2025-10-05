import axios from "axios";
import Loader from "./components/Loader";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import { Link } from "react-router-dom";
import { Baseurl } from "./components/baseUrl";
import { Switch, Space } from "antd";
import { FaSearch } from "react-icons/fa";

const Coins = () => {
  const [Loading, setLoading] = useState(true);
  const [searchOpened, setsearchOpened] = useState(false);
  const [currency, setCurrency] = useState("inr");
  const [coins, setCoins] = useState([]);
  const currencySymbol = currency === "inr" ? "₹" : "$";
  const [search, setSearch] = useState("");
  useEffect(() => {
    const getCoindata = async () => {
      try {
        const { data } = await axios.get(
          `${Baseurl}/coins/markets?vs_currency=${currency}`
        );
        console.log(data);
        setCoins(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getCoindata();
  }, [currency]);

  const styles = {
    popup:{
        display: searchOpened ? "flex" : "none",
        opacity: searchOpened ? "1" : "0",
      
    }
  };
  return (
    <>
      {Loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="search-bar" style={styles.popup}>
            <input
              type="text"
              placeholder="Search Coins"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="menu-icon">
          <a onClick={() => setsearchOpened((prev) => !prev)} style={{color:"white", left:"90%", position:"fixed", top:"2.5%"}}>
            <FaSearch size={25}  />
          </a>
        </div>
          {/* <Space direction="vertical" className="btns">
            <Switch
              checkedChildren={() => setCurrency("inr")}
              unCheckedChildren={() => setCurrency("usd")}
              defaultChecked
            />
          </Space> */}
          {coins.filter((data) => {
              if (data === "") {
                return data;
              } else if (
                data.name.toLowerCase().includes(search.toLowerCase())
              ) {
                return data;
              }
            })
            .map((coinData, i) => {
              return (
                <CoinCard
                  coinData={coinData}
                  i={i}
                  id={coinData.id}
                  currencySymbol={currencySymbol}
                />
              );
            })}
        </>
      )}
    </>
  );
};

const CoinCard = ({ coinData, i, id, currencySymbol }) => {
  const profit = coinData.price_change_percentage_24h > 0;
  return (
    <Link
      to={`/coins/${id}`}
      style={{ color: "black", textDecoration: "none" }}
    >
      <div key={i} className="ex-cards">
        <div className="image">
          <img src={coinData.image} alt="coinLogo" height={"40px"} />
        </div>
        <div className="name">{coinData.name}</div>
        <div className="price">
          {currencySymbol} {coinData.current_price.toFixed(0)}
        </div>
        <div
          style={profit ? { color: "green" } : { color: "red" }}
          className="rank"
        >
          {profit
            ? "+" + coinData.price_change_percentage_24h.toFixed(2)
            : coinData.price_change_percentage_24h.toFixed(2)}%
        </div>
      </div>
    </Link>
  );
};

export default Coins;
