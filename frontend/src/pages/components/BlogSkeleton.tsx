

const BlogSkeleton = () => {
  return (
    <div role="status" className="animate-pulse">
      <div className="p-2 border-b border-slate-200 pb-2 w-screen max-w-screen-md cursor-pointer">
        <div className="flex">
          <div className="h-6 bg-gray-200 rounded-full w-48 mb-4"></div>
          <div className="h-3 bg-gray-200 rounded-full mb-2"></div>
          <div className="h-3 bg-gray-200 rounded-full mb-2"></div>
          

          <div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
            <div className="h-3 bg-gray-200 rounded-full mb-2"></div>
          </div>
        </div>
        <div className="text-xl font-semibold pt-2">
          <div className="h-3 bg-gray-200 rounded-full mb-2"></div>
        </div>
        <div className="text-md font-thin">
          <div className="h-3 bg-gray-200 rounded-full mb-2"></div>
        </div>
        <div className="text-slate-500 text-sm font-thin pt-4">
          <div className="h-3 bg-gray-200 rounded-full mb-2"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default BlogSkeleton;
