import axios from "axios";

const API_URL =
  "https://gymfit-backend-b0wf.onrender.com/api/products";

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