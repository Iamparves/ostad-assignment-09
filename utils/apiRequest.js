import data from "@/data/blogData.json";

export const getBlogs = () => {
  const blogs = data?.blogs;
  return blogs;
};

export const getBlogById = (blogId) => {
  const blog = data?.blogs?.find((blog) => blog.id === blogId);
  return blog;
};
