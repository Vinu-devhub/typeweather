import ClearSun from "../../assets/Weather=Clear_Moment=Day.svg";
import ClearMoon from "../../assets/Weather=Clear_Moment=Night.svg";
import CloudyDay from "../../assets/Weather=Cloudy_Moment=Day.svg";
import CloudyNight from "../../assets/Weather=Cloudy_Moment=Night.svg";
import FewCloudsDay from "../../assets/Weather=Few clouds_Moment=Day.svg";
import FewCloudsNight from "../../assets/Weather=Few clouds_Moment=Night.svg";
import RainDay from "../../assets/Weather=Rain_Moment=Day.svg";
import RainNight from "../../assets/Weather=Rain_Moment=Night.svg";
import SnowDay from "../../assets/Weather=Snow_Moment=Day.svg";
import SnowNight from "../../assets/Weather=Snow_Moment=Night.svg";
import StormDay from "../../assets/Weather=Storm_Moment=Day.svg";
import StormNight from "../../assets/Weather=Storm_Moment=Night.svg";

export const iconMaps = {
  "01d": ClearSun,
  "01n": ClearMoon,
  "02d": FewCloudsDay,
  "02n": FewCloudsNight,
  "03d": CloudyDay,
  "03n": CloudyNight,
  "04d": CloudyDay,
  "04n": CloudyNight,
  "09d": RainDay,
  "09n": RainNight,
  "10d": RainDay,
  "10n": RainNight,
  "11d": StormDay,
  "11n": StormNight,
  "13d": SnowDay,
  "13n": SnowNight,
  "50d": CloudyDay,
  "50n": CloudyNight,
};

export const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
