import NavBar from "../Componants/Navbar";
import transition from "../transition";


const Home = () => {

    return (
        <div data-scroll-container className="w-full h-screen flex justify-center items-center">
            <NavBar />
            <h1 className="text-6xl text-[#222222]">SMIR Home Page</h1>
        </div>
    );
};

export default transition(Home);
