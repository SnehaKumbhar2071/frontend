const CategoryCard = ({ category }) => {
    return (
      <div className="bg-white rounded-lg shadow-sm p-4 text-center hover:shadow-md transition cursor-pointer">
        <div className="w-20 h-20 mx-auto mb-3">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-contain"
          />
        </div>
        <h3 className="font-medium">{category.name}</h3>
      </div>
    )
  }
  
  export default CategoryCard