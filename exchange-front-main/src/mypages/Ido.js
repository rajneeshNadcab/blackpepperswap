import React, { useState,useEffect } from 'react'
import Montanna from "../assets/images/montana.png";
import attach from "../assets/images/attach.png";
import yunge from "../assets/images/YUNGE.png";
import {BsArrowRight} from "react-icons/bs";
import {AiOutlineArrowLeft} from "react-icons/ai";
import './ido.css';
import AOS from "aos";
import "aos/dist/aos.css";

function Ido() {
  const [active, setActive] = useState({ active: true, finished: false })
  const[yungeProt,setYunge] = useState(false)
  useEffect(() => {
    AOS.init({
      duration:"1000"
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="container idocontainer mx-auto">
       {!yungeProt && <h2 className="text-center text-light">BlackPepperSwap Finance IDO</h2>}
        {yungeProt && <h2 className="text-center text-light" style={{marginBottom:"50px"}}> <AiOutlineArrowLeft style={{cursor:"pointer"}} onClick={()=>{setActive({active:true,finished:false}); setYunge(false)}}/> BlackPepperSwap Finance IDO / <span style={{color:"skyblue"}}>Yunge Protocol</span></h2>}
        
        {!yungeProt && <div className="btn-group my-3" role="group" aria-label="Basic example">
          <button
            type="button"
            onClick={() => {setActive({ active: true, finished: false });setYunge(false)}}
            className={active.active ? 'btn act activ' : 'btn act'}
          >
            Active
          </button>

          <button
            type="button"
            onClick={() => {setActive({ active: false, finished: true });setYunge(false)}}
            className={active.finished ? 'btn finished activ' : 'btn finished'}
          >
            Finished
          </button>
        </div>}
       {active.active && <div className="activeBox mx-auto my-2 " data-aos="zoom-in">
            <div className="topDiv d-flex p-2 align-items-center py-1 pt-2">
               <div className="imgDiv mx-1 position-absolute" style={{background:"white",borderRadius:"10px", padding:"5px 5px",border:" 1px solid #ccc", zIndex: "122",top: "50px",left:"25px"}}>
               <img src={Montanna} alt="moneta" />
              
               </div>
               <h4 className='monetaText text-light mx-1 ' style={{ paddingTop:"40px"}}>Moneta</h4>
               <a href="#">
               <img className='mx-1 attach'src={attach} style={{ paddingTop:"40px",width:"30px"}} alt="" />
               </a>
            </div>
            <div className="midDiv">
                <p className='m-0 px-2 py-5 px-3 monetaInfo' style={{color:"rgb(149, 149, 149)"}}>Moneta is a decentralised synthetic asset issuance protocol built on HSC. The synthetic assets are collateralized by the Moneta Network Token (MNA) which enables the issuance of synthetic assets. This pooled collateral model enables users to perform conversions between Synths directly with the smart contract, avoiding the need for counterparties. This mechanism solves the liquidity and slippage issues experienced by DEX’s.</p>
                <div className="row px-3 py-2">
                <div className="col-md-3 col-6 text-dark">Total Supply</div>
                <div className="col-md-2 col-4"><strong>1,000,000</strong></div>
                <div className="col-md-2"></div>
                <div className="col-md-3 col-6">Token Price</div>
                <div className="col-md-2 col-6"><strong>$0.24</strong></div>
              
            </div>
            <hr className='px-4 idoHr'/>
            {/* <div className='d-flex justify-content-around subscribe'>
                <div classname="px-2 orange" style={{borderLeft:"4px solid orange",paddingLeft: "10px"}}>Subscribe Pool</div>
                <div className=' px-2' style={{background:"#ccc", borderRadius:"10px"}}>Subscribe ends at 2021-06-16 20:00 (SGT)</div>
                   
            </div> */}
            {/* <p className="text-center py-2 m-0" style={{fontSize:"14px"}}>You need to purchased an avatar to participate in the subscription</p>
            <div className="setAvDiv d-flex justify-content-center py-2 ">
            <a href="#" className='setAvatar'> Set Avatar</a>
            </div> */}
            <div className="info row px-2 py-4">
                <div className="col-md-5 bottomInfo">
                    <p>Total commited</p>
                    <strong>$771,608.5951 (321.50%)</strong>
                </div>
                <div className="col-md-3 bottomInfo">
                <p>Funds to rasie</p>
                    <strong>$240,000</strong>
                </div>
                <div className="col-md-4 bottomInfo">
                <p>PUD Burning Amount</p>
                    <strong>--</strong>
                </div>
            </div>
            </div>
          
        </div>}
       {active.finished && <div className="finishBox mx-auto" data-aos="zoom-in"style={{background:"white"}}>
          <div className="row">
            <div className="yungeCont col-md-2 col-12 pt-2">
            <div className="yungeDiv m-2" style={{background:"white",borderRadius:"10px", padding:"5px 5px",border:" 1px solid #ccc"}}>
               <img className = "img-fluid" src={yunge} alt="moneta" />
              
               </div>
            </div>
            <div className="col-md-10 col-10">
              <div className='d-flex pt-4'>
            <h4 className='text-dark pt-1 px-1' >Yunge Protocol</h4>
               <a href="#">
               <img className="py-1" src={attach} style={{width:"30px"}} alt="" />
               </a>
               </div>
               <div className="info row px-2 py-4 gy-3">
                <div className="col-md-4 ">
                    <p>Total commited</p>
                    <strong>$9,490,927.0748</strong>
                </div>
                <div className="col-md-3 ">
                <p>Funds to raise</p>
                    <strong>$40,000</strong>
                </div>
                <div className="col-md-5 ">
                <p>PUD Burning Amount</p>
                    <strong>2334</strong>
                </div>
                <span style={{color:"rgb(14 142 193)", cursor:"pointer",width:"200px", fontWeight:"500"}} onClick={()=>{setYunge(true);setActive({ active: false, finished: false })}}>view More <BsArrowRight/></span>
            </div>
            </div>

          </div>
        </div>}
        {yungeProt && <div className="activeBox mx-auto my-2 " data-aos="zoom-in" >
            <div className="topDiv d-flex p-2 align-items-center py-1 pt-2">
               <div className="imgDiv mx-1 position-absolute" style={{background:"white",borderRadius:"10px", padding:"5px 5px",border:" 1px solid #ccc", zIndex: "122",top: "50px",left:"25px"}}>
               <img src={yunge} alt="moneta" />
              
               </div>
               <h4 className='yungeText text-light mx-1 ' style={{ paddingTop:"40px"}}>Yunge Protocol
</h4>
               <a href="#">
               <img className='attach mx-1'src={attach} style={{ paddingTop:"40px",width:"30px"}} alt="" />
               </a>
            </div>
            <div className="midDiv">
                <p className='m-0 px-2 py-5 px-3 yungeInfo' style={{color:"rgb(149, 149, 149)"}}>Yunge Protocol is a decentralized cross-chain data oracle platform, which will first launch on Hoo Smart Chain(HSC). As the infrastructure of Web3.0 and DeFi, Yunge is committed to creating the largest and most convenient data oracle network for DApp development, which can quickly and safely transfer real-world off-chain data to on-chain smart contracts, enabling large-scale off-chain data on-chain becomes possible, fully releasing the unlimited potential of DeFi and DApp.</p>
                <div className="row px-3 py-2">
                <div className="col-md-3 col-6 text-dark">Total Supply</div>
                <div className="col-md-2 col-4"><strong>320,000</strong></div>
                <div className="col-md-2"></div>
                <div className="col-md-3 col-6">Token Price</div>
                <div className="col-md-2 col-6"><strong>$0.125</strong></div>
              
            </div>
            <hr className='px-4 idoHr'/>
           
            <div className="info row px-2 py-4">
                <div className="col-md-5 bottomInfo">
                    <p>Total commited</p>
                    <strong>$9,490,927.0748 (23727.32%)</strong>
                </div>
                <div className="col-md-3 bottomInfo">
                <p>Funds to rasie</p>
                    <strong>$40,000</strong>
                </div>
                <div className="col-md-4 bottomInfo ">
                <p>PUD Burning Amount</p>
                    <strong>2334</strong>
                </div>
            </div>
            </div>
          
        </div>}
      </div>
    </>
  )
}

export default Ido;
