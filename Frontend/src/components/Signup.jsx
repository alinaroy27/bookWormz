import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      if (res.data && res.data.user) {
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        toast.success("Signed up successfully");
        navigate(from, { replace: true });
      }
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        toast.error("Signup failed. Please try again.");
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center ">
      <div className="border-[2px] shadow-md p-6 rounded-md w-[400px] relative">
        {/* ❌ Removed outer <form> */}
        <Link
          to="/"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </Link>

        <h3 className="font-bold text-2xl text-center mt-6">Create an Account 👤</h3>
        <p className="text-sm text-center text-gray-500 dark:text-gray-300 mb-6">
          Sign up to get started
        </p>

        {/* ✅ This is the only form now */}
        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          {/* Name */}
          <div className="space-y-1">
            <label className="block font-medium text-black dark:text-white text-sm">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your Full Name"
              className="w-full px-4 py-2 border rounded-md shadow-sm 
              bg-white dark:bg-slate-700 
              text-black dark:text-white 
              placeholder-gray-500 dark:placeholder-gray-400 
              border-gray-300 dark:border-gray-600 
              focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("fullname", { required: true })}
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">Name is required</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label className="block font-medium text-black dark:text-white text-sm">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md shadow-sm 
              bg-white dark:bg-slate-700 
              text-black dark:text-white 
              placeholder-gray-500 dark:placeholder-gray-400 
              border-gray-300 dark:border-gray-600 
              focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="block font-medium text-black dark:text-white text-sm">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md shadow-sm 
              bg-white dark:bg-slate-700 
              text-black dark:text-white 
              placeholder-gray-500 dark:placeholder-gray-400 
              border-gray-300 dark:border-gray-600 
              focus:outline-none focus:ring-2 focus:ring-pink-500"
              {...register("password", { required: true })}
            />
            {errors.password && (
              <p className="text-red-500 text-sm">Password is required</p>
            )}
          </div>

          {/* Submit + Login */}
          <div className="flex justify-around mt-4 items-center">
            <button
              type="submit"
              className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
            >
              Signup
            </button>

            <p className="text-md">
              Have an account?{" "}
              <button
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className="underline text-blue-500 cursor-pointer"
              >
                Login
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
