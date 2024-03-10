import { Link } from "react-router-dom";
import { blogs } from "@public/data/blogs";
import FadeUp from "@/motion/FadeUp";

const BlogsThree = () => {
  return (
    <section className="section-py relative overflow-hidden bg-white">
      <div className="container relative our-blogs-one">
        <div className="flex justify-between gap-mb-64">
          <FadeUp className="sm:text-left text-center">
            <h5 className="text-24 text-brown-B300 gap-mb-16">Our Blogs</h5>
            <h2 className="text-57 text-blue-B900 gap-mb-24">
              Our Latest Articles
            </h2>
            <p className="text-18 text-blue-B300">
              Explore trends, insights, and luxury in our latest articles.
            </p>
          </FadeUp>
          <div className="md:flex hidden items-end">
            <a href="/blogs" className="btn bg-blue-B800 text-white">
              View All Blog
            </a>
          </div>
        </div>
        <div id="dynamic-size-photos">
          {blogs?.slice(3, 8)?.map((item, idx) => (
            <Link
              to={`/blogs/${item?.id}`}
              key={idx}
              className="overflow-hidden mb-6 block"
            >
              <FadeUp className="relative group">
                <img
                  className="w-full min-h-fit h-auto group-hover:scale-110 my-transition"
                  src={item?.image}
                  alt="blog"
                />

                <div className="absolute left-1/2 -translate-x-1/2 px-4 xl:bottom-12 lg:bottom-10 md:bottom-8 sm:bottom-6 bottom-0 text-center z-[1] flex-center flex-col w-full">
                  <h5 className="text-24 text-white gap-mb-24">
                    {item?.title}
                  </h5>
                  <div className="grid sm:grid-cols-2 items-center justify-center gap-mb-32 sm:my-gap-32 gap-1 sm:divide-x divide-white">
                    <div className="w-full flex-centerY justify-start sm:gap-2 gap-1.5">
                      <span className="text-16 text-white text-left">
                        By. <span>{item?.author}</span>
                      </span>
                    </div>
                    <div className="w-full flex-centerY sm:justify-end justify-start sm:gap-2 gap-1.5">
                      <span className="text-16 text-white text-right">
                        <span>On</span> {item?.publish}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(6,17,56,0.00)_19.26%] to-[rgba(6,17,56,0.81)_89.31%]"></div>
              </FadeUp>
            </Link>
          ))}
        </div>
        <div className="md:hidden flex-center">
          <Link to="/blogs" className="btn bg-blue-B800 text-white">
            View All Blog
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsThree;
