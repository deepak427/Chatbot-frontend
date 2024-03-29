import axios from "axios";

const API = axios.create({ baseURL: "https://chatbot-server-5zim.onrender.com" });
API.interceptors.request.use((req) => {
  return req;
});

export const askQuestion = (askData) => API.post("/llama/chatbot", askData);
export const getVideoIds = () => API.get("/video/getAllIds");

export const adminLogin = (loginData) => API.post("/auth/login", loginData);
export const UploadVideo = (videoData) => API.post("/video/uploadVideoId", videoData);
export const deleteVideo = (videoData) => API.post("/video/deleteVideo", videoData);


