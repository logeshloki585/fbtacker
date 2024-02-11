import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const isDoctor = user?.isDoctor;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="container mx-auto px-4 items-center bg-blue-200 p-4 flex justify-between border-t-2 border-b-2 border-gray-700">
      <div className="flex items-center gap-3  font-bold">
        FB-TACKER
      </div>
      <div className=" flex items-center justify-center gap-10">
        <Link
          to={"/profile"}
          className=" text-black text-lg font-semibold flex items-center hover:text-green-900 hover:underline cursor-pointer "
        >
          Profile
        </Link>
        <Link
          to={"/Subscription"}
          className=" text-black text-lg font-semibold flex items-center hover:text-green-900 hover:underline cursor-pointer "
        >
          Subscription
        </Link>
        
      </div>
      <div className=" flex items-center justify-center gap-3">
        {isLoggedIn ? (
          <>
            <span className=" text-black text-bold">
              Hello {user?.fullName}
            </span>
            {/* Add notification icon/button here */}
            <button
              onClick={handleLogout}
              className="text-white font-semibold bg-red-500 rounded text-sm px-2 py-1"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate("/login")}
              className="text-white font-semibold bg-green-800 rounded text-sm px-2 py-1"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="text-white font-semibold bg-green-800 rounded text-sm px-2 py-1"
            >
              Register
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
