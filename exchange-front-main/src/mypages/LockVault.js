import React,{useEffect} from 'react'
import "./lockvault.css";
import {FaRegClock} from "react-icons/fa";
import { useWalletModalToggle } from '../state/application/hooks';
import AOS from "aos";
import "aos/dist/aos.css";

export default function LockVault() {
    const toggleWalletModal = useWalletModalToggle();
    useEffect(() => {
        AOS.init({
            duration:"1000"
        });
        AOS.refresh();
      }, []);
  return (
    <>
        <div className="container mx-auto">
           <h2 className='text-white text-center py-5'> BlackPepper Vaults</h2>
           <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center my-3">
                  {/* card 1 */}
                <div className="card px-1" style= {{width:"20rem",borderRadius:"20px"}} data-aos="zoom-in">
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-7 opening " style={{position: "relative",right: "5px"}}><FaRegClock style={{paddingRight:"5px",fontSize:"20px"}}/>Opening</div>
                    </div>
                    <div className='px-2'>
                        <span style={{fontSize:"24px", fontWeight:500,paddingRight:"5px"}}>30</span>
                        <span style={{fontSize:"15px", paddingRight:"5px"}}>days</span>
                        <span style={{fontSize:"15px", paddingRight:"5px", color:"blue",fontWeight:"600"}}>1.50X</span>
                    </div>
                    <div className='p-2'>
                        <p>Total Locked - <span style={{fontWeight:"700"}}>PUD</span></p>
                    </div>
                    <hr />
                    <div className='lockedValue px-2'>
                        <p>Locked Value <span className="px-2" style={{background:"#7FCE87", borderRadius:"10px", color:"#fff" }}>APR - </span></p>
                        <h3 className='pudHead'>- PUD</h3>
                        <div className="button d-flex align-items-center flex-column">
                        <button  onClick={toggleWalletModal} style={{fontWeight:"600"}}>Connect Wallet</button>
                        <button  onClick={toggleWalletModal} style={{fontWeight:"600"}}>Connect Wallet</button>
                        </div>
                    </div>
                    <div className='claimBox  m-1'>
                        <div className="row w-100">
                        <div className="col-6">
                            <h5 className='profit px-2'>Profit</h5>
                            <h4 className='epudBottom px-2'>- ePUD</h4>
                        </div>
                        <div className="col-6 claimBtn">
                            <button disabled>Claim</button>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center my-3">
                {/* card 2 */}
            <div className="card px-1" style= {{width:"20rem",borderRadius:"20px"}} data-aos="zoom-in">
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-7 opening " style={{position: "relative",right: "5px"}}><FaRegClock style={{paddingRight:"5px",fontSize:"20px"}}/>Opening</div>
                    </div>
                    <div className='px-2'>
                        <span style={{fontSize:"24px", fontWeight:500,paddingRight:"5px"}}>30</span>
                        <span style={{fontSize:"15px", paddingRight:"5px"}}>days</span>
                        <span style={{fontSize:"15px", paddingRight:"5px", color:"blue",fontWeight:600}}>1.50X</span>
                    </div>
                    <div className='p-2'>
                        <p>Total Locked - <span style={{fontWeight:"700"}}>PUD</span></p>
                    </div>
                    <hr />
                    <div className='lockedValue px-2'>
                        <p>Locked Value <span className="px-2" style={{background:"#7FCE87", borderRadius:"10px", color:"#fff" }}>APR - </span></p>
                        <h3 className='pudHead'>- PUD</h3>
                        <div className="button d-flex align-items-center flex-column">
                        <button  onClick={toggleWalletModal} style={{fontWeight:"600"}}>Connect Wallet</button>
                        <button  onClick={toggleWalletModal} style={{fontWeight:"600"}}>Connect Wallet</button>
                        </div>
                    </div>
                    <div className='claimBox  m-1'>
                        <div className="row w-100">
                        <div className="col-6">
                            <h5 className='profit'>Profit</h5>
                            <h4 className='epudBottom'>- ePUD</h4>
                        </div>
                        <div className="col-6 claimBtn">
                            <button disabled>Claim</button>
                        </div>
                        </div>
                    </div>

                </div>
            </div>
         
            <div className="col-lg-4 col-md-6 col-12 d-flex justify-content-center d-flex my-3">
            <div className="card px-1" style= {{width:"20rem",borderRadius:"20px"}} data-aos="zoom-in">
                    <div className="row">
                        <div className="col-5"></div>
                        <div className="col-7 opening " style={{position: "relative",right: "5px"}}>
                            <div><FaRegClock style={{paddingRight:"5px",fontSize:"20px"}}/>Opening</div>
                            </div>
                    </div>
                    <div className='px-2'>
                        <span style={{fontSize:"24px", fontWeight:500,paddingRight:"5px"}}>30</span>
                        <span style={{fontSize:"15px", paddingRight:"5px"}}>days</span>
                        <span style={{fontSize:"15px", paddingRight:"5px", color:"blue",fontWeight:600}}>1.50X</span>
                    </div>
                    <div className='p-2'>
                        <p>Total Locked - <span style={{fontWeight:"700"}}>PUD</span></p>
                    </div>
                    <hr />
                    <div className='lockedValue px-2'>
                        <p>Locked Value <span className="px-2" style={{background:"#7FCE87", borderRadius:"10px", color:"#fff" }}>APR - </span></p>
                        <h3 className='pudHead'>- PUD</h3>
                        <div className="button d-flex align-items-center flex-column">
                        <button  onClick={toggleWalletModal} style={{fontWeight:"600"}}>Connect Wallet</button>
                        <button  onClick={toggleWalletModal} style={{fontWeight:"600"}}>Connect Wallet</button>
                        </div>
                    </div>
                    <div className='claimBox  m-1'>
                        <div className="row w-100">
                        <div className="col-6">
                            <h5 className='profit px-2'>Profit</h5>
                            <h4 className='epudBottom px-2'>- ePUD</h4>
                        </div>
                        <div className="col-6 claimBtn">
                            <button disabled>Claim</button>
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
