import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./Components/Pages/Login";
import Register from "./Components/Pages/Register";
import Home from "./Components/Pages/Home";
import {GlobalProvider} from "./Components/Context/LoginContext";


function App() {
    return (
        <BrowserRouter>
            <GlobalProvider>
                {/* Add a menu bar here */}
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </GlobalProvider>
        </BrowserRouter>
    );
}

export default App;
