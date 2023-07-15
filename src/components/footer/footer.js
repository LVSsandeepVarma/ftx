import React, { useEffect, useState } from "react";

export default function Footer() {
  const [showLinkOneClass, setShowLinkOneClass] = useState("")
  const [showLinkTwoClass, setShowLinkTwoClass] = useState("")
// useEffect(()=>{
//     const footerButton = document.querySelectorAll(".footer-title");
//     const showNav = document.querySelector(".footer-content");
//     console.log(footerButton)
//     for (var i = 0; i < footerButton.length; ++i) {
//         footerButton[i].addEventListener('click', function () {
//             this.parentNode.classList.toggle('open');
//         })
//     }
// })

const handleToggleLinkOne = ()=>{
  setShowLinkTwoClass("")
  if(showLinkOneClass == "open"){
    setShowLinkOneClass("")
  }else{
    setShowLinkOneClass("open")
  } 
}

const handleToggleLinkTwo = ()=>{
  setShowLinkOneClass("")
  if(showLinkTwoClass == "open"){
    setShowLinkTwoClass("")
  }else{
    setShowLinkTwoClass("open")
  } 
}

  return (
    <>
      <div className="container">
        <div className="footer-row">
          {/* <div className="row"> */}
            <div className="footer-main col-lg-3 col-md-5  text-start">
              <a href="/" className="footer-logo">
              <img src="../assets/images/fxLogo1.png" className="img-fluid" width={"80px"} alt="logo"/>
              </a>
              <p>
                FX Trading website is a software provider company for trading.
                Offering automatic robot setup with expert managed trading
                accounts.
              </p>
              {/* <ul className="social-links">
            <li>
              <a data-cursor="pointer" href="https://www.facebook.com/">
                <img
                  src="../assets/svg/social/fb.svg"
                  className="img-fluid"
                  alt="facebook"
                />
              </a>
            </li>
            <li>
              <a data-cursor="pointer" href="https://in.linkedin.com/">
                <img
                  src="../assets/svg/social/linkedin.svg"
                  className="img-fluid"
                  alt="linkedin"
                />
              </a>
            </li>
            <li>
              <a data-cursor="pointer" href="https://www.instagram.com/">
                <img
                  src="../assets/svg/social/insta.svg"
                  className="img-fluid"
                  alt="insta"
                />
              </a>
            </li>
            <li>
              <a data-cursor="pointer" href="https://twitter.com/login">
                <img
                  src="../assets/svg/social/twitter.svg"
                  className="img-fluid"
                  alt="twitter"
                />
              </a>
            </li>
          </ul> */}
            </div>
            <div className={`link-section  text-start ${showLinkOneClass}`} style={{cursor:"pointer"}} onClick ={()=>{handleToggleLinkOne()}}>
              <div className="footer-title">
                <img
                  src="../assets/svg/star.svg"
                  className="img-fluid"
                  alt="star"
                />
                Singapore
              </div>
              <div className="footer-content">
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>
                      No.51, The Signature Building, Changi Business Park
                      Central 2, No.04-05, The Signature, Singapore - 486066.
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="mailto:install@autotradingdownload.com">
                        install@autotradingdownload.com
                      </a>
                    </p>
                  </li>
                  <li>
                    <p>
                      <a href="tel:+60194260687">+60 194260687</a>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`link-section ${showLinkTwoClass}`} style={{cursor:"pointer"}} onClick ={()=>{handleToggleLinkTwo()}}>
              <div class="footer-title">
                <img
                  src="../assets/svg/star.svg"
                  className="img-fluid"
                  alt="star"
                />
                Days / Hours
              </div>
              <div className="footer-content">
                <ul style={{ textAlign: "left" }}>
                  <li>
                    <p>Mon - Fri - 09:00AM - 06:00PM</p>
                  </li>
                  <li>
                    <p>Saturday - 09:00AM - 05:00PM</p>
                  </li>
                </ul>
              </div>
            </div>
          {/* </div> */}
        </div>
        <div className="footer-copyright">
          <h4 style={{margin:"0"}}>@2023 All the Copyright Reserved.</h4>
          <ul className="footer-links">
          <li>
              <a href="/support">Support</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy </a>
            </li>
            <li>
              <a href="/terms">Terms & Condition </a>
            </li>
            <li>
              <a href="/refund">Refund Policy </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
