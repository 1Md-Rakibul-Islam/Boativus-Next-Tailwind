import { blogType } from "@/config/types";
import BlogComments from "./BlogComments";
import BlogDescriptions from "./BlogDescriptions";
import BlogSidebar from "./BlogSidebar";

const BlogDetails = ({ blog }: { blog: blogType }) => {
  return (
    <section className="section-py bg-white relative">
      <div className="container">
        <div className="grid lg:grid-cols-12 grid-cols-1 my-gap-24">
          <div className="lg:col-span-8">
            <div>
              <BlogDescriptions blog={blog && blog} />
              <BlogComments />
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="sticky top-32">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
