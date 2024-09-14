import { useState } from "react";

// import { useQuery, useMutation, useQueryClient } from 'react-query';
// import { getCategories, postCategory } from '../api/apiService';

import CategoryList from "./CategoryList";
import ItemList from "./ItemList";

const demoCategories = ["Fruits", "Vegetables"];
const demoItems = {
  Fruits: [
    { name: "Apple", price: 1.2, quantity: 10 },
    { name: "Banana", price: 0.5, quantity: 20 },
  ],
  Vegetables: [{ name: "Carrot", price: 0.8, quantity: 30 }],
};

const Dashboard = () => {
  // const queryClient = useQueryClient();
  const [categories, setCategories] = useState(demoCategories);
  const [items, setItems] = useState(demoItems);
  const [newCategory, setNewCategory] = useState("");

  // const { data: categories = [], refetch: refetchCategories } = useQuery('categories', getCategories);
  // const addCategoryMutation = useMutation(postCategory, { onSuccess: () => refetchCategories() });

  const deleteCategory = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
    const updatedItems = { ...items };
    delete updatedItems[category];
    setItems(updatedItems);
  };

  const addItem = (category, newItem) => {
    if (!category) return;
    const updatedItems = { ...items };
    updatedItems[category] = [...updatedItems[category], newItem];
    setItems(updatedItems);
  };

  const deleteItem = (category, itemIndex) => {
    const updatedItems = { ...items };
    updatedItems[category] = updatedItems[category].filter(
      (_, index) => index !== itemIndex
    );
    setItems(updatedItems);
  };

  const handleAddCategory = () => {
    if (newCategory && !categories.includes(newCategory)) {
      // addCategoryMutation.mutate(newCategory);
      setCategories([...categories, newCategory]);
      setItems({ ...items, [newCategory]: [] });
      setNewCategory("");
    }
  };

  return (
    <div className="p-4 sm:p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6 text-green-600">
        Dashboard
      </h1>
      <div className="mb-6 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
          className="p-2 border rounded-md w-full sm:w-auto"
        />
        <button
          onClick={handleAddCategory}
          className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all w-full sm:w-auto"
        >
          Add Category
        </button>
      </div>
      <CategoryList categories={categories} deleteCategory={deleteCategory} />
      <ItemList
        items={items}
        addItem={addItem}
        deleteItem={deleteItem}
        categories={categories}
      />
    </div>
  );
};

export default Dashboard;
