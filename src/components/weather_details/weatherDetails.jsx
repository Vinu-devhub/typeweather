/* eslint-disable react/prop-types */
import {
  CloudRain,
  Drop,
  Gauge,
  Thermometer,
  Wind,
} from "@phosphor-icons/react";

const WeatherDetails = ({ currentWeather }) => {
  return (
    <section className=" text-white px-3 md:px-6 py-2 bg-[#16161F] mt-4 rounded-lg">
      <div>
        <h2 className=" text-base lg:text-xl text-[#7F7F98]">
          Today&#39;s weather details
        </h2>
      </div>
      <div>
        <div className="flex justify-between py-3 md:py-4 gap-12 md:gap-0 items-center border-b-2 border-black">
          <div className="flex gap-3 items-center">
            <Thermometer size={32} color="#3B3B55" />
            <p className=" text-sm md:text-xl font-bold text-[#BFBFD4]">Thermal Sensation</p>
          </div>
          <span className=" text-base md:text-2xl font-bold">
            {Math.round(currentWeather?.main?.feels_like)}
            <sup>o</sup>  c
          </span>
        </div>
        <div className="flex justify-between py-3 md:py-4 gap-12 md:gap-0  items-center border-b-2 border-black">
          <div className="flex gap-3 items-center">
            <CloudRain size={32} color="#3B3B55" />
            <p className=" text-sm md:text-xl font-bold text-[#BFBFD4]">Rain Probability</p>
          </div>
          <span className=" text-base md:text-2xl font-bold">
            {currentWeather?.clouds?.all} %
          </span>
        </div>
        <div className="flex justify-between py-3 md:py-4 gap-12 md:gap-0  items-center border-b-2 border-black">
          <div className="flex gap-3 items-center">
            <Wind size={32} color="#3B3B55" />
            <p className=" text-sm md:text-xl font-bold text-[#BFBFD4]">Wind Speed</p>
          </div>
          <span className=" text-base md:text-2xl font-bold">
            {currentWeather?.wind?.speed} m/s
          </span>
        </div>
        <div className="flex justify-between py-3 md:py-4 gap-12 md:gap-0  items-center border-b-2 border-black">
          <div className="flex gap-3 items-center">
            <Drop size={32} color="#3B3B55" />
            <p className=" text-sm md:text-xl font-bold text-[#BFBFD4]">Air Humidity</p>
          </div>
          <span className=" text-base md:text-2xl font-bold">
            {currentWeather?.main?.humidity} %
          </span>
        </div>
        <div className="flex justify-between py-3 md:py-4 gap-12 md:gap-0  items-center">
          <div className="flex gap-3 items-center">
            <Gauge size={32} color="#3B3B55" />
            <p className=" text-sm md:text-xl font-bold text-[#BFBFD4]">Pressure</p>
          </div>
          <span className=" text-base md:text-2xl font-bold">
            {currentWeather?.main?.pressure}
          </span>
        </div>
      </div>
    </section>
  );
};

export default WeatherDetails;
