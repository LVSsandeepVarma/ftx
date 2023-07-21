import React, { useEffect, useState } from "react";
import Header from "../navbar/header";
import Footer from "../footer/footer";
import Loading from "../loader/loading";
import { metaData } from "../metadata";

export default function Features() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true)
    document.title = metaData.featuresTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", metaData.featuresDesc); // Update the meta description tag
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", metaData.featuresKeywords); // Update the meta description tag
    }
    setLoading(false);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <Header currentPage="features" />

      {/* <!-- breadcrumb section start --> */}
      <section class="breadcrumb-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="breadcrumb-content">
                <div>
                  <h2 style={{ marginTop: "5vh" }}>
                    <img
                      src="../assets/images/breadcrumb-title.png"
                      className="img-fluid"
                      alt="title-effect"
                    />
                    Features
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

      {/* <!-- features section start --> */}
      <section className="about-section section-b-space section-mb-space">
        <div
          className="bg-effect"
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="500"
        ></div>
        <div className="container">
          <div className="row g-md-5 g-4">
            <div className="col-lg-6 order-lg-0 order-1">
              <div className="about-content">
                <div>
                  <div className="title">
                    <span className="number-pattern">01.</span>
                    <h2 className="text-white">
                      How Does FX Trading Robot Work?
                    </h2>
                  </div>
                  <p>
                    An Auto Trading Robot that works as a fully Automated
                    Trading System that executes both Buy, Sell Trade
                    Automatically & Close the Trade in Profit. FX Trading is
                    programmed to adapt to the current market conditions as it
                    executes trades on both sides of the market 24/7.
                  </p>
                  <ul>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        width={"20px"}
                        height={"auto"}
                        alt="tick"
                      />{" "}
                      Fully Automatic , Setup once and the rest on Autopilot
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />
                      The most popular robots are offered via the MetaTrade 4
                      platform.
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />
                      Open and Close trade Automatically
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />
                      Robots do not make order entry errors
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Eliminates Human Emotions such as fear and greed
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Our EA are coming with money management features and risk
                      management
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />
                      Robots do not get tired
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />
                      3 Years on testing ( recently decided to sale for public)
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />
                      Analysis of market data with 12 inner indicators
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      No Risky Strategies - No Martingale
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Profit Average Method
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />
                      Trades the Market 24/5 (day and night)
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />
                      24 Hours Support with Day & Night Shift
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="../assets/images/featureRobo1.png"
                  className="img-fluid"
                  alt="about"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- features section end --> */}

      {/* <!-- features section start --> */}
      <section className="about-section right-version section-b-space section-mb-space">
        <div
          className="bg-effect"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="500"
        ></div>
        <div className="container">
          <div className="row g-md-5 g-4">
            <div className="col-lg-6">
              <div className="about-img">
                <img
                  src="../assets/images/featureRobo2.png"
                  className="img-fluid"
                  alt="about"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <div>
                  <div className="title">
                    <span className="number-pattern">02.</span>
                    <h2>
                      Robot Will Analyze The Chart Automatically & Take Trade.
                    </h2>
                  </div>
                  <p>Buy using the FX Trading automatic Robot Software</p>
                  <ul>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />
                      Robots can trade far more effectively and efficiently than
                      any human
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Monitoring multiple trades, across multiple platforms
                      simultaneously
                    </li>
                    {/* <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="tick"/> Consistent trading - robots always adhere to the rules you set </li> */}
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />
                      Order entry achieved in seconds
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Instant reaction to stock market fluctuations
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Completely unemotional trading
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />
                      Trading when you can't be online. You sleep, the robot
                      carries on trading
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Trading simultaneously, across various markets, on
                      different currency pairs
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Using a robot that is pre-programmed with specific trading
                      system rules
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Automated robots have more capacity to process data than a
                      human being
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Robots are not scared to take the risk that you might not
                      want to make
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      No instinctive or impulsive trading, everything is
                      calculated
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Trade-in several currencies simultaneously while manually
                      trading yourself
                    </li>
                    <li>
                      <img
                        src="../assets/images/bubbleTick.png"
                        className="img-fluid"
                        style={{ width: "20px" }}
                        alt="tick"
                      />{" "}
                      Ability to back test to see the accuracy of the robot
                      trader
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- features section end --> */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
