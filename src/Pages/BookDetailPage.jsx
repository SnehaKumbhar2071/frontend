import React from 'react';
import { FiBook, FiUser, FiHeart, FiShare2, FiArrowLeft, FiCheck, FiStar } from 'react-icons/fi';

const BookDetailPage = () => {
  const book = {
    id: 1,
    title: "Advanced Mathematics for Grade 12",
    author: "Dr. Robert Langdon",
    description: "Comprehensive mathematics textbook covering all topics required for Grade 12 curriculum including calculus, algebra, and statistics. Perfect condition with no markings.",
    condition: "Like New",
    donor: "Sarah Johnson (Alumni)",
    donorRating: 4.8,
    donorDonations: 12,
    image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY425_.jpg",
    category: "Textbook",
    gradeLevel: "Grade 12",
    availability: "Available",
    datePosted: "May 15, 2023",
    requestCount: 3
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button className="flex items-center text-blue-600">
            <FiArrowLeft className="mr-2" />
            Back to Books
          </button>
          <h1 className="text-xl font-bold text-gray-800">Book Details</h1>
          <div className="w-8"></div> {/* Spacer for balance */}
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Book Image Section */}
          <div className="lg:w-2/5">
            <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex justify-center">
              <img 
                src={book.image} 
                alt={book.title} 
                className="h-96 object-contain shadow-lg border border-gray-100 transform hover:scale-105 transition duration-300"
              />
            </div>
            
            {/* Action Buttons */}
            <div className="flex space-x-4 mt-6">
              <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium flex items-center justify-center transition">
                <FiHeart className="mr-2" />
                Save for Later
              </button>
              <button className="flex-1 bg-white border border-blue-600 text-blue-600 py-3 rounded-lg font-medium flex items-center justify-center hover:bg-blue-50 transition">
                <FiShare2 className="mr-2" />
                Share
              </button>
            </div>
          </div>

          {/* Book Details Section */}
          <div className="lg:w-3/5">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Book Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {book.category}
                    </span>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">{book.title}</h1>
                    <p className="text-xl text-gray-600 mb-4">by {book.author}</p>
                  </div>
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    {book.availability}
                  </div>
                </div>

                <div className="flex items-center mt-4">
                  <div className="flex mr-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar 
                        key={i} 
                        className={`${i < Math.floor(book.donorRating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">{book.requestCount} requests</span>
                </div>
              </div>

              {/* Book Info */}
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Details</h2>
                <p className="text-gray-700 mb-6">{book.description}</p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Condition</h3>
                    <p className="font-medium">{book.condition}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Grade Level</h3>
                    <p className="font-medium">{book.gradeLevel}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Posted</h3>
                    <p className="font-medium">{book.datePosted}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Donor Rating</h3>
                    <p className="font-medium">{book.donorRating}/5 ({book.donorDonations} donations)</p>
                  </div>
                </div>
              </div>

              {/* Donor Info */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">About the Donor</h2>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <FiUser className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium">{book.donor}</h3>
                    <p className="text-gray-600">Verified Donor</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="mb-4 md:mb-0">
                  <h3 className="text-xl font-bold mb-2">Interested in this book?</h3>
                  <p>Request it now and help continue the cycle of sharing!</p>
                </div>
                <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-bold shadow-md transition whitespace-nowrap">
                  Request This Book
                </button>
              </div>
            </div>

            {/* Safety Tips */}
            <div className="mt-6 bg-yellow-50 border border-yellow-100 rounded-xl p-6">
              <h3 className="font-bold text-yellow-800 mb-2 flex items-center">
                <FiCheck className="mr-2 text-yellow-600" />
                Safe Sharing Tips
              </h3>
              <ul className="text-yellow-700 text-sm list-disc pl-5 space-y-1">
                <li>Always meet in public school areas during school hours</li>
                <li>Verify book condition before accepting</li>
                <li>Report any issues to school administration</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookDetailPage;