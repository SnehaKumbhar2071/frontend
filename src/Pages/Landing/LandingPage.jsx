import React, { useState, useEffect } from 'react';
import { FaBook, FaHandHoldingHeart, FaSearch, FaUser, FaSignInAlt, FaQuestionCircle } from 'react-icons/fa';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

const LandingPage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Teacher, Delhi Public School",
      content: "BookBridge has transformed our school library. The donated books have opened new worlds for our students who couldn't afford them before.",
      avatar: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
      id: 2,
      name: "Rahul Mehta",
      role: "Donor, Mumbai",
      content: "I love how easy it was to donate my old books knowing they'll go to someone who truly needs them. The pickup service was very convenient.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "Student Beneficiary",
      content: "Because of BookBridge, I got my first storybooks. Now I read every day and want to become a writer when I grow up.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    }
  ];

  const impactStats = [
    { number: "74,000+", label: "Books Distributed", image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { number: "80+", label: "Schools", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { number: "14,000+", label: "Individuals Impacted", image: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    { number: "7", label: "States", image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="font-sans">
      {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <div className="flex items-center">
          <FaBook className="text-2xl text-[var(--primary-color)] mr-2" />
          <span className="text-xl font-bold text-[var(--dark-color)]">BookBridge</span>
        </div>
        
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[var(--dark-color)] focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        <div className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="text-[var(--dark-color)] hover:text-[var(--primary-color)] transition duration-300">About</a>
          <a href="#impact" className="text-[var(--dark-color)] hover:text-[var(--primary-color)] transition duration-300">Impact</a>
          <a href="#how-it-works" className="text-[var(--dark-color)] hover:text-[var(--primary-color)] transition duration-300">How It Works</a>
          <a href="#testimonials" className="text-[var(--dark-color)] hover:text-[var(--primary-color)] transition duration-300">Testimonials</a>
          <a href="#contact" className="text-[var(--dark-color)] hover:text-[var(--primary-color)] transition duration-300">Contact</a>
          <div className="flex space-x-4 ml-4">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md transition duration-300 flex items-center">
              <FaUser className="mr-2" /> Login
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md transition duration-300 flex items-center">
              <FaSignInAlt className="mr-2" /> Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6">
          <a href="#about" className="block py-2 text-[var(--dark-color)] hover:text-[var(--primary-color)]">About</a>
          <a href="#impact" className="block py-2 text-[var(--dark-color)] hover:text-[var(--primary-color)]">Impact</a>
          <a href="#how-it-works" className="block py-2 text-[var(--dark-color)] hover:text-[var(--primary-color)]">How It Works</a>
          <a href="#testimonials" className="block py-2 text-[var(--dark-color)] hover:text-[var(--primary-color)]">Testimonials</a>
          <a href="#contact" className="block py-2 text-[var(--dark-color)] hover:text-[var(--primary-color)]">Contact</a>
          <div className="flex space-x-4 mt-4">
            <button className="bg-[var(--secondary-color)] text-white px-4 py-2 rounded-md transition duration-300 flex items-center w-full justify-center">
              <FaUser className="mr-2" /> Login
            </button>
            <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-md transition duration-300 flex items-center w-full justify-center">
              <FaSignInAlt className="mr-2" /> Sign Up
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-[var(--light-color)] to-[rgba(255,159,28,0.1)] py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--dark-color)] mb-6">
              Give Books a <span className="text-[var(--primary-color)]">Second Life</span>
            </h1>
            <p className="text-lg text-[#666] mb-8">
              Connect your pre-loved books with those who need them most. Together we can build a culture of reading and sharing knowledge.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              
            <div className="flex justify-center items-center w-[70vh]">
  <button className="border-2 border-[var(--secondary-color)] text-[var(--secondary-color)] hover:bg-[rgba(78,205,196,0.1)] px-6 py-3 rounded-md font-medium transition duration-300">
    Get Started
  </button>
</div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="bg-white p-4 rounded-lg shadow-xl w-full max-w-md overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
                alt="Books on shelf" 
                className="w-full h-auto rounded-md"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "https://via.placeholder.com/500x300?text=Books+Image";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--dark-color)] mb-12">
            Why <span className="text-[var(--primary-color)]">BookBridge</span> Matters
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[rgba(255,107,107,0.1)] p-6 rounded-lg text-center">
              <div className="bg-[rgba(255,107,107,0.2)] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaBook className="text-[var(--primary-color)] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Books Find New Homes</h3>
              <p className="text-[#666]">
                Your pre-loved books get a second life instead of collecting dust or ending up in landfills.
              </p>
            </div>
            <div className="bg-[rgba(78,205,196,0.1)] p-6 rounded-lg text-center">
              <div className="bg-[rgba(78,205,196,0.2)] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaHandHoldingHeart className="text-[var(--secondary-color)] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Empower Through Reading</h3>
              <p className="text-[#666]">
                Help bridge the education gap by providing access to books for underprivileged readers.
              </p>
            </div>
            <div className="bg-[rgba(255,230,109,0.1)] p-6 rounded-lg text-center">
              <div className="bg-[rgba(255,230,109,0.2)] w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <FaSearch className="text-[var(--tertiary-color)] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Easy Donation Process</h3>
              <p className="text-[#666]">
                Simple steps to donate - we even offer pickup services in many locations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-16 px-6 bg-[var(--light-color)]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--dark-color)] mb-4">
            Our <span className="text-[var(--primary-color)]">Impact</span>
          </h2>
          <p className="text-center text-[#666] max-w-2xl mx-auto mb-12">
            Together, we're making a difference in communities across the country.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={stat.image} 
                    alt={stat.label} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/500x300?text=Impact+Image";
                    }}
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-3xl font-bold text-[var(--primary-color)] mb-2">{stat.number}</h3>
                  <p className="text-lg text-[var(--dark-color)]">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* How It Works Section - Updated 4 Steps with Icons */}
<section id="how-it-works" className="py-16 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center text-[var(--dark-color)] mb-4">
      How It <span className="text-[var(--primary-color)]">Works</span>
    </h2>
    <p className="text-center text-[#666] max-w-2xl mx-auto mb-12">
      Donating books has never been easier. Follow these simple steps to make an impact.
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Step 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[var(--primary-color)] text-center">
        <div className="bg-[var(--tertiary-color)] text-[var(--dark-color)] w-12 h-12 mx-auto rounded-full flex items-center justify-center text-xl font-bold mb-4">
          <FaBook className="text-xl" />
        </div>
        <h3 className="text-xl font-semibold mb-3">List Your Books</h3>
        <p className="text-[#666]">
          Upload details and photos of books you want to donate
        </p>
      </div>
      
      {/* Step 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[var(--secondary-color)] text-center">
        <div className="bg-[var(--tertiary-color)] text-[var(--dark-color)] w-12 h-12 mx-auto rounded-full flex items-center justify-center text-xl font-bold mb-4">
          <FaSearch className="text-xl" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Match with Schools</h3>
        <p className="text-[#666]">
          We find nearby schools in need of your books
        </p>
      </div>
      
      {/* Step 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[var(--tertiary-color)] text-center">
        <div className="bg-[var(--tertiary-color)] text-[var(--dark-color)] w-12 h-12 mx-auto rounded-full flex items-center justify-center text-xl font-bold mb-4">
          <FaHandHoldingHeart className="text-xl" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Deliver and Confirm</h3>
        <p className="text-[#666]">
          Track delivery and get proof of donation
        </p>
      </div>
      
      {/* Step 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-[var(--accent-color)] text-center">
        <div className="bg-[var(--tertiary-color)] text-[var(--dark-color)] w-12 h-12 mx-auto rounded-full flex items-center justify-center text-xl font-bold mb-4">
          <FaQuestionCircle className="text-xl" />
        </div>
        <h3 className="text-xl font-semibold mb-3">Earn Appreciation</h3>
        <p className="text-[#666]">
          Receive a certificate for your contribution
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section with Avatars */}
      <section id="testimonials" className="py-16 px-6 bg-[#f0f8ff]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--dark-color)] mb-4">
            What People <span className="text-[var(--primary-color)]">Say</span>
          </h2>
          <p className="text-center text-[#666] mb-12">
            Hear from our donors and beneficiaries about their experiences.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg p-8 shadow-md">
                <div className="flex flex-col items-center text-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mb-4 object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/100?text=Avatar";
                    }}
                  />
                  <p className="text-[#666] italic text-lg mb-6">"{testimonial.content}"</p>
                  <h4 className="font-bold text-[var(--dark-color)]">{testimonial.name}</h4>
                  <p className="text-[var(--secondary-color)]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[var(--dark-color)] mb-4">
            Get In <span className="text-[var(--primary-color)]">Touch</span>
          </h2>
          <p className="text-center text-[#666] max-w-2xl mx-auto mb-12">
            Have questions or want to partner with us? We'd love to hear from you.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/2 bg-[var(--light-color)] rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-[var(--dark-color)] mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[var(--primary-color)] text-white p-2 rounded-full mr-4">
                    <MdEmail className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--dark-color)]">Email</h4>
                    <p className="text-[#666]">contact@bookbridge.org</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--secondary-color)] text-white p-2 rounded-full mr-4">
                    <MdPhone className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--dark-color)]">Phone</h4>
                    <p className="text-[#666]">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-[var(--tertiary-color)] text-[var(--dark-color)] p-2 rounded-full mr-4">
                    <MdLocationOn className="text-xl" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--dark-color)]">Address</h4>
                    <p className="text-[#666]">123 Book Street, Knowledge City, India - 110001</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 bg-[var(--light-color)] rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-[var(--dark-color)] mb-6">Send Us a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-[#666] mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-[#666] mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-[#666] mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="bg-[#ff5252] text-white px-6 py-3 rounded-md font-medium transition duration-300 w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-[var(--primary-color)] to-[var(--accent-color)] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">
            Join thousands of book lovers who are sharing knowledge and changing lives.
          </p>
          <button className="bg-white hover:bg-[var(--light-color)] text-[var(--primary-color)] px-8 py-3 rounded-md font-medium text-lg transition duration-300 shadow-lg">
            Start Donating Today
          </button>
        </div>
      </section>

      {/* Footer with Updated Links */}
      <footer className="bg-[var(--dark-color)] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <FaBook className="text-2xl text-[var(--primary-color)] mr-2" />
              <span className="text-xl font-bold">BookBridge</span>
            </div>
            <p className="text-[#aaa]">
              Connecting books with readers who need them most.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-[#aaa] hover:text-white transition duration-300">Home</a></li>
              <li><a href="#about" className="text-[#aaa] hover:text-white transition duration-300">About</a></li>
              <li><a href="#impact" className="text-[#aaa] hover:text-white transition duration-300">Impact</a></li>
              <li><a href="#how-it-works" className="text-[#aaa] hover:text-white transition duration-300">How It Works</a></li>
              <li><a href="#testimonials" className="text-[#aaa] hover:text-white transition duration-300">Testimonials</a></li>
              <li><a href="#contact" className="text-[#aaa] hover:text-white transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#aaa] hover:text-white transition duration-300">Terms and Conditions</a></li>
              <li><a href="#" className="text-[#aaa] hover:text-white transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-[#aaa] hover:text-white transition duration-300">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-[#aaa] hover:text-white text-xl transition duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-[#aaa] hover:text-white text-xl transition duration-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-[#aaa] hover:text-white text-xl transition duration-300">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-[#aaa] hover:text-white text-xl transition duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-[#444] mt-8 pt-8 text-center text-[#aaa]">
          <p>&copy; {new Date().getFullYear()} BookBridge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;