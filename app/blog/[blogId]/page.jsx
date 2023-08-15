import { getBlogById } from "@/utils/apiRequest";
import Image from "next/image";

const Page = ({ params: {blogId} }) => {
  const blog = getBlogById(+blogId);
  const date = new Date(blog.date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="py-10">
      <div className="container">
        <div className="bg-white max-w-4xl mx-auto rounded-xl shadow-sm overflow-hidden">
          <div className="w-full h-[250px] sm:h-[320px] lg:h-[460px] relative">
            <Image
              src={blog.thumbnail}
              fill
              className="object-cover"
              alt={blog.title}
              sizes="(max-width: 1200px) 100vw"
              priority
            />
          </div>
          <div className="text-center py-6 px-5 sm:px-10">
            <h2 className="font-josefin text-xl sm:text-2xl font-bold mb-3">
              {blog.title}
            </h2>
            <p className="font-medium text-gray-500 md:text-lg">
              Posted at: {date}
            </p>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-5 p-6 md:p-10 rounded-lg text-justify bg-white shadow-sm">
          <p dangerouslySetInnerHTML={{ __html: blog.content }} />
        </div>
      </div>
    </section>
  );
};

export default Page;
