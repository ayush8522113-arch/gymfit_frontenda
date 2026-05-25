import axios from "axios";

const API_URL =
  "https://gymfit-backend-b0wf.onrender.com/api/payment";

/* CREATE ORDER */

export const createOrder =
  async (amount) => {

    const response =
      await axios.post(

        `${API_URL}/create-order`,

        { amount }

      );

    return response.data;
};