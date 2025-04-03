import { FiSearch, FiTruck, FiShoppingCart } from 'react-icons/fi';

const Navbar = ({ cartItems }) => {
  return (
    <nav className="bg-gray-600 text-white shadow-md">
      <div className="container mx-auto px-6 py-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          {/* Logo and Search */}
          <div className="flex items-center mb-4 md:mb-0">
            <div className="text-3xl font-bold mr-8">Book4All</div>
            <div className="hidden md:flex items-center bg-white rounded-md overflow-hidden shadow-md">
              <input 
                type="text" 
                placeholder="Search for books..." 
                className="px-6 py-2 w-64 text-gray-800 focus:outline-none"
              />
              <button className="text-gray-800 px-4 py-2 hover:bg-gray-200">
                <FiSearch className="text-lg" />
              </button>
            </div>
          </div>

          {/* Track Order and Cart */}
          <div className="flex items-center space-x-6">
            <button className="flex items-center hover:text-yellow-400">
              <FiTruck className="mr-1" />
              <span className="hidden md:inline">Track Order</span>
            </button>
            <button className="flex items-center relative hover:text-yellow-400">
              <FiShoppingCart className="mr-1" />
              <span className="hidden md:inline">Cart</span>
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-3 md:hidden">
          <div className="flex items-center bg-white rounded-md overflow-hidden shadow-md">
            <input 
              type="text" 
              placeholder="Search for books..." 
              className="px-4 py-2 w-full text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-400 text-gray-800 px-4 py-2 hover:bg-yellow-500">
              <FiSearch className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
