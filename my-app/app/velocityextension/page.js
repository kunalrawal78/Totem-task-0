'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import img1 from '../../img/laptop.png';
import velocitylogo from '../../img/velocitylogo.png';
import chatgptlogo from '../../img/chatgptlogo.png'
import claudelogo from '../../img/claudelogo.png'
import geminilogo from '../../img/geminilogo.png'
import groklogo from '../../img/groklogo.png'

const Aitools = [
    { name: 'Chatgpt', logo: chatgptlogo },
    { name: 'Gemini', logo: geminilogo },
    { name: 'Claude', logo: claudelogo },
    { name: 'Grok', logo: groklogo },

]

const page = () => {
    return (
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
                        <button className="bg-black text-black border border-black px-14 py-2 rounded-full shadow-md dark:bg-white dark:text-white dark:border-white" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="mb-1 font-medium">Chrome Extension</span>
                        <button className="bg-black text-black border border-black px-14 py-2 rounded-full shadow-md dark:bg-white dark:text-white dark:border-white" />
                    </div>
                </div>

                {/* Bottom Logo */}
                <h1 className="text-5xl hidden lg:block font-semibold ml-20 md:text-left dark:text-white mt-30  absolute">
                   <div>
                    Get Started 
                   </div>
                   
                    Instantly
                    <div className='relative text-[12px] mt-8'>
                 <span>
                    <div className='py-1'> 
                    Add the extension to Unlock Faster,
                    </div>
                    
                     smarter prompt workflows.</span>
               </div>
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
                    { label: 'Chrome Extension', bg: 'bg-black text-black border border-black', dark: 'dark:bg-white dark:text-white dark:border-white' }
                ].map((item, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <span className="mb-1 text-sm font-medium">{item.label}</span>
                        <button className={`${item.bg} px-6 py-2 rounded-full shadow-md text-sm ${item.dark}`} />
                    </div>
                ))}
            </div>

            {/* Right Section */}
            <div className="flex items-center justify-center lg:px-10 lg:py-10">
                <form
                    className="w-full sm:max-w-[700px] bg-slate-50 dark:bg-[#152A32] text-black dark:text-white px-5 lg:px-15 py-10 rounded-xl shadow-[0px_-8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:border sm:border-black"
                    style={{ minHeight: '700px' }}
                
                    <h1 className="text-3xl mb-6 text-center md:text-left dark:text-white">
                        Get Velocity Extension.
                    </h1>

                    {/* Velocity Extension Component */}
                    <div className="bg-[#CDF6FE] border-1 border-black dark:bg-[#1e1e1e] p-6 rounded-4xl  mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        <div className="flex flex-col items-center text-center">
                            {/* Works With */}
                            <div className="border-black border-1  flex flex-col dark:bg-[#152A32] p-4 rounded-xl w-full max-w-sm">
                                <h1 className="text-sm text-gray-400 text-center md:text-left dark:text-[#E5E5E5] font-medium mb-2">
                                    works with
                                </h1>
                                <div className="flex justify-center gap-2 flex-wrap ">
                                    {Aitools.map(({ name, logo }) => {
                                        if(name==='Chatgpt'){
                                            return(
                                    <span
                                        key={name}
                                        className="flex items-center gap-1 bg-white dark:bg-[#152A32] dark:text-white text-black text-sm font-medium px-1 py-1 rounded-lg shadow-sm border border-gray-300"
                                    >

                                        <Image src={logo} alt={`${name} logo`} width={20} height={20} className="rounded-sm dark:invert dark:filter dark:brightness-0 dark:sepia " />

                                        {name}
                                    </span>
                                    );
                                        }
                                    if (name === 'Grok') {
                                    return (
                                    <span
                                        key={name}
                                        className="flex items-center gap-1 bg-white dark:bg-[#152A32] dark:text-white text-black text-sm font-medium px-2 py-1 rounded-lg shadow-sm border dark:border-white"
                                    >
                                        <Image src={logo} alt="Grok logo" width={20} height={20} className="rounded-sm dark:invert dark:brightness-75  "  />
                                        {name}
                                    </span>
                                    );
                                   }
                                    return (
                                    <span
                                        key={name}
                                        className="flex items-center gap-1 bg-white dark:bg-[#152A32] dark:text-white text-black text-sm font-medium px-1 py-1 rounded-lg shadow-sm border border-gray-300"
                                    >
                                        <Image src={logo} alt={`${name} logo`} width={20} height={20} className="rounded-sm" />
                                        {name}
                                    </span>
                                    );
                                    })}

                                </div>
                            </div>

                            {/* Chrome + Velocity Logo Composition */}
                            <div className="relative w-24 h-24 mt-6 mb-4 ">
                                {/* Circle Background */}

                                {/* Velocity Logo */}
                                <div className="absolute inset-[-16] h-full flex items-center justify-center z-10">
                                    <Image
                                        src={velocitylogo}
                                        alt="Velocity Logo"
                                    />
                                </div>

                                {/* You can add the Chrome logo here if you want */}
                            </div>
                        </div>

                        {/* Link Button */}
                        <Link href="https://www.velocity.com/claude" passHref className='flex items-center justify-center'>
                            <button className="text-sky-600 font-medium hover:underline">
                                Continue to Claude →
                            </button>
                        </Link>
                    </div>

                    {/* Centered button and text below */}
                    <div className="flex flex-col items-center py-3">
                        <button className="mt-6  text-white px-6 py-3 rounded-full font-semibold w-full max-w-sm bg-sky-400">
                            Get it for Free
                        </button>
                        <p className="text-xs text-gray-500 mt-2 max-w-xs text-center">
                            By downloading the Velocity Chrome Extension you agree to the{' '}
                            <Link href="/terms" className="underline text-sky-600">
                                Terms and Conditions
                            </Link>{' '}
                            and{' '}
                            <Link href="/privacy" className="underline text-sky-600">
                                Privacy Policy
                            </Link>

                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default page;
