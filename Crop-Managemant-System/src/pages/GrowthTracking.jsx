const GrowthTracking = () => {
  const crops = [
    {
      name: "Tomatoes",
      progress: 65,
      stage: "Flowering",
      icon: "🍅",
      field: "Field A",
      plantedDate: "2024-01-15",
      estimatedHarvest: "2024-04-15",
      health: "good",
      tasks: ["Watering", "Pruning"],
      growthHistory: [
        { date: "2024-01-15", stage: "Planting", progress: 0 },
        { date: "2024-02-01", stage: "Germination", progress: 20 },
        { date: "2024-02-20", stage: "Vegetative", progress: 45 },
      ],
    },
    {
      name: "Corn",
      progress: 40,
      stage: "Vegetative",
      icon: "🌽",
      field: "Field B",
      plantedDate: "2024-03-01",
      estimatedHarvest: "2024-08-01",
      health: "excellent",
      tasks: ["Fertilization"],
      growthHistory: [
        { date: "2024-03-01", stage: "Planting", progress: 0 },
        { date: "2024-03-20", stage: "Germination", progress: 25 },
      ],
    },
    {
      name: "Wheat",
      progress: 85,
      stage: "Ripening",
      icon: "🌾",
      field: "Field C",
      plantedDate: "2023-11-10",
      estimatedHarvest: "2024-05-10",
      health: "good",
      tasks: ["Monitor for pests"],
      growthHistory: [
        { date: "2023-11-10", stage: "Planting", progress: 0 },
        { date: "2024-01-15", stage: "Germination", progress: 30 },
        { date: "2024-03-01", stage: "Vegetative", progress: 60 },
        { date: "2024-04-01", stage: "Flowering", progress: 75 },
      ],
    },
    {
      name: "Rice",
      progress: 20,
      stage: "Seedling",
      icon: "🍚",
      field: "Field D",
      plantedDate: "2024-06-01",
      estimatedHarvest: "2024-10-01",
      health: "fair",
      tasks: ["Water management", "Weeding"],
      growthHistory: [
        { date: "2024-06-01", stage: "Planting", progress: 0 },
        { date: "2024-06-10", stage: "Germination", progress: 15 },
      ],
    },
    {
      name: "Carrots",
      progress: 55,
      stage: "Root Development",
      icon: "🥕",
      field: "Field A",
      plantedDate: "2024-02-01",
      estimatedHarvest: "2024-05-01",
      health: "excellent",
      tasks: ["Thinning"],
      growthHistory: [
        { date: "2024-02-01", stage: "Planting", progress: 0 },
        { date: "2024-02-20", stage: "Germination", progress: 25 },
        { date: "2024-03-15", stage: "Vegetative", progress: 40 },
      ],
    },
    {
      name: "Potatoes",
      progress: 70,
      stage: "Tuber Formation",
      icon: "🥔",
      field: "Field E",
      plantedDate: "2024-03-15",
      estimatedHarvest: "2024-07-15",
      health: "good",
      tasks: ["Hilling"],
      growthHistory: [
        { date: "2024-03-15", stage: "Planting", progress: 0 },
        { date: "2024-04-01", stage: "Germination", progress: 30 },
        { date: "2024-04-20", stage: "Vegetative", progress: 55 },
      ],
    },
  ];

  const growthStages = [
    { name: "Planting", progress: 0, color: "bg-gray-500" },
    { name: "Germination", progress: 20, color: "bg-blue-500" },
    { name: "Seedling", progress: 30, color: "bg-green-500" },
    { name: "Vegetative", progress: 50, color: "bg-lime-500" },
    { name: "Flowering", progress: 70, color: "bg-yellow-500" },
    { name: "Fruiting", progress: 85, color: "bg-orange-500" },
    { name: "Ripening", progress: 95, color: "bg-red-500" },
    { name: "Harvest", progress: 100, color: "bg-purple-500" },
  ];

  const getHealthColor = (health) => {
    switch (health) {
      case "excellent":
        return "bg-green-100 text-green-800 border-green-200";
      case "good":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "fair":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "poor":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStageColor = (progress) => {
    if (progress <= 20) return "bg-gray-500";
    if (progress <= 40) return "bg-blue-500";
    if (progress <= 60) return "bg-green-500";
    if (progress <= 80) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center">
              <span className="mr-3">📈</span>
              Growth Tracking
            </h1>
            <p className="text-gray-600 text-lg">
              Monitor and track your crop growth progress in real-time
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
              <span className="mr-2">📊</span>
              Growth Report
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <span className="mr-2">📷</span>
              Add Photos
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Crops</p>
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
                <p className="text-gray-600 text-sm">Avg. Progress</p>
                <p className="text-2xl font-bold text-gray-800">53%</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📈</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Ready Soon</p>
                <p className="text-2xl font-bold text-gray-800">2</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🪴</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Health Issues</p>
                <p className="text-2xl font-bold text-gray-800">1</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚠️</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Growth Cards */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <span className="mr-2">🌾</span>
                Crop Growth Overview
              </h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  Filter by Field
                </button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm hover:bg-gray-50">
                  Sort by Progress
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {crops.map((crop, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  {/* Crop Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="text-3xl">{crop.icon}</div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {crop.name}
                        </h3>
                        <p className="text-sm text-gray-500">{crop.field}</p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium border ${getHealthColor(
                        crop.health
                      )}`}
                    >
                      {crop.health.charAt(0).toUpperCase() +
                        crop.health.slice(1)}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 font-medium">
                        Growth Progress
                      </span>
                      <span className="font-bold text-green-600">
                        {crop.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full ${getStageColor(
                          crop.progress
                        )} transition-all duration-500`}
                        style={{ width: `${crop.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Stage and Dates */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-gray-600">Current Stage</p>
                      <p className="font-semibold text-gray-800">
                        {crop.stage}
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Planted</p>
                      <p className="font-semibold text-gray-800">
                        {crop.plantedDate}
                      </p>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Pending Tasks</p>
                    <div className="flex flex-wrap gap-2">
                      {crop.tasks.map((task, taskIndex) => (
                        <span
                          key={taskIndex}
                          className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs"
                        >
                          {task}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
                      Update Growth
                    </button>
                    <button className="px-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      📷
                    </button>
                    <button className="px-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
                      📋
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Update Growth Stage */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🔄</span>
                Update Growth Stage
              </h2>
              <div className="space-y-4">
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Select Crop</option>
                  {crops.map((crop) => (
                    <option key={crop.name}>{crop.name}</option>
                  ))}
                </select>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Growth Stage
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Select Stage</option>
                    {growthStages.map((stage) => (
                      <option key={stage.name}>{stage.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Progress Percentage
                  </label>
                  <input type="range" min="0" max="100" className="w-full" />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0%</span>
                    <span>50%</span>
                    <span>100%</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Notes
                  </label>
                  <textarea
                    placeholder="Add observations or notes..."
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent h-20"
                  />
                </div>

                <button className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  Update Growth Data
                </button>
              </div>
            </div>

            {/* Growth Stages Guide */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">📚</span>
                Growth Stages Guide
              </h2>
              <div className="space-y-3">
                {growthStages.map((stage, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${stage.color}`}
                      ></div>
                      <span className="font-medium text-gray-800">
                        {stage.name}
                      </span>
                    </div>
                    <span className="text-sm text-gray-500">
                      {stage.progress}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Analytics */}
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <h3 className="font-semibold text-gray-800 mb-3">
                Growth Analytics
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Fastest Growing</span>
                  <span className="font-semibold">Wheat (+15%)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Needs Attention</span>
                  <span className="font-semibold text-red-600">Rice</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Harvest</span>
                  <span className="font-semibold">May 10</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthTracking;
