import { useState } from "react";
import BookCard from "../components/BookCard";
import CategoryCard from "../components/CategoryCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  FiChevronLeft,
  FiChevronRight,
  FiBook,
  FiHeart,
  FiUsers,
} from "react-icons/fi";
import HomeSection from "../components/HomeSection";

function Booklist() {
  const [activeTab, setActiveTab] = useState("donate");
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Static data for books
  const books = [
    {
      id: 1,
      title: "Mathematics Textbook",
      grade: "Grade 10",
      condition: "Like New",
      status: "available",
      donor: "Sarah Johnson (12th Grade)",
      image: "https://m.media-amazon.com/images/I/51-nXsSRfZL._SY425_.jpg",
      category: "textbooks",
      featured: true,
    },
    {
      id: 2,
      title: "Science Encyclopedia",
      grade: "Grade 8-10",
      condition: "Good",
      status: "available",
      donor: "Michael Chen (Alumni)",
      image: "https://m.media-amazon.com/images/I/51xwGSNX-EL._SY425_.jpg",
      category: "reference",
      featured: true,
    },
    {
      id: 3,
      title: "English Literature Anthology",
      grade: "Grade 11",
      condition: "Fair",
      status: "requested",
      donor: "Library",
      image: "https://m.media-amazon.com/images/I/41r6F2LRf8L._SY425_.jpg",
      category: "literature",
      featured: true,
    },
    {
      id: 4,
      title: "History of Our World",
      grade: "Grade 9",
      condition: "Like New",
      status: "available",
      donor: "David Wilson (Teacher)",
      image: "https://m.media-amazon.com/images/I/41W5I0bQOIL._SY425_.jpg",
      category: "textbooks",
    },
    {
      id: 5,
      title: "Chemistry Workbook",
      grade: "Grade 10-12",
      condition: "Good",
      status: "available",
      donor: "Emma Garcia (11th Grade)",
      image: "https://m.media-amazon.com/images/I/41Y7FOB7YBL._SY425_.jpg",
      category: "workbooks",
    },
    {
      id: 6,
      title: "Geometry Study Guide",
      grade: "Grade 10",
      condition: "Fair",
      status: "requested",
      donor: "School Inventory",
      image: "https://m.media-amazon.com/images/I/51u8ZRDCVoL._SY425_.jpg",
      category: "study-guides",
    },
    {
      id: 7,
      title: "Shakespeare Collection",
      grade: "Grade 11-12",
      condition: "Good",
      status: "available",
      donor: "Mr. Thompson (English Dept)",
      image: "https://m.media-amazon.com/images/I/51Z0nLAfLmL._SY425_.jpg",
      category: "literature",
    },
    {
      id: 8,
      title: "French Dictionary",
      grade: "All Grades",
      condition: "Like New",
      status: "available",
      donor: "Lisa Park (10th Grade)",
      image: "https://m.media-amazon.com/images/I/51FvNRL2dBL._SY425_.jpg",
      category: "reference",
    },
  ];

  // Static data for categories
  const categories = [
    { id: 1, name: "Textbooks", icon: <FiBook className="text-2xl" /> },
    { id: 2, name: "Workbooks", icon: <FiBook className="text-2xl" /> },
    { id: 3, name: "Literature", icon: <FiBook className="text-2xl" /> },
    { id: 4, name: "Reference", icon: <FiBook className="text-2xl" /> },
    { id: 5, name: "Study Guides", icon: <FiBook className="text-2xl" /> },
  ];

  const featuredBooks = books.filter((book) => book.featured);
  const availableBooks = books.filter((book) => book.status === "available");
  const requestedBooks = books.filter((book) => book.status === "requested");

  const filteredBooks =
    activeFilter === "all"
      ? activeTab === "donate"
        ? availableBooks
        : requestedBooks
      : activeTab === "donate"
      ? availableBooks.filter((book) => book.category === activeFilter)
      : requestedBooks.filter((book) => book.category === activeFilter);

  const nextSlide = () => {
    setCurrentSlide((prev) =>
      prev === featuredBooks.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? featuredBooks.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-[var(--light-color)]">
      <Navbar userType="ngo" />

      <HomeSection />
      <main className="container mx-auto px-4 py-6">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-[var(--primary-color)] bg-opacity-10 p-3 rounded-full mr-4">
              <FiBook className="text-[var(--primary-color)] text-2xl" />
            </div>
            <div>
              <p className="text-gray-500">Total Books Shared</p>
              <p className="text-2xl font-bold">1,248</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-[var(--secondary-color)] bg-opacity-10 p-3 rounded-full mr-4">
              <FiHeart className="text-[var(--secondary-color)] text-2xl" />
            </div>
            <div>
              <p className="text-gray-500">Active Donors</p>
              <p className="text-2xl font-bold">327</p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
            <div className="bg-[var(--tertiary-color)] bg-opacity-10 p-3 rounded-full mr-4">
              <FiUsers className="text-[var(--tertiary-color)] text-2xl" />
            </div>
            <div>
              <p className="text-gray-500">Students Benefited</p>
              <p className="text-2xl font-bold">892</p>
            </div>
          </div>
        </div>

        {/* Featured Books Carousel */}
        <section className="mb-12 relative">
          <h2 className="text-2xl font-bold mb-6 text-[var(--dark-color)]">
            Featured {activeTab === "donate" ? "Available" : "Requested"} Books
          </h2>
          <div className="relative bg-white rounded-lg shadow-lg overflow-hidden h-64">
            {(activeTab === "donate" ? availableBooks : requestedBooks)
              .filter((book) => book.featured)
              .map((book, index) => (
                <div
                  key={book.id}
                  className={`absolute inset-0 transition-opacity duration-500 flex ${
                    index === currentSlide
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="w-1/3 h-full p-4 flex items-center justify-center bg-gray-100">
                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-full object-contain shadow-md"
                    />
                  </div>
                  <div className="w-2/3 p-6 flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-2 text-[var(--dark-color)]">{book.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="bg-[var(--primary-color)] bg-opacity-10 text-[var(--primary-color)] px-2 py-1 rounded text-sm">
                        {book.grade}
                      </span>
                      <span className="bg-[var(--secondary-color)] bg-opacity-10 text-[var(--secondary-color)] px-2 py-1 rounded text-sm">
                        {book.condition}
                      </span>
                      <span className="bg-[var(--tertiary-color)] bg-opacity-10 text-[var(--tertiary-color)] px-2 py-1 rounded text-sm">
                        {book.category}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">
                      <span className="font-semibold">
                        {activeTab === "donate"
                          ? "Donated by:"
                          : "Requested from:"}
                      </span>{" "}
                      {book.donor}
                    </p>
                    <button
                      className={`px-4 py-2 rounded-md font-semibold w-48 ${
                        activeTab === "donate"
                          ? "bg-[var(--primary-color)] hover:bg-[var(--accent-color)] text-white"
                          : "bg-[var(--secondary-color)] hover:bg-[var(--secondary-color)] text-white"
                      }`}
                    >
                      {activeTab === "donate"
                        ? "Request This Book"
                        : "View Details"}
                    </button>
                  </div>
                </div>
              ))}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 text-[var(--dark-color)] p-2 rounded-full shadow-md hover:bg-opacity-100 transition"
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 text-[var(--dark-color)] p-2 rounded-full shadow-md hover:bg-opacity-100 transition"
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </div>
        </section>

        {/* Filter */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-4 text-[var(--dark-color)]">
            {activeTab === "donate"
              ? "Available Books to Request"
              : "Requested Books Needed"}
          </h2>
          <div className="flex flex-wrap gap-3 mb-6">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full ${
                activeFilter === "all"
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveFilter("textbooks")}
              className={`px-4 py-2 rounded-full ${
                activeFilter === "textbooks"
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Textbooks
            </button>
            <button
              onClick={() => setActiveFilter("workbooks")}
              className={`px-4 py-2 rounded-full ${
                activeFilter === "workbooks"
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Workbooks
            </button>
            <button
              onClick={() => setActiveFilter("literature")}
              className={`px-4 py-2 rounded-full ${
                activeFilter === "literature"
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Literature
            </button>
            <button
              onClick={() => setActiveFilter("reference")}
              className={`px-4 py-2 rounded-full ${
                activeFilter === "reference"
                  ? "bg-[var(--primary-color)] text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Reference
            </button>
          </div>
        </div>

        {/* Books Grid - 4 per row on large screens */}
        <section className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                mode={activeTab}
                onAction={() =>
                  console.log(
                    `${activeTab === "donate" ? "Request" : "View"} book`,
                    book.id
                  )
                }
              />
            ))}
          </div>
          {filteredBooks.length === 0 && (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <p className="text-gray-500 text-lg">
                {activeTab === "donate"
                  ? "No available books match your filters. Check back later or consider donating!"
                  : "No requested books match your filters. Be the first to request!"}
              </p>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Booklist;