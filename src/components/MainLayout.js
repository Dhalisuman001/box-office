import React from "react";
import Navbar from "./Navbar";
import Title from "./Title";


const MainLayout = ({ children }) => {
  return (
    <div>
      <Title title="Box Office" subtitle="Are you looking for a movie or an actress" />
      <Navbar />

      {children}
    </div>
  );
};

export default MainLayout;
