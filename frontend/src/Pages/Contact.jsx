import React from "react";
import transition from "../transition";
import NavBar from "../Componants/Navbar";




const Contact = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center">
            <NavBar />
            <h1 className="text-6xl text-[#222222]">SMIR CONTACT US</h1>
        </div>
    );
};

export default transition(Contact);
