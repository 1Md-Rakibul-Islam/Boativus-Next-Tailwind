"use client";

import Link from "next/link";
import { FormEvent } from "react";

const RegisterForm = () => {
  const handleRegister = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="grid my-gap-24 gap-mb-32">
        <input
          className="py-4 px-4 text-white rounded-xl outline-none bg-blue-B700"
          type="text"
          placeholder="Your Name"
          name="name"
          id="name"
          required
        />
        <input
          className="py-4 px-4 text-white rounded-xl outline-none bg-blue-B700"
          type="email"
          placeholder="Your Email"
          name=""
          id=""
          required
        />
        <input
          className="py-4 px-4 text-white rounded-xl outline-none bg-blue-B700"
          type="password"
          placeholder="New Password"
          name=""
          id=""
          required
        />
        <input
          className="py-4 px-4 text-white rounded-xl outline-none bg-blue-B700"
          type="password"
          placeholder="Confirm Password"
          name=""
          id=""
          required
        />

        <div className="flex gap-2 items-center customck">
          <div className="flex relative">
            <input
              type="checkbox"
              id="ch"
              name="A3-confirmation"
              value="ch"
              className="opacity-0 absolute sm:h-8 sm:w-8 h-5 w-5 cursor-pointer"
            />
            <div className="bg-blue-B60 border border-[rgba(255,255,255,0.16)] rounded-sm sm:w-5 sm:h-5 w-3.5 h-3.5 flex shrink-0 justify-center items-center mr-2 focus-within:border-primary">
              <svg
                className="fill-current hidden w-2.5 h-2.5 text-black pointer-events-none"
                version="1.1"
                viewBox="0 0 17 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g fill="none" fill-rule="evenodd">
                  <g
                    transform="translate(-9 -11)"
                    fill="currentColor"
                    fill-rule="nonzero"
                  >
                    <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"></path>
                  </g>
                </g>
              </svg>
            </div>
            <label
              htmlFor="ch"
              className="select-none cursor-pointer items-center text-18 text-white -mt-1"
            >
              I agree to all statements with{" "}
              <Link href="#" className="text-brown-B300">
                Terms of Use
              </Link>
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <button
          type="submit"
          className="p-4 rounded-xl text-18 font-bold bg-brown-B300 hover:bg-blue-B80  text-blue-B900 gap-mb-20"
        >
          Sign Up Now
        </button>

        <span className="block text-18 text-white text-center gap-mb-20">
          Or continue with
        </span>
      </div>
    </form>
  );
};

export default RegisterForm;