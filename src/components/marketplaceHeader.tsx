import  { useState } from "react";
import { FaSearch, FaShoppingCart, FaHeart } from "react-icons/fa";
interface EcommerceProps{
    e?:string;

}

export default function EcommerceHeader({e}: EcommerceProps) {
  const [cartItems, setCartItems] = useState(0); // Tracks the number of items in the cart
  const [likedItems, setLikedItems] = useState(0); // Tracks the number of liked items
  const [searchQuery, setSearchQuery] = useState(""); // Tracks the search input

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  const addToCart = () => {
    setCartItems((prev) => prev + 1);
  };

  const addToLikedItems = () => {
    setLikedItems((prev) => prev + 1);
  };

  return (
    <div className="bg-gray-50 py-5 mx-auto container shadow-sm px-20 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-[#0086AD]">Buy Your Home Products</div>

      {/* Search Bar */}
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search products..."
          className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:border-[1.5px] focus:border-[#0086AD] w-[300px]"
        />
        <button
          type="submit"
          className="bg-[#0086AD] px-4 h-[41px] text-white rounded-r-md hover:bg-[#005f7a] transition-all"
        >
          <FaSearch />
        </button>
      </form>

      <div className="flex items-center gap-6">
        <button
          onClick={addToLikedItems}
          className="relative text-gray-600 hover:text-[#0086AD] transition-all"
        >
          <FaHeart className="text-2xl" />
          {likedItems > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {likedItems}
            </span>
          )}
        </button>

        <button
          onClick={addToCart}
          className="relative text-gray-600 hover:text-[#0086AD] transition-all"
        >
          <FaShoppingCart className="text-2xl" />
          {cartItems > 0 && (
            <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
              {cartItems}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
