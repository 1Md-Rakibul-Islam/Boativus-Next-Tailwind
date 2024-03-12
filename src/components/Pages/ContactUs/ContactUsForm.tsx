"use client";

import { ArrowCircleRight } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

const ContactUsForm = () => {
  const initialFormData = {
    name: "",
    email: "",
    phone: "",
    comment: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // You can further process the form data here, such as sending it to a server

    // Reset the form fields after submission
    setFormData(initialFormData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid md:grid-cols-2 grid-cols-1 my-gap-24 gap-mb-24">
        <input
          type="text"
          required
          name="name"
          id="name"
          placeholder="Full Name ......"
          className="box-input-2 bg-transparent rounded-10"
          onChange={handleChange}
          value={formData.name} // Set value to form state
        />
        <input
          type="email"
          required
          name="email"
          id="email"
          placeholder="Email Address ......"
          className="box-input-2 bg-transparent rounded-10"
          onChange={handleChange}
          value={formData.email} // Set value to form state
        />
      </div>

      <input
        type="number"
        required
        name="phone"
        id="phone"
        placeholder="Phone Number..."
        className="box-input-2 bg-transparent rounded-10 gap-mb-24 w-full"
        onChange={handleChange}
        value={formData.phone} // Set value to form state
      />

      <textarea
        required
        name="comment"
        id="comment"
        placeholder="How can we help you? Feel free to get in touch!"
        className="box-input-2 px-24px py-3 bg-transparent rounded-10 w-full h-[168px] gap-mb-40"
        onChange={handleChange}
        value={formData.comment} // Set value to form state
      ></textarea>

      <div className="flex-center">
        <button
          type="submit"
          className="btn-2 inline-flex items-center gap-2 bg-blue-B900 hover:bg-brown-B300 text-white hover:text-blue-B900"
        >
          Submit Now
          <ArrowCircleRight className="icon-24" />
        </button>
      </div>
    </form>
  );
};

export default ContactUsForm;
