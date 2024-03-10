import FadeUp from "@/motion/FadeUp";
import { ArrowCircleRight } from "@phosphor-icons/react";

const ContactUsTwo = () => {
  return (
    <section className="section-py bg-blue-B900 overflow-x-hidden">
      <div className="container">
        <FadeUp>
          <h2 className="text-57 text-white gap-mb-24 text-center">
            Ask as a question
          </h2>
        </FadeUp>
        <FadeUp>
          <p className="text-18 text-white gap-mb-64 text-center">
            Our expert team is available to assist you.
          </p>
        </FadeUp>

        <div className="grid lg:grid-cols-12 grid-cols-1 items-center my-gap-24">
          <form className="lg:col-start-1 lg:col-end-7 lg:mb-0 gap-mb-64">
            <div className="gap-mb-32">
              <div>
                <label htmlFor="name" className="block mb-2 text-18 text-white">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your full name"
                  className="w-full bg-[rgba(18,29,66,0.57)] rounded-10 sm:p-4 p-3 outline-none border border-blue-B500 text-white placeholder:text-blue-B300 gap-mb-16"
                />
                <label
                  htmlFor="phone"
                  className="block mb-2 text-18 text-white"
                >
                  Name
                </label>
                <input
                  type="number"
                  name="phone"
                  id="phone"
                  placeholder="+00 | 0000000000"
                  className="w-full bg-[rgba(18,29,66,0.57)] rounded-10 sm:p-4 p-3 outline-none border border-blue-B500 text-white placeholder:text-blue-B300 gap-mb-16"
                />
                <label
                  htmlFor="email"
                  className="block mb-2 text-18 text-white"
                >
                  Email address
                </label>
                <input
                  type="number"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full bg-[rgba(18,29,66,0.57)] rounded-10 sm:p-4 p-3 outline-none border border-blue-B500 text-white placeholder:text-blue-B300 gap-mb-16"
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
                  className="w-full md:h-[270px] sm:h-[200px] h-[180px] bg-[rgba(18,29,66,0.57)] rounded-10 sm:p-4 p-3 outline-none border border-blue-B500 text-white placeholder:text-blue-B60 gap-mb-16"
                ></textarea>
              </div>
            </div>
            <div className="flex-center">
              <button
                type="submit"
                className="btn inline-flex gap-2 items-center text-white hover:text-blue-B900 bg-blue-B700 hover:bg-brown-B300"
              >
                Send your message
                <ArrowCircleRight className="icon-24" />
              </button>
            </div>
          </form>
          <div className="xxl:col-start-8 lg:col-start-7 lg:col-end-13">
            <img
              className="lg:max-w-[unset] animate-bounce-slow-top"
              src="../media/images/faq-banner.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsTwo;
