import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
<footer style={{ backgroundColor: '#2d3436' }} className="text-white bg-[#f89494] pt-6 pb-3">
<div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-[var(--tertiary-color)]">BookShare</h3>
            <p className="mb-4">
              Connecting students with educational resources by facilitating book donations 
              and exchanges within our school community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-[var(--primary-color)] transition">
                <FiFacebook className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-[var(--primary-color)] transition">
                <FiTwitter className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-[var(--primary-color)] transition">
                <FiInstagram className="text-xl" />
              </a>
              <a href="#" className="text-white hover:text-[var(--primary-color)] transition">
                <FiLinkedin className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--tertiary-color)]">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-[var(--primary-color)] transition">Home</a></li>
              <li><a href="#" className="hover:text-[var(--primary-color)] transition">Donate Books</a></li>
              <li><a href="#" className="hover:text-[var(--primary-color)] transition">Request Books</a></li>
              <li><a href="#" className="hover:text-[var(--primary-color)] transition">Track Request</a></li>
              <li><a href="#" className="hover:text-[var(--primary-color)] transition">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[var(--tertiary-color)]">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FiMail className="mt-1 mr-3 text-[var(--primary-color)]" />
                <span>bookshare@school.edu</span>
              </li>
              <li className="flex items-start">
                <FiPhone className="mt-1 mr-3 text-[var(--primary-color)]" />
                <span>(123) 456-7890</span>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BookShare. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-sm text-gray-400 hover:text-[var(--primary-color)] transition">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[var(--primary-color)] transition">Terms of Service</a>
            <a href="#" className="text-sm text-gray-400 hover:text-[var(--primary-color)] transition">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;