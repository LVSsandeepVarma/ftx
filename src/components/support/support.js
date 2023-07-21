import React, { useEffect, useState } from "react";
import Header from "../navbar/header";
import Footer from "../footer/footer";
import SupportForm from "./supportForm";
import { FiMail } from "react-icons/fi";
import Loading from "../loader/loading";
import { metaData } from "../metadata";

export default function Support() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // setLoading(true)
    document.title = metaData.supportTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", metaData.supportDesc); // Update the meta description tag
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", metaData.supportKeywords); // Update the meta description tag
    }
    setLoading(false);
  }, []);
  return (
    <>
      {loading && <Loading />}
      <Header currentPage="support" />
      {/* <!-- breadcrumb section start --> */}
      <section className="breadcrumb-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="breadcrumb-content">
                <div>
                  <h2 style={{ marginTop: "5vh" }}>
                    <img
                      src="../assets/images/breadcrumb-title.png"
                      className="img-fluid"
                      alt="title-effect"
                    />
                    Assistance For Auto Trading Setup
                  </h2>
                  <p>
                    <i className="ri-subtract-line"></i>Raise Ticket and Get in
                    touch with one of our experts. We will be happy to help you.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-lg-inline-block d-none">
              <div className="breadcrumb-img">
                <img
                  src="../assets/images/support-vector-01.png"
                  className="img-fluid"
                  alt="service"
                  width={400}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb section end --> */}

      {/* contact us section start  */}
      <section className="contact-section pb-md-5 pb-0">
        <div
          className="container"
          //   style={{ display: "flex", justifyContent: "space-around" }}
        >
          <ul className="contact-box">
            <li>
              <div className="contact-icon">
                <img
                  src="../assets/svg/contact/message.svg"
                  className="img-fluid"
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
              <div className="contact-icon">
                <img
                  src="../assets/svg/contact/contact.svg"
                  className="img-fluid"
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
              <div className="contact-icon">
                <img
                  src="../assets/svg/contact/route.svg"
                  className="img-fluid"
                  alt="message"
                />
              </div>
              <h3>Address </h3>
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                No.51, The Signature Building,
              </p>
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                Changi Business Park Central 2, No.04-05,
              </p>
              <p
                style={{
                  padding: 0,
                  margin: 0,
                  textAlign: "center",
                  width: "100%",
                }}
              >
                The Signature, Singapore - 486066.
              </p>
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
              <p>Mon - Fri - 09:00AM - 06:00PM </p>
              <p>Saturday - 09:00AM - 05:00PM</p>
            </li>
          </ul>
        </div>
        <div className="container contact-details">
          <h1 style={{ color: "#fff", textAlign: "center" }}>Ticket Panel</h1>
          <p style={{ color: "#fff", textAlign: "center" }}>
            Fill in the form below and we'll get in touch with you as soon as
            possible.
          </p>
          <div className="row g-lg-5 g-4">
            <div className="col-xl-7 col-lg-6">
              <SupportForm />
            </div>
            <div className="col-xl-5 col-lg-6">
              <div>
                <div>
                  <img
                    src="../assets/images/support/support1.png"
                    width={"100%"}
                    style={{ height: "40vh" }}
                  ></img>
                  <div
                    _ngcontent-xds-c5=""
                    className="single-box-support-left text-left"
                  >
                    <h3 _ngcontent-xds-c5="" className="titles">
                      Ticket Panel
                    </h3>
                    <div _ngcontent-xds-c5="" className="bars"></div>
                    {/* <h3 _ngcontent-xds-c5="" className="sub-titles">
                      Ticket Id:{" "}
                    </h3> */}
                    <hr _ngcontent-xds-c5="" className="hr-ss4" />
                    <p _ngcontent-xds-c5="" style={{ color: "black" }}>
                      Convert all information into tickets. We prioritize,
                      categorize and assign them to the right Department.
                    </p>
                  </div>
                  <div
                    _ngcontent-xds-c5=""
                    className="single-box-support-left-1 text-left"
                  >
                    <h3 _ngcontent-xds-c5="" className="titles">
                      For Support
                    </h3>
                    <div _ngcontent-xds-c5="" className="bars"></div>
                    <h3 _ngcontent-xds-c5="" className="sub-titles">
                      24 X 7 Support
                    </h3>
                    <hr _ngcontent-xds-c5="" className="hr-ss4" />
                    <span
                      _ngcontent-xds-c5=""
                      className="text"
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FiMail className="flex" style={{ marginRight: "5px" }} />
                      <a _ngcontent-xds-c5="" href="#">
                        install@autotradingdownload.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact us section ends */}
      <footer>
        <Footer />
      </footer>
    </>
  );
}
