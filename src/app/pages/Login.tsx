import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitchLogo,
} from "@phosphor-icons/react";
import { FormEvent } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <main>
      <section className="bg-blue-B900 min-h-screen flex justify-center">
        <div className="max-w-[1920px] grid lg:grid-cols-2 grid-cols-1">
          <div className="relative lg:block hidden">
            <img
              className="w-full h-full object-cover object-left"
              src="../media/images/home3-hero-banner2.png"
              alt=""
            />

            <div className="absolute top-[14%] left-[14%] z-[2] right-[8%]">
              <Link to="/">
                <img
                  src="../media/icons/logo.png"
                  className="w-[158px] h-auto gap-mb-60"
                  alt=""
                />
              </Link>
              <h2 className="text-57 text-white ">
                Charter a luxury <br className="xl:block hidden" /> yacht Let's
                Plan Your <br className="xl:block hidden" /> Next Tour!
              </h2>
            </div>
            <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-[#061138_2.25%] to-[rgba(6,17,56,0.00)_97.18%]"></div>
          </div>
          <div className="flex-center section-py">
            <div className="lg:px-10 px-5 max-w-[520px]">
              <Link to="/" className="gap-mb-48 block lg:hidden">
                <img
                  className="w-[148px] h-[38px]"
                  src="../media/icons/logo.png"
                  alt="logo"
                />
              </Link>

              <h2 className="text-32 text-white font-bold gap-mb-16">
                Login your account
              </h2>
              <p className="text-18 text-stone-400 gap-mb-60">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas aliquet justo magna.
              </p>

              <form onSubmit={handleLogin}>
                <div className="grid my-gap-24 gap-mb-32">
                  <input
                    className="p-4 rounded-xl text-white outline-none bg-blue-B700"
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    id="name"
                    required
                  />
                  <input
                    className="p-4 rounded-xl text-white outline-none bg-blue-B700"
                    type="email"
                    placeholder="Your Email"
                    name=""
                    id=""
                    required
                  />
                  <input
                    className="p-4 rounded-xl text-white outline-none bg-blue-B700"
                    type="password"
                    placeholder="Password"
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
                        <Link to="#" className="text-brown-B300">
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
                    Login Now
                  </button>

                  <span className="block text-18 text-white text-center gap-mb-20">
                    Or continue with
                  </span>
                </div>
              </form>

              <div className="flex-center my-gap-24 gap-mb-32">
                <button className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group">
                  <FacebookLogo
                    weight="fill"
                    className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                  />
                </button>
                <button className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group">
                  <LinkedinLogo
                    weight="fill"
                    className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                  />
                </button>

                <button className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group">
                  <TwitchLogo
                    weight="fill"
                    className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                  />
                </button>

                <button className="flex-center md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 rounded-full border hover:border-blue-B80 border-brown-B300 my-transition group">
                  <InstagramLogo
                    weight="fill"
                    className="md:text-4xl sm:text-3xl text-2xl text-brown-B350 group-hover:text-blue-B80 my-transition"
                  />
                </button>
              </div>

              <p className="text-18 text-white text-center">
                Don't Have an Account?{" "}
                <Link to="/register" className="text-brown-B300">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
