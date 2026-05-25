import axios from "axios";

const API_URL =
  `${import.meta.env.VITE_API_URL}/products`;

/* GET ALL PRODUCTS */

export const fetchProducts = async () => {

  const response =
    await axios.get(API_URL);

  return response.data;
};

/* GET SINGLE PRODUCT */

export const fetchSingleProduct =
  async (id) => {

    const response =
      await axios.get(`${API_URL}/${id}`);

    return response.data;
};