import { useEffect, useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export interface Blog {
    "content": string,
    "title": string,
    "id": string,
    "author" : {
        "name": string    
    }
}
 
export const useSingleBlog = ({id} : { id : string}) => {
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();   
    
    const navigate = useNavigate();

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate('/signup')
            return
        }
       axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/${id}`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
       })
            .then(response => {
                setBlog(response.data.singleBlog);
                setLoading(false);
            })

    }, [id])    

    return {
        loading,
        blog,   
    }
    
}

export const useBlog = () => {
    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);   
    const navigate = useNavigate();
    useEffect(() => {
        
        if(!localStorage.getItem("token")){
            navigate('/signup')
            return
        }
       axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog/bulk`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
        }
       })
            .then(response => {
                setBlogs(response.data.blogs);
                setLoading(false);
            })

    }, [])

    return {
        loading,
        blogs
    }
}