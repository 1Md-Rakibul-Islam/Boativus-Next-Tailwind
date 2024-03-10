import { Link } from "react-router-dom";
import { blogs } from "@public/data/blogs";
import { ArrowRight, Calendar, User } from "@phosphor-icons/react";
import FadeUp from "@/motion/FadeUp";
const BlogsOne = () => {
  return (
    <section className="section-py relative overflow-hidden bg-white">
      <div className="container relative">
        <div className="flex justify-between gap-mb-60 ">
          <FadeUp className="sm:text-left text-center">
            <h5 className="text-24 text-brown-B300 gap-mb-16 ">Our Blog</h5>
            <h2 className="text-57 text-blue-B900 gap-mb-24 ">
              Our Latest Articles
            </h2>
            <p className="text-18 text-blue-B300">
              Explore trends, insights, and luxury in our latest articles.
            </p>
          </FadeUp>
          <div className="md:flex hidden items-end">
            <Link
              to="/blogs"
              className="btn bg-blue-B800 hover:bg-brown-B300 text-white hover:text-blue-B900"
            >
              View All Blog
            </Link>
          </div>
        </div>
        <FadeUp>
          <div className="grid xxl:grid-cols-3 lg:grid-cols-2 grid-cols-1 my-gap-24 md:mb-0 gap-mb-32 ">
            {blogs?.slice(0, 3)?.map((item, idx) => (
              <div
                key={idx}
                className="sm:p-2.5 p-2 rounded-lg bg-white overflow-hidden shadow-[0px_6px_30px_0px_rgba(0,0,0,0.08)]"
              >
                <div className="overflow-hidden rounded-10 gap-mb-24">
                  <img
                    className="w-full rounded-10 hover:scale-110 my-transition"
                    src={item?.image}
                    alt="blog"
                  />
                </div>
                <div className="sm:p-[14px] p-2.5">
                  <h4 className="text-24 text-blue-B900 gap-mb-16">
                    {item?.title}
                  </h4>
                  <div className="grid sm:grid-cols-2 grid-cols-1 items-center justify-between gap-mb-32 gap-3">
                    <div className="flex-centerY justify-start sm:gap-2 gap-1.5 sm:border-r border-[#797E94]">
                      <span className="bg-blue-B40 p-1 rounded-full flex-center icon-24">
                        <User className="text-blue-B900" />
                      </span>
                      <span className="text-16 text-blue-B500">
                        Post By {item?.author}
                      </span>
                    </div>
                    <div className="flex-centerY sm:justify-end justify-start sm:gap-2 gap-1.5">
                      <span className="bg-blue-B40 p-1 rounded-full flex-center icon-24">
                        <Calendar className="text-blue-B900" />
                      </span>
                      <span className="text-16 text-blue-B500">
                        {item?.publish}
                      </span>
                    </div>
                  </div>
                  <p className="text-18 text-blue-B400 gap-mb-28">
                    {item?.details}
                  </p>
                  <div className="bg-blue-B50 w-full h-[1px] gap-mb-28"></div>
                  <Link
                    to={`/blogs/${item?.id}`}
                    className="text-18 text-blue-B800 hover:text-brown-B300 flex items-center sm:gap-2 gap-1.5 group my-transition"
                  >
                    Read more
                    <ArrowRight className="text-blue-B900 group-hover:text-brown-B300 group-hover:ml-2 my-transition" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="md:hidden flex-center">
            <Link to="/blogs" className="btn bg-blue-B800 text-white">
              View All Blog
            </Link>
          </div>
        </FadeUp>
      </div>
    </section>
  );
};

export default BlogsOne;
