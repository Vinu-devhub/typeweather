/* eslint-disable react/prop-types */
import DivideDot from "../../assets/Divider_dot.svg";
import IconLogo from "../../assets/weather-app-logo_2.svg";
import { iconMaps } from "../forecast/forecast.constant";
import Searchbar from "../searchbar/searchbar";
import { MONTHS, WEEK_DAYS, bgMaps } from "./weather.constant";

const CurrentWeather = ({ currentWeather, searchCity, handleOnSearch }) => {
  const currentDate = new Date();

  function convertMillisecondsToTime() {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return (
    <section className=" inline md:col-span-6 md:flex flex-col items-center px-2 md:px-4 md:mt-4 gap-4 justify-between">
      <div className=" flex gap-2 md:gap-3 w-full mb-4 md:mb-0">
        <div className=" p-2 bg-[#1E1E29] flex justify-center items-center rounded-md">
          <img src={IconLogo} alt="" className=" w-11 md:w-14" />
        </div>
        <div className=" w-full">
          <Searchbar onSearchHandler={handleOnSearch} />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${bgMaps[currentWeather?.weather[0]?.icon]})`,
        }}
        className=" flex flex-col justify-between w-full h-full pl-4 pt-4 md:pl-8 md:pt-8 rounded-lg shadow-[0px_2px_30px_0px_#00000020]"
      >
        <div className=" flex justify-between">
          <div className=" gap-2 text-left">
            <p className=" text-xl font-bold text-[#FAFAFA]">{searchCity}</p>
            <p className=" text-sm font-normal text-[#FAFAFA]">
              {WEEK_DAYS[currentDate.getDay()]}, {currentDate.getDate()}{" "}
              {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
            </p>
          </div>
          <p className=" text-xl font-bold text-[#FAFAFA] pr-4 md:pr-8">
            {convertMillisecondsToTime()}
          </p>
        </div>
        <div className=" flex items-end justify-between ">
          <div className=" text-left text-white pb-8">
            <div className=" pb-2 text-5xl md:text-8xl font-extrabold ">
              {Math.round(currentWeather?.main?.temp)}
              <span className="">°c</span>
            </div>
            <div className=" md:flex gap-2 items-center">
              <p className=" text-base md:text-xl font-bold">
                {Math.round(currentWeather?.main?.temp_max)}°C &nbsp;/&nbsp;
                {Math.round(currentWeather?.main?.temp_min)}°C
              </p>
              <span className=" hidden md:block w-2 h-2 ">
                <img src={DivideDot} alt="" />
              </span>
              <p className=" text-sm md:text-xl font-normal">
                {currentWeather?.weather[0]?.description}
              </p>
            </div>
          </div>
          <div>
            <img
              src={iconMaps[currentWeather?.weather[0]?.icon]}
              alt=""
              className=" h-48 md:w-60 md:h-60 "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
