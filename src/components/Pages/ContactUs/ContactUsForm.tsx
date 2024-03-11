"use client";

import { ArrowCircleRight } from "@phosphor-icons/react";
import { FormEvent } from "react";

const ContactUsForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
        />
        <input
          type="email"
          required
          name="email"
          id="email"
          placeholder="Email Address ......"
          className="box-input-2 bg-transparent rounded-10"
        />
      </div>

      <input
        type="number"
        required
        name="phone"
        id="phone"
        placeholder="Phone Number..."
        className="box-input-2 bg-transparent rounded-10 gap-mb-24 w-full"
      />

      <textarea
        name="comment"
        id="comment"
        placeholder="How can we help you? Feel free to get in touch!"
        className="box-input-2 px-24px py-3 bg-transparent rounded-10 w-full h-[168px] gap-mb-40"
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
