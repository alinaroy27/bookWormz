import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Contact Form Submitted:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-100 dark:bg-slate-900 transition-colors duration-300 px-4 py-8">
      <div className="bg-white dark:bg-slate-800 rounded-xl shadow-2xl p-8 md:p-12 w-full max-w-md relative text-black dark:text-white transition-all duration-300">

        {/* ❌ Close Button */}
        <button
          className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-xl text-gray-500 dark:text-gray-300 hover:text-red-500"
          onClick={() => navigate("/")}
          aria-label="Close Contact Form"
        >
          ✕
        </button>

        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-pink-600 dark:text-pink-400 mb-6">
          Contact Us
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">Name is required</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">Email is required</p>
            )}
          </div>

          {/* Message Field */}
          <div>
            <label className="block font-medium mb-1 text-gray-700 dark:text-gray-200">Message</label>
            <textarea
              placeholder="Type your message..."
              className="w-full border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md bg-white dark:bg-slate-700 text-black dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none h-28 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              {...register("message", { required: true })}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">Message is required</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-pink-500 text-white font-semibold py-2 rounded-md hover:bg-pink-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
