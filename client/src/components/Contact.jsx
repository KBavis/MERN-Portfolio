import "../styles/App.css";
import {
  FaUser,
  FaEnvelope,
  FaBookReader,
  FaComment,
  FaRegMoneyBillAlt,
} from "react-icons/fa";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState("");

  const { reset } = useForm();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!name || !email || !subject || !message) {
      return toast.error(
        "Please fill out your name, email, subject, and message"
      );
    }
    try {
      setLoading(true);
      // This was `http://localhost:4000/api/email`
      //`http://ec2-54-89-169-174.compute-1.amazonaws.com:4000/api/email`
      // `http://ec2-54-89-169-174.compute-1.amazonaws.com/api/email`
      //`http://54.89.169.174/api/email`
      const { data } = await axios.post(
        `https://code.kellenbavis.xyz/api/email`,
        {
          name,
          email,
          subject,
          message,
        }
      );
      setLoading(false);
      toast.success(data.message);
      var form = document.getElementById("myForm");
      form.reset();
    } catch (err) {
      setLoading(false);
      toast.error(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  };

  return (
    <div className="contact" id="contact">
      <ToastContainer position="bottom-center" limit={1}></ToastContainer>
      <div className="contact-content">
        <h2 className="title">Contact</h2>
        <div className="sub-title">
          Feel free to message me about any opportunities and I will be sure to
          message back as fast as I can!
        </div>
        <div className="contact-form">
          <form onSubmit={submitHandler} id="myForm">
            <div className="fields">
              <div className="field name">
                <div className="field-header">
                  {" "}
                  <FaUser className="icon"></FaUser> Name
                </div>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                ></input>
              </div>
              <div className="field email">
                <div className="field-header">
                  <FaEnvelope className="icon"></FaEnvelope> Email
                </div>
                <input
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email"
                ></input>
              </div>
              <div className="field subject">
                <div className="field-header">
                  {" "}
                  <FaBookReader className="icon"></FaBookReader> Subject
                </div>
                <input
                  type="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Enter the Subject"
                ></input>
              </div>
              <div className="field textarea">
                <div className="field-header">
                  {" "}
                  <FaComment className="icon"></FaComment>Message
                </div>
                <textarea
                  cols="30"
                  rows="10"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <div className="button">
                <button disableed={loading} type="submit">
                  {loading ? "Sending..." : "Send message"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
