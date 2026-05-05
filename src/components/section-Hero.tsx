import { menuLists } from '../types/data'
import { IoMenu, IoSearch } from 'react-icons/io5'
import { FaRegHeart } from 'react-icons/fa'
import { TbShoppingBag } from 'react-icons/tb'
import { Link } from 'react-router-dom'

export default function SectionHero() {
  return (
    <div>
      <header className="md:px-12 py-4 flex justify-between items-center ">
              <img className="w-32 " src="images/logo.png" alt="Logo" />
              <nav>
                <ul className="flex space-x-4">
                  {menuLists.map((menu, index) => (
                    <li key={index}>
                      <Link
                        to={menu.url}
                        className="hover:text-gray-500 cursor-pointer hidden md:block"
                      >
                        {" "}
                        {menu.name}{" "}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div
                  id="mobile-menu"
                  className="md:hidden hover:text-gray-500 cursor-pointer text-6xl "
                >
                  <IoMenu />
                </div>
              </nav>
              <div className="hidden  md:flex items-center space-x-8">
                <div className=" flex space-x-4 text-2xl">
                  <IoSearch />
                  <FaRegHeart />
                  <TbShoppingBag />
                </div>
                <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-600">
                  Login
                </button>
              </div>
            </header>
    </div>
  )
}
