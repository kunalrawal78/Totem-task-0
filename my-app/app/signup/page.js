'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../../img/laptop.png';
import google from '../../img/google-logo-9827 1.png';

const Signup = () => {
  return (
    (
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#CDF6FE] dark:bg-[#152A32] text-black dark:text-white">
        {/* Left Section */}
        <div className="flex flex-col justify-between items-start h-full p-10 relative">
          {/* Top Buttons */}
          <div className="flex flex-row items-start gap-4 hidden md:flex">
            <div className="flex flex-col items-start">
              <span className="mb-1 font-medium">Create Profile</span>
              <button className="bg-black text-white px-14 py-2 rounded-full shadow-md dark:bg-white" />
            </div>
            <div className="flex flex-col items-start">
              <span className="mb-1 font-medium">Customize</span>
              <button className="bg-white text-black border border-black px-14 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white dark:border-white" />
            </div>
            <div className="flex flex-col items-start">
              <span className="mb-1 font-medium">Chrome Extension</span>
              <button className="bg-white text-black border border-black px-14 py-2 rounded-full shadow-md dark:bg-gray-800 dark:text-white dark:border-white" />
            </div>
          </div>

          {/* Bottom Logo */}
          <h1 className="text-5xl hidden lg:block font-semibold ml-20 md:text-left dark:text-white mt-48 absolute">
            Welcome to
            <br />
            Velocity
          </h1>
          <Image
            src={img1}
            alt="Logo"
            className="w-64 h-75 m-32 hidden md:block"
          />
        </div>

        {/* Mobile Heading */}
         <div className="flex md:hidden justify-center gap-4 mb-6">
          {[
            { label: 'Create Profile', bg: 'bg-black text-white', dark: 'dark:bg-white' },
            { label: 'Customize', bg: 'bg-black text-black border border-black', dark: 'dark:bg-white dark:text-white dark:border-white' },
            { label: 'Chrome Extension', bg: 'bg-white text-black border border-black', dark: 'dark:bg-gray-800 dark:text-white dark:border-white' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="mb-1 text-sm font-medium">{item.label}</span>
              <button className={`${item.bg} px-6 py-2 rounded-full shadow-md text-sm ${item.dark}`} />
            </div>
          ))}
        </div>




        {/* Right Section */}
        <div className="flex items-center justify-center lg:px-10 lg:py-10 ">
          <form

            className="w-full  sm:max-w-[700px] bg-slate-50 dark:bg-[#152A32] text-black dark:text-white px-5 lg:px-15 py-10 rounded-xl shadow-[0px_-8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:border sm:border-black"
            style={{
              minHeight: '700px',
            }}
          >
            <h1 className="text-3xl mb-6 text-center  md:text-left dark:text-white">
              Create an Account
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block mb-1 font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block mb-1 font-medium">Email</label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  required
                />
                <button className="text-blue-500 font-medium whitespace-nowrap">
                  Verify
                </button>
              </div>
            </div>

            {/* Passwords side by side */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1">
                <label className="block mb-1 font-medium">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 font-medium">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  required
                />
              </div>
            </div>

            <button
                        type="submit"
                        className="w-full px-15 py-3  bg-sky-400 text-white font-semibold rounded-full hover:bg-sky-500 transition mb-4"
                        style={{ boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)' }}
                    >
                        Sign Up
                    </button>

           

            <button
              type="button"
              className="w-full py-3 px-5 lg:px-15 mt-3 border rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-[#2D2D2D] transition mb-4"
            >
              <Image src={google} alt="Google Logo" className="h-5 w-5" />
              <span className="font-medium">Log in with Google</span>
            </button>

            <p className="text-sm text-center mt-6 dark:text-gray-300">
              Already have an account?{' '}
              <Link href="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    )
  );
};

export default Signup;
