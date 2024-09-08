import React,{ useState } from 'react'
import { Menu, X } from "lucide-react";
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    const menuItems = [
        {
          name: "Home",
          to: "/homepage",
        },
        {
          name: "About",
          to: "/about",
        },
        {
            name: "Github",
            to: "/github",
        },
      ];
    
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };
    
      return (
        <>
          <div className="relative w-full bg-slate-700">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
              <div className="inline-flex items-center space-x-2">
                <span className="font-bold"><Link to="/" className='text-white'>React Router</Link></span>
              </div>
              <div className="hidden lg:block">
                <ul className="inline-flex space-x-8">
                  {menuItems.map((item) => (
                    <li key={item.name}>
                      <NavLink
                        to={item.to}
                        className={({isActive}) => (`text-sm font-semibold hover:text-lime-500 ${isActive ? "text-lime-300" : "text-white"}`)}>
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:hidden">
                <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer bg-blue-200" />
              </div>
              {isMenuOpen && (
                <div className="absolute inset-x-0 top-0  p-2 lg:hidden">
                  <div className=" rounded-lg bg-white shadow-lg ">
                    <div className="px-5 pb-6 pt-5">
                      <div className="flex items-center justify-between">
                        <div className="inline-flex items-center space-x-2">
                          <span className="font-bold">React Router</span>
                        </div>
                        <div className="-mr-2">
                          <button
                            type="button"
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                          >
                            <span className="sr-only">Close menu</span>
                            <X className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="flex flex-col gap-y-4">
                          {menuItems.map((item) => (
                            <Link
                              key={item.name}
                              to={item.to}
                              className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-slate-700"
                            >
                              <span className="ml-3 text-base font-medium text-lime-600">
                                {item.name}
                              </span>
                            </Link>
                          ))}
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </>
      );
}

export default Header
