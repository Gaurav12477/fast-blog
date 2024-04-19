

import { MdOutlineBookmarkAdd } from "react-icons/md";
import { CiCircleMinus } from "react-icons/ci";
import { BsThreeDots } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface BlogCardProps {
    id: string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

const BlogCard = ({id,authorName, title, content, publishedDate}: BlogCardProps) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/blog/${id}`)
    };
  return (
    <div onClick={handleCardClick} className="flex flex-col justify-center border-b-2 border-slate-300 max-w-4xl h-auto p-5 cursor-pointer pt-10">
        <div className="flex items-center">
            <div><img className="rounded-full h-8 w-8" src="https://i.pinimg.com/564x/de/f8/53/def853dd96bd30710cc0ad9a179a2b31.jpg" alt="" /></div>
            <div><span className="p-2 font-bold">{authorName}</span>&#8226; <span className="text-base text-slate-500 font-extralight">{publishedDate}</span></div>
        </div>
        <div className="text-3xl font-bold mt-4 ">
            {title}
        </div>
        <div>
            {content.slice(1,100) + "......"}
        </div>
        <div>
            {`${Math.ceil(content.length/100)} Minutes ` }
        </div>
        <div className= "flex flex-row justify-between mt-10">
            <div className="flex flex-row justify-center items-center gap-6">
                <div className="py-1 px-3 text-slate-600 bg-slate-200 rounded-2xl font-semibold">Side Hustle</div>
                <div>3 min reads</div>
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
                <MdOutlineBookmarkAdd className="text-2xl text-slate-600"/>
                <CiCircleMinus className="text-2xl text-slate-600"/>
                <BsThreeDots className="text-2xl"/>

            </div>
        </div>
    </div>
  )
}

export default BlogCard;

