import React, { useState } from "react";
import { sendEmail } from "../../utils/email";
import "./index.scss";

function ScholarForm() {
  const [formData, setFormData] = useState({
    discordId: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      sendEmail(formData.discordId, formData.email, formData.message);
    } catch (error) {}
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register</p>
        <p className="message">Signup now and join our ranks!</p>

        <label>
          <input
            className="input"
            type="text"
            name="discordId"
            value={formData.discordId}
            onChange={handleChange}
            required
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
          />
          <span>Message</span>
        </label>

        <button className="submit">Submit</button>
      </form>
    </>
  );
}

export default ScholarForm;
