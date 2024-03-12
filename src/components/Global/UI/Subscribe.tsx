"use client";

import { FormEvent, useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState<string>("");
  const [agree, setAgree] = useState<string>("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear the form data
    setEmail("");
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="flex justify-between items-stretch w-full py-[5px] lg:pl-5 md:pl-4 pl-3 sm:pr-2.5 pr-2 bg-[#1C264A] rounded-10 gap-mb-24">
        <input
          type="email"
          placeholder="Enter Your Email"
          required
          className="rounded rounded-s-[4px] border-0 outline-none text-18 font-barlow text-blue-B50 bg-[#1C264A] pr-4 text-base w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn bg-brown-B300">
          Subscribe
        </button>
      </div>
      <div className="flex gap-2 items-center customck">
        <div className="flex relative">
          <input
            type="checkbox"
            id="ch"
            name="A3-confirmation"
            value={agree}
            onChange={(e) => setAgree(e.target.value)}
            className="opacity-0 absolute sm:h-8 sm:w-8 h-5 w-5 cursor-pointer"
          />
          <div className="bg-blue-B60 border border-[rgba(255,255,255,0.16)] rounded-sm sm:w-5 sm:h-5 w-3.5 h-3.5 flex shrink-0 justify-center items-center mr-2 focus-within:border-primary">
            <svg
              className="fill-current hidden w-2.5 h-2.5 text-black pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="currentColor"
                  fillRule="nonzero"
                >
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="ch"
            className="select-none flex gap-2 cursor-pointer items-center text-18 text-white -mt-1"
          >
            I agree that my submitted data is being collected and stored.
          </label>
        </div>
      </div>
    </form>
  );
};

export default Subscribe;
