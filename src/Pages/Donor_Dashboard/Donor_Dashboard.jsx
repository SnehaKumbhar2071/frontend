import { useState } from 'react';
import { 
  FaBookOpen, FaPlusCircle, FaBook, FaTruck, 
  FaChartLine, FaUser, FaQuestionCircle, FaBell,
  FaChevronRight, FaSearch, FaMapMarkerAlt, 
  FaHeadset, FaEdit, FaSchool, FaMapMarkedAlt,
  FaAward, FaTachometerAlt, FaBookMedical,

} from 'react-icons/fa';



const Home = () => {
  const [timeRange, setTimeRange] = useState('Last 30 Days');
  const [trackingId, setTrackingId] = useState('');

  // Sample data
  const donations = [
    {
      id: 1,
      title: "Mathematics Grade 5",
      language: "English",
      condition: "Like New",
      quantity: 12,
      date: "Jun 15, 2023",
      status: "Delivered",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      title: "Science Encyclopedia",
      language: "English",
      condition: "Good",
      quantity: 5,
      date: "Jun 10, 2023",
      status: "In Transit",
      statusColor: "bg-purple-100 text-purple-800"
    },
    {
      id: 3,
      title: "History of India",
      language: "Hindi",
      condition: "Acceptable",
      quantity: 8,
      date: "Jun 5, 2023",
      status: "Pending Pickup",
      statusColor: "bg-red-100 text-red-800"
    }
  ];

  const deliveries = [
    {
      id: 1,
      trackingId: "B4A-2023-0567",
      description: "5 books to Sunshine Public School",
      status: "In Transit",
      statusColor: "bg-purple-100 text-purple-800",
      steps: [
        { title: "Pickup Scheduled", date: "Jun 10, 2023 · 10:30 AM", completed: true },
        { title: "Picked Up", date: "Jun 10, 2023 · 11:15 AM", note: "Driver: Rajesh Kumar · Contact: +91 98765 43210", completed: true },
        { title: "In Transit", date: "Estimated delivery: Jun 12, 2023", completed: false },
        { title: "Delivery", date: "Pending", completed: false }
      ],
      iconColor: "bg-secondary bg-opacity-10 text-secondary"
    },
    {
      id: 2,
      trackingId: "B4A-2023-0482",
      description: "12 books to Rainbow Elementary",
      status: "Pending Pickup",
      statusColor: "bg-red-100 text-red-800",
      steps: [
        { title: "Pickup Scheduled", date: "Jun 15, 2023 · 2:00 PM", note: "Volunteer will contact you before arrival", completed: true },
        { title: "Picked Up", date: "Pending", completed: false }
      ],
      iconColor: "bg-accent bg-opacity-10 text-accent"
    }
  ];

  const certificates = [
    {
      id: 1,
      title: "Certificate of Appreciation",
      donationId: "Donation #B4A-2023-0421",
      description: "For donating 15 books to Sunshine Public School",
      issued: "May 28, 2023",
      gradient: "bg-gradient-to-r from-primary to-accent"
    },
    {
      id: 2,
      title: "Certificate of Appreciation",
      donationId: "Donation #B4A-2023-0356",
      description: "For donating 8 books to Rainbow Elementary",
      issued: "Apr 15, 2023",
      gradient: "bg-gradient-to-r from-secondary to-primary"
    },
    {
      id: 3,
      title: "Certificate of Appreciation",
      donationId: "Donation #B4A-2023-0289",
      description: "For donating 12 books to Green Valley School",
      issued: "Mar 22, 2023",
      gradient: "bg-gradient-to-r from-accent to-secondary"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-light font-sans">
      {/* Header */}
      <header className="bg-dark text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FaBookOpen className="text-accent text-2xl" />
            <h1 className="text-xl font-bold">Books4All</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#" className="text-white hover:text-accent transition">Dashboard</a>
            <a href="#" className="text-white hover:text-accent transition">Donate</a>
            <a href="#" className="text-white hover:text-accent transition">Impact</a>
            <a href="#" className="text-white hover:text-accent transition">Profile</a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="bg-accent hover:bg-opacity-90 text-dark px-4 py-2 rounded-full font-medium transition">
              <FaBell className="mr-2 inline" />
            </button>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-dark font-bold">
              JD
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 bg-white rounded-lg shadow-md p-4 h-fit">
            <div className="mb-6">
              <h3 className="text-dark font-bold mb-2">Navigation</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="flex items-center space-x-2 text-dark hover:text-primary transition p-2 rounded bg-primary bg-opacity-10">
                    <FaTachometerAlt className="w-5" />
                    <span>Dashboard</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-dark hover:text-primary transition p-2 rounded">
                    <FaPlusCircle className="w-5" />
                    <span>New Donation</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-dark hover:text-primary transition p-2 rounded">
                    <FaBook className="w-5" />
                    <span>My Donations</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-dark hover:text-primary transition p-2 rounded">
                    <FaTruck className="w-5" />
                    <span>Delivery Tracking</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-dark hover:text-primary transition p-2 rounded">
                    <FaChartLine className="w-5" />
                    <span>Impact & Insights</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-dark hover:text-primary transition p-2 rounded">
                    <FaUser className="w-5" />
                    <span>Profile</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="flex items-center space-x-2 text-dark hover:text-primary transition p-2 rounded">
                    <FaQuestionCircle className="w-5" />
                    <span>Help & Support</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-secondary bg-opacity-10 p-4 rounded-lg">
              <h4 className="font-bold text-dark mb-2">Quick Actions</h4>
              <button className="w-full bg-primary hover:bg-primary-hover text-white py-2 rounded-lg mb-2 transition flex items-center justify-center space-x-2">
                <FaBookMedical />
                <span>Donate Books</span>
              </button>
              <button className="w-full bg-secondary hover:bg-secondary-hover text-dark py-2 rounded-lg transition flex items-center justify-center space-x-2">
               
                <span>View Certificates</span>
              </button>
            </div>
          </aside>

          {/* Main Dashboard Content */}
          <div className="flex-grow">
            {/* Dashboard Overview */}
            <section className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-dark">Dashboard Overview</h2>
                <div className="relative">
                  <select 
                    value={timeRange}
                    onChange={(e) => setTimeRange(e.target.value)}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option>Last 30 Days</option>
                    <option>Last 90 Days</option>
                    <option>This Year</option>
                    <option>All Time</option>
                  </select>
                  <FaChevronRight className="absolute right-3 top-3 text-gray-500 transform rotate-90" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {/* Total Donations Card */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600">Total Donations</p>
                      <h3 className="text-3xl font-bold text-dark">127</h3>
                    </div>
                    <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                      <FaBook className="text-primary text-xl" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2"><span className="text-green-500">↑ 12%</span> from last month</p>
                </div>
            
                {/* Pending Deliveries Card */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-accent">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600">Pending Deliveries</p>
                      <h3 className="text-3xl font-bold text-dark">8</h3>
                    </div>
                    <div className="bg-accent bg-opacity-10 p-3 rounded-full">
                      <FaTruck className="text-accent text-xl" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2"><span className="text-red-500">↓ 3%</span> from last month</p>
                </div>
                
                {/* Successful Donations Card */}
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-secondary">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-gray-600">Successful Donations</p>
                      <h3 className="text-3xl font-bold text-dark">119</h3>
                    </div>
                    <div className="bg-secondary bg-opacity-10 p-3 rounded-full">
                      <FaBook className="text-secondary text-xl" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-2"><span className="text-green-500">↑ 15%</span> from last month</p>
                </div>
              </div>
              
              {/* Charts Section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                {/* Donation Trends Chart */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-dark mb-4">Donation Trends</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Line chart showing donation trends over time</p>
                  </div>
                  <div className="flex justify-between mt-4 text-sm text-gray-600">
                    <span>Jan</span>
                    <span>Feb</span>
                    <span>Mar</span>
                    <span>Apr</span>
                    <span>May</span>
                    <span>Jun</span>
                  </div>
                </div>
                
                {/* Impact Metrics Chart */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-dark mb-4">Impact Metrics</h3>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Bar chart showing books donated, schools helped, regions covered</p>
                  </div>
                  <div className="flex justify-center mt-4 space-x-4">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Books</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-secondary rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Schools</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-accent rounded-full mr-2"></div>
                      <span className="text-sm text-gray-600">Regions</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* Recent Donations Section */}
            <section className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-dark">Recent Donations</h2>
                <button className="text-primary hover:text-primary-hover font-medium flex items-center">
                  <span>View All</span>
                  <FaChevronRight className="ml-1 text-sm" />
                </button>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Condition</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {donations.map((donation) => (
                        <tr key={donation.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-10 w-10 bg-primary bg-opacity-10 rounded-lg flex items-center justify-center">
                                <FaBook className="text-primary" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-dark">{donation.title}</div>
                                <div className="text-sm text-gray-500">{donation.language}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${donation.statusColor}`}>
                              {donation.condition}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.quantity}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{donation.date}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${donation.statusColor}`}>
                              {donation.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <a href="#" className="text-primary hover:text-primary-hover mr-3">View</a>
                            <a href="#" className="text-secondary hover:text-secondary-hover">Track</a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
            
            {/* Delivery Tracking Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Delivery Tracking</h2>
              
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-dark">Current Deliveries</h3>
                    <p className="text-gray-600">Track your book donations in real-time</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <div className="relative">
                      <input 
                        type="text" 
                        placeholder="Enter Tracking ID" 
                        value={trackingId}
                        onChange={(e) => setTrackingId(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <button className="absolute right-2 top-2 text-gray-500 hover:text-primary">
                        <FaSearch />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {deliveries.map((delivery) => (
                    <div key={delivery.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center space-x-3">
                          <div className={`${delivery.iconColor} p-2 rounded-lg`}>
                            <FaTruck />
                          </div>
                          <div>
                            <h4 className="font-medium text-dark">Tracking ID: {delivery.trackingId}</h4>
                            <p className="text-sm text-gray-500">{delivery.description}</p>
                          </div>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${delivery.statusColor}`}>
                          {delivery.status}
                        </span>
                      </div>
                      
                      <div className="pl-12">
                        <div className="relative">
                          <div className="border-l-2 border-secondary border-dashed h-16 absolute left-5 top-0"></div>
                          
                          <div className="space-y-4">
                            {delivery.steps.map((step, index) => (
                              <div key={index} className="flex items-start">
                                <div className="flex-shrink-0 mt-1">
                                  <div className={`h-3 w-3 rounded-full border-2 border-white shadow-md ${step.completed ? 'bg-secondary' : 'bg-gray-300'}`}></div>
                                </div>
                                <div className="ml-4">
                                  <p className={`text-sm font-medium ${step.completed ? 'text-dark' : 'text-gray-400'}`}>{step.title}</p>
                                  <p className={`text-sm ${step.completed ? 'text-gray-500' : 'text-gray-400'}`}>{step.date}</p>
                                  {step.note && (
                                    <p className="text-xs text-gray-400">{step.note}</p>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="mt-4 flex flex-wrap gap-3">
                          <button className="text-sm bg-secondary hover:bg-secondary-hover text-dark px-4 py-2 rounded-lg transition flex items-center space-x-2">
                            <FaMapMarkerAlt />
                            <span>View Route</span>
                          </button>
                          <button className="text-sm bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg transition flex items-center space-x-2">
                            <FaHeadset />
                            <span>Contact Support</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Impact & Insights Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Impact & Insights</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                {/* Impact Card 1 */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                  <div className="bg-primary bg-opacity-10 p-4 rounded-full mb-4">
                    <FaBookOpen className="text-primary text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">1,254</h3>
                  <p className="text-gray-600">Books Donated</p>
                  <p className="text-sm text-gray-500 mt-2">You've donated 127 books</p>
                </div>
                
                {/* Impact Card 2 */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                  <div className="bg-secondary bg-opacity-10 p-4 rounded-full mb-4">
                    <FaSchool className="text-secondary text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">28</h3>
                  <p className="text-gray-600">Schools Helped</p>
                  <p className="text-sm text-gray-500 mt-2">Your donations reached 5 schools</p>
                </div>
                
                {/* Impact Card 3 */}
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
                  <div className="bg-accent bg-opacity-10 p-4 rounded-full mb-4">
                    <FaMapMarkedAlt className="text-accent text-3xl" />
                  </div>
                  <h3 className="text-xl font-bold text-dark mb-2">7</h3>
                  <p className="text-gray-600">Regions Covered</p>
                  <p className="text-sm text-gray-500 mt-2">Your donations reached 3 regions</p>
                </div>
              </div>
              
              {/* Certificates Section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-lg font-semibold text-dark">Your Certificates</h3>
                    <p className="text-gray-600">Download your certificates of appreciation</p>
                  </div>
                  <button className="text-primary hover:text-primary-hover font-medium flex items-center">
                    <span>View All</span>
                    <FaChevronRight className="ml-1 text-sm" />
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {certificates.map((certificate) => (
                    <div key={certificate.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
                      <div className={`${certificate.gradient} h-2`}></div>
                      <div className="p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-medium text-dark">{certificate.title}</h4>
                            <p className="text-sm text-gray-500">{certificate.donationId}</p>
                          </div>
                          <div className="bg-tertiary bg-opacity-20 p-2 rounded-lg">
                            <FaAward className="text-tertiary" />
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mb-4">{certificate.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">Issued: {certificate.issued}</span>
                          <button className="text-sm bg-primary hover:bg-primary-hover text-white px-3 py-1 rounded-lg transition">
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;