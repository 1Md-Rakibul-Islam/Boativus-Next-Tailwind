"use client";

import { CalendarCheck } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import DatePicker from "react-datepicker";

const BookingForm = () => {
  const [checkIn, setCheckIn] = useState<Date | null>(null); // Specify the type as Date | null
  const [checkOut, setCheckOut] = useState<Date | null>(null); // Specify the type as Date | null
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Resetting form fields
    setName("");
    setEmail("");
    setCheckIn(null);
    setCheckOut(null);
    setPeople("");
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid gap-mb-32">
        <input
          required
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name..."
          className="box-input-2 sm:mb-4 mb-3"
        />
        <input
          required
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address...."
          className="box-input-2 sm:mb-4 mb-3"
        />
        <div className="sm:mb-4 mb-3 w-full">
          <DatePicker
            required
            closeOnScroll={true}
            selected={checkIn}
            onChange={(date: Date | null) => setCheckIn(date)} // Adjust the type of the argument
            placeholderText="Check-in:"
            className="box-input-2 w-full md:!px-5 !px-4 !py-3 "
            showIcon
            icon={<CalendarCheck width={16} height={16} />}
            name="check-in"
            id="check-in"
          />
        </div>
        <div className="sm:mb-4 mb-3 w-full">
          <DatePicker
            required
            closeOnScroll={true}
            selected={checkOut}
            onChange={(date: Date | null) => setCheckOut(date)} // Adjust the type of the argument
            placeholderText="Check-out:"
            className="box-input-2 w-full md:!px-5 !px-4 !py-3"
            name="check-out"
            id="check-out"
            showIcon
            icon={<CalendarCheck width={16} height={16} />}
          />
        </div>
        <input
          required
          type="number"
          name="people"
          value={people}
          onChange={(e) => setPeople(e.target.value)}
          placeholder="People......"
          className="box-input-2 sm:mb-4 mb-3"
        />
        <textarea
          required
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your Question..........."
          className="w-full h-[120px] box-input-2 sm:mb-4 mb-3"
        ></textarea>
      </div>
      <div className="flex-center">
        <button
          type="submit"
          className="btn bg-blue-B900 hover:bg-brown-B300 text-white hover:text-blue-B900"
        >
          Book Now
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
