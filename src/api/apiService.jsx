/* eslint-disable no-unused-vars */
import axios from "axios";

const API_URL = "https://fakestoreapi.com";

export const getItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    const filteredItems = response.data.map((item) => ({
      title: item.title,
      category: item.category,
      price: item.price,
      ratingCount: item.rating.count,
    }));
    return filteredItems;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Error");
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    const categories = [...new Set(response.data.map((item) => item.category))];
    return categories;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Error");
  }
};

export const postItem = async (newItem) => {
  try {
    const response = await axios.post(`${API_URL}/products`, newItem);
    return response.data;
  } catch (err) {
    console.error("Error:", err);
    throw new Error("Error");
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/products/${id}`);
    return response.data;
  } catch (err) {
    console.error(`Error ${id}:`, err);
    throw new Error("Error");
  }
};

export const deleteCategory = async (category) => {
  try {
    throw new Error("Error");
  } catch (err) {
    console.error("Error", err);
    throw new Error("Error");
  }
};
