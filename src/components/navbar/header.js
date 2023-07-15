import React from "react";
import {RxHamburgerMenu} from "react-icons/rx"

export default function Header(props) {
    console.log(props?.currentPage)
  return (
    <>
    <div className="">
    <header  >
        
        <a href="/" >
            <img src="../assets/images/FX-New-Logo-Web.png" className="img-fluid" width={"75%"}  alt="logo" />
        </a>
        
        <nav className="header-nav-middle">
            <div className="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
                <div className="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
                    <div className="offcanvas-header navbar-shadow">
                        <h5 className="mb-0">Back</h5>
                        <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas"
                            aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav">
                            <li className={`nav-item ${props?.currentPage=="home"?"active":""}`}>
                                <a className="nav-link" href="/">Home</a>
                            </li>

                            <li className={`nav-item ${props?.currentPage=="features"?"active":""}`}>
                                <a className="nav-link" href="/features">Features</a>
                            </li>

                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="javascript:void(0)"
                                    data-bs-toggle="dropdown">Pages</a>

                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="404.html">404</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="login.html">Login</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="reset-password.html">Reset Password</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="otp.html">OTP</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="blog-grid.html">Blog Grid</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="blog-listing.html">Blog Listing</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="blog-details.html">Blog Details</a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="terms.html">Terms & Conditon</a>
                                    </li>
                                </ul>
                            </li> */}
                            <li className={`nav-item ${props?.currentPage=="support"?"active":""}`}>
                                <a className="nav-link" href="/support">Support</a>
                            </li>

                            <li className={`nav-item ${props?.currentPage=="faq"?"active":""}`}>
                                <a className="nav-link" href="/faq">FAQ</a>
                            </li>

                            <li className={`nav-item ${props?.currentPage=="pricing"?"active":""}`}>
                                <a className="nav-link" href="/pricing">Pricing</a>
                            </li>

                            <li className={`nav-item ${props?.currentPage=="contact"?"active":""}`}>
                                <a className="nav-link" href="/contact">Contact</a>
                            </li>
                            <li className="nav-item">
                            <a data-cursor="pointer" href="/get-started" className=" btn btn-theme d-sm-inline-block"><span>GET STARTED</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
        <button className="navbar-toggler d-xl-none d-inline navbar-menu-button" type="button" data-bs-toggle="offcanvas"
            data-bs-target="#primaryMenu">
            <span className="navbar-toggler-icon">
                <RxHamburgerMenu/>
            </span>
        </button>
        
    </header>
    </div>
      

    </>
  );
}
