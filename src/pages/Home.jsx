import React from "react";
import Header from "../Layout/Header.jsx";
import UserComments from "../Components/UserComments.jsx";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <UserComments />
            </main>
        </>
    );
};

export default Home;
