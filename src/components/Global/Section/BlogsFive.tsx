import Link from "next/link";
import { blogs } from "@public/data/blogs";
import { ArrowCircleRight } from "@phosphor-icons/react";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const BlogsFive = () => {
  return (
    <section className="relative z-[1] section-py bg-white">
      <div className="container">
        <div className="grid md:grid-cols-2 grid-cols-1 my-gap-24 ">
          {blogs?.slice(11, 13)?.map((item, idx) => (
            <FadeUp
              key={idx}
              className="bg-white flex flex-col justify-between"
            >
              <div>
                <div className="overflow-hidden gap-mb-32">
                  <Image
                    className="w-full hover:scale-110 my-transition"
                    src={item?.image}
                    alt="img"
                  />
                </div>
                <h3 className="text-43 text-blue-B900 gap-mb-24">
                  {item?.title}
                </h3>
                <p className="text-18 text-blue-B400 gap-mb-40">
                  {item?.details}
                </p>
              </div>
              <div>
                <Link
                  href={`/blogs/${item?.id}`}
                  className="btn group inline-flex items-center gap-2 hover:text-blue-B900 text-white bg-blue-B700 hover:bg-brown-B300"
                >
                  Discover Now
                  <ArrowCircleRight className="ph ph-arrow-circle-right icon-24 text-xl" />
                </Link>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsFive;
