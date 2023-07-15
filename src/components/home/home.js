import React, { useEffect, useState, useRef } from "react";
import Login from "../login/login";
import CenterMode from "./testimonials/testimonials";
import Testimonials from "./testimonials/testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../footer/footer";
import { FaArrowDown, FaArrowRight, FaArrowUp } from "react-icons/fa";
import Header from "../navbar/header";
import Loading from "../loader/loading";
import Video from "./video";
import Card from "./testimonials/card";
import Cards from "./testimonials/card";
import PricingModal from "../pricing/modal/pricingModal";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false)


  // const video = videoRef?.current;
  useEffect(() => {
    // setLoading(true);
    document.body.classList.add("no-scroll");
    const video = document.getElementById('vid');

// Delay in milliseconds (e.g., 1000ms = 1 second)
const delay = 4000; // 2 seconds

// Pause the video initially
video.pause();

// Wait for the delay duration
setTimeout(function() {
  // Play the video after the delay
  video.play();
}, delay);
    setLoading(false);
    document.body.classList.remove("no-scroll");
  }, []);
  return (
    <>
      {loading && <Loading />}
      <PricingModal showModal={showModal} setShowModal={setShowModal} />
      {/* <!-- home section start --> */}
      <Header currentPage={"home"} />
      {/* {loading && (
        <> */}
      <section
        id="home"
        className="section-b-space home-section"
        style={{ transform: "rotateY(180deg)" }}
      >
        <div className="container-fluid">
          <div className="home-sec">
            <div
              className="home-content"
              style={{
                transform: "rotateY(180deg)",
                margin: "0rem 0rem 0rem 0rem",
              }}
            >
              {/* <div>
                        <h2>landing template</h2>
                        <h1>AI Chatting Landing Template</h1>
                        <p>Megabot is a template for an AI chatbot landing page with conversing user interface pages.
                        </p>
                        <a href="html/index.html" className="btn-solid">Get started <i className="iconsax"
                                data-icon="arrow-right"></i></a>
                    </div> */}
              <Login currentPage="home"/>
            </div>
            <div className="home-img d-lg-flex d-none col-md-8">
              <img
                src="assets/images/landing/robot.png"
                className="img-fluid robot-img"
                alt="robot"
              />
              <div className="round-effect">
                <img
                  src="assets/images/landing/round.gif"
                  className="img-fluid "
                  alt="robot"
                />
                <ul className="home-effect">
                  <li style={{ transform: "rotateY(180deg)" }}>
                    <img
                      src="assets/images/landing/effect.png"
                      className="img-fluid effect-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/service/search.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />{" "}
                    One Time Setup
                  </li>
                  <li style={{ transform: "rotateY(180deg)" }}>
                    <img
                      src="assets/images/landing/effect.png"
                      className="img-fluid effect-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/service/graph.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />{" "}
                    Dedicated Expert Support
                  </li>
                  <li style={{ transform: "rotateY(180deg)" }}>
                    <img
                      src="assets/images/landing/effect.png"
                      className="img-fluid effect-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/service/copy.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />{" "}
                    Start Trading in 24 Hours
                  </li>
                  <li style={{ transform: "rotateY(180deg)" }}>
                    <img
                      src="assets/images/landing/effect.png"
                      className="img-fluid effect-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/service/text.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />{" "}
                    Zero Monitoring
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="home-sec" style={{height:"auto", display: "flex"}}>
          <div className="home-img d-lg-none d-flex col-md-8" style={{width:"100%", display:"flex", justifyContent:"center",paddingRight:"0"}}>
              <img
                src="assets/images/landing/robot.png"
                className="img-fluid robot-img"
                alt="robot"
                style={{width:"60%"}}
              />
              
              {/* <div style={{display:"flex", justifyContent:"center", width:"100%", height:"100%", position:"absolute"}}> */}
              <div className="round-effect" style={{width:"80%", height:"90%", display:"flex", margin:"auto", padding:"auto", left:"0%",justifyContent:"left", maxWidth:"700px"}}>
                <img
                  src="assets/images/landing/round.gif"
                  className="img-fluid "
                  alt="robot"
                />
                <ul className="home-effect">
                  <li style={{ transform: "rotateY(180deg)" }}>
                    <img
                      src="assets/images/landing/effect.png"
                      className="img-fluid effect-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/service/search.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />{" "}
                    One Time Setup
                  </li>
                  <li style={{ transform: "rotateY(180deg)" }}>
                    <img
                      src="assets/images/landing/effect.png"
                      className="img-fluid effect-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/service/graph.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />{" "}
                    Dedicated Expert Support
                  </li>
                  <li style={{ transform: "rotateY(180deg)" }}>
                    <img
                      src="assets/images/landing/effect.png"
                      className="img-fluid effect-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/service/copy.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />{" "}
                    Start Trading in 24 Hours
                  </li>
                  <li style={{ transform: "rotateY(180deg)" }}>
                    <img
                      src="assets/images/landing/effect.png"
                      className="img-fluid effect-img"
                      alt=""
                    />
                    <img
                      src="assets/svg/service/text.svg"
                      className="img-fluid outline-icon"
                      alt=""
                    />{" "}
                    Zero Monitoring
                  </li>
                </ul>
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- home section end --> */}

      {/* <!-- service section start --> */}
      <div className="service-section section-b-space">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="row g-4 service-row">
                <div className="col-sm-4">
                  <div className="service-box">
                    <div className="service-icon">
                      <img
                        src="../assets/svg/service/copy.svg"
                        className="img-fluid outline-icon"
                        alt=""
                      />
                      <img
                        src="../assets/svg/service/copy-bold.svg"
                        className="img-fluid bold-icon"
                        alt=""
                      />
                    </div>
                    <div className="service-content">
                      <h3>
                        <img
                          src="../assets/svg/service-title.svg"
                          alt="effect"
                          className="img-fluid"
                        />
                        One Time Setup
                      </h3>
                      <p>
                        (As once you avail our software our team will install
                        the EA software for automated trading in your system or
                        in VPS. as our team will guide and support you till
                        start to get your profit.)
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="service-box">
                    <div className="service-icon">
                      <img
                        src="../assets/svg/service/graph.svg"
                        className="img-fluid outline-icon"
                        alt=""
                      />
                      <img
                        src="../assets/svg/service/graph-bold.svg"
                        className="img-fluid bold-icon"
                        alt=""
                      />
                    </div>
                    <div className="service-content">
                      <h3>
                        <img
                          src="../assets/svg/service-title.svg"
                          alt="effect"
                          className="img-fluid"
                        />
                        Smooth Experience on any Device
                      </h3>
                      <p>
                        The custom- built trading platform has been adapted for
                        all devices you may choose and switching is mobile,
                        Computer Etc., Easy withdrawal in any time with any
                        Device.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="service-box">
                    <div className="service-icon">
                      <img
                        src="../assets/svg/service/search.svg"
                        className="img-fluid outline-icon"
                        alt=""
                      />
                      <img
                        src="../assets/svg/service/search-bold.svg"
                        className="img-fluid bold-icon"
                        alt=""
                      />
                    </div>
                    <div className="service-content">
                      <h3>
                        <img
                          src="../assets/svg/service-title.svg"
                          alt="effect"
                          className="img-fluid"
                        />
                        Zero Trading Knowledge Required
                      </h3>
                      <p>
                        The custom- built trading platform has been adapted for
                        all devices you may choose and switching is mobile,
                        Computer Etc., Easy withdrawal in any time with any
                        Device.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="service-box">
                    <div className="service-icon">
                      <img
                        src="../assets/svg/service/text.svg"
                        className="img-fluid outline-icon"
                        alt=""
                      />
                      <img
                        src="../assets/svg/service/text-bold.svg"
                        className="img-fluid bold-icon"
                        alt=""
                      />
                    </div>
                    <div className="service-content">
                      <h3>
                        <img
                          src="../assets/svg/service-title.svg"
                          alt="effect"
                          className="img-fluid"
                        />
                        Start Trading in 24 Hours
                      </h3>
                      <p>
                        Once your setup is completed, your trade will start and
                        you can see your daily profits.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="service-box">
                    <div className="service-icon">
                      <img
                        src="../assets/svg/service/search.svg"
                        className="img-fluid outline-icon"
                        alt=""
                      />
                      <img
                        src="../assets/svg/service/search-bold.svg"
                        className="img-fluid bold-icon"
                        alt=""
                      />
                    </div>
                    <div className="service-content">
                      <h3>
                        <img
                          src="../assets/svg/service-title.svg"
                          alt="effect"
                          className="img-fluid"
                        />
                        Zero Monitoring
                      </h3>
                      <p>
                        As our client no need to watch the market, as our EA
                        software will trade by itself with most profitable
                        strategy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="service-box">
                    <div className="service-icon">
                      <img
                        src="../assets/svg/service/text.svg"
                        className="img-fluid outline-icon"
                        alt=""
                      />
                      <img
                        src="../assets/svg/service/text-bold.svg"
                        className="img-fluid bold-icon"
                        alt=""
                      />
                    </div>
                    <div className="service-content">
                      <h3>
                        <img
                          src="../assets/svg/service-title.svg"
                          alt="effect"
                          className="img-fluid"
                        />
                        Dedicated Expert Support
                      </h3>
                      <p>
                        24/7 expert analysers monitor your Auto Trade for Entire
                        Period with Day & Night Shift.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-6">
                    <div className="service-info">
                        <div>
                            <div className="title">
                                <h2>For All Kind of Creators</h2>
                                <h3>In the digital world, our AI Writer supports a variety of artists</h3>
                            </div>
                            <p>Introducing a revolutionary AI partner for creators across the globe—a groundbreaking
                                tool designed to transform the way we bring our creative ideas to life. Unleash your
                                artistic abilities as you explore a world of limitless possibilities. Say goodbye to
                                obstacles and let
                                this remarkable AI companion pave the way to a new era of boundless creation.</p>
                            <a data-cursor="pointer" className="btn-arrow" href="">
                                <div className="icon-arrow"><i className="iconsax" data-icon="arrow-up"></i></div>View all
                            </a>
                        </div>
                    </div>
                </div> */}
          </div>
        </div>
      </div>
      {/* <!-- service section end --> */}

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
        pric
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

      {/* <!-- about section start --> */}
      {/* <section className="about-section section-b-space">
        <div className="bg-effect" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="500"></div>
        <div className="container">
            <div className="row g-md-5 g-4">
                <div className="col-lg-6 order-lg-0 order-1">
                    <div className="about-content">
                        <div>
                            <div className="title">
                                <span className="number-pattern">03.</span>
                                <h2 className="text-white">MegaAI: Your Companion for Hashtags, Captions,
                                    and More!</h2>
                            </div>
                            <p>Experience the power of Megabot AI and revolutionise your social media presence. Say
                                goodbye to writer's block and hello to compelling hashtags, captivating captions, and
                                endless content possibilities.</p>
                            <ul>
                                <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="tick"/>Curate endless
                                    content possibilities that make your website shine. </li>
                                <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="tick"/>Generates compelling
                                    hashtags that skyrocket your reach</li>
                                <li><img src="../assets/svg/tick.svg" className="img-fluid" alt="tick"/>Unlock a world of
                                    unlimited content ideas that keep your followers hooked.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about-img">
                        <img src="../assets/svg/character/3.svg" className="img-fluid" alt="about"/>
                    </div>
                </div>
            </div>
        </div>
    </section> */}
      {/* <!-- about section end --> */}

      {/* <!-- feature section start --> */}
      <section className="feature-section section-b-space">
        <div className="bg-effect">
          <img
            src="../assets/images/feature.gif"
            className="img-fluid feature-left"
            alt=""
          />
          <img
            src="../assets/images/feature.gif"
            className="img-fluid feature-right"
            alt=""
          />
          <img
            src="../assets/images/feature-bg.png"
            className="img-fluid feature-bg"
            alt=""
          />
          <span className="round-effect"></span>
        </div>
        <div className="container">
          <div className="title-basic">
            <h2>Live Daily Results of Auto Trading</h2>
          </div>

          <div _ngcontent-vth-c7="" className="box-ss">
            {/* <h3 _ngcontent-vth-c7="" className="ss-content">
              Live Daily Results of Auto Trading{" "}
            </h3> */}
            <div _ngcontent-vth-c7="" className="bar"></div>
            <Video/>
          </div>
        </div>
        <div className="pagination-effect">
          <img
            src="../assets/svg/pagination-robot.svg"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="swiper-pagination feature-pagination"></div>
      </section>
      {/* <!-- feature section end --> */}

      {/* <!-- faq section start --> */}
      <section className="faq-section">
        <div className="container">
          <div className="title-basic">
            <h2 className="text-white">Frequently Asked Questions</h2>
          </div>
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  data-cursor="pointer"
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Whether need to have knowledge in trading ?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div className="accordion-body">
                  <p>
                    No need of trading knowledge. All trading process will take
                    care by the bot. Client can check the notifications of
                    amount rise.
                  </p>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                <button
                  data-cursor="pointer"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  How Can i Know my Trading Amount Getting Multiple?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingTwo"
              >
                <div className="accordion-body">
                  Login into trading app with user id and password and can know
                  the amount multiple status.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                <button
                  data-cursor="pointer"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Whether need to have Computer/ System / Internet ?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingThree"
              >
                <div className="accordion-body">
                  No need of separate system or laptop. Only smart phone is
                  enough to login and know the trading amount status.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="panelsStayOpen-headingFour">
                <button
                  data-cursor="pointer"
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseFour"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseFour"
                >
                  How to Withdraw the Amount?
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseFour"
                className="accordion-collapse collapse"
                aria-labelledby="panelsStayOpen-headingFour"
              >
                <div className="accordion-body">
                  From trading app to your account or from a wallet like skrill,
                  you can withdraw your amount. both will vary in time.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- faq section end --> */}

      {/* <!-- pricing section start --> */}
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
                    <a className="pricing-link" data-cursor="pointer">
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
      {/* <!-- pricing section end --> */}

      {/* <!-- testimonial section start --> */}
      <div className=' home-section'>
      <div class="bg-effect">
      <section className="testimonial-section section-b-space">

        <div className="container">

          <div className="title-basic">
            <h2>Check out how much Trading Robot is loved by our users!</h2>
          </div>

          <Testimonials />

          {/* <Cards/> */}
          {/* <div className="swiper testimonialSlider">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testimonial-box">
                  <div className="content-sec">
                    <div className="quote-img">
                      <img
                        src="../assets/svg/quote.svg"
                        className="img-fluid outline-img"
                        alt=""
                      />
                      <img
                        src="../assets/svg/quote-green.svg"
                        className="img-fluid fill-img"
                        alt=""
                      />
                    </div>
                    <p>
                      {" "}
                      The quality of the generated text is impressive, and it
                      saves me so much time and effort. Highly recommended!
                    </p>
                  </div>
                  <div className="small-circle">
                    <span></span>
                  </div>
                  <div className="large-circle">
                    <span></span>
                  </div>
                  <div className="avtar-img">
                    <img
                      src="../assets/images/user/1.jpg"
                      className="img-fluid"
                      alt="user"
                    />
                  </div>
                  <h4>Marvin McKinney</h4>
                  <h5>Content writer</h5>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <div className="testimonial-box">
                  <div className="content-sec">
                    <div className="quote-img">
                      <img
                        src="../assets/svg/quote.svg"
                        className="img-fluid outline-img"
                        alt=""
                      />
                      <img
                        src="../assets/svg/quote-green.svg"
                        className="img-fluid fill-img"
                        alt=""
                      />
                    </div>
                    <p>
                      As a marketer, I'm always looking for ways to streamline
                      my work. The AI Tool has been a fantastic addition to my
                      toolkit. It helps me come up with creative ideas!
                    </p>
                  </div>
                  <div className="small-circle">
                    <span></span>
                  </div>
                  <div className="large-circle">
                    <span></span>
                  </div>
                  <div className="avtar-img">
                    <img
                      src="../assets/images/user/2.jpg"
                      className="img-fluid"
                      alt="user"
                    />
                  </div>
                  <h4>Marvin McKinney</h4>
                  <h5>Content writer</h5>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
              >
                <div className="testimonial-box">
                  <div className="content-sec">
                    <div className="quote-img">
                      <img
                        src="../assets/svg/quote.svg"
                        className="img-fluid outline-img"
                        alt=""
                      />
                      <img
                        src="../assets/svg/quote-green.svg"
                        className="img-fluid fill-img"
                        alt=""
                      />
                    </div>
                    <p>
                      I was skeptical about using AI for content generation, but
                      after trying out the AI Generation Tool, I was pleasantly
                      surprised.
                    </p>
                  </div>
                  <div className="small-circle">
                    <span></span>
                  </div>
                  <div className="large-circle">
                    <span></span>
                  </div>
                  <div className="avtar-img">
                    <img
                      src="../assets/images/user/3.jpg"
                      className="img-fluid"
                      alt="user"
                    />
                  </div>
                  <h4>Marvin McKinney</h4>
                  <h5>Content writer</h5>
                </div>
              </div>
              <div
                className="swiper-slide"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <div className="testimonial-box">
                  <div className="content-sec">
                    <div className="quote-img">
                      <img
                        src="../assets/svg/quote.svg"
                        className="img-fluid outline-img"
                        alt=""
                      />
                      <img
                        src="../assets/svg/quote-green.svg"
                        className="img-fluid fill-img"
                        alt=""
                      />
                    </div>
                    <p>
                      The AI Generation Tool has revolutionized the way I write.
                      Whether I need help with brainstorming ideas or fleshing
                      out drafts.
                    </p>
                  </div>
                  <div className="small-circle">
                    <span></span>
                  </div>
                  <div className="large-circle">
                    <span></span>
                  </div>
                  <div className="avtar-img">
                    <img
                      src="../assets/images/user/3.jpg"
                      className="img-fluid"
                      alt="user"
                    />
                  </div>
                  <h4>Marvin McKinney</h4>
                  <h5>Content writer</h5>
                </div>
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        </div>

      </section>
      </div>
        </div>
      {/* <!-- testimonial section end --> */}

      {/* <!-- contact us start --> */}
      <section className="info-section section-b-space">
        <div className="container">
          <div
            className="info-box"
            data-aos="fade-in"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="hand-effect d-md-block d-none">
              <img
                src="../assets/svg/hand.svg"
                className="img-fluid left-hand"
                alt="hand"
              />
              <img
                src="../assets/svg/hand.svg"
                className="img-fluid right-hand"
                alt="hand"
              />
            </div>
            <h2>
              Ready to{" "}
              <span>
                move{" "}
                <img
                  src="../assets/svg/title-effect.svg"
                  className="img-fluid"
                  alt="title-effect"
                />
              </span>
              ahead?
            </h2>
            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
            <ul>
              <li>
                <img
                  src="../assets/svg/tick.svg"
                  className="img-fluid"
                  alt="tick"
                />
                One Time Setup
              </li>
              <li>
                <img
                  src="../assets/svg/tick.svg"
                  className="img-fluid"
                  alt="tick"
                />
                Smooth Experience on any Device
              </li>
              <li>
                <img
                  src="../assets/svg/tick.svg"
                  className="img-fluid"
                  alt="tick"
                />
                Zero Trading Knowledge Required
              </li>
              <li>
                <img
                  src="../assets/svg/tick.svg"
                  className="img-fluid"
                  alt="tick"
                />
                Start Trading in 24 Hours
              </li>
            </ul>
            <a data-cursor="pointer" className="btn-arrow" href="/contact">
              <div className="icon-arrow">
                <FaArrowUp />
              </div>
              Contact us now
            </a>
          </div>
        </div>
      </section>
      {/* <!-- contact us end --> */}

      {/* <!-- footer section start--> */}
      <footer>
        <Footer />
      </footer>
      {/* <!-- footer section end--> */}
      {/* <!-- Tap To Top Button Start --> */}
      <div className="tap-to-top-box hide">
        <button className="tap-to-top-button">
          <i className="iconsax" data-icon="chevron-up"></i>
        </button>
      </div>
      {/* </>
      )} */}
    </>
  );
}
