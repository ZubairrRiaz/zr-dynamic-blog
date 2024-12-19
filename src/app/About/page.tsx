import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col font-sans justify-center items-center gap-4">
          <h1 className="text-4xl font-bold mb-4">About Zooblog</h1>
          <Image 
            src="/mypic.jpg" 
            alt="Zubair's Picture" 
            height={200}
            width={200}
            className='rounded-full'
          />
          <p className="text-lg">
            Hello, my name is Zubair. This blog was made by me. I am currently learning web development in "Governer Iniative For Artificial (GIAIC)".
          </p>
          <p>Email: zubairrajpoot2164@gmaio.com</p>
          <p>Phone: +92 3082552823</p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
