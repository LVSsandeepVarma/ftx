import React from "react";
import { Modal } from "react-bootstrap";
import Login from "../../login/login";

export default function PricingModal({ showModal, setShowModal }) {
  return (
    <Modal show={showModal} onHide={setShowModal} size="lg" ce>
      <div className=" home-section">
        <div class="bg-effect">
          <img
            src="../assets/images/home/home-bg.gif"
            class="img-fluid bg-gif"
            alt=""
            style={{ height: "100vh" }}
          />
          <div className="">
            {/* <div className='row'> */}
            <Modal.Header
              closeButton
              style={{ color: "white", fontWeight: "bold", fontSize:"large" }}
            >
              Automatic Bot &nbsp; <span style={{color:"rgb(59, 237, 178)"}}>Download</span>
            </Modal.Header>
            <Modal.Body>
              <Login currentPage="modal" />
            </Modal.Body>
            {/* </div> */}
          </div>
        </div>
      </div>
    </Modal>
  );
}
