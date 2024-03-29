import FadeDown from "@/motion/FadeDown";
import FadeUp from "@/motion/FadeUp";
import {
  ChatsCircle,
  Envelope,
  MapPin,
  PhoneCall,
} from "@phosphor-icons/react/dist/ssr";
import ContactUsForm from "./ContactUsForm";

const ContactUsThree = () => {
  return (
    <section className="section-py bg-white">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:items-end my-gap-24">
          <div className="lg:mb-0 gap-mb-32">
            <FadeUp className="lg:text-left text-center">
              <h6 className="text-24 text-brown-B300 gap-mb-16">Get a quote</h6>
              <h2 className="text-57 text-blue-B900 gap-mb-24">Contact us</h2>
              <p className="text-18 text-[#4D4E4F] gap-mb-64">
                We would love to hear from you, if you have any questions or
                queries then please give us a call or contact us via the contact
                form
              </p>
            </FadeUp>
            <FadeUp className="grid md:grid-cols-2 grid-cols-1 lg:gap-x-6 md:gap-x-5 gap-x-4 lg:gap-y-8 md:gap-y-7 sm:gap-y-6 gap-y-5">
              <div className="flex-centerY gap-3 p-3 sm:py-5 py-4 rounded-lg border border-blue-B30 hover:border-brown-B300 my-transition group">
                <MapPin className="text-3xl" />
                <div>
                  <h5 className="text-18 text-blue-B900 mb-2.5 group-hover:text-brown-B300 my-transition">
                    Address
                  </h5>
                  <h6 className="text-16 text-blue-B600">
                    01 Shiloh, Hawaii 810
                  </h6>
                </div>
              </div>
              <div className="flex-centerY gap-3 p-3 sm:py-5 py-4 rounded-lg border border-blue-B30 hover:border-brown-B300 my-transition group">
                <ChatsCircle className="text-3xl" />
                <div>
                  <h5 className="text-18 text-blue-B900 mb-2.5 group-hover:text-brown-B300 my-transition">
                    Live Chat
                  </h5>
                  <h6 className="text-16 text-blue-B600">
                    Lorem ipsum dolor sit amet.
                  </h6>
                </div>
              </div>
              <div className="flex-centerY gap-3 p-3 sm:py-5 py-4 rounded-lg border border-blue-B30 hover:border-brown-B300 my-transition group">
                <Envelope className="text-3xl" />
                <div>
                  <h5 className="text-18 text-blue-B900 mb-2.5 group-hover:text-brown-B300 my-transition">
                    Email Contact
                  </h5>
                  <a href="mailto:boativus@email.com">
                    <h6 className="text-16 text-blue-B600">
                      boativus@email.com
                    </h6>
                  </a>
                </div>
              </div>
              <div className="flex-centerY gap-3 p-3 sm:py-5 py-4 rounded-lg border border-blue-B30 hover:border-brown-B300 my-transition group">
                <PhoneCall className="text-3xl" />
                <div>
                  <h5 className="text-18 text-blue-B900 mb-2.5 group-hover:text-brown-B300 my-transition">
                    Phone Number
                  </h5>
                  <a href="tel:+2395550108">
                    <h6 className="text-16 text-blue-B600">(239) 555-0108</h6>
                  </a>
                </div>
              </div>
            </FadeUp>
          </div>
          <FadeDown className="shadow-[0px_4px_20px_0px_rgba(74,73,79,0.20)] rounded-lg px-24px py-32px lg:mb-0 mb-6">
            <ContactUsForm />
          </FadeDown>
        </div>
      </div>
    </section>
  );
};

export default ContactUsThree;
