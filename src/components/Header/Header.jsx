import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, BoltIcon, XMarkIcon } from "@heroicons/react/24/solid";
import './Header.css'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className='job-container'>
      <div className='header relative flex justify-between items-center'>
        <Link to='/'>
          <div className='flex gap-2 justify-center items-center'>
            <p className='text-2xl md:text-4xl font-extrabold'>Monster</p>
          </div>
        </Link>
          <ul className='items-center  hidden space-x-8 lg:flex'>
            <li>
              <NavLink to='/'
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "default"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='/statistics'
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "default"
                }
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink to='/applied'
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "default"
                }
              >
                Applied Jobs
              </NavLink>
            </li>
            <li>
              <NavLink to='/blogs'
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-700"
                    : "default"
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        
        <div className='hidden md:flex'>
          <button className='btn btn-primary bg-gradient-to-r from-blue-600 to-indigo-500 text-white'>Start Apply</button>
        </div>


        <div className='lg:hidden'>
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-6 h-6 text-gray-600' />
          </button>
          {
            isMenuOpen && (
              <div className='absolute top-0 left-0 w-full z-10'>
                <div className='p-5 bg-white border rounded shadow-sm'>
                  <div className='flex items-center justify-between mb-4'>
                    
                  <div>
                    <Link to="/" className="inline-flex items-center">
                      <BoltIcon className="h-6 w-6 text-blue-500" />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        Monster
                      </span>
                    </Link>
                  </div>
                    <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-gray-600" />
                    </button>
                  </div>
                  </div>
                  <nav>
                    <ul className='space-y-4'>
                    <li>
                      <Link to="/" className="default">
                        Home
                      </Link>
                    </li>
                      <li>
                        <Link
                          to='/statistics'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'>
                        Statistics
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/applied'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                           >
                          Applied Jobs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to='/blogs'
                          className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400' >
                          Blogs
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )
          }
        </div>
      </div>
      </div>
      
  );
};
export default Header;
