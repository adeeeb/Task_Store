/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const CategoryList = ({ categories, deleteCategory }) => {
  return (
    <div className="mb-6 max-w-4xl mx-auto">
      {" "}
      <h2 className="text-2xl font-semibold mb-4 text-center text-green-600">
        Categories
      </h2>
      {categories.length > 0 ? (
        <ul className="space-y-2">
          {categories.map((category) => (
            <motion.li
              key={category}
              className="p-4 bg-blue-100 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center justify-between"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <p className="text-left">{category}</p>
              <button
                onClick={() => deleteCategory(category)}
                className="mt-2 sm:mt-0 text-red-500 hover:text-red-700 transition-all"
              >
                Delete
              </button>
            </motion.li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No categories available.</p>
      )}
    </div>
  );
};

export default CategoryList;
