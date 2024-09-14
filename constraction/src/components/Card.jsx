/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Card = ({ image, title, description, link }) => {
  return (
    <Link
      to={link}
      className="group relative block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
    >
      <motion.div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></motion.div>
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover transition-transform transform group-hover:scale-110"
      />
      <div className="p-4 relative z-10">
        <h2 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-yellow-500 transition-colors duration-300">
          {title}
        </h2>
        <p className="text-gray-700 group-hover:text-gray-500 transition-colors duration-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default Card;
