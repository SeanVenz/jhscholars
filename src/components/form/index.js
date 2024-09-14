import React, { useState } from "react";
import { sendEmail } from "../../utils/email";
import "./index.scss";

function ScholarForm() {
  const [formData, setFormData] = useState({
    discordId: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false); // New state for submission status
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(""); 

    setTimeout(() => {
      try {
        sendEmail(formData.discordId, formData.email, formData.message);
        setIsSubmitted(true);
      } catch (error) {
        setErrorMessage("Error occurred while sending email.");
        console.error("Error sending email:", error);
      } finally {
        setIsLoading(false);
      }
    }, 2000);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4 className="title" style={{ margin: "0px" }}>Register</h4>
      <p className="message">Signup now and join our ranks!</p>

      <label>
        <input
          className="input"
          type="text"
          name="discordId"
          value={formData.discordId}
          onChange={handleChange}
          required
          disabled={isLoading || isSubmitted}
        />
        <span>Discord ID</span>
      </label>

      <label>
        <input
          className="input"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isLoading || isSubmitted}
        />
        <span>Email</span>
      </label>

      <label>
        <textarea
          className="textarea"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isLoading || isSubmitted}
        />
        <span>Message</span>
      </label>

      {/* Display error message if there is one */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button
        className={`submit ${isLoading ? "loading" : ""} ${
          isSubmitted ? "submitted" : ""
        }`}
        type="submit"
        disabled={isLoading || isSubmitted}
      >
        {isLoading ? (
          <div className="spinner"></div>
        ) : isSubmitted ? (
          "Submitted"
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
}

export default ScholarForm;
