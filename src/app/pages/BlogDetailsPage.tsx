import { NavBarThree } from "@/components/Global/UI";
import { BlogDetails, BlogHeaderBanner, Footer } from "@/components/Pages";
import { blogType } from "@/config/types";
import { blogs } from "@public/data/blogs";
// import { useParams } from "react-router-dom";

const BlogDetailsPage = () => {
  // const { id } = useParams();

  // Filter blogs based on the blogId
  // const blog: blogType = blogs.find((blog) => blog?.id?.toString() === id)!;

  return (
    <>
      <NavBarThree />
      <main className="min-h-screen ">
        {/* <BlogHeaderBanner blog={blog && blog} />
        <BlogDetails blog={blog && blog} /> */}
      </main>
      <Footer bgStyle="bg-blue-B900" />
    </>
  );
};

export default BlogDetailsPage;
