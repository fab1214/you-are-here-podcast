import React, { useState } from "react";
import "./Contact.css";
import firebase from 'firebase';
import { db } from "./firebase";
const Contact = () => {
  const [comment, setComment] = useState('');

  //destructure formState into its properties
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection('message').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      text: comment
    });
    setErrorMessage(`Thank you for submitting!`);
    setComment('');
    console.log(comment);
  };

  return (
    <section>
      <div className="container">
        <h1 className="form_header">
          Send a question or topic you would want us to discuss on a future podcast!
        </h1>
        <div className="form">
              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows={10}
                    value={comment}
                    // onBlur={handleChange}
                    onChange={(e) => setComment(e.target.value)}
                  ></textarea>
                </div>
                <div className="submit_btn">
                <button type="submit">
                  Submit
                </button>
                </div>
              </form>
                              {/*conditionally render errorMessage div*/}
                {errorMessage && (
                  <div className="error_message">
                    <p>{errorMessage}</p>
                  </div>
                )}

            </div>
          </div>
    </section>
  );
};

export default Contact;
