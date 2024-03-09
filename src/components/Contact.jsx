import React from 'react';

function Contact() {
  return (
    <div className="relative w-full bg-white m-5">
        
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
        <h1 className="mt-8 text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
  <span className='text-[#457b9d]'>Get in</span> <span className="text-[#e63946]">Touch</span>
</h1>
         

          <form action="" className="mt-8">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              <div className="input-field">
                <input
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#457b9d]"
                  type="text"
                  placeholder="Your Name"
                  id="name"
                />
              </div>
              <div className="input-field">
                <input
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#457b9d]"
                  type="email"
                  placeholder="Your Email"
                  id="email"
                />
              </div>
              <div className="input-field col-span-2">
                <input
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#457b9d]"
                  type="text"
                  placeholder="Subject"
                  id="subject"
                />
              </div>
              <div className="input-field col-span-2">
                <textarea
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-3 py-2 text-sm text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#457b9d] resize-none"
                  placeholder="Your Message"
                  id="message"
                  rows="6"
                ></textarea>
              </div>
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="rounded-md bg-[#457b9d] px-5 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#a8dadc] focus:outline-none focus:ring-2 focus:ring-[#457b9d] focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="rounded-lg shadow-xl h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
