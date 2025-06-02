// app/login/page.js
'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import img1 from '../../img/laptop.png';
import google from '../../img/google-logo-9827 1.png';
import Link from 'next/link';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2 bg-[#CDF6FE] dark:bg-[#152A32] text-black dark:text-white transition-colors duration-300">

            {/* LEFT SECTION */}
            <div className="flex flex-col justify-between p-10">
                {/* Step Buttons */}
                <div className="hidden md:flex gap-4">
                    {[
                        { label: 'Create Profile', filled: true },
                        { label: 'Customize', filled: false },
                        { label: 'Chrome Extension', filled: false },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-start">
                            <span className="mb-1 font-medium">{item.label}</span>
                            <button
                                className={`px-14 py-2 rounded-full shadow-md ${item.filled
                                    ? 'bg-black text-white dark:bg-white dark:text-black'
                                    : 'bg-white text-black border border-black dark:bg-black dark:text-white'
                                    }`}
                            />
                        </div>
                    ))}
                </div>

                {/* Welcome Text & Image */}
                <h1 className="text-5xl font-semibold  ml-20 mt-48 hidden md:block absolute">
                    Welcome to <br /> Velocity
                </h1>
                <Image
                    src={img1}
                    alt="Velocity Logo"
                    className="w-64 h-75 m-32 hidden md:block"
                    priority
                />
            </div>

            {/* Mobile View Title */}
            <h2 className="sm:hidden mb-5 font-bold text-[30px] m-auto dark:text-white">Welcome to Velocity</h2>

            {/* RIGHT SECTION (Login Form) */}
            <div className="flex items-center justify-center lg:px-10 lg:py-10 ">
                <form
                    onSubmit={handleLogin}
                    className="w-full  sm:max-w-[700px] bg-slate-50 dark:bg-[#152A32] text-black dark:text-white px-6 py-10 rounded-xl shadow-[0px_-8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:border sm:border-black"
                    style={{
                        minHeight: '700px',
                    }}
                >




                    <h1 className="text-3xl mb-2 mx-10 mt-10">Login</h1>
                    <p className="text-gray-500 mt-5 mb-6 mx-10 dark:text-gray-300">
                        Welcome back! Please enter your details.
                    </p>

                    <div className="mb-4 mx-10">
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border rounded-lg bg-white dark:bg-[#2D2D2D] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-4 mx-10">
                        <label className="block mb-1 font-medium">Password</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full p-3 border rounded-lg bg-white dark:bg-[#2D2D2D] dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="text-center text-sm text-sky-300 mb-6 cursor-pointer">
                        Forgot Password?
                    </div>

                    <button
                        type="submit"
                        className="w-5/6 py-3 ml-10 bg-sky-400 text-white font-semibold rounded-full hover:bg-sky-500 transition mb-4"
                        style={{ boxShadow: '2px 2px 0px 0px rgba(0, 0, 0, 1)' }}
                    >
                        Log In
                    </button>

                    <button
                        type="button"
                        className="w-5/6 py-3 ml-10 mt-3 border rounded-full flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-[#2D2D2D] transition mb-4"
                    >
                        <Image src={google} alt="Google Logo" className="h-5 w-5" />
                        <span className="font-medium">Log in with Google</span>
                    </button>

                    <p className="text-center text-sm text-gray-500 dark:text-gray-300 mt-6">
                        Don’t have an account?{' '}
                        <Link href="/signup" className="text-blue-500 hover:underline">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
