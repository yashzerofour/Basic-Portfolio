import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="relative w-full bg-white m-5">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          <h1 className="mt-8 text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-[#e63946]">
            Welcome to <span className="text-[#457b9d]">Kshitij's</span> Portfolio
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Showcase your talents, projects, and experiences in a captivating manner.
          </p>
          <form action="" className="mt-8 flex items-start space-x-2">
            <div>
              <input
                className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#457b9d]"
                type="email"
                placeholder="Enter your email"
                id="email"
              />
              <p className="mt-2 text-sm text-gray-500">Subscribe to our newsletter for updates.</p>
            </div>
            <div>
              <button
                type="button"
                className="rounded-md bg-[#457b9d] px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#a8dadc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#457b9d] focus-visible:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="rounded-lg shadow-xl h-full w-full object-cover"
            src="https://images.pexels.com/photos/20412064/pexels-photo-20412064/free-photo-of-portofino.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
