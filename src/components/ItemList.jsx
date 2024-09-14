/* eslint-disable react/prop-types */
import { useState } from "react";
// import { useQuery, useMutation } from 'react-query';
// import { getItems, postItem } from '../api/apiService';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ItemList = ({ items, addItem, categories, deleteItem }) => {
  const [newItem, setNewItem] = useState({
    name: "",
    price: "",
    quantity: "",
  });
  const [selectedCategory, setSelectedCategory] = useState("");

  // const { data: items = [], refetch: refetchItems } = useQuery(
  //   ['items', selectedCategory],
  //   () => getItems(selectedCategory),
  //   { enabled: !!selectedCategory }
  // );

  // const addItemMutation = useMutation(
  //   (newItem) => postItem(selectedCategory, newItem),
  //   {
  //     onSuccess: () => refetchItems(),
  //     onError: () => toast.error("Failed to add item."),
  //   }
  // );

  const handleAddItem = () => {
    if (!selectedCategory) {
      toast.error("Please select a category before adding an item.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    if (newItem.name && newItem.price && newItem.quantity) {
      addItem(selectedCategory, newItem);
      setNewItem({ name: "", price: "", quantity: "" });
    } else {
      toast.error("Please fill all item details (name, price, quantity).", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className="p-6 shadow-lg rounded-lg border max-w-4xl mx-auto">
      <ToastContainer />
      <h2 className="text-3xl font-semibold mb-4 text-center text-green-600">
        Items
      </h2>
      <div className="mb-4 flex flex-col md:flex-row md:justify-center md:space-x-4 space-y-4 md:space-y-0">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border rounded-md w-full md:w-1/4"
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          placeholder="Item Name"
          className="p-2 border rounded-md w-full md:w-1/4"
        />
        <input
          type="number"
          value={newItem.price}
          onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
          placeholder="Price"
          className="p-2 border rounded-md w-full md:w-1/4"
        />
        <input
          type="number"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
          placeholder="Quantity"
          className="p-2 border rounded-md w-full md:w-1/4"
        />
        <button
          onClick={handleAddItem}
          className="p-2 bg-green-500 text-white rounded-md w-full md:w-auto hover:bg-green-600 transition-all"
        >
          Add Item
        </button>
      </div>
      {selectedCategory && items[selectedCategory]?.length > 0 && (
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2 text-green-600">
            {selectedCategory}
          </h3>
          <ul className="space-y-3">
            {items[selectedCategory].map((item, index) => (
              <li
                key={index}
                className="p-4 border rounded-md flex flex-col sm:flex-row sm:items-center justify-between shadow-md"
              >
                <div className="text-left">
                  <p className="font-semibold">{item.name}</p>
                  <p>Price: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => deleteItem(selectedCategory, index)}
                  className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ItemList;
