import axios from "axios";

const API_URL =
  "http://gymfit-frontenda.vercel.app/api/auth";

/* LOGIN */

export const loginUser =
  async (userData) => {

    const response =
      await axios.post(
        `${API_URL}/login`,
        userData
      );

    return response.data;
};

/* REGISTER */

export const registerUser =
  async (userData) => {

    const response =
      await axios.post(
        `${API_URL}/register`,
        userData
      );

    return response.data;
};