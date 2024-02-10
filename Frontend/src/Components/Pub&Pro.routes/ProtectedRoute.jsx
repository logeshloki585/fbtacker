import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../../redux/userSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function userProtectedRoute(props) {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getUser = async () => {
    try {
      
      const response = await axios.post(
        "http://localhost:3000/api/getUser",
        { token: localStorage.getItem("token") },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
     
      if (response.data.success) {
        dispatch(setUser(response.data.data));
        // console.log(response.data.data)
        toast.success(response.data.message);
      } else {
        localStorage.clear();
        navigate("/login");
      }
    } catch (error) {

      localStorage.clear();
      navigate("/login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default userProtectedRoute;
