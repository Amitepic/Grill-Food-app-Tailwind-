import { HEADER_LOGO} from "../utils/CDN";
import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";




const Header = () => {
const [logoutbtn, setLogoutbtn] = useState("Login");
const onlineStatus = UseOnlineStatus();
  // subsribing to the store using selector
const cartItems = useSelector((store) => store.cart.items)


 
  return (
    <div className=" flex justify-between h-20 bg-red-200  sm:flex justify-between h-20 bg-red-200 shadow-lg ">
      <div className="sm:w-24 p-3 transition-all ease-out duration-200 hover:scale-110">
        <Link to="/">
          <img src={HEADER_LOGO} className="rounded-full h-14" />
        </Link>
      </div>
      <div className="nav">
        <ul className=" flex items-center py-1 sm:flex items-center py-4">
          <li className=" text-white text-lg font-medium hover:text-blue-400  transition-all ease-out duration-200 hover:scale-125 ">
            <Link to="about" className="px-2 mx-2 tracking-widest">
              About
            </Link>
          </li>
          {/* link is very powerfull component to link our routte/page instant of anchar tag */}
          <li className=" text-white hover:text-blue-400  font-medium text-md  transition-all ease-out duration-200 hover:scale-125">
            <Link
              to="contact"
              className=" tracking-widestpx-2 mx-2  text-white hover:text-blue-400  font-medium text-md  transition-all ease-out duration-200 hover:scale-110 tracking-widest"
            >
              Contact
            </Link>
          </li>
          <li className=" text-white hover:text-blue-400  font-medium text-md  transition-all ease-out duration-200 hover:scale-125">
            {" "}
            <Link to="order" className="px-2 mx-2 tracking-widest">
              {" "}
              order
            </Link>
          </li>
          <li className=" text-white hover:text-blue-400  font-medium text-md  transition-all ease-out duration-200 hover:scale-125 tracking-widest">
            OnlineStatus {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="px-2 mx-2  text-white hover:text-blue-400  font-medium text-md  transition-all ease-out duration-200 hover:scale-110 tracking-widest">
            <Link to='/cart'>Cart ({cartItems.length})</Link>
          </li>
          <li className="px-2 mx-2 bg-blue-400 p-2 rounded-lg font-bold text-white  transition-all ease-out duration-200 hover:scale-110 ">
            <button
              className="btn"
              onClick={() => {
                if (logoutbtn === "Login") {
                  setLogoutbtn("Logout");
                } else {
                  setLogoutbtn("Login");
                }
              }}
            >
              {logoutbtn}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
