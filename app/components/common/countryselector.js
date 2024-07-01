"use client";
import React, { useState } from "react";
import ReactCountryFlagsSelect from "react-country-flags-select";

const CountrySelector = () => {
  const [selected, setSelected] = useState(null);
  return <ReactCountryFlagsSelect selected={selected} onSelect={setSelected} />;
};

export default CountrySelector;