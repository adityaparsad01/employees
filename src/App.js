import React, { useState } from "react";

import { fetchWeather } from "./Api/fetchWeather";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");

  const search = async (e) => {
    if (e.Key === "Enter") {
      const data = await fetchWeather(query);
      
      console.log(data);
      console.log("hello");
    }
  };

  return (
    <>
      <div className="main-container">
        <input
          type="text"
          className="search"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
      </div>
    </>
  );
};
export default App;
