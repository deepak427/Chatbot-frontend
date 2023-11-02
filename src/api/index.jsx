import axios from "axios";

const API = axios.create({ baseURL: "http://127.0.0.1:5555" });

API.interceptors.request.use((req) => {
  return req;
});

export const askQuestion = (askData) => API.post("/llama/chatbot", askData);
