import React, { useEffect, useRef, useState } from "react";
import { Formik, Field, Form, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import Loading from "../loader/loading";
import axios from "axios";
import {
  useGoogleReCaptcha
} from "react-google-recaptcha-v3";

const validationSchema = Yup.object().shape({
  subject: Yup.string().required("Subject is required"),
  name: Yup.string().matches(/^[A-Za-z ]+$/, "only charecters are allowed").required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  department: Yup.string().required("Department is required"),
  priority: Yup.string().required("Priority is required"),
  message: Yup.string().required("Message is required"),
  file: Yup.mixed()
  .test('fileType', 'Only image files are allowed', value => {
    if (value) {
      console.log()
      return value && value.type.startsWith('image/');
    }
    return true; // If no file is selected, consider it as valid
  }),
});

const departments = ["Staff Support", "Agreement Approval"];
const priorities = ["Low", "Medium", "High"];

export default function SupportForm() {

  const [loading, setLoading] = useState(false);
  const [formErr, setFormErr] = useState([]);
  const [submitStatus, setSubmitStatus] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [encfile, setEncFile] = useState("");
  const [token, setToken] = useState("")

  const { executeRecaptcha } = useGoogleReCaptcha();

  const fileInputRef = useRef();


  
  useEffect(() => {
    let timeoutId;

    if (successMsg) {
      timeoutId = setTimeout(() => {
        setSuccessMsg("");
      }, 30000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [successMsg]);

  useEffect(() => {
    let timeoutId;

    if (formErr) {
      timeoutId = setTimeout(() => {
        setFormErr([]);
      }, 30000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [formErr]);

  const handleSubmit = async (values, { resetForm }) => {
    // Perform submit logic here
    setLoading(true);
    document.body.classList.add("no-scroll");
    setSuccessMsg("");
    setFormErr("");
    console.log(values);
    let encodedFile;
    try {
      setLoading(true)
      const reader = new FileReader();
      reader.onloadend = () => {
        encodedFile = reader.result;
      };
      console.log(encodedFile);
      if (values?.file) {
        reader.readAsDataURL(values?.file);
      } 

      encodedFile = reader.result;
      // console.log(encfile);
      console.log(encfile.split(";")[0].split(":")[1],encfile.split(",")[1])
      const token =await executeRecaptcha("contact")
      const response = await axios.post(
        "https://staffdesk.ftxtradingsoftware.com/api/react-v1/support/ticket",
        {
          name: values?.name,
          email: values?.email,
          subject: values?.subject,
          message: values?.message,
          department: values?.department,
          priority: values?.priority,
          file_type: encfile.split(";")[0].split(":")[1],
          filename: encfile.split(",")[1],
          siteToken: token,
        }, {
          // headers:{
          //   "Content-Type":"mulipart formdata"
          // }
        }
      );
      if (response?.data?.status) {
        setSubmitStatus(true);
        setSuccessMsg(response?.data?.message);
      } else {
        setSubmitStatus(false);
        setFormErr(response?.data?.errors);
      }
      setLoading(false);
      document.body.classList.remove("no-scroll");
    } catch (err) {
      console.log(err);
      setLoading(false);
      const errArr = []
        errArr.push([err?.response?.data?.message])
        setFormErr(...errArr)
        console.log(errArr)
      document.body.classList.remove("no-scroll");
    }
    resetForm({values:""})
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    setLoading(false)

    // setSubmitting(false);
  };


  return (
    <>
    {loading && <div className="" style={{width:"100%", height:"100%", margin:0, padding:0, top: 0, position:"absolute", left:0}}> 
     <Loading/>
    </div>}
          <Formik
        initialValues={{
          subject: "",
          name: "",
          email: "",
          department: "",
          priority: "",
          message: "",
          file: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, handleSubmit }) => (
          
          <Form className="auth-form" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="subject" className="form-label" aria-required={true}>
                Subject<span style={{color:"red", marginLeft:"4px"}}>*</span>
              </label>
              <Field type="text" name="subject" className="form-control" />
              <ErrorMessage
                name="subject"
                component="div"
                className="error error-messages absolute"
              />
            </div>

            <div>
              <label htmlFor="name" className="form-label">
                Name<span style={{color:"red", marginLeft:"4px"}}>*</span>
              </label>
              <Field type="text" name="name" className="form-control" />
              <ErrorMessage
                name="name"
                component="div"
                className="error error-messages"
              />
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email<span style={{color:"red", marginLeft:"4px"}}>*</span>
              </label>
              <Field type="email" name="email" className="form-control" />
              <ErrorMessage
                name="email"
                component="div"
                className="error error-messages"
              />
            </div>

            <div>
              <label htmlFor="department" className="form-label">
                Department<span style={{color:"red", marginLeft:"4px"}}>*</span>
              </label>
              <Field as="select" name="department" className="form-control">
                <option value="">Select Department</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="department"
                component="div"
                className="error error-messages"
              />
            </div>

            <div>
              <label htmlFor="priority" className="form-label">
                Priority<span style={{color:"red", marginLeft:"4px"}}>*</span>
              </label>
              <Field as="select" name="priority" className="form-control">
                <option value="">Select Priority</option>
                {priorities.map((priority) => (
                  <option key={priority} value={priority}>
                    {priority}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="priority"
                component="div"
                className="error error-messages"
              />
            </div>

            <div>
              <label htmlFor="message" className="form-label">
                Message<span style={{color:"red", marginLeft:"4px"}}>*</span>
              </label>
              <Field type="textarea" name="message" className="form-control" />
              <ErrorMessage
                name="message"
                component="div"
                className="error error-messages"
              />
            </div>
            <div>
              <label htmlFor="files" className="form-label">
                Upload Image Files
              </label>
              <Field name="file" placeholder="upload image files"> 
                {({ field }) => (
                  <div>
                    <input
                      className="form-control"
                      type="file"
                      id="files"
                      accept="image/*"
                      placeholder="upload image files"
                      ref={fileInputRef}
                      onChange={(event) => {
                        setFieldValue(field.name, event.currentTarget.files[0]);
                        const file = event.target.files[0];
                        const reader = new FileReader();
                        reader.onloadend = () => {
                          setEncFile(reader.result);
                        };

                        if (file) {
                          reader.readAsDataURL(file);
                        }
                        setEncFile(reader.result);
                      }}
                    />
                    <ErrorMessage name="file" component="div" className="error error-messages" />
                  </div>
                )}
              </Field>
            </div>
            {/* <div style={{
              // width: "100%",
              // height: "100%",
              // position: "absolute",
              backgroundColor: "rgba(0,0,0,0.2)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: "9999999",
              overflow: "hidden !important",
              marginTop: "50px",
              color:"white",
            }}> 
            
    <span class="loader text-white" style={{marginRight:"10px"}}></span>submitting...
    </div> */}
            {loading ? "" :
            <button
              type="submit"
              className="submitButton btn-solid w-100 text-center !mt-[60px]"
            >
              Submit
            </button>}
            {formErr?.length && formErr.map((val, ind)=>(
            // Object.values(val).map((err,i)=>(
              <div className="alert border text-white border-danger fade show" style={{marginTop:"15px", background:"rgba(0,0,0,0.3", textAlign:"center"}}>
             {val}
            </div>
            // ))
          ))}
            {successMsg.length>0 && (
              <div className="alert border text-white border-success  fade show" style={{marginTop:"15px", textAlign:"center"}}>
              {successMsg}
          </div>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
