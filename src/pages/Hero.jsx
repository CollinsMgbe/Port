import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0">
          <img
            // src={profileImg}
            alt="Profile"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full border-4 border-gray-700 object-cover"
          />
        </div>

        <div className="text-center md:text-left">
          <p className="text-sm text-gray-400">Web Designer</p>
          <h1 className="text-4xl font-bold mt-2">Alex Smith</h1>
          <p className="max-w-xl text-gray-400 mt-4">
            Fusce tempor magna mi, non egestas velit ultricies nec. Aenean convallis,
            risus non condimentum gravida, odio mauris ullamcorper felis.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full transition">
              Download CV
            </button>
            <button className="border border-white px-5 py-2 rounded-full hover:bg-white hover:text-gray-900 transition">
              Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
