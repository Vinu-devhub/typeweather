/* eslint-disable react/prop-types */
import { WEEK_DAYS, iconMaps } from "./forecast.constant";

const Forecast = ({ forecastData }) => {
  const dayInAWeek = new Date().getDay();

  const forcastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek),
  );

  return (
    <section className=" flex flex-col text-white p-2 gap-2 mb-3 md:mb-0 md:p-3 md:gap-4 bg-[#16161F] mt-4 rounded-lg">
      <div>
        <h2 className=" text-base md:text-xl font-normal text-[#7F7F98]">
          5 day forecast
        </h2>
      </div>
      <div className=" grid grid-cols-5">
        {forecastData?.slice(0, 5)?.map((day, index) => (
          <div
            key={index}
            className=" col-span-1 flex flex-col justify-center items-center p-1 gap-2 lg:px-4 md:py-2 md:gap-3"
          >
            <p className=" w-12 md:w-full text-base text-center font-bold capitalize truncate">
              {forcastDays[index]}
            </p>
            <img
              src={iconMaps[day.weather[0].icon]}
              alt="weather-icon"
              className=" w-12 h-12 md:w-16 md:h-16"
            />
            <div className=" text-center">
              <p className=" hidden md:block text-sm md:text-xl text-[#BFBFD4] mb-2">
                {day.weather[0].main}
              </p>
              <div className=" md:flex gap-2">
                <p className=" text-xs md:text-base font-bold text-white pb-1 md:pb-0 ">
                  {Math.round(day.main.temp_min)}°C
                </p>
                <p className=" text-xs md:text-base font-bold text-[#7F7F98]">
                  {Math.round(day.main.temp_max)}°C
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Forecast;
