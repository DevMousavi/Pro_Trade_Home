import React from "react";
import Header from "../layout/Header";
import UserComments from "../components/UserComments";

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
