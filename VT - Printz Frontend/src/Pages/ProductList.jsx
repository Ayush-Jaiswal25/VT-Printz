import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const ITEMS_PER_PAGE = 8;

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewType, setViewType] = useState("table");

  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/products?search=${searchQuery}`
        );
        setProducts(res.data);
        setCurrentPage(1);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, [searchQuery]);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = products.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    setProducts(products.filter((item) => item._id !== id));
  };

  const handleEdit = (id) => {
    navigate(`/edit-product/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">

        <h2 className="text-2xl font-semibold text-[#02192F] mb-6">
          Product List
        </h2>

        {products.length === 0 ? (
          <p className="text-center text-gray-500 py-10">
            No products found
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {currentProducts.map((item) => (
                <div
                  key={item._id}
                  className="relative h-64 rounded-xl overflow-hidden shadow-md group"
                  style={{
                    backgroundImage: `url(${item.media})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/55 transition" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-4 text-white">
                    <h3 className="text-lg font-semibold leading-tight">
                      {item.name}
                    </h3>

                    <p className="text-sm opacity-90">
                      ₹{item.price}
                    </p>

                    <p className="text-xs opacity-80 mb-3">
                      {item.category}
                    </p>

                    <button
                      onClick={() => handleEdit(item._id)}
                      className="self-start px-4 py-1.5 text-sm rounded-full bg-white text-black hover:bg-gray-200 transition"
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>


          </>
        )}
      </div>
    </div>
  );
};

export default ProductList;
