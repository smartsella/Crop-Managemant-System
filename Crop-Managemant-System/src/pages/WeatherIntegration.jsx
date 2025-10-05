const WeatherIntegration = () => {
  const currentWeather = {
    temp: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    wind: 12,
  };

  const forecast = [
    { day: "Today", high: 28, low: 18, condition: "Partly Cloudy", rain: 10 },
    { day: "Tomorrow", high: 30, low: 19, condition: "Sunny", rain: 0 },
    { day: "Wed", high: 25, low: 17, condition: "Rain", rain: 80 },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Weather Integration
        </h1>
        <p className="text-gray-600 mb-6">
          Real-time weather data for your farm
        </p>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Current Weather
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded">
              <div className="text-2xl font-bold">{currentWeather.temp}°C</div>
              <div className="text-gray-600">Temperature</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded">
              <div className="text-2xl font-bold">
                {currentWeather.condition}
              </div>
              <div className="text-gray-600">Condition</div>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded">
              <div className="text-2xl font-bold">
                {currentWeather.humidity}%
              </div>
              <div className="text-gray-600">Humidity</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded">
              <div className="text-2xl font-bold">
                {currentWeather.wind} km/h
              </div>
              <div className="text-gray-600">Wind Speed</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              3-Day Forecast
            </h2>
            <div className="space-y-3">
              {forecast.map((day, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-3 border-b"
                >
                  <div>
                    <p className="font-medium">{day.day}</p>
                    <p className="text-sm text-gray-600">{day.condition}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold">
                      {day.high}° / {day.low}°
                    </p>
                    <p
                      className={`text-sm ${
                        day.rain > 50 ? "text-red-600" : "text-green-600"
                      }`}
                    >
                      {day.rain}% rain
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Weather Alerts
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500">
                <p className="font-medium">Heavy rain expected Wednesday</p>
                <p className="text-sm text-gray-600">
                  Plan irrigation accordingly
                </p>
              </div>
              <div className="p-3 bg-blue-50 border-l-4 border-blue-500">
                <p className="font-medium">Strong winds forecast</p>
                <p className="text-sm text-gray-600">Secure farm equipment</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Farming Advice
            </h2>
            <div className="space-y-3">
              <div className="p-3 bg-green-50 rounded">
                <p className="font-medium">Good day for irrigation</p>
                <p className="text-sm text-gray-600">Low rainfall expected</p>
              </div>
              <div className="p-3 bg-yellow-50 rounded">
                <p className="font-medium">Delay fertilizer application</p>
                <p className="text-sm text-gray-600">Rain expected in 2 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherIntegration;
