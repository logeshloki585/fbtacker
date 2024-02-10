import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value)
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("hello")
      const response = await axios.post(
        "http://localhost:3000/api/register",
        formData
      );
      if (response.data.success === true) {
        // console.log(response.data.message);
        toast.success("User Registration Successfull");
        // toast.success(response.data.message)
        navigate("/login");
      } else {
        // console.log(response.data.message);
        toast.error(response.data.message);
      }
    } catch (err) {
      // console.log("Something Went Wrong");
      toast.error("Something Went Wrong");
    }
  };

  return (
    <div>
    <ToastContainer className="bg-gray-100"/>
    <div className="w-full mx-auto my-8 max-w-md">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-3 bg-white">
          <label
            className="block bg-white text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="border rounded w-full py-2 px-3 mb-2 text-gray-700"
            name="fullName"
            onChange={handleInputChange}
            value={formData.fullName}
            id="fullName"
            type="text"
            placeholder="First Name"
            required
          />
          
          <label
            className="block bg-white text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="border rounded w-full mb-3 py-2 px-3 text-gray-700"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            required
          />
          <label
            className="bg-white block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            type="password"
            placeholder="Enter Password"
            required
          />
        </div>
        <div className="bg-white flex items-center justify-center">
          <button
            className="bg-green-900 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
            type="submit"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Register;
