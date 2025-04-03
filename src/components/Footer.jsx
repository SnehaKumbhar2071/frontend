const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-lg mb-4">About</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="hover:text-gray-300">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Help</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Payments</a></li>
                <li><a href="#" className="hover:text-gray-300">Shipping</a></li>
                <li><a href="#" className="hover:text-gray-300">Returns</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Policy</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Return Policy</a></li>
                <li><a href="#" className="hover:text-gray-300">Terms Of Use</a></li>
                <li><a href="#" className="hover:text-gray-300">Security</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-4">Social</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
                <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
                <li><a href="#" className="hover:text-gray-300">YouTube</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
            <p>© 2023 Flipkart Books Clone. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer