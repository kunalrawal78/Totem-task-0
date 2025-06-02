'use client';
import React from 'react';
import img1 from '../../img/laptop.png';

import Link from 'next/link';
import Image from 'next/image';
import DropdownRole from '../customedropdown/DropdownRole'
import DropdownAi from '../customedropdown/DropdownAi'
import DropdownUsecase from '../customedropdown/DropdownUsecase'
import DropdownFound from '../customedropdown/DropdownFound'

const Helpus = () => {
  return (
    <div className="h-screen grid grid-cols-1 md:grid-cols-2 bg-[#CDF6FE] dark:bg-[#152A32] text-black dark:text-white overflow-hidden">

      {/* LEFT SECTION - Desktop Only */}
      <div className="hidden md:flex flex-col justify-between items-start p-10 relative">
        <div className="flex flex-row items-start gap-4">
          {[
            { label: 'Create Profile', bg: 'bg-black text-white', dark: 'dark:bg-white' },
            { label: 'Customize', bg: 'bg-black text-black border border-black', dark: 'dark:bg-white dark:text-white dark:border-white' },
            { label: 'Chrome Extension', bg: 'bg-white text-black border border-black', dark: 'dark:bg-gray-800 dark:text-white dark:border-white' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-start">
              <span className="mb-1 font-medium">{item.label}</span>
              <button className={`${item.bg} px-14 py-2 rounded-full shadow-md ${item.dark}`} />
            </div>
          ))}
        </div>

        <h1 className="text-4xl font-semibold ml-20 mt-48 hidden md:block absolute">
          Help Us Learn <br /> About You
        </h1>

        <Image
          src={img1}
          alt="Velocity Logo"
          className="w-64 h-75 m-32 hidden md:block"
          priority
        />
      </div>

      {/* RIGHT SECTION - Mobile & Desktop */}
      <div className="h-screen flex flex-col overflow-y-auto md:overflow-hidden px-4 py-6 text-center w-full">

        {/* Mobile Buttons */}
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

        {/* Form Section */}
        <div className="flex items-center justify-center lg:px-10 lg:py-10 mx-[-15px] ">
          <form
            className="w-full sm:max-w-[700px] bg-slate-50 dark:bg-[#152A32] text-black dark:text-white px-5 lg:px-15 py-10 rounded-xl 
             shadow-[0px_-8px_0px_0px_rgba(0,0,0,1)] sm:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] sm:border sm:border-black"
            style={{ minHeight: '600px' }}  // Reduced from 700px to 600px
          >
            {/* Mobile Heading */}
            <h1 className="text-2xl font-semibold text-center mb-6 block md:hidden">
              Help Us Learn<br />About You
            </h1>

            {/* Centered Content Wrapper for Desktop */}
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="w-full max-w-md space-y-8 text-[14px]">

                <div className="flex items-start gap-4">
                  <span className="mt-3 font-semibold whitespace-nowrap">I work in</span>
                  <DropdownRole />
                </div>

                <div className="flex items-start flex-wrap gap-4">
                  <span className="mt-3 font-semibold whitespace-nowrap">I mostly use</span>
                  <DropdownAi />
                  <span className="mt-3 font-semibold whitespace-nowrap">for</span>
                  <DropdownUsecase />
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-3 font-semibold whitespace-nowrap">I struggle with AI</span>
                  <DropdownAi />
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-3 font-semibold whitespace-nowrap">I found this tool through</span>
                  <DropdownFound />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-sky-400 text-white font-semibold rounded-full hover:bg-sky-500 transition"
                >
                  <Link href="/">Continue</Link>
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  );


}

export default Helpus


