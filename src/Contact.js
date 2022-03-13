import React, { useState } from "react";

const Contact = () => {
  const [formState, setFormState] = useState({
    message: "",
  });
  //destructure formState into its properties
  const { message } = formState;
  const [errorMessage, setErrorMessage] = useState("");

  //handleChange() will capture user keystrokes to update the formState via setFormState
  const handleChange = (e) => {
      //if message inuput does not have length, give error message
      if (!e.target.value.length) {
        setErrorMessage(`A ${e.target.name} is required.`);
      } else {
        setErrorMessage("");
      }
    setFormState({ ...formState, [e.target.name]: e.target.value });
}


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <section>
      <div className="container">
            <div className="form">
              <form onSubmit={handleSubmit}>

                <div className="form-group">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    name="message"
                    className="form-control"
                    rows="4"
                    defaultValue={message}
                    onBlur={handleChange}
                  ></textarea>
                </div>

                {/*conditionally render errorMessage div*/}
                {errorMessage && (
                  <div>
                    <p>{errorMessage}</p>
                  </div>
                )}
                <button type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
    </section>
  );
};

export default Contact;
