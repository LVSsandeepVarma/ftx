import React, { useEffect, useState } from "react";
import Header from "../navbar/header";
import Footer from "../footer/footer";
import Login from "../login/login";
import Loading from "../loader/loading";

export default function Contactus() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true)
    setLoading(false);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <Header currentPage="contact" />
      {/* <!-- breadcrumb section start --> */}
      <section class="breadcrumb-section" >
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
                    Contact us
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
      <section class="contact-section pb-md-5 pb-0">
        <div class="">
          <ul class="contact-box">
            <li>
              <div class="contact-icon">
                <img
                  src="../assets/svg/contact/message.svg"
                  class="img-fluid"
                  alt="message"
                />
              </div>
              <h3>Mail id</h3>
              <h4>
                <a href="mailto:install@autotradingdownload.com">
                  <p>install@autotradingdownload.com</p>
                </a>
              </h4>
            </li>
            <li>
              <div class="contact-icon">
                <img
                  src="../assets/svg/contact/contact.svg"
                  class="img-fluid"
                  alt="message"
                />
              </div>
              <h3>Contact no.</h3>
              <h4>
                <a href="tel:+60194260687">
                  <p>+60 194260687</p>
                </a>
              </h4>
            </li>
            <li>
              <div class="contact-icon">
                <img
                  src="../assets/svg/contact/route.svg"
                  class="img-fluid"
                  alt="message"
                />
              </div>
              <h3>Address </h3>
              <h4>No.51, The Signature Building,</h4>
              <h4>Changi Business Park Central 2, No.04-05,</h4>
              <h4>The Signature, Singapore - 486066.</h4>
            </li>
            <li>
              <div class="contact-icon">
                <img
                  src="../assets/svg/contact/address.svg"
                  class="img-fluid"
                  alt="message"
                />
              </div>
              <h3>Available</h3>
              <h4>Mon - Fri - 09:00AM - 06:00PM </h4>
              <h4>Saturday - 09:00AM - 05:00PM</h4>
            </li>
          </ul>
        </div>
        <div
          className="  " 
          style={{ display: "flex", justifyContent: "center", marginTop:"35px" }}
        >
          <div className="col-sm-10 col-md-10 col-lg-8">
            <Login currentPage="contact" />
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
