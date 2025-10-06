import { useState } from "react";

const WeatherIntegration = () => {
  const [location, setLocation] = useState("Chennai, Tamil Nadu");
  const [units, setUnits] = useState("metric");
  const [refreshing, setRefreshing] = useState(false);

  const currentWeather = {
    temp: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    wind: 12,
    pressure: 1013,
    feelsLike: 30,
    uvIndex: 6,
    visibility: 10,
    sunrise: "6:15 AM",
    sunset: "6:30 PM",
    icon: "⛅",
  };

  const forecast = [
    {
      day: "Today",
      high: 28,
      low: 18,
      condition: "Partly Cloudy",
      rain: 10,
      icon: "⛅",
      wind: 12,
      humidity: 65,
    },
    {
      day: "Tomorrow",
      high: 30,
      low: 19,
      condition: "Sunny",
      rain: 0,
      icon: "☀️",
      wind: 8,
      humidity: 55,
    },
    {
      day: "Wed",
      high: 25,
      low: 17,
      condition: "Rain",
      rain: 80,
      icon: "🌧️",
      wind: 15,
      humidity: 85,
    },
    {
      day: "Thu",
      high: 27,
      low: 19,
      condition: "Cloudy",
      rain: 30,
      icon: "☁️",
      wind: 10,
      humidity: 70,
    },
    {
      day: "Fri",
      high: 29,
      low: 20,
      condition: "Sunny",
      rain: 5,
      icon: "☀️",
      wind: 7,
      humidity: 60,
    },
    {
      day: "Sat",
      high: 31,
      low: 21,
      condition: "Clear",
      rain: 0,
      icon: "🌞",
      wind: 6,
      humidity: 50,
    },
    {
      day: "Sun",
      high: 32,
      low: 22,
      condition: "Hot",
      rain: 0,
      icon: "🔥",
      wind: 5,
      humidity: 45,
    },
  ];

  const weatherAlerts = [
    {
      type: "rain",
      level: "warning",
      title: "Heavy Rain Expected",
      message: "80% chance of heavy rain on Wednesday",
      action: "Delay outdoor work",
      time: "2024-04-17",
      icon: "🌧️",
    },
    {
      type: "wind",
      level: "info",
      title: "Strong Winds Forecast",
      message: "Wind speeds up to 15 km/h expected",
      action: "Secure farm equipment",
      time: "2024-04-17",
      icon: "💨",
    },
    {
      type: "temperature",
      level: "info",
      title: "Temperature Rise",
      message: "Temperatures rising to 32°C by weekend",
      action: "Increase irrigation",
      time: "2024-04-20",
      icon: "🌡️",
    },
  ];

  const farmingAdvice = [
    {
      type: "irrigation",
      advice: "Ideal day for irrigation",
      reason: "Low rainfall expected next 2 days",
      priority: "high",
      icon: "💧",
    },
    {
      type: "fertilizer",
      advice: "Delay fertilizer application",
      reason: "Heavy rain expected in 2 days",
      priority: "medium",
      icon: "🧪",
    },
    {
      type: "harvest",
      advice: "Good harvesting conditions",
      reason: "Dry weather for next 3 days",
      priority: "high",
      icon: "🪴",
    },
    {
      type: "pest",
      advice: "Monitor for pests",
      reason: "High humidity may increase pest activity",
      priority: "medium",
      icon: "🐛",
    },
  ];

  const cropSpecificAdvice = {
    Tomatoes: "Reduce watering due to high humidity",
    Corn: "Ideal growing conditions this week",
    Wheat: "Monitor for fungal diseases in humid weather",
    Rice: "Perfect conditions for rice cultivation",
  };

  const refreshWeather = () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
      // In real app, this would update weather data
    }, 2000);
  };

  const getAlertColor = (level) => {
    switch (level) {
      case "warning":
        return "bg-red-50 border-red-200 text-red-800";
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-800";
      case "success":
        return "bg-green-50 border-green-200 text-green-800";
      default:
        return "bg-gray-50 border-gray-200 text-gray-800";
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "bg-red-100 text-red-800";
      case "medium":
        return "bg-yellow-100 text-yellow-800";
      case "low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const exportWeatherReport = () => {
    const report = {
      location,
      currentWeather,
      forecast,
      alerts: weatherAlerts,
      advice: farmingAdvice,
      generatedAt: new Date().toISOString(),
    };

    const data = JSON.stringify(report, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `weather-report-${location}-${
      new Date().toISOString().split("T")[0]
    }.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const shareWeather = () => {
    const text = `Current weather in ${location}: ${currentWeather.temp}°C, ${currentWeather.condition}. Check farm weather dashboard for more details.`;

    if (navigator.share) {
      navigator.share({
        title: `Weather Report - ${location}`,
        text: text,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(text);
      alert("Weather report copied to clipboard!");
    }
  };

  const toggleUnits = () => {
    setUnits(units === "metric" ? "imperial" : "metric");
  };

  return (
    <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center">
              <span className="mr-3">🌤️</span>
              Weather Integration
            </h1>
            <p className="text-gray-600 text-lg">
              Real-time weather data and farming recommendations for {location}
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button
              onClick={refreshWeather}
              disabled={refreshing}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center disabled:bg-blue-400"
            >
              <span className={`mr-2 ${refreshing ? "animate-spin" : ""}`}>
                🔄
              </span>
              {refreshing ? "Updating..." : "Refresh"}
            </button>
            <button
              onClick={exportWeatherReport}
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center"
            >
              <span className="mr-2">📤</span>
              Export Report
            </button>
          </div>
        </div>

        {/* Location and Controls */}
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-600">📍</span>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter location"
                />
              </div>
              <button
                onClick={toggleUnits}
                className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {units === "metric" ? "°C" : "°F"}
              </button>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={shareWeather}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center"
              >
                <span className="mr-2">📤</span>
                Share
              </button>
              <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center">
                <span className="mr-2">📅</span>
                Add to Calendar
              </button>
            </div>
          </div>
        </div>

        {/* Current Weather */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center">
              <span className="mr-2">🌡️</span>
              Current Weather
            </h2>
            <div className="text-sm text-gray-500">
              Last updated: {new Date().toLocaleTimeString()}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="text-3xl font-bold text-blue-600">
                {currentWeather.temp}°
              </div>
              <div className="text-gray-600 text-sm">Temperature</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl border border-green-100">
              <div className="text-2xl font-bold text-green-600 flex items-center justify-center">
                <span className="mr-1">{currentWeather.icon}</span>
                {currentWeather.condition}
              </div>
              <div className="text-gray-600 text-sm">Condition</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-xl border border-yellow-100">
              <div className="text-2xl font-bold text-yellow-600">
                {currentWeather.humidity}%
              </div>
              <div className="text-gray-600 text-sm">Humidity</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="text-2xl font-bold text-purple-600">
                {currentWeather.wind} km/h
              </div>
              <div className="text-gray-600 text-sm">Wind Speed</div>
            </div>
            <div className="text-center p-4 bg-red-50 rounded-xl border border-red-100">
              <div className="text-2xl font-bold text-red-600">
                {currentWeather.feelsLike}°
              </div>
              <div className="text-gray-600 text-sm">Feels Like</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-100">
              <div className="text-2xl font-bold text-orange-600">
                {currentWeather.uvIndex}
              </div>
              <div className="text-gray-600 text-sm">UV Index</div>
            </div>
            <div className="text-center p-4 bg-cyan-50 rounded-xl border border-cyan-100">
              <div className="text-2xl font-bold text-cyan-600">
                {currentWeather.sunrise}
              </div>
              <div className="text-gray-600 text-sm">Sunrise</div>
            </div>
            <div className="text-center p-4 bg-indigo-50 rounded-xl border border-indigo-100">
              <div className="text-2xl font-bold text-indigo-600">
                {currentWeather.sunset}
              </div>
              <div className="text-gray-600 text-sm">Sunset</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 7-Day Forecast */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">📅</span>
              7-Day Forecast
            </h2>
            <div className="space-y-3">
              {forecast.map((day, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{day.icon}</span>
                    <div>
                      <p className="font-medium">{day.day}</p>
                      <p className="text-sm text-gray-600">{day.condition}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-800">
                      {day.high}° / {day.low}°
                    </p>
                    <div className="flex items-center space-x-2 text-sm">
                      <span
                        className={`font-medium ${
                          day.rain > 50
                            ? "text-red-600"
                            : day.rain > 20
                            ? "text-yellow-600"
                            : "text-green-600"
                        }`}
                      >
                        💧 {day.rain}%
                      </span>
                      <span className="text-gray-500">💨 {day.wind}km/h</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Weather Alerts */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <span className="mr-2">⚠️</span>
                Weather Alerts
              </h2>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                {weatherAlerts.length} Active
              </span>
            </div>
            <div className="space-y-3">
              {weatherAlerts.map((alert, index) => (
                <div
                  key={index}
                  className={`p-4 border-l-4 rounded-lg ${getAlertColor(
                    alert.level
                  )}`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">{alert.icon}</span>
                    <div className="flex-1">
                      <p className="font-medium">{alert.title}</p>
                      <p className="text-sm opacity-80 mt-1">{alert.message}</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-sm font-medium">
                          Action: {alert.action}
                        </span>
                        <span className="text-xs opacity-70">{alert.time}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Farming Advice */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🌱</span>
              Farming Advice
            </h2>
            <div className="space-y-3">
              {farmingAdvice.map((advice, index) => (
                <div
                  key={index}
                  className="p-3 bg-green-50 rounded-lg border border-green-200"
                >
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">{advice.icon}</span>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <p className="font-medium text-green-800">
                          {advice.advice}
                        </p>
                        <span
                          className={`px-2 py-1 rounded text-xs font-medium ${getPriorityColor(
                            advice.priority
                          )}`}
                        >
                          {advice.priority}
                        </span>
                      </div>
                      <p className="text-sm text-green-700 mt-1">
                        {advice.reason}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Crop Specific Advice */}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-3">
                  Crop-Specific Advice
                </h3>
                <div className="space-y-2">
                  {Object.entries(cropSpecificAdvice).map(
                    ([crop, advice], index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center p-2 hover:bg-gray-50 rounded"
                      >
                        <span className="font-medium text-sm text-gray-700">
                          {crop}
                        </span>
                        <span className="text-xs text-gray-600 text-right">
                          {advice}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Data */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">📊</span>
            Weather Analytics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl">
              <div className="text-2xl font-bold">28°C</div>
              <div className="text-sm opacity-90">Avg Temperature</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl">
              <div className="text-2xl font-bold">45mm</div>
              <div className="text-sm opacity-90">Monthly Rainfall</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl">
              <div className="text-2xl font-bold">12</div>
              <div className="text-sm opacity-90">Sunny Days</div>
            </div>
            <div className="text-center p-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl">
              <div className="text-2xl font-bold">65%</div>
              <div className="text-sm opacity-90">Avg Humidity</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherIntegration;
