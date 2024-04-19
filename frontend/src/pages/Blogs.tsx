import { useBlog } from "../hooks";
import Appbar from "./components/Appbar";
import BlogCard from "./components/BlogCard";
import BlogSkeleton from "./components/BlogSkeleton";

const Blog = () => {
  const { loading, blogs } = useBlog();

  if (loading) {
    return (
        <div className="flex justify-center">
          <div>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
            <BlogSkeleton/>
          </div>
        </div>
    );
  }

  return (
    <div className="flex flex-col justify-center">
      <div>
        <Appbar />
      </div>
      <div className="flex flex-col justify-center items-center ">
        {blogs.map((blog) => (
          <BlogCard
            id={blog.id}
            authorName={blog.author.name ? blog.author.name : "Guest123"}
            title={blog.title}
            content={blog.content}
            publishedDate={"2nd Feb 2024"}
          />
        ))}
      </div>
    </div>
  );
};

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex cursor-pointer items-center justify-center w-8 h-8 sm:w-10 sm:h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 pointer">
      <span className="font-medium text-gray-600 dark:text-gray-300">
        {name.split(" ")[0][0].toUpperCase()}
      </span>
    </div>
  );
}

export default Blog;
