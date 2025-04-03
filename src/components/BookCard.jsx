import { FiBook, FiUser, FiAward, FiHeart } from "react-icons/fi";

const BookCard = ({ book, mode, onAction }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 flex flex-col h-full">
      <div className="p-4 h-48 bg-gray-100 flex items-center justify-center">
        <img 
          src={book.image} 
          alt={book.title} 
          className="h-full object-contain"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-semibold text-lg mb-1 line-clamp-2">{book.title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-2">
          <FiUser className="mr-1" />
          <span className="line-clamp-1">{book.donor}</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">{book.grade}</span>
          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">{book.condition}</span>
        </div>

        <div className="mt-auto">
          <button 
            onClick={onAction}
            className={`w-full py-2 rounded-md font-semibold mt-3 ${
              mode === "donate" 
                ? 'bg-green-600 hover:bg-green-700 text-white' 
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {mode === "donate" ? 'Request Book' : 'View Request'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;