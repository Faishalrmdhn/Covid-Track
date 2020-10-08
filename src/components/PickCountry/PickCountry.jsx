import React, { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, NativeSelect } from "@material-ui/core";
import styles from "./PickCountry.module.css";

const PickCountry = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getCountry();
  }, []);
  function getCountry() {
    axios
      .get("https://covid.mathdro.id/api/countries")
      .then((res) => {
        console.log(res.data.countries);
        let { countries } = res.data;
        countries = countries.map((item) => item.name);
        setCountries(countries);
        console.log(countries);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div>
      <FormControl className={styles.formControl}>
        <NativeSelect onChange={(event) => handleCountryChange(event)}>
          <option value="">Global</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

export default PickCountry;
