"use client";

import React, { useEffect, useState } from "react";

export default function News() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState("Hyderabad");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = "754aa203b6ec1a0ee6c9597779fbc962"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await res.json();
      if (res.ok) {
        setWeather(data);
      } else {
        setError(data.message);
        setWeather(null);
      }
    } catch (err) {
      setError("Something went wrong");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(query);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeather(query.trim().toLowerCase());
    }
  };

  return (
    <div className="w-full md:w-2/3 lg:w-1/2 mx-auto p-4 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-center">🌤️ Global Weather Tracker</h2>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3 mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter city name"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-all duration-200"
          disabled={loading}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>

      {loading && <p className="text-center text-blue-600">Loading weather data...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}

      {!weather && !loading && !error && (
        <p className="text-center text-gray-500">Search for a city's weather above.</p>
      )}

      {weather && (
        <div className="bg-white shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Weather in {weather.name}
          </h3>
          <table className="w-full text-left table-auto border-collapse">
            <tbody>
              <tr className="border-b">
                <td className="py-2 font-medium">🌡️ Temperature</td>
                <td className="py-2">{weather.main.temp}°C</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">💧 Humidity</td>
                <td className="py-2">{weather.main.humidity}%</td>
              </tr>
              <tr className="border-b">
                <td className="py-2 font-medium">🌬️ Wind Speed</td>
                <td className="py-2">{weather.wind.speed} m/s</td>
              </tr>
              <tr>
                <td className="py-2 font-medium">☁️ Condition</td>
                <td className="py-2 capitalize">{weather.weather[0].description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
