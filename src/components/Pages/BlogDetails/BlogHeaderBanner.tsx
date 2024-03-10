import { blogType } from "@/config/types";
import Image from "next/image";

const BlogHeaderBanner = ({ blog }: { blog: blogType }) => {
  return (
    <section className="w-full relative bg-[url('/media/images/commonheaderBG4.png')] bg-no-repeat bg-cover">
      <div className="container flex-center lg:pt-64 md:pt-52 sm:pt-36 pt-32 xl:pb-[195px] lg:pb-44 md:pb-36 sm:pb-28 pb-20 my-gap-24">
        <div className="relative z-[1] flex-centerY flex-col text-center">
          <span className="btn cursor-text text-18 font-playfair font-semibold text-white bg-blue-B900 gap-mb-40">
            Modern
          </span>
          <h1 className="text-76 text-white gap-mb-40">{blog?.title}</h1>
          <div className="flex-center flex-wrap gap-4 divide-x divide-white text-16 text-white">
            <Image
              className="sm:w-[60px] w-12 sm:h-[60px] h-w-12 rounded-full"
              src={blog?.authImg}
              alt="img"
            />
            <h6 className="text-24 pl-4">Posted by</h6>
            <span className="pl-4">{blog?.publish}</span>
            <span className="pl-4">{blog?.views} min read</span>
            <span className="pl-4">5 Comments</span>
          </div>
        </div>
      </div>
      <div className="bg-blue-B900 bg-opacity-80 absolute inset-0"></div>
    </section>
  );
};

export default BlogHeaderBanner;
