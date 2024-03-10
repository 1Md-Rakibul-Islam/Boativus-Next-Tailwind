import { blogs } from "@public/data/blogs";
import { Link } from "react-router-dom";

const BlogSidebar = () => {
  const popularBlog = blogs?.filter((blogs) => blogs?.category === "popular");
  const blogCategories = ["Yachts", "Boats", "Destinations"];
  return (
    <div>
      <div className="bg-blue-B800 rounded-t-lg rounded-b-lg divide-y divide-[#202D5B] gap-mb-32">
        <div className="block hover:text-brown-B300 my-transition px-6 py-4 bg-blue-B900 rounded-t-lg">
          <h5 className="text-24 text-white">Categories</h5>
        </div>
        <div className="divide-y divide-[#202D5B]">
          {blogCategories?.map((item, idx) => (
            <Link
              key={idx}
              to="/blogs"
              className="block hover:text-brown-B300 my-transition text-18 text-white px-6 py-4"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-blue-B800 rounded-t-lg rounded-b-lg divide-y divide-[#202D5B] gap-mb-32">
        <div className="block hover:text-brown-B300 my-transition px-6 py-4 bg-blue-B900 rounded-t-lg">
          <h5 className="text-24 text-white">Popular Blog Post</h5>
        </div>
        <div>
          {popularBlog?.map((item, idx) => (
            <Link
              key={idx}
              to={`/blogs/${item?.id}`}
              className="group flex-centerY gap-4 my-transition text-18 text-white px-6 py-4"
            >
              <img
                className="w-[86px] h-[70px] object-cover"
                src={item?.image}
                alt="img"
              />
              <div>
                <h5 className="text-18 text-white gap-mb-16 group-hover:text-brown-B300 my-transition">
                  {item?.title}
                </h5>
                <span className="text-16 text-blue-B5">{item?.publish}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="rounded-lg">
        <div
          className="block hover:text-brown-B300 my-transition px-6 py-4 bg-blue-B900
                rounded-t-lg"
        >
          <h5 className="text-24 text-white">Popular Blog Post</h5>
        </div>
        <div className="p-24px bg-blue-B800 rounded-b-lg flex flex-wrap gap-3">
          <Link
            to="/blogs"
            className="btn-2 hover:bg-brown-B300 bg-blue-B900 text-white hover:text-blue-B900"
          >
            Travel
          </Link>
          <Link
            to="/blogs"
            className="btn-2 hover:bg-brown-B300 bg-blue-B900 text-white hover:text-blue-B900"
          >
            Yachts
          </Link>
          <Link
            to="/blogs"
            className="btn-2 hover:bg-brown-B300 bg-blue-B900 text-white hover:text-blue-B900"
          >
            Tours
          </Link>
          <Link
            to="/blogs"
            className="btn-2 hover:bg-brown-B300 bg-blue-B900 text-white hover:text-blue-B900"
          >
            Destinations
          </Link>
          <Link
            to="/blogs"
            className="btn-2 hover:bg-brown-B300 bg-blue-B900 text-white hover:text-blue-B900"
          >
            Rental
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
