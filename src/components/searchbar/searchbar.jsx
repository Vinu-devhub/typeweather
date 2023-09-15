/* eslint-disable react/prop-types */
import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geoApiOptions } from "../../api";
import { dropDownStyle } from "./searchbar.constant";

const Searchbar = ({ onSearchHandler }) => {
  const [searchString, setSearchString] = useState(null);

  const loadOptions = (inputValue) => {
    return fetch(`${GEO_API_URL}?namePrefix=${inputValue}`, geoApiOptions)
      .then((response) => response.json())
      .then((result) => {
        return {
          options: result.data.map((city) => ({
            value: `${city.latitude} ${city.longitude}`,
            label: `${city.name}, ${city.countryCode}`,
          })),
        };
      })
      .catch((error) => console.error(error));
  };

  const handleOnChange = (searchData) => {
    setSearchString(searchData);
    onSearchHandler(searchData);
  };

  return (
    <AsyncPaginate
      placeholder="Search a city..."
      debounceTimeout={600}
      value={searchString}
      onChange={handleOnChange}
      loadOptions={loadOptions}
      styles={dropDownStyle}
      isClearable={true}
    />
  );
};

export default Searchbar;
