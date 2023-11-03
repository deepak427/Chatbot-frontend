import { BrowserRouter } from "react-router-dom";
import All_routes from "./All_routes";
import Navbar from "./components/Navbar/Navbar";
import LeftSideBar from "./components/LeftSideBar/LeftSideBar.jsx"
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <All_routes />
        <LeftSideBar />
      </BrowserRouter>
    </div>
  );
}

export default App
