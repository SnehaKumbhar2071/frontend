import { FiSearch, FiTruck, FiShoppingCart, FiUser, FiLogOut, FiHeart, FiBell } from 'react-icons/fi';
import { IoIosArrowDown } from 'react-icons/io';

const Navbar = ({ userType, cartItems, notificationCount = 3 }) => {
  return (
    <nav className="bg-[#f89494] shadow-lg">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          {/* Logo, Search and Navigation Links */}
          <div className="flex items-center mb-4 md:mb-0 space-x-8">
            <div className="text-3xl font-bold flex items-center">
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" class="text-2xl text-[var(--primary-color)] mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"></path></svg>
              <div className='font-bold'>BookBridge</div>
            </div>
            <div className="hidden md:flex items-center bg-white rounded-md overflow-hidden shadow-md">
              <input 
                type="text" 
                placeholder="Search for books..." 
                className="px-6 py-2 w-64 text-gray-800 focus:outline-none"
              />
              <button className="text-black px-4 py-2">
                <FiSearch className="text-lg" />
              </button>
            </div>
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              {userType === 'ngo' && (
                <a href="#" className="hover:text-[#000000] transition flex items-center">
                  <FiHeart className="mr-1" />
                  <span>Impact</span>
                </a>
              )}
              {userType === 'school' && (
                <a href="#" className="hover:text-[#000000] transition flex items-center">
                  <FiTruck className="mr-1" />
                  <span>Track Order</span>
                </a>
              )}
              {userType !== 'school' && (
                <a href="#" className="hover:text-[#000000] transition flex items-center">
                  <span>Donate</span>
                </a>
              )}
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            <div className="relative">
              <button className="hover:text-[#000000] transition relative">
                <FiBell className="text-xl" />
                {notificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#ff5252] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {notificationCount}
                  </span>
                )}
              </button>
            </div>
            {userType === 'school' && (
              <div className="relative">
                <button className="hover:text-[#000000] transition flex items-center relative">
                  <FiShoppingCart className="text-xl" />
                  {cartItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-[#000000] text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItems}
                    </span>
                  )}
                </button>
              </div>
            )}
            <div className="relative group">
              <button className="flex items-center hover:text-[#000000] transition">
                <div className="w-8 h-8 rounded-full bg-[#adfffa] flex items-center justify-center mr-1">
                  <FiUser className="text-white" />
                </div>
                <span className="hidden md:inline">Profile</span>
                <IoIosArrowDown className="ml-1 transition-transform group-hover:rotate-180" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#f7f7f7]">My Profile</a>
                {userType === 'donor' && (
                  <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#f7f7f7]">My Donations</a>
                )}
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-[#f7f7f7]">Settings</a>
                <div className="border-t border-gray-200 my-1"></div>
                <a href="#" className="block px-4 py-2 text-red-600 hover:bg-red-50 flex items-center">
                  <FiLogOut className="mr-2" />Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
