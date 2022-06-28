import React,{useState,useEffect} from "react";
// import {
//   set_active_paired_currency,
// } from "../features/Exchange";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import  TVChartContainer  from "./CandleChart";
import AOS from "aos"
import "aos/dist/aos.css"

function CandleGraph(props) {

// dispatch
// const {userInfo} = useSelector((state)=> state.user.value)
  // const symbolState = useSelector((store)=>store);
  
// console.log(props.iCurrency,props.oCurrency,"outputCurrency.symbol.toLowerCase()outputCurrency.symbol.toLowerCase()")
  const dispatch = useDispatch();
  const [inputCurrency,setInputCurrency]=useState(props.iCurrency)

  // const { active_coin, paired_currency,coins ,paired_currency_price,currency_graph} = useSelector(
  //   (state) => state?.exchange?.value
  // );
  const coin ="shib";
   const coins =[{
id:0,
symbol:"SHIB",
symbol_inr:"",
name:"SHIBAINU",
current_price_inr:0.00335725,
raw_current_price_inr:0.00335725,
current_price_usdt:0.000044,
raw_current_price_usdt:0.000044,
current_price_btc:0,
raw_current_price_btc:0,
current_price_vrx:0.01865141,
raw_current_price_vrx:0.01865141,
price_change_percentage_1h_inr:0,
direction_inr:"up",
icon:"https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
volume_24h:0,
is_paired_inr:1,
is_paired_usdt:1,
is_paired_btc:1,
is_paired_custom_coin:1,
is_paired:false,
sync_wallet:true,
   }];
  // const navigate = useNavigate();
  // const { coin } = useParams();
  const [prev_symbol, prevSymbol] =useState("hoo");
   const [currentPrice,setcurrentPrice]=useState("1.5");
  const [newgetchart, NewGetChart] = React.useState(true);
   let browser_currency_pair;
  const filter = "1h"
   if (coin) {
   browser_currency_pair = coin.split("-");
   }
   const SelCurency = browser_currency_pair;
  const symbol2="hoo"

  const data = Object.values(coins).find((d) => {
    if (d.symbol === browser_currency_pair[0].toUpperCase()) {
      return d;
    }
  });
  useEffect(() => {
    AOS.init({duration:1500});
    AOS.refresh();
  }, []);
  // console.log(props.iCurrency,"collapsedcollapsedcollapsed")

  function getChart(symbol, symbol2) {
    prevSymbol(symbol);
  
    return (
      <>
        <TVChartContainer symbols={symbol} pre_symbols={symbol2} />
      </>
    );
  }
  
  useEffect(() => {
    setInputCurrency(props.iCurrency)
    let coinsym =props.iCurrency ==null? "ana-usd" : props.iCurrency;
 
      let fPrice = 1.5;
     setcurrentPrice(fPrice)
 
   NewGetChart(getChart(coinsym, prev_symbol));
}, [props.iCurrency]);
 

  return (
    <>
      {/* <ul className="nav nav-tabs tabs" role="tablist">
        {paired_currency.map((item) => {
          return (
            <>
              {active_coin.indexOf(item) < 0 ? (
                <li className="nav-item" role="presentation">
                  <button
                    className={(active_coin.toLowerCase() + "-" + item.toLowerCase()) == coin ? "nav-link active":"nav-link"}
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                    onClick={() => {
                      // dispatch(set_active_paired_currency({ pcoin: item }));
                      navigate(
                        `../exchange/${active_coin.toLowerCase() + "-" + item.toLowerCase()}`,
                        { replace: true }
                      );
                      
                    }}
                  >
                    {active_coin + "/" + item}
                  </button>
                </li>
              ) : null}
            </>
          );
        })}
      </ul> */}
      <div className="tab-content" id="myTabContent">

      <div id="candleCart1" data-aos="zoom-in">{newgetchart}</div>
        {/* <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="card shadow">
            <div id="chart-container"></div>
          </div>
        </div> */}
        {/* <div
          className="tab-pane fade"
          id="profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        >
          2
        </div> */}
      </div>
    </>
  );
}

export default CandleGraph;
