import React, { useEffect } from "react";
import Header from "../navbar/header";
import Footer from "../footer/footer";
import Login from "../login/login";
import { metaData } from "../metadata";

export default function GetStarted() {
  useEffect(() => {
    document.title = metaData.getStartedTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", metaData.getStartedDesc); // Update the meta description tag
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", metaData.getStartedKeywords); // Update the meta description tag
    }
  }, []);
  return (
    <div>
      <Header />
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
                      class="img-fluid"
                      alt="title-effect"
                    />
                    Download the AI Robot
                  </h2>
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
      <div className=" home-section">
        <div class="bg-effect">
          <img
            src="../assets/images/home/home-bg.gif"
            class="img-fluid bg-gif"
            alt=""
            style={{ height: "100vh" }}
          />
          <img
            src="../assets/svg/home/1.png"
            class="img-fluid effect1 rotate-effect"
            alt=""
            style={{ transform: "rotate(0deg)" }}
          />
          <img
            src="../assets/svg/home/2.svg"
            class="img-fluid effect2 rotate-effect"
            alt=""
            style={{ transform: "rotate(0deg)" }}
          />

          <div
            className=""
            style={{ display: "flex", justifyContent: "center", width: "100%" }}
          >
            {/* <div className='row'> */}
            <div className="col-md-6 col-sm-12">
              <Login currentPage="getStarted" />
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
