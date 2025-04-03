import React from 'react';
import { FiPackage, FiCheckCircle, FiClock, FiUser, FiMapPin, FiMessageSquare, FiChevronRight, FiStar } from 'react-icons/fi';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';

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
    <div className="min-h-screen bg-[var(--light-color)] justify-center items-center">
      <Navbar />
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-[var(--dark-color)] flex items-center">
            <FiPackage className="mr-3 text-[var(--primary-color)]" />
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
                <h2 className="text-lg font-semibold text-[var(--dark-color)] mb-4">Requested Book</h2>
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

              
                
              </div>
            </div>

           
          </div>

          {/* Tracking Section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-[var(--dark-color)] mb-1">Request Status</h2>
                <div className="flex items-center">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                    request.status === "Received" 
                      ? "bg-green-100 text-green-800" 
                      : request.status === "In Transit" 
                        ? "bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)]" 
                        : "bg-[var(--tertiary-color)] bg-opacity-10 text-[var(--dark-color)]"
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
                            ? "bg-[var(--primary-color)] bg-opacity-20 text-[var(--primary-color)] border-2 border-[var(--primary-color)] border-opacity-30" 
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
                            step.status === "current" ? "text-[var(--primary-color)]" : "text-[var(--dark-color)]"
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
                <h2 className="text-xl font-bold text-[var(--dark-color)] mb-4">Pickup Information</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-[var(--secondary-color)] bg-opacity-10 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FiMapPin className="text-[var(--secondary-color)] mr-2" />
                      <h3 className="font-medium text-[var(--dark-color)]">Location</h3>
                    </div>
                    <p className="text-[var(--dark-color)]">{request.meetingDetails.location}</p>
                  </div>
                  <div className="bg-[var(--tertiary-color)] bg-opacity-10 rounded-lg p-4">
                    <div className="flex items-center mb-2">
                      <FiClock className="text-[var(--tertiary-color)] mr-2" />
                      <h3 className="font-medium text-[var(--dark-color)]">Time</h3>
                    </div>
                    <p className="text-[var(--dark-color)]">{request.meetingDetails.time}</p>
                  </div>
                </div>
                <div className="mt-4 bg-[var(--light-color)] rounded-lg p-4">
                  <h3 className="font-medium text-[var(--dark-color)] mb-2">Additional Notes</h3>
                  <p className="text-[var(--dark-color)]">{request.meetingDetails.notes}</p>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mt-6 bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-100">
                <h2 className="text-xl font-bold text-[var(--dark-color)]">Recent Activity</h2>
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
                    <div className="bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] p-2 rounded-full mr-4">
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
        
    
      </main>
      <Footer/>
      </div>
  );
};

export default BookTrackingPage;