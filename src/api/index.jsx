import axios from "axios";

// hello demo

const API = axios.create({ baseURL: "https://chatbot-server-gamma.vercel.app" });
API.interceptors.request.use((req) => {
  return req;
});

export const askQuestion = (askData) => API.post("/llama/chatbot", askData);
export const getVideoIds = () => API.get("/video/getAllIds");

export const adminLogin = (loginData) => API.post("/auth/login", loginData);
export const UploadVideo = (videoData) => API.post("/video/uploadVideoId", videoData);


