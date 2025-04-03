import React from 'react';
import { FiPackage, FiCheckCircle, FiClock, FiUser, FiMapPin, FiMessageSquare, FiChevronRight , FiStar } from 'react-icons/fi';
import Navbar from "../components/Navbar"
const BookTrackingPage = () => {
  const request = {
    bookTitle: "Advanced Mathematics for Grade 12",
    bookImage: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY425_.jpg",
    donorName: "Sarah Johnson",
    donorAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
    requestDate: "June 15, 2023",
    status: "In Transit",
    statusSteps: [
      { id: 1, name: "Requested", status: "complete", date: "Jun 15" },
      { id: 2, name: "Approved", status: "complete", date: "Jun 16" },
      { id: 3, name: "Preparing", status: "complete", date: "Jun 17" },
      { id: 4, name: "In Transit", status: "current", date: "Jun 18" },
      { id: 5, name: "Received", status: "pending", date: "" }
    ],
    meetingDetails: {
      location: "School Library - Shelf B12",
      time: "Tomorrow, 3:00 PM",
      notes: "Book will be placed on the reserved shelf with your name"
    },
    estimatedDelivery: "June 19, 2023"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar/>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800 flex items-center">
            <FiPackage className="mr-3 text-blue-600" />
            Track Your Request
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Book Card */}
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Requested Book</h2>
                <div className="flex items-center">
                  <img 
                    src={request.bookImage} 
                    alt={request.bookTitle} 
                    className="w-16 h-20 object-cover rounded-md border mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{request.bookTitle}</h3>
                    <p className="text-sm text-gray-600">Requested on {request.requestDate}</p>
                  </div>
                </div>
              </div>

              {/* Donor Info */}
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">Donor Information</h2>
                <div className="flex items-center">
                  <img 
                    src={request.donorAvatar} 
                    alt={request.donorName} 
                    className="w-12 h-12 rounded-full border-2 border-blue-100 mr-4"
                  />
                  <div>
                    <h3 className="font-medium">{request.donorName}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <FiStar className="text-yellow-400 mr-1" />
                      4.8 (12 donations)
                    </div>
                  </div>
                </div>
                <button className="mt-4 w-full bg-blue-50 text-blue-600 py-2 rounded-lg font-medium flex items-center justify-center hover:bg-blue-100 transition">
                  <FiMessageSquare className="mr-2" />
                  Message Donor
                </button>
              </div>
            </div>

            {/* Help Card */}
            <div className="mt-6 bg-blue-50 border border-blue-100 rounded-xl p-6">
              <h3 className="font-bold text-blue-800 mb-2">Need Help?</h3>
              <p className="text-blue-700 text-sm mb-4">Contact the school library if you have questions about your request</p>
              <button className="text-blue-600 font-medium text-sm hover:underline">
                Contact Support <FiChevronRight className="inline ml-1" />
              </button>
            </div>
          </div>

          {/* Tracking Section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800 mb-1">Request Status</h2>
                <div className="flex items-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    request.status === "Received" 
                      ? "bg-green-100 text-green-800" 
                      : request.status === "In Transit" 
                        ? "bg-blue-100 text-blue-800" 
                        : "bg-yellow-100 text-yellow-800"
                  }`}>
                    {request.status === "In Transit" && <FiPackage className="mr-1" />}
                    {request.status === "Received" && <FiCheckCircle className="mr-1" />}
                    {request.status === "Pending" && <FiClock className="mr-1" />}
                    {request.status}
                  </span>
                  <span className="ml-4 text-sm text-gray-600">
                    Estimated: {request.estimatedDelivery}
                  </span>
                </div>
              </div>

              {/* Status Timeline */}
              <div className="p-6 border-b border-gray-100">
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>
                  
                  {request.statusSteps.map((step) => (
                    <div key={step.id} className="relative pl-10 pb-6 last:pb-0">
                      <div className={`absolute left-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        step.status === "complete" 
                          ? "bg-green-100 text-green-600" 
                          : step.status === "current" 
                            ? "bg-blue-100 text-blue-600 border-2 border-blue-300" 
                            : "bg-gray-100 text-gray-400"
                      }`}>
                        {step.status === "complete" ? (
                          <FiCheckCircle className="text-lg" />
                        ) : (
                          <div className="w-3 h-3 rounded-full bg-current"></div>
                        )}
                      </div>
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className={`font-medium ${
                            step.status === "current" ? "text-blue-600" : "text-gray-700"
                          }`}>
                            {step.name}
                          </h3>
                          {step.date && (
                            <p className="text-sm text-gray-500">Completed on {step.date}</p>
                          )}
                        </div>
                        {step.status === "complete" && (
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            Completed
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Meeting Details */}
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Pickup Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FiMapPin className="text-blue-600 mr-2" />
                      <h3 className="font-medium text-blue-800">Location</h3>
                    </div>
                    <p className="text-gray-700">{request.meetingDetails.location}</p>
                  </div>
                  <div className="bg-yellow-50 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FiClock className="text-yellow-600 mr-2" />
                      <h3 className="font-medium text-yellow-800">Time</h3>
                    </div>
                    <p className="text-gray-700">{request.meetingDetails.time}</p>
                  </div>
                </div>
                <div className="mt-4 bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-800 mb-2">Additional Notes</h3>
                  <p className="text-gray-700">{request.meetingDetails.notes}</p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold shadow-md transition flex-1">
                    Confirm Receipt
                  </button>
                  <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 py-3 px-6 rounded-lg font-medium shadow-sm transition flex-1">
                    Reschedule Pickup
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
              </div>
              <div className="divide-y divide-gray-100">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-green-100 text-green-600 p-2 rounded-full mr-4">
                      <FiCheckCircle />
                    </div>
                    <div>
                      <h3 className="font-medium">Request approved by donor</h3>
                      <p className="text-sm text-gray-600">June 16, 2023 at 10:30 AM</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 text-blue-600 p-2 rounded-full mr-4">
                      <FiPackage />
                    </div>
                    <div>
                      <h3 className="font-medium">Book prepared for pickup</h3>
                      <p className="text-sm text-gray-600">June 17, 2023 at 2:15 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookTrackingPage;