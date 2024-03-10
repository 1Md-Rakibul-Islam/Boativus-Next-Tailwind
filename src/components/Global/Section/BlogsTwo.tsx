import Link from "next/link";
import { blogs } from "@public/data/blogs";
import FadeUp from "@/motion/FadeUp";
import Image from "next/image";

const BlogsTwo = () => {
  return (
    <section className="section-py relative overflow-hidden bg-white">
      <div className="container relative">
        <div className="grid lg:grid-cols-12 justify-between gap-mb-64">
          <FadeUp className="lg:col-span-8 md:text-left text-center">
            <h5 className="text-24 text-brown-B300 gap-mb-16">
              Top Rated Yacht
            </h5>
            <h2 className="text-57 text-blue-B900 gap-mb-24">
              Our Latest Articles
            </h2>
            <p className="text-18 text-blue-B300">
              Lorem ipsum dolor sit amet consectetur. Vitae justo rhoncus ut sed
              pellentesque id. Nunc id eu ornare diam.
            </p>
          </FadeUp>
          <div className="lg:col-span-4 lg:flex justify-end hidden items-end">
            <Link
              href="/blogs"
              className="btn bg-blue-B800 hover:bg-brown-B300 text-white hover:text-blue-B900"
            >
              View All Blog
            </Link>
          </div>
        </div>
        <FadeUp className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 my-gap-24 lg:mb-0 gap-mb-32 ">
          {blogs?.slice(8, 11)?.map((item, idx) => (
            <Link
              key={idx}
              href={`/blogs/${item?.id}`}
              className="relative group overflow-hidden"
            >
              <Image
                className="w-full max-h-[768px] h-full group-hover:scale-110 my-transition"
                src={item?.image}
                alt="blogs"
              />
              <div className="absolute left-8 right-8 top-8 flex-centerY sm:gap-4 gap-3 z-[1]">
                <Image
                  className="sm:w-[60px] sm:h-[60px] w-12 h-12 rounded-full"
                  src={item?.authImg}
                  alt=""
                />
                <div>
                  <h6 className="text-24 text-white">Posted by</h6>
                  <span className="text-white">{item?.author}</span>
                </div>
              </div>
              <div className="absolute left-8 right-8 bottom-8 z-[1]">
                <div className="flex-centerY divide-x divide-white gap-mb-16">
                  <span className="text-18 text-white pr-2">
                    {item?.publish}
                  </span>
                  <span className="text-18 text-white pl-2">
                    {item?.views} min read
                  </span>
                </div>
                <h5 className="text-24 text-white">{item?.title}</h5>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
            </Link>
          ))}
        </FadeUp>
        <div className="lg:hidden flex-center">
          <Link
            href="/blogs"
            className="btn bg-blue-B800 hover:bg-brown-B300 text-white hover:text-blue-B900"
          >
            View All Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsTwo;
