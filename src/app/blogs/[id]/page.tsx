import NotFound from "@/app/not-found";
import { NavBarThree } from "@/components/Global/UI";
import { BlogDetails, BlogHeaderBanner, Footer } from "@/components/Pages";
import { blogType } from "@/config/types";
import { blogs } from "@public/data/blogs";

const BlogDetailsPage = ({ params }: { params: { id: string | number } }) => {
  // Filter blogs based on the blogId
  const blog: blogType = blogs.find(
    (blog) => blog?.id?.toString() == params?.id
  )!;

  return (
    <>
      <NavBarThree />
      <main className="min-h-screen ">
        {blog ? (
          <>
            <BlogHeaderBanner blog={blog && blog} />
            <BlogDetails blog={blog && blog} />
          </>
        ) : (
          <NotFound />
        )}
      </main>
      <Footer bgStyle="bg-blue-B900" />
    </>
  );
};

export default BlogDetailsPage;
