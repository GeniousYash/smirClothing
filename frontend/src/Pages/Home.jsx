import React, { useEffect } from "react";
import NavBar from "../Componants/Navbar";
import SliderComp from "../HomeComp/SliderComp";
import transition from "../transition";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const Home = () => {
    useEffect(() => {
        const scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
        });

        return () => {
            if (scroll) scroll.destroy();
        };
    }, []);

    return (
        <div data-scroll-container className="w-full">
            <NavBar />
            <SliderComp />
            <h1 className="text-6xl text-[#222222]">SMIR Home Page</h1>
        </div>
    );
};

export default transition(Home);
