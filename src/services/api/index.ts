import axios from "axios";

export const axiosApi = axios.create({
  baseURL: process.env.NEXT_APP_API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 8 * 1000,
  validateStatus: (status: number) => status >= 200 && status < 300,
});
