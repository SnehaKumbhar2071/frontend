import { useState, useEffect } from 'react';
import { FiSearch, FiHeart, FiShoppingCart, FiFilter, FiStar, FiMapPin, FiBook, FiChevronDown } from 'react-icons/fi';
import tailwindcss from '@tailwindcss/vite';

const BookDonationStore = () => {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    genre: '',
    language: '',
    grade: '',
    condition: '',
    location: '',
  });
  const [sortOption, setSortOption] = useState('recentlyAdded');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    const mockBooks = [
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        language: "English",
        grade: "High School",
        condition: "Like New",
        location: "New York",
        status: "Available",
        cover: "https://m.media-amazon.com/images/I/71FTb9X6wsL.AC_UF1000,1000_QL80.jpg",
        description: "A story of wealth, love, and the American Dream in the 1920s.",
        donor: "Anonymous",
        delivery: "Pickup or Shipping",
        rating: 4.5,
        dateAdded: "2023-05-15"
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        language: "English",
        grade: "Middle School",
        condition: "Used",
        location: "Chicago",
        status: "Available",
        cover: "https://m.media-amazon.com/images/I/71FxgtFKcQL.AC_UF1000,1000_QL80.jpg",
        description: "A powerful story of racial injustice and moral growth.",
        donor: "Jane Doe",
        delivery: "Pickup only",
        rating: 4.8,
        dateAdded: "2023-06-20"
      },
      {
        id: 3,
        title: "Science Textbook",
        author: "Various",
        category: "Educational",
        language: "Hindi",
        grade: "Primary",
        condition: "New",
        location: "Mumbai",
        status: "Available",
        cover: "https://m.media-amazon.com/images/I/81HY+GeM3ZL.AC_UF1000,1000_QL80.jpg",
        description: "Basic science concepts for primary school students.",
        donor: "Public",
        delivery: "Shipping only",
        rating: 4.2,
        dateAdded: "2023-07-10"
      },
      {
        id: 4,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        language: "English",
        grade: "High School",
        condition: "Used",
        location: "Los Angeles",
        status: "Donated",
        cover: "https://m.media-amazon.com/images/I/71aFt4+OTOL.AC_UF1000,1000_QL80.jpg",
        description: "A mystical story of personal legend and destiny.",
        donor: "Anonymous",
        delivery: "Pickup or Shipping",
        rating: 4.7,
        dateAdded: "2023-04-05"
      },
      {
        id: 5,
        title: "Mathematics Workbook",
        author: "Various",
        category: "Educational",
        language: "Tamil",
        grade: "Middle School",
        condition: "Like New",
        location: "Chennai",
        status: "Available",
        cover: "https://m.media-amazon.com/images/I/81v4X+5tU5L.AC_UF1000,1000_QL80.jpg",
        description: "Practice problems for middle school mathematics.",
        donor: "Public",
        delivery: "Pickup only",
        rating: 4.0,
        dateAdded: "2023-08-12"
      },
      {
        id: 6,
        title: "The Secret Garden",
        author: "Frances Hodgson Burnett",
        category: "Fiction",
        language: "English",
        grade: "Primary",
        condition: "Used",
        location: "Boston",
        status: "Available",
        cover: "https://m.media-amazon.com/images/I/91mVejq9kVL.AC_UF1000,1000_QL80.jpg",
        description: "A classic children's story of magic and transformation.",
        donor: "John Smith",
        delivery: "Pickup or Shipping",
        rating: 4.6,
        dateAdded: "2023-09-01"
      }
    ];
    
    setBooks(mockBooks);
    setFilteredBooks(mockBooks);
  }, []);

  // Apply filters and search
  useEffect(() => {
    let result = [...books];
    
    // Apply search
    if (searchTerm) {
      result = result.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply filters
    if (filters.genre) {
      result = result.filter(book => book.category === filters.genre);
    }
    if (filters.language) {
      result = result.filter(book => book.language === filters.language);
    }
    if (filters.grade) {
      result = result.filter(book => book.grade === filters.grade);
    }
    if (filters.condition) {
      result = result.filter(book => book.condition === filters.condition);
    }
    if (filters.location) {
      result = result.filter(book => book.location === filters.location);
    }
    
    // Apply sorting
    switch(sortOption) {
      case 'recentlyAdded':
        result.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
        break;
      case 'mostNeeded':
        // In a real app, this would be based on demand data
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'bestCondition':
        const conditionOrder = { 'New': 3, 'Like New': 2, 'Used': 1 };
        result.sort((a, b) => conditionOrder[b.condition] - conditionOrder[a.condition]);
        break;
      case 'alphabetical':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      default:
        break;
    }
    
    setFilteredBooks(result);
  }, [searchTerm, filters, sortOption, books]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const resetFilters = () => {
    setFilters({
      genre: '',
      language: '',
      grade: '',
      condition: '',
      location: '',
    });
    setSearchTerm('');
  };

  const getStatusBadge = (status) => {
    return status === 'Available' 
      ? <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Available</span>
      : <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded-full">Donated</span>;
  };

  const getConditionBadge = (condition) => {
    const styles = {
      'New': 'bg-blue-100 text-blue-800',
      'Like New': 'bg-green-100 text-green-800',
      'Used': 'bg-yellow-100 text-yellow-800'
    };
    return <span className={`${styles[condition]} text-xs font-medium px-2.5 py-0.5 rounded-full`}/>><span/>
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <FiBook className="text-3xl mr-2" />
              <h1 className="text-2xl font-bold">BookShare</h1>
              <span className="ml-2 bg-white text-indigo-700 px-2 py-1 rounded-full text-xs font-semibold">Donate & Request</span>
            </div>
            
            <div className="relative w-full md:w-1/3">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-gray-800"
                placeholder="Search by title, author or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex items-center mt-4 md:mt-0">
              <button className="flex items-center text-white bg-indigo-600 hover:bg-indigo-800 px-4 py-2 rounded-full mr-3 transition duration-300">
                <FiHeart className="mr-1" /> Wishlist
              </button>
              <button className="flex items-center text-white bg-indigo-600 hover:bg-indigo-800 px-4 py-2 rounded-full transition duration-300">
                <FiShoppingCart className="mr-1" /> Donation Cart
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Filters and Sort */}
        <div className="mb-8 bg-white rounded-xl shadow-md p-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-2 md:mb-0">
              {filteredBooks.length} Books Available
            </h2>
            
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-4 py-2 rounded-full transition duration-300"
              >
                <FiFilter className="mr-1" /> Filters
              </button>
              
              <div className="relative">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded-full leading-tight focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="recentlyAdded">Recently Added</option>
                  <option value="mostNeeded">Most Needed</option>
                  <option value="bestCondition">Best Condition</option>
                  <option value="alphabetical">Alphabetical</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <FiChevronDown />
                </div>
              </div>
            </div>
          </div>
          
          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Genre</label>
                  <select
                    value={filters.genre}
                    onChange={(e) => handleFilterChange('genre', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">All Genres</option>
                    <option value="Fiction">Fiction</option>
                    <option value="Non-Fiction">Non-Fiction</option>
                    <option value="Educational">Educational</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Language</label>
                  <select
                    value={filters.language}
                    onChange={(e) => handleFilterChange('language', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">All Languages</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Tamil">Tamil</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Grade Level</label>
                  <select
                    value={filters.grade}
                    onChange={(e) => handleFilterChange('grade', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">All Grades</option>
                    <option value="Primary">Primary</option>
                    <option value="Middle School">Middle School</option>
                    <option value="High School">High School</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Condition</label>
                  <select
                    value={filters.condition}
                    onChange={(e) => handleFilterChange('condition', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">All Conditions</option>
                    <option value="New">New</option>
                    <option value="Like New">Like New</option>
                    <option value="Used">Used</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">All Locations</option>
                    <option value="New York">New York</option>
                    <option value="Chicago">Chicago</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Los Angeles">Los Angeles</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Boston">Boston</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-4 flex justify-end">
                <button
                  onClick={resetFilters}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Reset All Filters
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Book Grid */}
        {selectedBook ? (
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <button 
              onClick={() => setSelectedBook(null)}
              className="mb-4 text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
            >
              ← Back to all books
            </button>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <img 
                  src={selectedBook.cover} 
                  alt={selectedBook.title} 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              
              <div className="md:w-2/3">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">{selectedBook.title}</h2>
                    <p className="text-gray-600">by {selectedBook.author}</p>
                  </div>
                  <div className="flex items-center">
                    <FiStar className="text-yellow-400 mr-1" />
                    <span className="font-medium">{selectedBook.rating}</span>
                  </div>
                </div>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {getStatusBadge(selectedBook.status)}
                  {getConditionBadge(selectedBook.condition)}
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                    <FiMapPin className="mr-1" /> {selectedBook.location}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {selectedBook.category}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {selectedBook.language}
                  </span>
                  <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {selectedBook.grade}
                  </span>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800">Description</h3>
                  <p className="mt-2 text-gray-600">{selectedBook.description}</p>
                </div>
                
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Donor</h4>
                    <p className="mt-1 text-gray-800">{selectedBook.donor}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Delivery Options</h4>
                    <p className="mt-1 text-gray-800">{selectedBook.delivery}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Date Added</h4>
                    <p className="mt-1 text-gray-800">{selectedBook.dateAdded}</p>
                  </div>
                </div>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  {selectedBook.status === 'Available' ? (
                    <>
                      <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                        Request This Book
                      </button>
                      <button className="flex-1 bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-6 rounded-lg transition duration-300">
                        Add to Wishlist
                      </button>
                    </>
                  ) : (
                    <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300">
                      View Similar Books
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredBooks.map(book => (
              <div 
                key={book.id} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer"
                onClick={() => setSelectedBook(book)}
              >
                <div className="relative">
                  <img 
                    src={book.cover} 
                    alt={book.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    {getStatusBadge(book.status)}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                  
                  <div className="flex items-center mb-3">
                    <FiStar className="text-yellow-400 mr-1" />
                    <span className="text-sm font-medium">{book.rating}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1 mb-3">
                    {getConditionBadge(book.condition)}
                    <span className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded-full flex items-center">
                      <FiMapPin className="mr-1" /> {book.location}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500">Category</p>
                      <p className="text-sm font-medium">{book.category}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Language</p>
                      <p className="text-sm font-medium">{book.language}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Grade</p>
                      <p className="text-sm font-medium">{book.grade}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex justify-between">
                    <button 
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to donation cart logic
                      }}
                    >
                      Add to Cart
                    </button>
                    <button 
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Request book logic
                      }}
                    >
                      Request
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredBooks.length === 0 && (
          <div className="text-center py-12">
            <div className="mx-auto w-24 h-24 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
              <FiBook className="text-indigo-600 text-3xl" />
            </div>
            <h3 className="text-lg font-medium text-gray-900">No books found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
            <button 
              onClick={resetFilters}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Reset all filters
            </button>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">BookShare</h3>
              <p className="text-gray-400">Connecting book lovers and making education accessible to all through the power of sharing.</p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Donate Books</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Request Books</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Categories</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Fiction</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Non-Fiction</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Educational</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Children's Books</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contact</h4>
              <p className="text-gray-400 mb-2">help@bookshare.org</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>© 2023 BookShare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BookDonationStore;