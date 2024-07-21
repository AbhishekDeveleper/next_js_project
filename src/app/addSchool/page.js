"use client";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email_id: "",
    address: "",
    city: "",
    state: "",
    image: null,
    contact: "",
  });
  const [message, setMessage] = useState(null);
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    const response = await fetch(
      "https://next-js-project-gilt-two.vercel.app/api/add-data",
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();
    if (result.name) setMessage("Submitted Successfully ");
    if (!result.name) setMessage("Error");
  };

  return (
    <div className="form__container">
      <h1> Submit Your Details </h1>{" "}
      <form onSubmit={handleSubmit} className="submit_form">
        <input
          type="text"
          name="name"
          placeholder=" Enter School Name..."
          onChange={handleChange}
          required
          className="submit_input"
        />
        <input
          type="email"
          name="email_id"
          placeholder="Enter school email_id"
          onChange={handleChange}
          required
          className="submit_input"
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          onChange={handleChange}
          required
          className="submit_input"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={handleChange}
          required
          className="submit_input"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          onChange={handleChange}
          required
          className="submit_input"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact No..."
          onChange={handleChange}
          required
          className="submit_input"
        />
        <input
          type="file"
          name="image"
          onChange={handleChange}
          required
          className="submit_input"
        />
        <button type="submit" className="submit_btn">
          Submit{" "}
        </button>{" "}
      </form>{" "}
      {message ? (
        <div>
          <h4>{message}</h4>
          <a href="/showSchools">Goto School Page</a>
        </div>
      ) : (
        <h4>{message}</h4>
      )}
    </div>
  );
}
