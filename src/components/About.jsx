import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="relative w-full bg-white m-5 overflow-hidden">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 relative z-10">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6 relative z-20">
          <h1 className="mt-8  text-4xl lg:text-6xl font-bold tracking-tight leading-tight text-[#e63946]">
            <span className="relative">
              Get to Know <span className="text-[#457b9d]">Kshitij</span>
            </span>
          </h1>
          <p className="mt-8 text-lg text-gray-700">
            Hello there! I'm Kshitij, a passionate developer dedicated to crafting amazing digital experiences. With a blend of creativity and technical expertise, I strive to bring ideas to life in the digital realm.
          </p>
          <div className="mt-8 space-y-8">
            <div className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-[#457b9d]">My Expertise</h2>
              <p className="text-gray-700">I specialize in web development using modern technologies such as React, Node.js, and GraphQL. Let's build something incredible together!</p>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition duration-300">
              <h2 className="text-xl font-semibold text-[#457b9d]">My Projects</h2>
              <p className="text-gray-700">Check out some of my featured projects below. Each project reflects my dedication to innovation and quality.</p>
            </div>
          </div>
          
        <Link to='/contact'>
            <button type="button"
            className="mt-8 rounded-md bg-[#457b9d] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#a8dadc] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#457b9d] focus-visible:ring-offset-2">
                Contact Me
            </button>
        </Link>
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

export default About;
