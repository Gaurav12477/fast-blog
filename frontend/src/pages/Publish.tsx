import axios from "axios"
import Appbar from "./components/Appbar"
import { BACKEND_URL } from "../config"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"



const Publish = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const navigate = useNavigate();
  return (
    <div>
       <Appbar/>
        <div className="flex justify-center flex-col  items-center">
            <div className="w-3/5 mt-4">
            <textarea onChange={(e) => {
                setTitle(e.target.value);
            }}  className=" col-span-2 p-2.5 w-full required text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Title.."></textarea>
            </div>
            <div className="w-3/5 mt-4">
            <TextEditor onChange={(e) => {
                setDesc(e.target.value);
            }}/>
            <div className="flex items-center justify-between px-3 border-t">
                    <button onClick={async ()=> {
                        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/v1/blog`, {
                            title,
                            content: desc
                        }, {
                            headers: {
                                Authorization: `Bearer ${localStorage.getItem("token")}`
                            }
                        });
                        navigate(`/blog/${response.data.id}`)
                    }} type="submit" className="text-white bg-gray-800 w-3/4 sm:w-1/6 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Post Blog
                    </button>
                
                </div>
            </div>
        </div>
    </div>
  )
}

function TextEditor ({onChange} : {onChange: (e:ChangeEvent<HTMLTextAreaElement>) => void}) {
    return (
        <div>
            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 ">
                <div className="px-4 py-2 bg-white rounded-t-lg ">
                    
                    <textarea onChange={onChange} className="w-full px-0 border-none focus:ring-0  focus:ring-transparent focus-outline-none text-sm text-gray-900 bg-white" rows="10" placeholder="Write a comment..." required ></textarea>
                </div>
                
            </div>

        </div>
    )
}

export default Publish