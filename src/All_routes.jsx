import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home/Home.jsx"
import Chatbot from './pages/Chatbot/Chatbot.jsx'
import Speeches from './pages/Speeches/Speeches.jsx'
import AdminLogin from './pages/AdminLogin/AdminLogin.jsx'
import UploadVideo from './pages/UploadVideo/UploadVideo.jsx'
import Contact from './components/Footer/Elements/Contact.jsx'
import Terms from './components/Footer/Elements/Terms.jsx'
import Privacy from './components/Footer/Elements/Privacy.jsx'
import Refund from './components/Footer/Elements/refund.jsx'

const All_routes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chatbot" element={<Chatbot/>} />
        <Route path="/speeches" element={<Speeches/>} />
        <Route path="/adminLogin" element={<AdminLogin/>} />
        <Route path="/uploadVideo" element={<UploadVideo/>} />
        <Route path="/contact" element={<Contact/>} /> 
        <Route path="/terms" element={<Terms/>} /> 
        <Route path="/privacy" element={<Privacy/>} /> 
        <Route path="/refund" element={<Refund/>} /> 

    </Routes>
  )
}

export default All_routes
