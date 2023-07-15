import React, { useEffect, useState } from "react";
import Header from "../navbar/header";
import Footer from "../footer/footer";
import Loading from "../loader/loading";
import { Modal } from "react-bootstrap";
import Login from "../login/login";
import PricingModal from "./modal/pricingModal";

export default function Pricing() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false)
  useEffect(() => {
    // setLoading(true)
    setLoading(false);
  }, []);
  const handleCloseModal=()=>{
    setShowModal(false)
  }
  return (
    <>
      {loading && <Loading />}
      {showModal && <PricingModal showModal={showModal} setShowModal={setShowModal} />}
      <Header currentPage="pricing" />
      {/* <!-- breadcrumb section start --> */}
      <section class="breadcrumb-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="breadcrumb-content">
                <div>
                  <h2 style={{marginTop:"5vh"}}>
                    <img
                      src="../assets/images/breadcrumb-title.png"
                      className="img-fluid"
                      alt="title-effect"
                    />
                    Pricing
                  </h2>
                  {/* <p><i class="ri-subtract-line"></i>Select any plan from below pricing plan to proceed
                                further.</p> */}
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-lg-inline-block d-none">
              <div class="breadcrumb-img">
                <img
                  src="../assets/images/pricing-vector.png"
                  class="img-fluid"
                  alt="service"
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb section end --> */}

      {/* <!-- pricing section start --> */}
      <div className=' home-section'>
      <div class="bg-effect">
                            <img src="../assets/images/home/home-bg.gif" class="img-fluid bg-gif" alt="" />
                            <img src="../assets/svg/home/1.png" class="img-fluid effect1 rotate-effect" alt="" style={{transform: "rotate(0deg)"}}/>
                            <img src="../assets/svg/home/2.svg" class="img-fluid effect2 rotate-effect" alt="" style={{transform: "rotate(0deg)"}}/>
                        
        <div className='' style={{display:"flex", justifyContent:"center", width:"100%"}}>
      <section className="pricing-section section-b-space">
        <div className="container">
          <div className="title-horizontal">
            <h2>
              Get pricing plans for Hardware & Software Installation for Auto
              Trading Robot.
            </h2>

            <p>One Time Installation & Life Time Benefits.</p>
          </div>
          <div className="row pricing-row g-xl-5 g-4 justify-content-center">
            <div className="col-lg-5 col-md-6">
              <div className="pricing-box">
                <img
                  src="../assets/svg/hanging.svg"
                  className="img-fluid handing-cls"
                  alt="effect"
                />
                <div className="pricing-top">
                  <img
                    src="../assets/svg/pricing/pricing-top.svg"
                    className="img-fluid pricing-bg"
                    alt=""
                  />
                  <img
                    src="../assets/svg/pricing/weekly.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <h3>BASIC PLAN</h3>
                </div>
                <div className="pricing-mid">
                  <div className="clip-path-content">
                    <div>
                    <a className="pricing-link" data-cursor="pointer" style={{fontSize:"x-large"}} onClick={()=>{setShowModal(true)}}>
                      GET PRICE
                    </a>
                    </div>
                  </div>
                </div>
                <div className="pricing-content">
                  <div className="clip-path-content">
                    <ul>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>Auto Trading account Setup</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>Trader Account Setup</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>VPS Server Setup</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>Dedicated Account Manager</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>24/7 Account Monitor</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>Life Time Maintenance & Support</h4>
                      </li>
                    </ul>
                    <a className="pricing-link"  data-cursor="pointer">
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-6">
              <div className="pricing-box">
                <img
                  src="../assets/svg/hanging-green.svg"
                  className="img-fluid handing-cls"
                  alt="effect"
                />
                <div className="pricing-top">
                  <img
                    src="../assets/svg/pricing/pricing-center.svg"
                    className="img-fluid pricing-bg"
                    alt=""
                  />
                  <img
                    src="../assets/svg/pricing/monthly.svg"
                    className="img-fluid"
                    alt=""
                  />
                  <h3>ADVANCED PLAN</h3>
                </div>
                <div className="pricing-mid">
                  <div className="clip-path-content">
                    <div>
                    <a className="pricing-link" data-cursor="pointer" style={{fontSize:"x-large"}} onClick={()=>{setShowModal(true)}}>
                      GET PRICE
                    </a>
                    </div>
                  </div>
                </div>
                <div className="pricing-content">
                  <div className="clip-path-content">
                    <ul>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>Multiple Auto Trading account Setup</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>Trader Account Setup</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>VPS Server Setup</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>Free Buy & Sell Indicator</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>Free Signals</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>Dedicated Account Manager</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>24/7 Account Monitor</h4>
                      </li>
                      <li>
                        <img
                          src="../assets/svg/arrow.svg"
                          className="img-fluid"
                          alt="arrow"
                        />
                        <h4>Life Time Maintenance & Support</h4>
                      </li>
                    </ul>
                    <a className="pricing-link" data-cursor="pointer">
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
      </div>
      </div>
      {/* <!-- pricing section end --> */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
