import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Data from "./components/Data";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const API_KEY = "don't sneak in";

  const handleSearch = async () => {
    if (!city.trim()) return;

    try {
      setLoading(true);

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error("City not found");
      }

      const data = await response.json();

      setWeather(data);
    } catch (error) {
      console.error(error);
      setWeather(null);
      alert("City not found. Please try another city.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <Hero
        city={city}
        setCity={setCity}
        onSearch={handleSearch}
        loading={loading}
      />

      <Data weather={weather} />
    </div>
  );
};

export default App;