import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoSMIR from "/icons/namelogoWhite.png";

const NavBar = () => {
    const [showPhoneNav, setShowPhoneNav] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    // const [isSticky, setIsSticky] = useState(false); // State to control sticky navbar

    const togglePhoneNav = () => {
        if (showPhoneNav) {
            setIsAnimating(true);
            setTimeout(() => {
                setShowPhoneNav(false);
                setIsAnimating(false);
            }, 500);
        } else {
            setShowPhoneNav(true);
        }
    };

    return (
        <div className="w-full navmain fixed top-0 bg-[#222222]">
            <div className="nav flex justify-between px-8" style={{ position: "relative", top: "0", transition: "background-color 0.3s ease", zIndex: "99", }}>
                <div className="logo flex items-center gap-8">
                    <Link className="nav-link" to="/">
                        <img className="w-[100px]" src={logoSMIR} alt="Logo" />
                    </Link>
                    <div className="nav-links flex gap-8">
                        <div className="nav-item">
                            <Link className="nav-link" to="/">
                                <p className="text-[#dddddd] text-lg">Home</p>
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/shop">
                                <p className="text-[#dddddd] text-lg">Shop</p>
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/BestSeller">
                                <p className="text-[#dddddd] text-lg">Best Sellers</p>
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/contact">
                                <p className="text-[#dddddd] text-lg">Contact</p>
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/about">
                                <p className="text-[#dddddd] text-lg">Our Story</p>
                            </Link>
                        </div>
                        <div className="nav-item">
                            <Link className="nav-link" to="/blogs">
                                <p className="text-[#dddddd] text-lg">Blog</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="cartoption !flex flex-row items-center gap-8">
                    <div className="nav-item">
                        <Link className="nav-link" to="/">
                            <p className="text-[#dddddd] text-lg">CART</p>
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/">
                            <p className="text-[#dddddd] text-lg">LOGIN</p>
                        </Link>
                    </div>
                    <div className="nav-item">
                        <Link className="nav-link" to="/">
                            <p className="text-[#dddddd] text-lg">REGISTER</p>
                        </Link>
                    </div>
                </div>

                {/* Phone Menu Button */}
                <div className="MenuButtonNav lg:hidden flex items-center">
                    <button className="text-xl p-4 text-[#dddddd]" onClick={togglePhoneNav}>
                        Menu
                    </button>
                </div>

                {/* PhoneNav - Mobile Navigation */}
                {showPhoneNav && (
                    <div className={`PhoneNav fixed top-[10px] w-full h-[100vh] flex flex-col bg-[#222222] ${isAnimating ? "fade-out" : "fade-in"}`} >
                        <div className="navfullphone bg-[#222222]">
                            <div className="nav-item flex flex-row justify-between px-4 pt-8">
                                <div className="logo">
                                    <Link className="nav-link" to="/">
                                        <img className="w-[100px]" src={logoSMIR} alt="Logo" />
                                    </Link>
                                </div>

                                <div>
                                    <button className="text-2xl font-bold p-4 text-[#dddddd]" onClick={togglePhoneNav}>
                                        Close
                                    </button>
                                </div>
                            </div>
                            <div className="nav-router bg-[#222222]">
                                <div className="nav-item mb-2 border-b-2 border-b-zinc-100">
                                    <Link className="nav-link" to="/" onClick={togglePhoneNav}>
                                        <h1 className="text-2xl pl-8 py-4 text-[#dddddd]">Home</h1>
                                    </Link>
                                </div>
                                <div className="nav-item mb-2 border-b-2 border-b-zinc-100">
                                    <Link className="nav-link" to="/shop" onClick={togglePhoneNav}>
                                        <h1 className="text-2xl pl-8 py-4 text-[#dddddd]">Shop</h1>
                                    </Link>
                                </div>
                                <div className="nav-item mb-2 border-b-2 border-b-zinc-100">
                                    <Link className="nav-link" to="/BestSeller" onClick={togglePhoneNav}>
                                        <h1 className="text-2xl pl-8 py-4 text-[#dddddd]">Best Sellers</h1>
                                    </Link>
                                </div>
                                <div className="nav-item border-b-2 border-b-zinc-100">
                                    <Link className="nav-link" to="/contact" onClick={togglePhoneNav}>
                                        <h1 className="text-2xl pl-8 py-4 text-[#dddddd]">Contact</h1>
                                    </Link>
                                </div>
                                <div className="nav-item border-b-2 border-b-zinc-100">
                                    <Link className="nav-link" to="/about" onClick={togglePhoneNav}>
                                        <h1 className="text-2xl pl-8 py-4 text-[#dddddd]">Our Story</h1>
                                    </Link>
                                </div>
                                <div className="nav-item border-b-2 border-b-zinc-100">
                                    <Link className="nav-link" to="/blogs" onClick={togglePhoneNav}>
                                        <h1 className="text-2xl pl-8 py-4 text-[#dddddd]">Blog</h1>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavBar;
