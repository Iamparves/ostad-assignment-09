import BlogCard from "@/components/BlogCard";
import { getBlogs } from "@/utils/apiRequest";

const Page = () => {
  const blogs = getBlogs();

  return (
    <section>
      <div className="bg-[url('/blog-top.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="w-full h-full py-14 md:py-20 bg-black/40">
          <h2 className="text-center text-4xl md:text-5xl font-bold text-white font-josefin">
            Blog Posts
          </h2>
        </div>
      </div>
      <div className="container py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
