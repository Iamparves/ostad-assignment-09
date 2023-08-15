import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blog }) => {
  const blogLink = `/blog/${blog.id}`;
  return (
    <Link
      href={blogLink}
      className="bg-white p-5 rounded-xl shadow-sm text-center max-w-sm mx-auto"
    >
      <div className="w-full h-48 relative rounded-xl overflow-hidden">
        <Image
          src={`${blog.thumbnail}?strip=all&lossy=1&resize=360%2C200&ssl=1`}
          fill
          className="object-cover"
          alt={blog.title}
          sizes="(max-width: 1200px) 50vw"
        />
      </div>
      <h2 className="my-5 md:text-lg font-bold font-josefin">{blog.title}</h2>
      <p className="text-white bg-[#FF5C4C] py-2 px-4 rounded-full inline-block font-medium font-josefin">
        Read more
      </p>
    </Link>
  );
};

export default BlogCard;
