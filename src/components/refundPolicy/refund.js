import React, { useEffect } from "react";
import Header from "../navbar/header";
import Footer from "../footer/footer";
import { metaData } from "../metadata";

export default function Refund() {
  useEffect(() => {
    document.title = metaData.refuncTitle;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", metaData.refundDesc); // Update the meta description tag
    }
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", metaData.refundKeywords); // Update the meta description tag
    }
  }, []);
  return (
    <>
      <Header />
      {/* <!-- breadcrumb section start --> */}
      <section class="breadcrumb-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="breadcrumb-content">
                <div>
                  <h2>
                    <img
                      src="../assets/images/breadcrumb-title.png"
                      class="img-fluid"
                      alt="title-effect"
                    />
                    Refund Policy
                  </h2>
                </div>
              </div>
            </div>
            <div class="col-lg-6 d-lg-inline-block d-none">
              <div class="breadcrumb-img">
                <img
                  src="../assets/svg/blog-details-vector.svg"
                  class="img-fluid"
                  alt="service"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- breadcrumb section end --> */}
      <section class="ratio_40">
        <div class="container">
          <div class="blog-details">
            <div class="row">
              <div class="col-lg-8 col-md-10 m-auto">
                <div class="blog-main-content mt-0">
                  <p>Refund is applicable only when the product is defected.</p>
                  <p>
                    From The Time of Signing Up (after Submitting the Agreement)
                    Maximum 48hrs to 72 working hrs. , If Service Not Delivered
                    For Configuring for Your Bot ,You can request for Refund.
                  </p>
                  <p>
                    Refund is not applicable For the Loss, But Compensation or
                    Required Action will be taken to recover your Loss.
                  </p>
                  <p>
                    As Becoming Our Client by accepting the Terms and Conditions
                    above , You certify that you are well aware and you Cease To
                    File For Refund After Purchase.
                  </p>
                  <p>
                    If the product to be defected and Not Functioning Maximum Up
                    to 15 days Refund is Applicable. or otherwise there is No
                    Refund is issued in this case.
                  </p>
                  <h3 class="mt-xl-5 mt-md-3 mt-2">
                    <img
                      src="../assets/svg/title-effect2.svg"
                      class="img-fluid"
                      alt="effect"
                    />
                    JOURNAL & EXPERT HISTORY
                  </h3>
                  <p>
                    <b>Comprehensive Account History</b>
                  </p>
                  <p>
                    If you would like to transfer your purchase or to submit a
                    refund request, Please provide us the Client ID Number,
                    Authorized User Name, date of purchase, a complete account
                    trading history, journal and expert history exporting from
                    your MT4 platform in PDF OR HTML extension for the
                    particular account through email. The email should be sent
                    to{" "}
                    <a href="mailto:install@autotradingdownload.com">
                      install@autotradingdownload.com
                    </a>{" "}
                    from the same email Address what was provided in the Expert
                    coding form.
                  </p>
                  <p>
                    Please allow up to 72 hrs to our team to review your details
                    and process your refund or transfer of license request
                    depending on the nature of inquiry. Our support team will
                    contact you to confirm that your refund/transfer has been
                    processed or to ask for any additional information if
                    needed.
                  </p>
                  <p>
                    All refunds will be issued through the same mode of payment
                    in which they are made at the time of purchase. Please allow
                    7-14 working days for processing your request and for the
                    refund to be credited to your account.
                  </p>
                  <p>
                    If you have any further questions or concerns, we are happy
                    to assist you through our support desk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
