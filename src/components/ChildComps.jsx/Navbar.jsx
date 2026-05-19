
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const links = [
  { text: "Home", link: "/#" },
  { text: "About", link: "#about" },
  { text: "Category", link: "#categories" },
  { text: "Contact", link: "#contact" },
]

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white px-10 sm:px-8 lg:px-20 py-5 shadow-sm sticky top-0 z-50">

      {/* Top bar */}
      <div className="flex items-center justify-between">

        {/* Logo */}
        <img
          src="/logo.png"
          alt="Logo"
          className="w-30 sm:w-40 md:w-50 cursor-pointer"
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10 text-base lg:text-[1rem] font-[400] text-[#1a193a]">

          {links.map((item) => (
            <li key={item.text} className="relative group">
              <a
                href={item.link}
                className="transition-colors duration-300 hover:text-[#1c94fc]"
              >
                {item.text}
              </a>

              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#1c94fc] transition-all duration-300 group-hover:w-full" />
            </li>
          ))}

          {/* Button */}
          <li>
            <Link
              to="/nominate"
              className="inline-block bg-[#49c1ef] px-5 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-bold text-[#1a193a] transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              Nominate
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white shadow-lg rounded-xl p-6">
          <ul className="flex flex-col gap-5 text-base font-medium text-gray-700">

            {links.map((item) => (
              <li key={item.text}>
                <a
                  href={item.link}
                  className="block hover:text-[#1c94fc]"
                  onClick={() => setOpen(false)}
                >
                  {item.text}
                </a>
              </li>
            ))}

            <li>
              <Link
                to="/nominate"
                className="block w-full bg-[#49c1ef] text-[#1a193a] py-3 text-center font-semibold transition-all duration-300 hover:shadow-lg"
                onClick={() => setOpen(false)}
              >
                Nominate
              </Link>
            </li>

          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar