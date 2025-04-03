import React, { useState } from 'react';
import { FaBook, FaSearch, FaLanguage, FaHashtag, FaListAlt, FaCheckCircle } from 'react-icons/fa';

const RequestPage = () => {
  const [formData, setFormData] = useState({
    bookTitle: '',
    isbn: '',
    category: '',
    gradeLevel: '',
    language: '',
    quantity: 1,
    urgency: 'normal',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [matchingBooks, setMatchingBooks] = useState([]);

  const categories = [
    'Textbooks', 'Storybooks', 'Reference', 
    'Science & Technology', 'Arts & Literature',
    'Competitive Exams', 'Others'
  ];

  const gradeLevels = [
    'Pre-School', 'Primary (1-5)', 
    'Middle School (6-8)', 'High School (9-12)',
    'College/University', 'Adult Education'
  ];

  const languages = [
    'English', 'Hindi', 'Regional Languages',
    'Bilingual', 'Others'
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Simulate matching books when ISBN or title is entered
    if (name === 'isbn' || name === 'bookTitle') {
      findMatchingBooks();
    }
  };

  const findMatchingBooks = () => {
    // Simulated matching books - in real app this would be an API call
    if (formData.bookTitle || formData.isbn) {
      setMatchingBooks([
        {
          id: 1,
          title: 'Mathematics for Grade 5',
          author: 'NCERT',
          distance: '2.5 km away',
          matchScore: '85% match'
        },
        {
          id: 2,
          title: 'Basic Science Concepts',
          author: 'State Board',
          distance: '5 km away',
          matchScore: '72% match'
        }
      ]);
    } else {
      setMatchingBooks([]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Here you would typically send data to your backend
  };

  if (submitted) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-6 text-center">
        <FaCheckCircle className="text-6xl text-green-500 mx-auto mb-6" />
        <h2 className="text-3xl font-bold text-[var(--dark-color)] mb-4">
          Request Submitted Successfully!
        </h2>
        <p className="text-lg text-[#666] mb-8">
          We've received your book request. Our team will contact you shortly with available matches.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="bg-[var(--primary-color)] hover:bg-[#ff5252] text-white px-6 py-3 rounded-md font-medium transition duration-300"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[var(--dark-color)] mb-4 flex items-center justify-center">
          <FaBook className="mr-3 text-[var(--primary-color)]" />
          Request Books
        </h1>
        <p className="text-lg text-[#666] max-w-2xl mx-auto">
          Tell us about your needs and we'll match you with available books from our donors.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Request Form */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-[var(--dark-color)] mb-6 flex items-center">
            <FaListAlt className="mr-2 text-[var(--secondary-color)]" />
            Book Requirements
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#666] mb-2">Book Title/Subject *</label>
                <input
                  type="text"
                  name="bookTitle"
                  value={formData.bookTitle}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                />
              </div>
              
              <div>
                <label className="block text-[#666] mb-2 flex items-center">
                  <FaHashtag className="mr-2" /> ISBN (if known)
                </label>
                <input
                  type="text"
                  name="isbn"
                  value={formData.isbn}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                />
              </div>
              
              <div>
                <label className="block text-[#666] mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[#666] mb-2">Grade Level *</label>
                <select
                  name="gradeLevel"
                  value={formData.gradeLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                >
                  <option value="">Select Grade Level</option>
                  {gradeLevels.map((grade) => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[#666] mb-2 flex items-center">
                  <FaLanguage className="mr-2" /> Language Preference *
                </label>
                <select
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                >
                  <option value="">Select Language</option>
                  {languages.map((lang) => (
                    <option key={lang} value={lang}>{lang}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-[#666] mb-2">Quantity Needed *</label>
                <input
                  type="number"
                  name="quantity"
                  min="1"
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-[#666] mb-2">Urgency</label>
              <div className="flex space-x-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="urgency"
                    value="low"
                    checked={formData.urgency === 'low'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Low (No immediate need)
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="urgency"
                    value="normal"
                    checked={formData.urgency === 'normal'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  Normal
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="urgency"
                    value="high"
                    checked={formData.urgency === 'high'}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  High (Urgently needed)
                </label>
              </div>
            </div>
            
            <div>
              <label className="block text-[#666] mb-2">Additional Notes</label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-[#ff5252] text-white px-6 py-3 rounded-md font-medium transition duration-300 w-full md:w-auto"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Matching Books Section */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-[var(--dark-color)] mb-6 flex items-center">
            <FaSearch className="mr-2 text-[var(--secondary-color)]" />
            Matching Books Nearby
          </h2>
          
          {matchingBooks.length > 0 ? (
            <div className="space-y-4">
              {matchingBooks.map((book) => (
                <div key={book.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition duration-200">
                  <h3 className="font-semibold text-[var(--dark-color)]">{book.title}</h3>
                  <p className="text-sm text-[#666]">by {book.author}</p>
                  <div className="flex justify-between mt-2 text-sm">
                    <span className="text-[var(--secondary-color)]">{book.distance}</span>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                      {book.matchScore}
                    </span>
                  </div>
                  <button className="mt-3 text-sm text-[var(--primary-color)] hover:underline">
                    View Details
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <FaSearch className="text-4xl text-gray-300 mx-auto mb-4" />
              <p className="text-[#666]">
                {formData.bookTitle || formData.isbn 
                  ? "No matching books found yet" 
                  : "Enter book details to see matching books nearby"}
              </p>
            </div>
          )}
          
          <div className="mt-8 bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold text-[var(--dark-color)] mb-2">How Matching Works</h3>
            <ul className="text-sm text-[#666] space-y-2">
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                We search our donor database in your area
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                Match by title, subject, grade level and language
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                You'll be notified when matches are found
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;