import logo from "../../assets/logo.gif";
import { BsThreeDots } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Avatar } from "../Blogs";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";


const   Appbar = () => {
  return (
    <div className="border-b-2 flex flex-row p-3 sm:p-5 justify-between">
      <div className="flex justify-center items-center">
        <img className="h-5 sm:h-auto" src={logo} alt="" />
        <span className="text-2xl sm:text-4xl font-extrabold">
          <Link to={'/'}>Fast</Link>
        </span>
      </div>
      <div className="flex flex-row gap-2 sm:gap-6">
        <div className="flex justify-center items-center">
          <span  className="px-2 sm:px-4 py-1 cursor-pointer bg-green-700 flex items-center text-xs sm:text-base justify-center text-white font-bold rounded-3xl"><FaPlus /> <Link to={'/publish'}>New</Link>
</span>
        </div>
        <div className="flex flex-row justify-center items-center gap-1 sm:gap-3 text-xl sm:text-2xl cursor-pointer">
          <BsThreeDots />
          <IoMdNotificationsOutline />
        </div>
        <div>
            <Avatar name="gaurav Sharma"/>
        </div>
      </div>
    </div>
  );
};

export default Appbar;
