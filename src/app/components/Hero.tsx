import React from "react";
import Image from "next/image";


const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center sm:flex-row sm:pt-16 sm:gap-9">
      <div className="pt-6">
        <Image
          src="/image.png"
          alt="blog"
          height={30}
          width={230}
          className="sm:h-[450px] sm:w-[500px] rounded-tr-[40px] rounded-bl-[40px] md:h-[350px] md:w-[400px]"
        />
      </div>

      <div className="px-8 bg-white text-justify sm:text-lg sm:w-[450px] sm:h-[450px] flex flex-col justify-center sm:flex-col pt-3 gap-2">
        <h1 className="text-center sm:text-4xl font-serif font-bold text-3xl sm:text-start">
          Blogs by Zubair
        </h1>
        <h2 className="sm:text-2xl italic text-xl text-center sm:text-start font-bold text-gray-500">
          A Comprehensive Guide To Full Stack Web Development.
        </h2>
        <p className="text-lg">
          "Mastering the Art of Web Development: An In-Depth Journey Through
          HTML, CSS, and JavaScript and more Languages to Build Stunning, Interactive Websites". In
          this blog, we’ll dive deep into the fundamentals of web development,
          focusing on the core building blocks of every website: HTML, CSS, and
          JavaScript.
        </p>
      </div>
    </div>
  );
};

export default Hero;