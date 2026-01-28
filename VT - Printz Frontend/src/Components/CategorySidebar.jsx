// src/components/CategorySidebar.jsx
import { useNavigate } from "react-router-dom";

const CategorySidebar = ({ categories, selectedCategory, onSelect }) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    onSelect(category);
    navigate(`/services?category=${category}`);
  };

  return (
    <aside className="sticky top-28">
      <h3 className="text-lg font-semibold text-[#9A1E85] mb-4">
        Categories
      </h3>

      <ul className="space-y-2">
        {categories.map((category, index) => (
          <li key={index}>
            <button
              onClick={() => handleCategoryClick(category)}
              className={`w-full text-left px-3 py-2 rounded-md transition
                ${
                  selectedCategory === category
                    ? "bg-[#9A1E85] text-white"
                    : "text-gray-700 hover:bg-[#FCE7F3] hover:text-[#9A1E85]"
                }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
