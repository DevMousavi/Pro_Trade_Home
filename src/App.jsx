// React ...
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages...
import Home from "./pages/Home.jsx";

// Using React-Router-dom to SPA the application
const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
