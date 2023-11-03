import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx"
import Chatbot from './pages/Chatbot/Chatbot.jsx'
import Speeches from './pages/Speeches/Speeches.jsx'
import AdminLogin from './pages/AdminLogin/AdminLogin.jsx'
import UploadVideo from './pages/UploadVideo/UploadVideo.jsx'

const All_routes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/speeches" element={<Speeches/>} />
        <Route path="/adminLogin" element={<AdminLogin/>} />
        <Route path="/uploadVideo" element={<UploadVideo/>} />
    </Routes>
  )
}

export default All_routes
