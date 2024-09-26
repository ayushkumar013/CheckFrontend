import React from "react";

function Footer() {
  return (
    <section id="footer" className="relative h-[40vh] sm:min-h-[60vh]  w-full bg-[#FF8B67]">
      <div
        className="absolute top-0 left-0 w-full h-[200px] bg-center bg-no-repeat bg-cover z-[-99]"
        style={{ backgroundImage: 'url("/images/footer-dec.webp")' }}
      ></div>

      <div className="footer-services flex justify-evenly items-center flex-wrap border-b-2 border-[#FF695F] py-4 w-full min-h-[100px]">
        <a href="women-dresses.html" className="text-white w-[200px] text-center my-2 transition duration-600 hover:text-gray-700">
          WOMEN DRESSES
        </a>
        <a href="oops.html" className="text-white w-[200px] text-center my-2 transition duration-600 hover:text-gray-700">
          MEN DRESSES
        </a>
        <a href="oops.html" className="text-white w-[200px] text-center my-2 transition duration-600 hover:text-gray-700">
          BAGS & ACCESSORIES
        </a>
        <a href="oops.html" className="text-white w-[200px] text-center my-2 transition duration-600 hover:text-gray-700">
          WATCHES
        </a>
        <a href="oops.html" className="text-white w-[200px] text-center my-2 transition duration-600 hover:text-gray-700">
          JEWELLRY
        </a>
        <a href="oops.html" className="text-white w-[200px] text-center my-2 transition duration-600 hover:text-gray-700">
          FRAGRANCES
        </a>
      </div>

      <h1 className="text-center text-white text-[2.5rem] font-medium py-5">SnagIt</h1>

      <p className="text-center text-white text-base font-light w-[80%] mx-auto">
        At SnagIT, customer satisfaction is paramount. Our commitment to exceptional quality, attention to detail, and impeccable customer
        service ensures that every purchase is a delightful experience. We're here to help you embrace your unique style and feel like royalty
        every day.
      </p>

      <div className="social-icons flex justify-evenly items-center w-[300px] min-h-[50px] my-4 mx-auto">
        <a href="https://leetcode.com/u/lifeBetween0-1/">
          <i className="fa-brands fa-facebook-f text-white text-[1.5rem] p-[10px] transition duration-600 hover:text-gray-700 cursor-pointer"></i>
        </a>
        <a href="https://www.linkedin.com/in/ayush-kumar-b70a07263">
          <i className="fa-brands fa-whatsapp text-white text-[1.5rem] p-[10px] transition duration-600 hover:text-gray-700 cursor-pointer"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-instagram text-white text-[1.5rem] p-[10px] transition duration-600 hover:text-gray-700 cursor-pointer"></i>
        </a>
        <a href="https://github.com/ayushkumar013">
          <i className="fa-brands fa-github text-white text-[1.5rem] p-[10px] transition duration-600 hover:text-gray-700 cursor-pointer"></i>
        </a>
        <a href="">
          <i className="fa-brands fa-twitter text-white text-[1.5rem] p-[10px] transition duration-600 hover:text-gray-700 cursor-pointer"></i>
        </a>
      </div>

      <span className="copy-right bg-[#FF695F] w-full min-h-[50px] flex justify-center items-center text-white">
        © 2024 All Rights Reserved. SnagIt
      </span>
    </section>
  );
}

export default Footer;
