import { useSingleBlog } from "../hooks"  
import { useParams } from "react-router-dom";
import FullBlog from "./components/FullBlog";
import BlogSkeleton from "./components/BlogSkeleton";


const SingleBlog = () => {
    const {id} = useParams();
  
    const {loading, blog} = useSingleBlog({
        id: id || ""
    });

    if(loading) {
        return (
          <div className="flex ">
          <div>
            <BlogSkeleton/>
            <BlogSkeleton/>
          </div>
        </div>
          );
    }

    return (
    <div>
        <FullBlog blog={blog}/>
    </div>
  )
}

export default SingleBlog