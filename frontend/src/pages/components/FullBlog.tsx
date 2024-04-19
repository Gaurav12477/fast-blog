import { Blog } from "../../hooks";
import Appbar from "./Appbar";

const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
      <div className="grid grid-cols-12 px-2 sm:px-5 md:px-10 w-full pt-8 sm:pt-16  max-w-screen-2xl  ">
        <div className="col-span-8 px-[2px] ">
          <div className="text-2xl sm:text-4xl md:text-5xl font-bold md:font-extrabold">{blog.title}</div>
          <div className="text-slate-500 pt-1 sm:pt-3 md:pt-5">Post on 2nd December 2023</div>
          <div className="text-slate-600 pt-3 sm:pt-5 text-base sm:text-lg font-medium">{blog.content}</div>
        </div>
        <div className="col-span-4 flex flex-row font-normal gap-1 sm:gap-2">
          <div className="h-full bg-slate-700 border-2 rounded-xl"></div>
          <div>
          <div className="text-md sm:text-2xl font-semibold">Author</div>
          <div className="flex flex-row justify-center items-center gap-4">
            <div className=" sm:h-10 sm:w-12 bg-slate-200 rounded-full">
              
            </div>
            <div>
              <div className="text-md sm:text-xl md:text-2xl font-bold ">
                {blog.author.name || "Gaurav Sharma"}
              </div>
              <div className="text-slate-500 text-sm sm:font-medium">
                Master of mirth, pevys of puns, and the funniest person in the kingdom.
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FullBlog;
