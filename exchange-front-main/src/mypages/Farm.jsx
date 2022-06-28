// import { arrayify } from 'ethers/lib/utils'
import React, { useState, useEffect } from 'react'
import starempty from '../assets/images/starempty.svg'
import { AiOutlineLoading3Quarters, AiOutlineStar, AiOutlineSwap, AiOutlinePlus } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import './farm.css'
import { TokenData, finishedTokenData } from './TokenData'
import { useWalletModalToggle } from '../state/application/hooks'
import Switch from 'react-switch'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Farm() {
  const [active, setActive] = useState({ active: true, finished: false })
  const [staked, setStaked] = useState(false)
  const [checked, setChecked] = useState(false)
  const toggleWalletModal = useWalletModalToggle()
  const arr = []
  const [searchInput, setSearchInput] = useState('')
  const [data, setData] = useState(TokenData)
  const [arrowToggle, setArrow] = useState(false)
  const [ind, setIndex] = useState()
  // console.log(arrowToggle, ind, 'jbdguaserhlghe')

  useEffect(() => {
    AOS.init({
      duration: '1000'
    })
    AOS.refresh()
  }, [])

  //console.log(searchInput, 'searchInputsearchInput')

  const handleChange = nextChecked => {
    console.log(nextChecked, 'nextChecked')
    setChecked(nextChecked)
    if (nextChecked) {
      setActive({ active: false, finished: false })
    } else {
      setActive({ active: true, finished: false })
    }

    // setStaked(true)
  }

  const handleSearch = event => {
    setActive({ active: true, finished: false })
    setChecked(false)
    let e = event.target.value.toUpperCase()
    let filterData = TokenData.filter(element => element.farm == e)
    console.log(filterData, 'filterData')
    if (filterData.length !== 0) {
      setData(filterData)
    } else {
      setData(TokenData)
    }
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <div className="text-left h3 text-white">Farms</div>
          </div>
          <div className="col-sm-4">
            <div className="">
              <div className="btn-group" role="group" aria-label="Basic example">
                <button
                  type="button"
                  className={active.active ? 'btn  btn-secondary' : 'btn act'}
                  onClick={() => {
                    setActive({ active: true, finished: false })
                    setChecked(false)
                  }}
                >
                  Live
                </button>

                <button
                  type="button"
                  className={active.finished ? 'btn btn-secondary' : 'btn act'}
                  onClick={() => {
                    setActive({ active: false, finished: true })
                    setChecked(false)
                  }}
                >
                  Finish
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-4 staked py-1 ">
            <div className="text-right flagSwitch">
              <span className="h5  text-white" style={{ paddingRight: '5px' }}>
                Show Staked
              </span>
              {/* <label className="switch" >
                <input type="checkbox" onClick={() => {setStaked(!staked); setActive({active:false,finished:false})}} />
                <span className="slider round"></span>
              </label> */}
              <span style={{ position: ' relative', top: '7px' }}>
                <Switch
                  onChange={handleChange}
                  checked={checked}
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                  handleDiameter={26}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={16}
                  width={48}
                  className="react-switch"
                  id="material-switch"
                />
              </span>
            </div>
          </div>
          <div className="farm_container" data-aos="zoom-in-down">
            <div className="farm_record">
              <div className="col-sm-12">
                <div className="firm record_heading ">
                  <div className="row">
                    <div className="col-md-6">
                      <h5 className="text-white p-3 pb-0">All Farms</h5>
                      <p className="text-secondary fw-bold px-3">Stake your LP tokens and earn token rewards</p>
                    </div>
                    <div className="col-md-6">
                      <div className="search_farm">
                        <form>
                          <input
                            type="search"
                            placeholder="Search by token"
                            onChange={e => {
                              setSearchInput(e.target.value)
                              handleSearch(e)
                            }}
                          />
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {active.active && (
                <div className="wrapper">
                  <div className="heading" style={{ color: 'rgb(171 196 255', fontWeight: '600' }}>
                    <div className="row justify-content-center">
                      <div className="col-md-5 text-center">Farm</div>
                      <div className="col-md-2">Pending Reward</div>
                      <div className="col-md-2">Total APR</div>
                      <div className="col-md-2">TVL</div>
                      <div className="col-md-1 text-right">
                        <AiOutlineLoading3Quarters
                          style={{ color: 'rgb(171 196 255', fontWeight: '800', cursor: 'pointer' }}
                          title="Reload Data"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="accordian_data">
                    {data.map((element, index) => {
                      return (
                        <div
                          className="accordion"
                          id="accordionExample"
                          key={index}
                          style={{ backgroundColor: 'blue' }}
                        >
                          <div className="accordion-item" style={{ marginBottom: '12px' }}>
                            <h2 className="accordion-header" id={`headingTwo${index}`}>
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapseTwo${index}`}
                                aria-expanded="false"
                                aria-controls={`collapseTwo${index}`}
                                onClick={() => {
                                  setIndex(index)
                                  setArrow(ind == index && (arrowToggle ? false : true))
                                }}
                              >
                                <div className="row justify-content-center">
                                  <div className="col-md-5 col-3" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                    <span className="headDisplay">Farm: &nbsp; </span>
                                    <img className="starempty" src={starempty} alt="" style={{ width: '25px' }} />{' '}
                                    <span
                                      className="ethrum"
                                      style={{
                                        borderRadius: '50%',
                                        padding: '3px',
                                        backgroundColor: '#2a227e',
                                        marginLeft: '20px'
                                      }}
                                    >
                                      <FaEthereum className="ethrum" style={{ color: 'black' }} />
                                    </span>{' '}
                                    <span
                                      className="ethrum"
                                      style={{
                                        borderRadius: '50%',
                                        padding: '3px',
                                        backgroundColor: '#2a227e',
                                        marginRight: '10px'
                                      }}
                                    >
                                      <FaEthereum className="ethrum" style={{ color: 'black', fontSize: '20px' }} />
                                    </span>{' '}
                                    <span className="farm-name">{element.farm}</span>
                                  </div>
                                  <div className="col-md-2 col-3" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                    <span className="headDisplay">Pending Reward: </span>
                                    <div className="farm-data">{element.pendingReward}</div>
                                  </div>
                                  <div className="col-md-2 col-3" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                    <span className="headDisplay">Total APR: &nbsp; </span>
                                    <div className="farm-data">{element.totalApr}</div>
                                  </div>
                                  <div className="col-md-2 col-3" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                    <span className="headDisplay">TVL: &nbsp;</span>
                                    <div className="farm-data">{element.tvl}</div>
                                    <span className="text-secondary lp">{element.lp}</span>
                                  </div>
                                  <div className="col-md-1 col-12 col-12 d-flex justify-content-end up-down">
                                    {arrowToggle && ind == index ? (
                                      <MdArrowDropUp style={{ fontSize: '30px', color: ' white' }} />
                                    ) : (
                                      <MdArrowDropDown style={{ fontSize: '30px', color: ' white' }} />
                                    )}
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id={`collapseTwo${index}`}
                              className="accordion-collapse collapse"
                              aria-labelledby={`headingTwo${index}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-lg-5 px-md-3 px-1 py-md-4 py-1">
                                    <div className="box">
                                      <h3 style={{ color: '#657AB5', fontSize: '14px' }}>Deposited</h3>
                                      <div className="d-flex justify-content-between align-items-center">
                                        <span> -- </span>
                                        <button
                                          className="wallet-btn "
                                          onClick={toggleWalletModal}
                                          style={{ fontWeight: 'bold' }}
                                        >
                                          Connect Wallet
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-5 col-md-12 px-md-3 px-1 py-md-4 py-1">
                                    <div className="box">
                                      <h3 style={{ color: '#657AB5', fontSize: '14px' }}>Pending Rewards</h3>
                                      <div className="d-flex justify-content-between align-items-center">
                                        <span> 0 Ray</span>
                                        <button
                                          className="wallet-btn"
                                          onClick={toggleWalletModal}
                                          style={{ fontWeight: 'bold' }}
                                        >
                                          Connect Wallet
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2 col-md-12 swapLiq">
                                    <a href="/exchange#/pool" title="Add Liquidity">
                                      <AiOutlinePlus />
                                    </a>
                                    <a href="exchange#/" title="Swap">
                                      <AiOutlineSwap />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
              {active.finished && (
                <div className="wrapper">
                  <div className="heading" style={{ color: 'rgb(171 196 255', fontWeight: '600' }}>
                    <div className="row justify-content-center">
                      <div className="col-md-5 text-center">Farm</div>
                      <div className="col-md-2">Pending Reward</div>
                      <div className="col-md-2">Total APR</div>
                      <div className="col-md-2">TVL</div>
                      <div className="col-md-1 text-right">
                        <AiOutlineLoading3Quarters
                          style={{ color: 'rgb(171 196 255', fontWeight: '800', cursor: 'pointer' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="accordian_data">
                    {finishedTokenData.map((element, index) => {
                      return (
                        <div
                          className="accordion"
                          id="accordionExample"
                          key={index}
                          style={{ backgroundColor: 'blue' }}
                        >
                          <div className="accordion-item" style={{ marginBottom: '12px' }}>
                            <h2 className="accordion-header" id={`headingTwo${index}`}>
                              <button
                                className="accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target={`#collapseTwo${index}`}
                                aria-expanded="true"
                                aria-controls={`collapseTwo${index}`}
                                onClick={() => {
                                  setIndex(index)
                                  setArrow(!arrowToggle)
                                }}
                              >
                                <div className="row justify-content-center">
                                  <div className="coll col-md-5 col-3" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                    <span className="headDisplay">Farm: &nbsp; </span>
                                    <img className="starempty" src={starempty} alt="" style={{ width: '25px' }} />{' '}
                                    <span
                                      className="ethrum"
                                      style={{
                                        borderRadius: '50%',
                                        padding: '3px',
                                        backgroundColor: '#2a227e',
                                        marginLeft: '20px'
                                      }}
                                    >
                                      <FaEthereum className="ethrum" style={{ color: 'black' }} />
                                    </span>{' '}
                                    <span
                                      className="ethrum"
                                      style={{
                                        borderRadius: '50%',
                                        padding: '3px',
                                        backgroundColor: '#2a227e',
                                        marginRight: '10px'
                                      }}
                                    >
                                      <FaEthereum className="ethrum" style={{ color: 'black', fontSize: '20px' }} />
                                    </span>{' '}
                                    <span className="farm-name">{element.farm}</span>
                                  </div>
                                  <div className="coll col-md-2 col-3" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                    <span className="headDisplay">Pending Reward: </span>
                                    <div className="farm-data">{element.pendingReward}</div>
                                  </div>
                                  <div className="coll col-md-2 col-3" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                    <span className="headDisplay">Total APR: &nbsp; </span>
                                    <div className="farm-data">{element.totalApr}</div>
                                  </div>
                                  <div className="coll col-md-2 col-3" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                    <span className="headDisplay">TVL: &nbsp;</span>
                                    <div className="farm-data">{element.tvl}</div>
                                    <span className="text-secondary lp">{element.lp}</span>
                                  </div>
                                  <div className="coll col-md-1 col-0 up-down">
                                    {arrowToggle && ind == index ? (
                                      <MdArrowDropUp style={{ fontSize: '30px' }} />
                                    ) : (
                                      <MdArrowDropDown style={{ fontSize: '30px' }} />
                                    )}
                                  </div>
                                </div>
                              </button>
                            </h2>
                            <div
                              id={`collapseTwo${index}`}
                              className="accordion-collapse collapse"
                              aria-labelledby={`headingTwo${index}`}
                              data-bs-parent="#accordionExample"
                            >
                              <div className="accordion-body">
                                <div className="row">
                                  <div className="col-lg-5 px-md-3 px-1 py-md-4 py-1">
                                    <div className="box">
                                      <h3 style={{ color: '#657AB5', fontSize: '14px' }}>Deposited</h3>
                                      <div className="d-flex justify-content-between align-items-center">
                                        <span> -- </span>
                                        <button
                                          className="wallet-btn "
                                          onClick={toggleWalletModal}
                                          style={{ fontWeight: 'bold' }}
                                        >
                                          Connect Wallet
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-5 col-md-12 px-md-3 px-1 py-md-4 py-1">
                                    <div className="box">
                                      <h3 style={{ color: '#657AB5', fontSize: '14px' }}>Pending Rewards</h3>
                                      <div className="d-flex justify-content-between align-items-center">
                                        <span> 0 Ray</span>
                                        <button
                                          className="wallet-btn"
                                          onClick={toggleWalletModal}
                                          style={{ fontWeight: 'bold' }}
                                        >
                                          Connect Wallet
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2 col-md-12 swapLiq">
                                    <a
                                      href="/#/pool"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      data-bs-placement="left"
                                      title="Add Liquidity"
                                    >
                                      <AiOutlinePlus />
                                    </a>
                                    <a
                                      href="/swap"
                                      data-bs-toggle="tooltip"
                                      data-bs-html="true"
                                      data-bs-placement="left"
                                      title="Swap"
                                    >
                                      <AiOutlineSwap />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
              {checked && (
                <div className="wrapper">
                  <div className="heading" style={{ color: 'rgb(171 196 255', fontWeight: '600' }}>
                    <div className="row justify-content-center">
                      <div className="col-md-5 text-center">Farm</div>
                      <div className="col-md-2">Pending Reward</div>
                      <div className="col-md-2">Total APR</div>
                      <div className="col-md-2">TVL</div>
                      <div className="col-md-1 text-right">
                        <AiOutlineLoading3Quarters
                          style={{ color: 'rgb(171 196 255', fontWeight: '800', cursor: 'pointer' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="accordian_data">
                    {arr.length == 0 ? (
                      <h2 style={{ color: 'white', textAlign: 'center' }}>No stake Found</h2>
                    ) : (
                      arr.map((element, index) => {
                        return (
                          <div className="accordion" id="accordionExample" style={{ backgroundColor: 'blue' }}>
                            <div className="accordion-item" style={{ marginBottom: '12px' }}>
                              <h2 className="accordion-header" id={`headingTwo${index}`}>
                                <button
                                  className="accordion-button collapsed"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target={`#collapseTwo${index}`}
                                  aria-expanded="false"
                                  aria-controls={`collapseTwo${index}`}
                                  onClick={() => {
                                    setArrow(!arrowToggle)
                                    setIndex(index)
                                  }}
                                >
                                  <div className="row justify-content-center">
                                    <div className="coll col-md-5" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                      <span className="headDisplay">Farm: </span>{' '}
                                      <img className="starempty" src={starempty} alt="" style={{ width: '25px' }} />{' '}
                                      <span
                                        style={{
                                          borderRadius: '50%',
                                          padding: '3px',
                                          backgroundColor: '#2a227e',
                                          marginLeft: '20px'
                                        }}
                                      >
                                        <FaEthereum className="ethrum" style={{ color: 'black' }} />
                                      </span>{' '}
                                      <span
                                        style={{
                                          borderRadius: '50%',
                                          padding: '3px',
                                          backgroundColor: '#2a227e',
                                          marginRight: '10px'
                                        }}
                                      >
                                        <FaEthereum className="ethrum" style={{ color: 'black', fontSize: '20px' }} />
                                      </span>{' '}
                                      <span>{element.farm}</span>
                                    </div>
                                    <div className="coll col-md-2" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                      <span className="headDisplay">Pending Reward: &nbsp; </span>
                                      {element.pendingReward}
                                    </div>
                                    <div className="coll col-md-2" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                      <span className="headDisplay">Total APR: &nbsp; </span>
                                      {element.totalApr}
                                    </div>
                                    <div className="coll col-md-2" style={{ fontweight: '600', color: '#ABC4FF' }}>
                                      <span className="headDisplay">TVL: &nbsp;</span>
                                      {element.tvl}
                                      <span className="text-secondary lp">{element.lp}</span>
                                    </div>
                                    <div className="coll col-md-1 up-down">
                                      {arrowToggle && ind == index ? (
                                        <MdArrowDropUp style={{ fontSize: '30px' }} />
                                      ) : (
                                        <MdArrowDropDown style={{ fontSize: '30px' }} />
                                      )}
                                    </div>
                                  </div>
                                </button>
                              </h2>
                              <div
                                id={`collapseTwo${index}`}
                                className="accordion-collapse collapse"
                                aria-labelledby={`headingTwo${index}`}
                                data-bs-parent="#accordionExample"
                              >
                                <div class="accordion-body">
                                  <div className="row">
                                    <div className="col-lg-5 px-3 py-md-4 py-2">
                                      <div className="box">
                                        <h3 style={{ color: '#657AB5', fontSize: '14px' }}>Deposited</h3>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <span> -- </span>
                                          <button
                                            className="wallet-btn "
                                            onClick={toggleWalletModal}
                                            style={{ fontWeight: 'bold' }}
                                          >
                                            Connect Wallet
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-5 col-md-12 px-3 py-md-4 py-2">
                                      <div className="box">
                                        <h3 style={{ color: '#657AB5', fontSize: '14px' }}>Pending Rewards</h3>
                                        <div className="d-flex justify-content-between align-items-center">
                                          <span> 0 Ray</span>
                                          <button
                                            className="wallet-btn"
                                            onClick={toggleWalletModal}
                                            style={{ fontWeight: 'bold' }}
                                          >
                                            Connect Wallet
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-2 col-md-12 swapLiq">
                                      <a
                                        href="/#/pool"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        data-bs-placement="left"
                                        title="Add Liquidity"
                                      >
                                        <AiOutlinePlus />
                                      </a>
                                      <a
                                        href="/swap"
                                        data-bs-toggle="tooltip"
                                        data-bs-html="true"
                                        data-bs-placement="left"
                                        title="Swap"
                                      >
                                        <AiOutlineSwap />
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
