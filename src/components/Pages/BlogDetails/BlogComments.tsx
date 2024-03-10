"use client";

import {
  ArrowCircleRight,
  ChatsCircle,
  PaperPlaneTilt,
  ShareFat,
  ThumbsUp,
} from "@phosphor-icons/react";
import { useState } from "react";
import AnimateHeight from "react-animate-height";

const BlogComments = () => {
  const [toggle, setToggle] = useState<number | null>(null);

  const comments = [
    {
      name: "Jacob Jones",
      image: "../media/images/user5.png",
      timestamp: "2 months ago",
      content:
        "Nam placerat ligula dignissim ante aliquam scelerisque. Nulla ac dolor nec tellus pulvinar molestie. Sed condimentum, tellus sed maximus.",
      likes: 0,
    },
    {
      name: "Emily Smith",
      image: "../media/images/user6.png",
      timestamp: "3 weeks ago",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Nam placerat ligula dignissim ante aliquam scelerisque. Nulla ac dolor nec tellus pulvinar molestie. Sed condimentum, tellus sed maximus.",
      likes: 5,
    },
    {
      name: "Michael Brown",
      image: "../media/images/user7.png",
      timestamp: "1 day ago",
      content:
        "Donec libero dolor, tincidunt id, venenatis vel, ultricies ut, mi. Cras mi. Vestibulum auctor. Nam placerat ligula dignissim ante aliquam scelerisque. Nulla ac dolor nec tellus pulvinar molestie. Sed condimentum, tellus sed maximus.",
      likes: 10,
    },
  ];

  return (
    <div className=" ">
      <div className="gap-mb-64">
        <h3 className="text-43 text-blue-B900 gap-mb-40">
          {comments?.length} Comments:
        </h3>
        <div className="grid xl:gap-y-10 lg:gap-y-8 md:gap-y-7 sm:gap-y-6 gap-y-5 gap-x-4">
          {comments?.map((item, idx) => (
            <div
              key={idx}
              className={`${idx % 2 !== 0 && "pl-[12%]"} flex my-gap-20`}
            >
              <img
                src={item?.image}
                className="rounded-full lg:w-20 lg:h-20 md:w-16 md:h-16 sm:w-14 sm:h-14 w-12 h-12"
                alt="img"
              />
              <div className="w-full">
                <div className="flex-centerY gap-2 gap-mb-20">
                  <h5 className="text-24 text-blue-B900">{item?.name}</h5>
                  <span className="text-16 text-blue-B700">
                    {item?.timestamp}
                  </span>
                </div>
                <p className="text-18 text-blue-B300 gap-mb-20">
                  {item?.content}
                </p>
                <div className="flex-centerY my-gap-32 gap-mb-20">
                  <button>
                    <ThumbsUp className="icon-24 text-[#585858]" />
                  </button>
                  <button>
                    <ChatsCircle className="icon-24 text-[#585858]" />
                  </button>
                  <button>
                    <ShareFat className="icon-24 text-[#585858]" />
                  </button>
                </div>
                <button
                  onClick={() =>
                    toggle !== idx ? setToggle(idx) : setToggle(null)
                  }
                  className="replay rounded-lg px-5 py-3 border border-blue-B900 hover:bg-blue-B900 text-18 font-semibold text-blue-B900 hover:text-white my-transition"
                >
                  Replay
                </button>
                <AnimateHeight
                  height={toggle == idx ? "auto" : 0}
                  duration={500}
                >
                  <form className="flex my-gap-24 max-w-[400px] lg:mb-[30px] md:mb-6 mb-5 items-center justify-between border border-primary-text-clr rounded-full p-2 my-transition gap-mt-16">
                    <div className="my-transition flex items-center md:gap-5 gap-2.5">
                      <img
                        className="w-10 h-10 rounded-full"
                        alt=""
                        src="../media/images/user8.png"
                      />
                      <input
                        className="sm:w-full w-[110px] text-18 text-blue-B900 focus:outline-none"
                        placeholder="Write a comment..."
                        required
                        type="text"
                        name="comment"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-B900 hover:bg-brown-B300 text-white hover:text-blue-B900 my-transition inline-flex justify-center items-center rounded-full p-2.5"
                    >
                      <PaperPlaneTilt className="icon-24" />
                    </button>
                  </form>
                </AnimateHeight>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-brown-B50 p-24px lg:mb-0 mb-6">
        <h5 className="text-32 text-blue-B900 gap-mb-32">Leave A Comment</h5>
        <div className="grid md:grid-cols-2 grid-cols-1 my-gap-24 gap-mb-32">
          <input
            type="text"
            required
            name="name"
            id="name"
            placeholder="Full Name ......"
            className="box-input-2 bg-transparent rounded-10"
          />
          <input
            type="email"
            required
            name="email"
            id="email"
            placeholder="Email Address ......"
            className="box-input-2 bg-transparent rounded-10"
          />
        </div>
        <textarea
          name="comment"
          placeholder="Write a Comment ......"
          className="box-input-2 bg-transparent rounded-10 w-full h-[176px] gap-mb-40"
        ></textarea>
        <button
          type="submit"
          className="btn-2 inline-flex items-center gap-2 bg-blue-B900 hover:bg-brown-B300 text-white hover:text-blue-B900"
        >
          Post a Comment
          <ArrowCircleRight className="icon-24" />
        </button>
      </div>
    </div>
  );
};

export default BlogComments;
