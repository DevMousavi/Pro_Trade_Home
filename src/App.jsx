// React ...
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages...
import Home from "./Pages/Home.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import SpecialOffer from "./Components/SpecialOffer.jsx";

// Using React-Router-dom to SPA the application
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about_us" element={<AboutUs />} />
                <Route path="/special_offer" element={<SpecialOffer />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
