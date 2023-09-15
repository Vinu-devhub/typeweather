/* eslint-disable react/prop-types */
import FullLogo from "../../assets/weather-app-logo.svg";

import Searchbar from "../searchbar/searchbar";
import "./home.style.css";

const Home = ({ handleOnSearch }) => {
  return (
    <div className="flex flex-col flex-grow justify-between items-center gap-5">
      <div className="flex flex-col  gap-5">
        <header className=" flex flex-col justify-between items-center h-48 sm:h-64 mt-12 ">
          <div className=" w-40 h-8 flex justify-center items-center py-1 px-2">
            <img src={FullLogo} alt="app-logo" />
          </div>
          <div className=" gap-2 text-center">
            <h1 className=" text-lg sm:text-3xl font-bold text-[#fafafa] p-2">
              Welcome to <span className="text-[#8FB2F5]">TypeWeather</span>
            </h1>
            <p className=" text-sm sm:text-xl font-normal text-[#BFBFD4] p-2">
              Choose a city to see the weather forecast
            </p>
          </div>
        </header>
        <div className=" w-64 sm:w-96 self-center">
          <Searchbar onSearchHandler={handleOnSearch} />
        </div>
      </div>
      <div className=" text-center text-white text-sm mb-4 sm:flex sm:gap-2">
        <p className=" pb-1 sm:pb-0">Designed By Millena Martins 🎉,</p>
        <p>Developed By Vinay Bhamre ❤️</p>
      </div>
    </div>
  );
};

export default Home;
