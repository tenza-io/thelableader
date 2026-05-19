import React from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <footer style={{fontFamily: {
  sans: ["DINPro", "sans-serif"]},
}}
     className="bg-[#1a193a] text-white px-4 sm:px-8 lg:px-20 py-12 sm:py-16">
      
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* QUICK LINKS */}
        <div>
          <h1 className="text-lg sm:text-xl font-semibold mb-4">
            Quick Links
          </h1>

          <ul className="space-y-2 text-sm sm:text-base text-gray-300">
            <li><a href="/#" className="hover:text-[#4ac2f0] transition">Home</a></li>
            <li><a href="/#about" className="hover:text-[#4ac2f0] transition">About us</a></li>
            <li><a href="/#categories" className="hover:text-[#4ac2f0] transition">Categories</a></li>
            <li><a href="/#mission" className="hover:text-[#4ac2f0] transition">Mission & Vision</a></li>
            <li><Link to="/nominate" className="hover:text-[#4ac2f0] transition">Nominate</Link></li>
          </ul>
        </div>

        {/* CONTACTS */}
        <div id="contact">
          <h1 className="text-lg sm:text-xl font-semibold mb-4">
            Contacts
          </h1>

          <ul className="flex gap-4 sm:gap-6 text-[#4ac2f0]">
            <li>
              <a href="mailto:info@thelableader.org" className="hover:scale-110 transition">
                <MdOutlineMailOutline className="text-2xl sm:text-3xl md:text-4xl" />
              </a>
            </li>

            <li>
              <a href="#" className="hover:scale-110 transition">
                <FaLinkedinIn className="text-2xl sm:text-3xl md:text-4xl" />
              </a>
            </li>

            <li>
              <a href="#" className="hover:scale-110 transition">
                <FaInstagram className="text-2xl sm:text-3xl md:text-4xl" />
              </a>
            </li>

            <li>
              <a href="#" className="hover:scale-110 transition">
                <FaFacebookF className="text-2xl sm:text-3xl md:text-4xl" />
              </a>
            </li>
          </ul>
        </div>

      </div>

    
      

    </footer>
  )
}

export default Footer