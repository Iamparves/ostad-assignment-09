import Link from "next/link";

export default function Home() {
  return (
    <div className="h-[calc(100vh-64px)] bg-[url('/hero-bg.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="w-full h-full bg-black/40 flex items-center justify-center">
        <div className="max-w-4xl px-3 text-white text-center space-y-5 md:space-y-7">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-josefin">
            Exploring Ideas and Insights
          </h1>

          <p className="text-base md:text-xl text-white/90 md:leading-relaxed">
            Welcome to BytefulBlogs, your destination for insightful articles,
            thought-provoking narratives, and in-depth explorations.
          </p>
          <Link
            className="bg-[#0560FD] px-6 py-3 text-lg font-medium font-josefin rounded-full inline-block hover:bg-[#FF5C4C] transition-colors duration-300"
            href="/blog"
          >
            Explore Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
