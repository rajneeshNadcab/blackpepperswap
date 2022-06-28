import React,{useEffect,useState} from 'react';
import "../mypages/staking.css";
import { useWalletModalToggle } from '../state/application/hooks';
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'

import AOS from "aos";
import "aos/dist/aos.css";

export default function Staking() {
  const toggleWalletModal = useWalletModalToggle();
  const[arrow,setArrow] = useState(false);
  // const[ind,setIndex]=useState("")

  useEffect(() => {
    AOS.init({duration:1000});
    AOS.refresh();
  }, []);
  return (
    <>
    <div class="container-fluid w-100" >
        
   
      <div className="container mx-auto">
        <h2 className='text-light text-center py-3'>Staking</h2>
        <div   data-aos="zoom-in" data-aos-anchor-placement="center-center" class="accordion accord" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
            
                class="accordion-button stakingBtn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                onClick={()=>{setArrow(!arrow); }}
              >
               <div className="row align-items-center">
                <div className="col-md-3 rayhead">
                    {/* <img src="" alt="ray" /> */}
                    <span style={{color:"#657AB5", fontWeight:600}}>Ray</span>
                </div>
                <div className="col-md-2 col-6 raycontent">
                    <h4 style={{fontSize:"15px", fontWeight:"700", paddingBottom:"10px",color:"#657AB5"}}>Pending Rewards</h4>
                    <p style={{color:"rgb(171, 196, 255)",fontWeight:"500"}}>0 Ray</p>
                </div>
                <div className="col-md-2 col-6 raycontent">
                    <h4 style={{fontSize:"15px", fontWeight:"700", paddingBottom:"10px",color:"#657AB5"}}>Staked</h4>
                    <p style={{color:"rgb(171, 196, 255)",fontWeight:"500"}}>0 Ray</p>
                </div>
                <div className="col-md-2 col-6 raycontent">
                    <h4 style={{fontSize:"15px", fontWeight:"700", paddingBottom:"10px",color:"#657AB5"}}>APR</h4>
                    <p style={{color:"rgb(171, 196, 255)",fontWeight:"500"}}>0 Ray</p>
                </div>
                <div className="col-md-2 col-6 raycontent">
                    <h4 style={{fontSize:"15px", fontWeight:"700", paddingBottom:"10px",color:"#657AB5"}}>Total Staked</h4>
                    <p style={{color:"rgb(171, 196, 255)",fontWeight:"500"}}>$14,722,275</p>
                </div>
                <div className="col-md-1 col-12 d-flex justify-content-end"> {arrow ?<MdArrowDropUp style={{fontSize:"30px", color:" white"}}/>:<MdArrowDropDown style={{fontSize:"30px", color:"white"}}/>}</div>
               </div>
    </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
              <div className="row">
                <div className="col-md-6 px-3 py-4">
                    <div className="box">
                        <h3 style={{color:"#657AB5", fontSize:"14px"}}>Deposited</h3>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span> 0 Ray</span>
                            <button className="wallet-btn" onClick={toggleWalletModal}>Connect Wallet</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 px-3 py-4">
                    <div className="box">
                        <h3 style={{color:"#657AB5",  fontSize:"14px"}}>Pending Rewards</h3>
                        <div className='d-flex justify-content-between align-items-center'>
                            <span> 0 Ray</span>
                            <button className="wallet-btn" onClick={toggleWalletModal}>Connect Wallet</button>
                        </div>
                    </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
