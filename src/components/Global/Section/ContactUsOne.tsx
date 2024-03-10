import FadeUp from "@/motion/FadeUp";
import { ArrowCircleRight } from "@phosphor-icons/react";
import { FormEvent } from "react";

const ContactUsOne = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <section className="section-py bg-[url('/media/images/contactUsBG1.png')] bg-fixed bg-cover bg-center">
      <div className="container">
        <FadeUp>
          <h2 className="text-57 text-white gap-mb-24 text-center">
            Expert Team Ready to Assist
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="text-18 text-white gap-mb-64 text-center">
            Our expert team is available to assist you.
          </p>
        </FadeUp>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-2 grid-cols-1 my-gap-24 gap-mb-32">
            <div>
              <label htmlFor="name" className="block mb-2 text-18 text-white">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your full name"
                className="w-full bg-[rgba(18,29,66,0.57)] rounded-10 sm:p-4 p-3 outline-none border border-blue-B500 text-white placeholder:text-blue-B60 gap-mb-16"
              />
              <label htmlFor="phone" className="block mb-2 text-18 text-white">
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id="phone"
                placeholder="+00 | 0000000000"
                className="w-full bg-[rgba(18,29,66,0.57)] rounded-10 sm:p-4 p-3 outline-none border border-blue-B500 text-white placeholder:text-blue-B60 gap-mb-16"
              />
              <label htmlFor="email" className="block mb-2 text-18 text-white">
                Email address
              </label>
              <input
                type="number"
                name="email"
                id="email"
                placeholder="Your email address"
                className="w-full bg-[rgba(18,29,66,0.57)] rounded-10 sm:p-4 p-3 outline-none border border-blue-B500 text-white placeholder:text-blue-B60 gap-mb-16"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-18 text-white"
              >
                Enquiry (optional)
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Your question........."
                className="w-full md:h-[278px] sm:h-[200px] h-[180px] bg-[rgba(18,29,66,0.57)] rounded-10 sm:p-4 p-3 outline-none border border-blue-B500 text-white placeholder:text-blue-B60 gap-mb-16"
              ></textarea>
            </div>
          </div>
          <div className="flex-center">
            <button
              type="submit"
              className="btn inline-flex gap-2 items-center text-white hover:text-blue-B900 bg-blue-B900 hover:bg-brown-B300"
            >
              Send your message
              <ArrowCircleRight className="ph ph-arrow-circle-right icon-24" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsOne;
