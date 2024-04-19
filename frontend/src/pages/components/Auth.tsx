import { SignupType } from "@gaurav12477/common"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link , useNavigate } from "react-router-dom"



const Auth = ({type}: {type: "signup" | "signin"}) => {
    
    const navigate = useNavigate();

    const [postInputs, setPostInputs] = useState<SignupType>({
        name: "",
        username: "",
        password: "",
    })

    async function sendRequest() {
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,
                postInputs
            );
    
            const {jwt, name = "guest12"} = response.data;
            localStorage.setItem("token", jwt);
            localStorage.setItem("username", name); 
            navigate('/');
        } catch (error) {
            // Provide user-friendly feedback
            console.error("An error occurred while processing your request:", error);
            // You can also display an error message on the UI here
        }
    }
    
  return (
    <>
        <div className="h-screen flex flex-col justify-center">
            <div className="flex flex-col justify-center items-center">
                <h1 className="text-2xl sm:text-3xl  font-extrabold mt-4">Create an Account</h1>
                <div className="flex justify-center mt-2 mb-6">
                   <p >{type === "signup" ? "Already have an account? " : "Don't have an Account? " } </p>
                    <Link className="underline hover:text-blue-700" to={type === "signin" ? "/signup" : "/signin"}>{type === "signin" ? "Sign Up" : "Sign In"}</Link>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center">
            { type === "signup" ? <LabelledInput label={"Name"} placeholder={"John Doe"} onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    name: e.target.value                                    
                })
            }}/> : null}

            <LabelledInput label={"Email"} placeholder={"test @gmail.com"} onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    username: e.target.value
                })
            }}/>
            <LabelledInput label={"Password"} type={"password"} placeholder={"123456"} onChange={(e) => {
                setPostInputs({
                    ...postInputs,
                    password: e.target.value
                })
            }}/>  
            </div>
            <div className="flex justify-center items-center mt-6">
            <button onClick={sendRequest} type="button" className="text-white bg-gray-800 w-3/4 sm:w-1/2 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>
            </div>
        </div>
    </>
  )
}



// imput  Fields

interface LabelledInputType {
    label: string;
    placeholder: string;
    onChange: (e:   ChangeEvent<HTMLInputElement>) => void;
    type?: string
}

const LabelledInput = ({label, placeholder, type, onChange}: LabelledInputType) => {
    return <div className="w-3/4 sm:w-1/2 mt-2 sm:mt-6">
        <label className="block mb-2 text-md tracking-wide font-bold text-gray-900">{label}</label>
        <input type={type || "text" } id="first_name"  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder={placeholder} onChange={onChange} required />
</div>
}


export default Auth