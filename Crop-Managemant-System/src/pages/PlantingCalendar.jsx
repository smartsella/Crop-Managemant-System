const PlantingCalendar = () => {
  const crops = [
    {
      name: "Tomatoes",
      plant: "Jan",
      harvest: "Apr",
      duration: "90 days",
      type: "Vegetable",
      icon: "🍅",
      status: "planted",
      progress: 75,
      field: "Field A",
    },
    {
      name: "Corn",
      plant: "Mar",
      harvest: "Aug",
      duration: "120 days",
      type: "Grain",
      icon: "🌽",
      status: "growing",
      progress: 40,
      field: "Field B",
    },
    {
      name: "Wheat",
      plant: "Nov",
      harvest: "May",
      duration: "180 days",
      type: "Grain",
      icon: "🌾",
      status: "growing",
      progress: 60,
      field: "Field C",
    },
    {
      name: "Rice",
      plant: "Jun",
      harvest: "Oct",
      duration: "120 days",
      type: "Grain",
      icon: "🍚",
      status: "planned",
      progress: 0,
      field: "Field D",
    },
    {
      name: "Carrots",
      plant: "Feb",
      harvest: "May",
      duration: "70 days",
      type: "Vegetable",
      icon: "🥕",
      status: "planted",
      progress: 50,
      field: "Field A",
    },
    {
      name: "Potatoes",
      plant: "Mar",
      harvest: "Jul",
      duration: "90 days",
      type: "Vegetable",
      icon: "🥔",
      status: "growing",
      progress: 30,
      field: "Field E",
    },
  ];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const seasons = [
    { name: "Spring", months: ["Mar", "Apr", "May"], color: "bg-green-100" },
    { name: "Summer", months: ["Jun", "Jul", "Aug"], color: "bg-yellow-100" },
    { name: "Fall", months: ["Sep", "Oct", "Nov"], color: "bg-orange-100" },
    { name: "Winter", months: ["Dec", "Jan", "Feb"], color: "bg-blue-100" },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "planted":
        return "bg-blue-100 text-blue-800";
      case "growing":
        return "bg-green-100 text-green-800";
      case "harvesting":
        return "bg-orange-100 text-orange-800";
      case "planned":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getProgressColor = (progress) => {
    if (progress < 30) return "bg-red-500";
    if (progress < 70) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-cyan-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center">
              <span className="mr-3">📅</span>
              Planting Calendar
            </h1>
            <p className="text-gray-600 text-lg">
              Plan and track your crop planting and harvesting schedule
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
              <span className="mr-2">📤</span>
              Export Schedule
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <span className="mr-2">🖨️</span>
              Print Calendar
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Crops</p>
                <p className="text-2xl font-bold text-gray-800">6</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🌱</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Growing</p>
                <p className="text-2xl font-bold text-gray-800">4</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📈</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Ready to Harvest</p>
                <p className="text-2xl font-bold text-gray-800">1</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🪴</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Upcoming Planting</p>
                <p className="text-2xl font-bold text-gray-800">2</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📋</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Calendar Table */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <span className="mr-2">🌾</span>
                Crop Schedule
              </h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  Filter
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  Sort
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Crop
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Planting
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Harvesting
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Progress
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {crops.map((crop, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{crop.icon}</div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {crop.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              {crop.field}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                          {crop.plant}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          {crop.harvest}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${getProgressColor(
                                crop.progress
                              )}`}
                              style={{ width: `${crop.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-600">
                            {crop.progress}%
                          </span>
                        </div>
                      </td>
                      <td className="p-4">
                        <span
                          className={`${getStatusColor(
                            crop.status
                          )} px-3 py-1 rounded-full text-sm font-medium`}
                        >
                          {crop.status.charAt(0).toUpperCase() +
                            crop.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800 p-1">
                            <span className="text-lg">✏️</span>
                          </button>
                          <button className="text-green-600 hover:text-green-800 p-1">
                            <span className="text-lg">📊</span>
                          </button>
                          <button className="text-red-600 hover:text-red-800 p-1">
                            <span className="text-lg">🗑️</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar - Add Crop & Seasons */}
          <div className="space-y-6">
            {/* Add New Crop */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">➕</span>
                Add New Crop
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Crop Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <div className="grid grid-cols-2 gap-3">
                  <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Planting Month</option>
                    {months.map((month) => (
                      <option key={month}>{month}</option>
                    ))}
                  </select>
                  <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Harvest Month</option>
                    {months.map((month) => (
                      <option key={month}>{month}</option>
                    ))}
                  </select>
                </div>
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select Field</option>
                  <option>Field A</option>
                  <option>Field B</option>
                  <option>Field C</option>
                  <option>Field D</option>
                  <option>Field E</option>
                </select>
                <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Add Crop to Schedule
                </button>
              </div>
            </div>

            {/* Seasonal Guide */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🌤️</span>
                Seasonal Planting Guide
              </h2>
              <div className="space-y-3">
                {seasons.map((season, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg ${season.color} border`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-gray-800">
                        {season.name}
                      </span>
                      <span className="text-sm text-gray-600">
                        {season.months.join(", ")}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-600">
                      {season.name === "Spring" &&
                        "Ideal for tomatoes, corn, carrots"}
                      {season.name === "Summer" &&
                        "Perfect for rice, peppers, beans"}
                      {season.name === "Fall" &&
                        "Best for wheat, garlic, onions"}
                      {season.name === "Winter" &&
                        "Suitable for winter greens, cover crops"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-3">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full text-left p-2 hover:bg-blue-100 rounded-lg transition-colors">
                  📋 Generate Planting Report
                </button>
                <button className="w-full text-left p-2 hover:bg-blue-100 rounded-lg transition-colors">
                  🔔 Set Harvest Reminders
                </button>
                <button className="w-full text-left p-2 hover:bg-blue-100 rounded-lg transition-colors">
                  📊 View Yield Projections
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantingCalendar;
