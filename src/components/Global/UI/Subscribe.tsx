"use client";

import { useState } from "react";
import { IconBrandTelegram, IconSend } from "@tabler/icons-react";
import { FormEvent } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState<string>("");

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Clear the form data
    setEmail("");
  };

  return (
    <form
      onSubmit={handleFormSubmit}
      className="flex justify-between items-stretch h-full w-full p-0.5 rounded-full bg-[#432984] border border-[#55379e]"
    >
      <input
        type="email"
        placeholder="Enter your email"
        required
        className="outline-none bg-transparent  my-text-18 w-full lg:px-[22px] md:px-4 sm:px-3 px-2.5 text-white"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        type="submit"
        className="lg:py-5 md:py-4 sm:py-3 py-2.5 lg:px-5 md:px-4 sm:px-3 px-2.5 rounded-full flex-center text-white bg-primary-1"
        aria-label="subscribe"
      >
        <IconBrandTelegram className="md:text-xl sm:text-lg text-md" />
      </button>
    </form>
  );
};

export default Subscribe;
