import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="sm:h-56 sm:w-full bg-blue-700 text-slate-200">
        <div className="flex justify-evenly items-center pt-7 text-sm">
          <ul className="space-y-4 underline">
            <li>Contact</li>
            <li>Blog</li>
            <li>Help</li>
            <li>Support</li>
           
          </ul>
          <ul className="space-y-4 underline">
            <li>FAQ</li>
            <li>Email</li>
            <li>Account</li>
            <li>Sign In</li>
          </ul>
        </div>
        <h1 className="sm:text-sm text-xs font-bold text-center mt-9 py-4 bg-blue-700">Copyright © 2024 ZooBlog</h1>
      </footer>
    </div>
  );
};

export default Footer;
