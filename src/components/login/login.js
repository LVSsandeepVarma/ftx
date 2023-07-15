import React, { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import RegisterForm from "../register/registerForm";
import Loading from "../loader/loading";
import { FaPhone } from "react-icons/fa";
import { GrLocation } from "react-icons/gr";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.number().required("phone number is required").min(8),
  city: Yup.string().matches(/^[A-Za-z\s.'-]+$/, 'Invalid city name').required("City is required"),
  subject: Yup.string().required("subject required"),
  message: Yup.string().required("message is required"),
});

export default function Login(props) {
  const [downloadStatus, setDownloadStatus] = useState(false);
  const [downloadErr, setDownloadErr] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  console.log(props?.currentPage);

  const { executeRecaptcha } = useGoogleReCaptcha();


  const validationSchema =
    props?.currentPage === "contact"
      ? Yup.object().shape({
          name: Yup.string().matches(/^[A-Za-z ]+$/, "only charecters are allowed").required("Name is required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
          phone: Yup.string().matches(/^\d{8,16}$/, 'Invalid phone number').required("phone number is required").min(8,"atleast 8 digits are required"),
          city: Yup.string().matches(/^[A-Za-z\s.'-]+$/, 'Invalid city name').required("City is required"),
          subject: Yup.string().required("subject required"),
          message: Yup.string().required("message is required"),
        })
      : Yup.object().shape({
          name: Yup.string().matches(/^[A-Za-z ]+$/, "only charecters are allowed").required("Name is required"),
          email: Yup.string()
            .email("Invalid email")
            .required("Email is required"),
          phone: Yup.string().matches(/^\d{8,16}$/, 'Invalid phone number').required("phone number is required"),
          city: Yup.string().matches(/^[A-Za-z\s.'-]+$/, 'Invalid city name').required("City is required"),
        });

        useEffect(() => {
          let timeoutId;
      
          if (successMsg) {
            timeoutId = setTimeout(() => {
              setSuccessMsg("");
            }, 15000);
          }
      
          return () => {
            clearTimeout(timeoutId);
          };
        }, [successMsg]);

        useEffect(() => {
          let timeoutId;
      
          if (downloadErr) {
            timeoutId = setTimeout(() => {
              setDownloadErr([]);
            }, 15000);
          }
      
          return () => {
            clearTimeout(timeoutId);
          };
        }, [downloadErr]);

  const handleSubmit = async (values, { resetForm }) => {
    // Handle form submission here
    setLoading(true);
    setDownloadErr([]);
    setSuccessMsg("");
    document.body.classList.add("no-scroll");

    // console.log(values);
    try {

      //api call
      if (props.currentPage == "contact") {
        const token =await executeRecaptcha("contact")
        const response = await axios.post(
          "https://staffdesk.ftxtradingsoftware.com/api/react-v1/client/ask-question",
          {
            name: values?.name,
            email: values?.email,
            phone: values?.phone,
            city: values?.city,
            subject: values?.subject,
            message: values?.message,
            siteToken: token,
            country: "USA",
            domain: "www.autotradingdownload.com",
          }
        );
        if (response?.data?.status) {
          resetForm();
          setDownloadStatus(true);

          setSuccessMsg(response?.data?.message);
        } else {
          setDownloadStatus(false);
          console.log(response?.data?.errors);
          setDownloadErr([...response?.data?.errors]);
        }
      } else {
        const token =await executeRecaptcha("login")
        
        const response = await axios.post(
          "https://staffdesk.ftxtradingsoftware.com/api/react-v1/client/register",
          {
            name: values?.name,
            email: values?.email,
            phone: values?.phone,
            city: values?.city,
            siteToken: token,
            country: "USA",
            domain: "www.autotradingdownload.com",
          }
        );
        if (response?.data?.status) {
          resetForm();
          setDownloadStatus(true);

          setSuccessMsg(response?.data?.message);
        } else {
          setDownloadStatus(false);
          console.log(response?.data?.errors);
          setDownloadErr([...response?.data?.errors]);
        }
      }
      setLoading(false);
      document.body.classList.remove("no-scroll");
    } catch (err) {
      console.log(err?.response);
      const errArr = [];
      errArr.push([err?.response?.data?.errors]);
      setDownloadErr(...errArr);

      setLoading(false);
      document.body.classList.remove("no-scroll");
    }
    resetForm();
  };

  function onVerify(token) {
    console.log(token);
    document.getElementById("recaptchaResponse").value = token;
  }

  return (
    <>
      {loading && props.currentPage=="home"  && <Loading />}
      <section className={`${props.currentPage=="modal"?"login-section contact-section modal-section":"login-section contact-section"}`}>
      {/* {`${props.currentPage="modal"?"login-section contact-section modal-section":"login-section contact-section"}`} */}
      
        {/* <a href="index.html"><img src="../assets/images/logo.svg" className="img-fluid logo-auth"/></a> */}
        <div
          className={`row m-0 ${props.currentPage=="modal"?"modalAlign":""} `}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {loading && props.currentPage=="contact" && <Loading />}
          {loading && (props.currentPage=="getStarted"|| props.currentPage=="modal")  && <Loading />}

          {/* <div className="col-lg-7 d-lg-inline-block d-none p-0"> */}
          {/* <div className="login-animation">
                    <img src="../assets/svg/auth/1.svg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100"
                        className="img-fluid img-base" alt=""/>
                    <img src="../assets/svg/auth/2.svg" data-aos="zoom-in-up" data-aos-duration="1000"
                        data-aos-delay="1000" className="img-fluid img-light" alt=""/>
                    <div className="img-face" data-aos-delay="2500" data-aos="flip-left" data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"> <img src="../assets/svg/auth/3.svg" className="img-fluid" alt=""/></div>
                </div> */}
          {/* </div> */}
          <div
            className="col-md-10 flex !justify-center  p-0"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className={`${props.currentPage=="contact"?"contact-form": props.currentPage=="modal"? "modal-login login-box":"login-box"}`} style={{ width: "100%" }}>
              <div>
                <h2>
                  Automatic Bot <span>Download</span>
                </h2>
                {/* <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="login-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#login-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="login-tab-pane"
                      aria-selected="true"
                    >
                      Login
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="signup-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#signup-tab-pane"
                      type="button"
                      role="tab"
                      aria-controls="signup-tab-pane"
                      aria-selected="false"
                    >
                      signup
                    </button>
                  </li>
                </ul> */}
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="login-tab-pane"
                    role="tabpanel"
                    aria-labelledby="login-tab"
                    tabindex="0"
                  >
                    <input
                      type="hidden"
                      name="recaptchaResponse"
                      id="recaptchaResponse"
                    />
                    <Formik
                      initialValues={{
                        name: "",
                        email: "",
                        phone: "",
                        city: "",
                        subject: "",
                        message: "",
                      }}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}
                    >
                      {({ handleSubmit }) => (
                        <form
                          className="auth-form !text-left"
                          style={{ textAlign: "start" }}
                          onSubmit={handleSubmit}
                        >
                          {props.currentPage == "contact" && (
                            <div className="mb-3 form-group">
                              <i className="iconsax" data-icon="mail">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </i>
                              <label htmlFor="subject" className="form-label">
                                Subject<span style={{color:"red", marginLeft:"4px"}}>*</span>
                              </label>
                              <Field
                                type="text"
                                placeholder="Enter your subject"
                                className="form-control"
                                id="subject"
                                name="subject"
                              />
                              <ErrorMessage
                                name="subject"
                                component="div"
                                className="error-message !text-red-600 relative"
                              />
                            </div>
                          )}

                          <div className="mb-2 form-group">
                            <i className="iconsax" data-icon="lock-2">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </i>
                            <label htmlFor="name" className="form-label">
                              Your Name<span style={{color:"red", marginLeft:"4px"}}>*</span>
                            </label>
                            <Field
                              type="text"
                              placeholder="Enter your Name"
                              className="form-control"
                              id="name"
                              name="name"
                            />
                            <ErrorMessage
                              name="name"
                              component="div"
                              className="error-message !text-red-600 relative"
                            />
                          </div>

                          <div className="mb-3 form-group">
                            <i className="iconsax" data-icon="mail">
                              <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                                  stroke="#292D32"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </i>
                            <label htmlFor="emailid" className="form-label">
                              Email ID<span style={{color:"red", marginLeft:"4px"}}>*</span>
                            </label>
                            <Field
                              type="email"
                              placeholder="Enter your mail id"
                              className="form-control"
                              id="emailid"
                              name="email"
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              className="error-message !text-red-600 relative"
                            />
                          </div>

                          <div className="mb-3 form-group">
                            <i className="iconsax" data-icon="mail">
                              <FaPhone
                                color="transparent"
                                strokeWidth={20}
                                stroke="white"
                              />
                            </i>
                            <label htmlFor="phone" className="form-label">
                              Contact Number<span style={{color:"red", marginLeft:"4px"}}>*</span>
                            </label>
                            <Field
                              type="tel"
                              placeholder="Enter your Contact No"
                              className="form-control"
                              id="phone"
                              name="phone"
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              className="error-message !text-red-600 relative"
                            />
                          </div>

                          <div className="mb-2 form-group">
                            <i className="iconsax" data-icon="lock-2">
                              <GrLocation
                                color="transparent"
                                strokeWidth={20}
                                stroke="white"
                              />
                            </i>
                            <label htmlFor="city" className="form-label">
                              Your City<span style={{color:"red", marginLeft:"4px"}}>*</span>
                            </label>
                            <Field
                              type="text"
                              placeholder="Enter your city"
                              className="form-control"
                              id="city"
                              name="city"
                            />
                            <ErrorMessage
                              name="city"
                              component="div"
                              className="error-message !text-red-600 relative"
                            />
                          </div>

                          {props.currentPage == "contact" && (
                            <div className="mb-3 form-group">
                              <i className="iconsax" data-icon="mail">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                  <path
                                    d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                                    stroke="#292D32"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  ></path>
                                </svg>
                              </i>
                              <label htmlFor="message" className="form-label">
                                Message<span style={{color:"red", marginLeft:"4px"}}>*</span>
                              </label>
                              <Field
                                type="textarea"
                                placeholder="Enter your message"
                                className="form-control"
                                id="message"
                                name="message"
                              />
                              <ErrorMessage
                                name="message"
                                component="div"
                                className="error-message !text-red-600 relative"
                              />
                            </div>
                          )}

                          <div style={{ marginTop: "2rem" }}>
                            <button
                              type="submit"
                              className="btn-solid w-100 text-center mt-6"
                            >
                              Download AI Robot
                            </button>
                          </div>
                          {downloadErr.length>0 &&
                            downloadErr.map((val, ind) =>
                              Object.values(val).map((err, i) => (
                                <div
                                  className="alert border text-white border-danger  fade show"
                                  style={{
                                    marginTop: "15px",
                                    background: "rgba(0,0,0,0.3",
                                    textAlign:"center"
                                  }}
                                >
                                  {err}
                                  
                                </div>
                              ))
                            )}
                          {successMsg.length && (
                            <div
                              className="alert border text-white border-success fade show"
                              style={{ marginTop: "15px", textAlign:"center" }}
                            >
                              {successMsg}
                            </div>
                          )}

                          {/* <h4 className="text-title text-center mt-2">
            Don’t have an account ?{' '} */}
                          {/* <a data-cursor="pointer" onClick={() => signupClick()} href="javascript:void(0)">Sign up</a> */}
                          {/* </h4> */}

                          {/* <div className="divider">
              <h3>or sign in with</h3>
          </div>
          <ul className="social-btn">
              <li><a data-cursor="pointer" href="https://www.google.com/"><img
                          src="../assets/svg/google.svg" className="img-fluid"/>Continue with
                      google</a></li>
              <li><a data-cursor="pointer" href="https://www.apple.com/"><img
                          src="../assets/svg/apple.svg" className="img-fluid"/>Continue with
                      apple</a></li>
          </ul> */}
                        </form>
                      )}
                    </Formik>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="signup-tab-pane"
                    role="tabpanel"
                    aria-labelledby="signup-tab"
                    tabindex="0"
                  >
                    <RegisterForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
