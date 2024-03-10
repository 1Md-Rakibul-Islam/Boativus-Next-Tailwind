import FadeUp from "@/motion/FadeUp";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { blogs } from "@public/data/blogs";
import Link from "next/link";

const BlogsSix = () => {
  return (
    <section className="section-py relative overflow-hidden bg-white">
      <div className="container relative">
        <FadeUp className="lg:col-span-8 text-center gap-mb-64">
          <h5 className="text-24 text-brown-B300 gap-mb-16">Top Rated Yacht</h5>
          <h2 className="text-57 text-blue-B900 gap-mb-24">
            Our Latest Articles
          </h2>
          <p className="text-18 text-blue-B300">
            Lorem ipsum dolor sit amet consectetur. Vitae justo rhoncus ut sed
            pellentesque id. Nunc id eu ornare diam.
          </p>
        </FadeUp>
        <FadeUp className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 my-gap-24 gap-mb-64">
          {blogs?.slice(3, 12)?.map((item, idx) => (
            <Link
              key={idx}
              href={`/blogs/${item?.id}`}
              className="relative group overflow-hidden"
            >
              <img
                className="w-full h-[416px] object-fill group-hover:scale-110 my-transition"
                src={item?.image}
                alt="service"
              />
              <div className="absolute left-0 top-0 flex-centerY sm:gap-4 gap-3 z-[1]">
                <div className="p-32px">
                  <img
                    className="sm:w-[60px] sm:h-[60px] w-12 h-12 rounded-full"
                    src={item?.authImg}
                    alt=""
                  />
                  <div>
                    <h6 className="text-24 text-white">Posted by</h6>
                    <span className="text-white">{item?.author}</span>
                  </div>
                </div>
              </div>
              <div className="absolute left-0 bottom-0 z-[1]">
                <div className="p-32px">
                  <div className="flex-centerY divide-x divide-white gap-mb-16">
                    <span className="text-16 text-white pr-2">
                      {item?.publish}
                    </span>
                    <span className="text-16 text-white pl-2">
                      {item?.views}min read
                    </span>
                  </div>
                  <h5 className="text-24 text-white whitespace-normal">
                    {item?.title}
                  </h5>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
            </Link>
          ))}
        </FadeUp>
        <div className="flex-center">
          <div className="flex-centerY my-gap-24">
            <button
              type="button"
              className="py-2 md:w-[88px] sm:w-[68px] w-12 flex-center bg-blue-B200 hover:bg-blue-B900 my-transition rounded-10"
            >
              <ArrowLeft className="icon-24 text-white" />
            </button>
            <div className="flex-centerY sm:gap-2 gap-1.5 text-24 font-semibold text-white">
              <button className="w-10 h-10 flex-center p-3 bg-blue-B900 my-transition rounded-10">
                1
              </button>
              <button className="w-10 h-10 flex-center p-3 bg-blue-B900 my-transition rounded-10">
                2
              </button>
              <button className="w-10 h-10 flex-center p-3 bg-blue-B900 my-transition rounded-10">
                3
              </button>
              <button className="w-10 h-10 flex-center p-3 bg-blue-B700 my-transition rounded-10">
                4
              </button>
            </div>
            <button
              type="button"
              className="py-2 md:w-[88px] sm:w-[68px] w-12 flex-center bg-blue-B200 hover:bg-blue-B900 my-transition rounded-10"
            >
              <ArrowRight className="icon-24 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSix;
