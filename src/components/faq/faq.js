import React, { useEffect, useState } from "react";
import Header from "../navbar/header";
import Footer from "../footer/footer";
import Loading from "../loader/loading";

export default function Faq() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true)
    setLoading(false);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <Header currentPage="faq" />
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
                    FAQ's
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

      {/* faq start */}
      <div className="main-wrapper">
        <div class="faq-section main-section">
          <div class="container card p-0">
            <div class="card-header">
              <h3
                class="text-white title-basic aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
              >
                FAQ
              </h3>
            </div>
            <div class="card-body px-sm-4 px-3">
              <div class="accordion" id="accordionPanelsStayOpenExample">
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                    <button
                      data-cursor="pointer"
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                    >
                      Whether need to have knowldge in trading?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div class="accordion-body">
                      <p>
                        No need of trading knowledge. All trading process will
                        take care by the bot. Client can check the notifications
                        of amount rise.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                    >
                      Whether need to have Computer/System/Internet?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div class="accordion-body">
                      <p>
                        Not required any system/Laptop/computer. All Setup will
                        configure in VPS Server, Only smartphone is sufficient
                        enough to login and know the trading amount status.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                    >
                      What is mean by VPS Server & How to Install?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div class="accordion-body">
                      <p>
                        VPS server is a remote server, Where the trade account
                        will install & run for entire life with 24/7 Internet &
                        Power supply. VPS Install & setup will done by our
                        Experts
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="500"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFour"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFour"
                    >
                      How to Install and configure the Auto Trading Setup?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFour"
                  >
                    <div class="accordion-body">
                      <p>
                        Complete installation and setup of auto trading account
                        will be done by our expert team. You need to download
                        MT4 app, enter login credentials and view the trading in
                        your device.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="600"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseFive"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseFive"
                    >
                      How Can I Know my Trading Fund Getting Increased?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseFive"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingFive"
                  >
                    <div class="accordion-body">
                      <p>
                        Login into trading app with user id and password and can
                        know the Trading status.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSix"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSix"
                    >
                      What will be the risk and drawdown?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSix"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSix"
                  >
                    <div class="accordion-body">
                      <p>
                        As Robot is trading, Here their is no risk factor & it
                        won't touch the basic Trade amount & None of day it
                        won't finish day without Profit.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="800"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseSeven"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseSeven"
                    >
                      How to Withdraw the Amount?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseSeven"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingSeven"
                  >
                    <div class="accordion-body">
                      <p>
                        From trading app to your account or from a wallet like
                        skrill, Neteller etc., you can withdraw your amount.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  class="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="700"
                >
                  <h2 class="accordion-header" id="panelsStayOpen-headingEight">
                    <button
                      data-cursor="pointer"
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseEight"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseEight"
                    >
                      How Long Auto Trading Software Run & Its Validity?
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseEight"
                    class="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingEight"
                  >
                    <div class="accordion-body">
                      <p>
                        Once installed and configured the Auto trading setup, it
                        can be run for lifetime access without any monthly or
                        yearly subscription & no profit sharing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq end */}

      <footer>
        <Footer />
      </footer>
    </>
  );
}
