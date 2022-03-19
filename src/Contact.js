import React, { useState } from "react";
import "./Contact.css";
import firebase from 'firebase';
import { db } from "./firebase";
const Contact = () => {
  const [formState, setFormState] = useState({
    message: "",
  });

  const [comment, setComment] = useState('');

  //destructure formState into its properties
  const { message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  //handleChange() will capture user keystrokes to update the formState via setFormState
  // const handleChange = (e) => {
  //   //if message inuput does not have length, give error message
  //   if (!e.target.value.length) {
  //     setErrorMessage(`A ${e.target.name} is required.`);
  //   } else {
  //     setErrorMessage("");
  //   }
  //   setFormState({ ...formState, [e.target.name]: e.target.value });
  // };

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
          Send us a question or topic you want us to discuss on the podcast!
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

                {/*conditionally render errorMessage div*/}
                {errorMessage && (
                  <div class="error_message">
                    <p>{errorMessage}</p>
                  </div>
                )}
                <div className="submit_btn">
                <button type="submit">
                  Submit
                </button>
                </div>
              </form>
            </div>
          </div>
    </section>
  );
};

export default Contact;
