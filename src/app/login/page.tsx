import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitchLogo,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import Image from "next/image";
import { LoginForm } from "@/components/Pages";
import sideBannerImg from "@public/media/images/home3-hero-banner2.png";
import brandLogo from "@public/media/icons/logo.png";

const Login = () => {
  return (
    <main>
      <section className="bg-blue-B900 min-h-screen flex justify-center">
        <div className="max-w-[1920px] grid lg:grid-cols-2 grid-cols-1">
          <div className="relative lg:block hidden">
            <Image
              className="w-full h-full object-cover object-left"
              src={sideBannerImg}
              alt=""
            />

            <div className="absolute top-[14%] left-[14%] z-[2] right-[8%]">
              <Link href="/">
                <Image
                  src={brandLogo}
                  className="w-[158px] h-auto gap-mb-60"
                  alt=""
                />
              </Link>
              <h2 className="text-57 text-white ">
                Charter a luxury <br className="xl:block hidden" /> yacht
                Let&lsquo;s Plan Your <br className="xl:block hidden" /> Next
                Tour!
              </h2>
            </div>
            <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-[#061138_2.25%] to-[rgba(6,17,56,0.00)_97.18%]"></div>
          </div>
          <div className="flex-center section-py">
            <div className="lg:px-10 px-5 max-w-[520px]">
              <Link href="/" className="gap-mb-48 block lg:hidden">
                <Image
                  className="w-[148px] h-[38px]"
                  src={brandLogo}
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

              <LoginForm />

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
                Don&lsquo;t Have an Account?{" "}
                <Link href="/register" className="text-brown-B300">
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
