import React, { useEffect } from "react";
import Header from "../Layout/Header";
import UserComments from "../Components/UserComments";

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
