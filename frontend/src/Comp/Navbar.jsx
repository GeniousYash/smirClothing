import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import logoSMIR from "/icons/whitelogo.png";
import { LiaOpencart } from "react-icons/lia";
import { CgProfile } from "react-icons/cg";



import Button from "./Button";
import { Link } from "react-router-dom";

const navItems = ["Home", "Shop", "BestSeller", "About", "Contact", "Blog"];

const NavBar = () => {
    const [showPhoneNav, setShowPhoneNav] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    // State for toggling audio and visual indicator
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);

    // Refs for audio and navigation container
    const audioElementRef = useRef(null);
    const navContainerRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Toggle audio and visual indicator
    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    // Manage audio playback
    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);

    useEffect(() => {
        if (currentScrollY === 0) {
            // Topmost position: show navbar without floating-nav
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            // Scrolling down: hide navbar and apply floating-nav
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up: show navbar with floating-nav
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav");
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);

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
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">
                    {/* Logo and Product button */}
                    <div className="flex justify-between">
                        <div className="flex items-center gap-7">

                            <img src={logoSMIR} alt="logo" className="w-20" />

                            <Button
                                id="product-button"
                                title="Products"
                                rightIcon={<TiLocationArrow />}
                                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                            />
                        </div>

                    </div>

                    {/* Navigation Links and Audio Button */}
                    <div className="flex h-full items-center">
                        <div className="nav-links flex gap-8">
                            <div className="nav-item">
                                <Link className="nav-link" to="/">
                                    <p className="text-[#ffffff] text-md">Home</p>
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/shop">
                                    <p className="text-[#ffffff] text-md">Shop</p>
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/BestSeller">
                                    <p className="text-[#ffffff] text-md">Best Sellers</p>
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    <p className="text-[#ffffff] text-md">Contact</p>
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/about">
                                    <p className="text-[#ffffff] text-md">Our Story</p>
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/blogs">
                                    <p className="text-[#ffffff] text-md">Blog</p>
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/">
                                    <span className="text-[#ffffff] text-3xl"><LiaOpencart /></span>
                                </Link>
                            </div>
                            <div className="nav-item">
                                <Link className="nav-link" to="/">
                                    <span className="text-[#ffffff] text-3xl"><CgProfile /></span>
                                </Link>
                            </div>
                        </div>


                        <div className="MenuButtonNav lg:hidden flex items-center">
                            <button className="text-xl p-4 text-[#ffffff]" onClick={togglePhoneNav}>
                                Menu
                            </button>
                        </div>
                        <button
                            onClick={toggleAudioIndicator}
                            className="ml-10 flex items-center space-x-0.5"
                        >
                            <audio
                                ref={audioElementRef}
                                className="hidden"
                                src="/audio/looped.mp3"
                                loop
                            />
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={clsx("indicator-line", {
                                        active: isIndicatorActive,
                                    })}
                                    style={{
                                        animationDelay: `${bar * 0.1}s`,
                                    }}
                                />
                            ))}
                        </button>
                    </div>
                    {showPhoneNav && (
                        <div className={`PhoneNav fixed top-[10px] w-full h-[100vh] flex flex-col bg-[#222222] ${isAnimating ? "fade-out" : "fade-in"}`} >
                            <div className="navfullphone bg-[#ffffff]">
                                <div className="nav-item flex flex-row justify-between px-4 pt-8">
                                    <div className="logo">
                                        <Link className="nav-link" to="/">
                                            <img className="w-[100px]" src={logoSMIR} alt="Logo" />
                                        </Link>
                                    </div>

                                    <div className="flex flex-row items-center gap-4">
                                        <div className="nav-item">
                                            <Link className="nav-link" to="/">
                                                <span className="text-[#ffffff] text-2xl"><LiaOpencart /></span>
                                            </Link>
                                        </div>
                                        <div className="nav-item">
                                            <Link className="nav-link" to="/">
                                                <span className="text-[#ffffff] text-2xl"><CgProfile /></span>
                                            </Link>
                                        </div>
                                        <button className="text-2xl font-bold text-[#ffffff]" onClick={togglePhoneNav}>
                                            Close
                                        </button>
                                    </div>
                                </div>
                                <div className="nav-router bg-[#222222]">
                                    <div className="nav-item mb-2 border-b-2 border-b-zinc-100">
                                        <Link className="nav-link" to="/" onClick={togglePhoneNav}>
                                            <h1 className="text-2xl pl-8 py-4 text-[#ffffff]">Home</h1>
                                        </Link>
                                    </div>
                                    <div className="nav-item mb-2 border-b-2 border-b-zinc-100">
                                        <Link className="nav-link" to="/shop" onClick={togglePhoneNav}>
                                            <h1 className="text-2xl pl-8 py-4 text-[#ffffff]">Shop</h1>
                                        </Link>
                                    </div>
                                    <div className="nav-item mb-2 border-b-2 border-b-zinc-100">
                                        <Link className="nav-link" to="/BestSeller" onClick={togglePhoneNav}>
                                            <h1 className="text-2xl pl-8 py-4 text-[#ffffff]">Best Sellers</h1>
                                        </Link>
                                    </div>
                                    <div className="nav-item border-b-2 border-b-zinc-100">
                                        <Link className="nav-link" to="/contact" onClick={togglePhoneNav}>
                                            <h1 className="text-2xl pl-8 py-4 text-[#ffffff]">Contact</h1>
                                        </Link>
                                    </div>
                                    <div className="nav-item border-b-2 border-b-zinc-100">
                                        <Link className="nav-link" to="/about" onClick={togglePhoneNav}>
                                            <h1 className="text-2xl pl-8 py-4 text-[#ffffff]">Our Story</h1>
                                        </Link>
                                    </div>
                                    <div className="nav-item border-b-2 border-b-zinc-100">
                                        <Link className="nav-link" to="/blogs" onClick={togglePhoneNav}>
                                            <h1 className="text-2xl pl-8 py-4 text-[#ffffff]">Blog</h1>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </div>
    );
};

export default NavBar;