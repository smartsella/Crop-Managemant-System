import { useState } from "react";

const HarvestPredictions = () => {
  const [selectedCrop, setSelectedCrop] = useState("Tomatoes");
  const [plantedDate, setPlantedDate] = useState("");
  const [area, setArea] = useState("");
  const [predictionResult, setPredictionResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const predictions = [
    {
      crop: "Tomatoes",
      harvest: "Apr 20, 2024",
      yield: "4500 kg",
      confidence: "85%",
      icon: "🍅",
      field: "Field A",
      progress: 65,
      status: "optimal",
      priceProjection: "$2,250",
      risk: "Low",
    },
    {
      crop: "Corn",
      harvest: "Jul 15, 2024",
      yield: "3200 kg",
      confidence: "78%",
      icon: "🌽",
      field: "Field B",
      progress: 40,
      status: "good",
      priceProjection: "$1,920",
      risk: "Medium",
    },
    {
      crop: "Wheat",
      harvest: "May 10, 2024",
      yield: "2800 kg",
      confidence: "92%",
      icon: "🌾",
      field: "Field C",
      progress: 85,
      status: "excellent",
      priceProjection: "$1,680",
      risk: "Low",
    },
    {
      crop: "Rice",
      harvest: "Oct 5, 2024",
      yield: "3800 kg",
      confidence: "75%",
      icon: "🍚",
      field: "Field D",
      progress: 20,
      status: "monitoring",
      priceProjection: "$2,280",
      risk: "High",
    },
  ];

  const cropData = {
    Tomatoes: { duration: 90, avgYield: 5000, season: "Spring" },
    Corn: { duration: 120, avgYield: 3500, season: "Summer" },
    Wheat: { duration: 180, avgYield: 3000, season: "Winter" },
    Rice: { duration: 120, avgYield: 4000, season: "Monsoon" },
  };

  const calculatePrediction = () => {
    if (!plantedDate || !area) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    // Simulate AI calculation
    setTimeout(() => {
      const cropInfo = cropData[selectedCrop];
      const planted = new Date(plantedDate);
      const harvestDate = new Date(planted);
      harvestDate.setDate(planted.getDate() + cropInfo.duration);

      const areaNum = parseFloat(area);
      const baseYield = cropInfo.avgYield * areaNum;
      const randomFactor = 0.8 + Math.random() * 0.4; // 0.8 to 1.2
      const predictedYield = Math.round(baseYield * randomFactor);

      const confidence = Math.round(75 + Math.random() * 20);

      setPredictionResult({
        harvestDate: harvestDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        yield: predictedYield.toLocaleString() + " kg",
        confidence: confidence + "%",
        revenue: "$" + Math.round(predictedYield * 0.5).toLocaleString(),
        daysRemaining: Math.ceil(
          (harvestDate - new Date()) / (1000 * 60 * 60 * 24)
        ),
      });

      setLoading(false);
    }, 2000);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "excellent":
        return "bg-green-100 text-green-800";
      case "optimal":
        return "bg-blue-100 text-blue-800";
      case "good":
        return "bg-yellow-100 text-yellow-800";
      case "monitoring":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case "Low":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "High":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const exportPredictions = () => {
    const data = JSON.stringify(predictions, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "harvest-predictions.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const sharePrediction = (crop) => {
    if (navigator.share) {
      navigator.share({
        title: `${crop} Harvest Prediction`,
        text: `Check out the harvest prediction for ${crop}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(
        `Harvest prediction for ${crop}: ${
          predictions.find((p) => p.crop === crop)?.yield
        } expected on ${predictions.find((p) => p.crop === crop)?.harvest}`
      );
      alert("Prediction copied to clipboard!");
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-amber-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center">
              <span className="mr-3">🔮</span>
              Harvest Predictions
            </h1>
            <p className="text-gray-600 text-lg">
              AI-powered harvest and yield predictions with market insights
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button
              onClick={exportPredictions}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <span className="mr-2">📤</span>
              Export Data
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
              <span className="mr-2">🔄</span>
              Refresh AI
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Predictions</p>
                <p className="text-2xl font-bold text-gray-800">4</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">📊</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Avg Confidence</p>
                <p className="text-2xl font-bold text-gray-800">82%</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Yield</p>
                <p className="text-2xl font-bold text-gray-800">14.3T</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚖️</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Revenue Projection</p>
                <p className="text-2xl font-bold text-gray-800">$8,130</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">💰</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Prediction Calculator */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">🧮</span>
              AI Prediction Calculator
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">
                  Crop Type
                </label>
                <select
                  value={selectedCrop}
                  onChange={(e) => setSelectedCrop(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                >
                  {Object.keys(cropData).map((crop) => (
                    <option key={crop} value={crop}>
                      {crop}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Planted Date
                  </label>
                  <input
                    type="date"
                    value={plantedDate}
                    onChange={(e) => setPlantedDate(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Area (acres)
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter area"
                  />
                </div>
              </div>

              <button
                onClick={calculatePrediction}
                disabled={loading}
                className={`w-full p-3 rounded-lg font-semibold transition-colors ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                {loading ? (
                  <span className="flex items-center justify-center">
                    <span className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></span>
                    Calculating...
                  </span>
                ) : (
                  "Calculate AI Prediction"
                )}
              </button>
            </div>

            {predictionResult && (
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                <h3 className="font-bold text-green-800 mb-3 text-lg flex items-center">
                  <span className="mr-2">🎯</span>
                  AI Prediction Result
                </h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="text-gray-600">Expected Harvest:</div>
                  <div className="font-bold text-green-700">
                    {predictionResult.harvestDate}
                  </div>

                  <div className="text-gray-600">Estimated Yield:</div>
                  <div className="font-bold text-orange-600">
                    {predictionResult.yield}
                  </div>

                  <div className="text-gray-600">Confidence Level:</div>
                  <div className="font-bold text-blue-600">
                    {predictionResult.confidence}
                  </div>

                  <div className="text-gray-600">Revenue Projection:</div>
                  <div className="font-bold text-purple-600">
                    {predictionResult.revenue}
                  </div>

                  <div className="text-gray-600">Days Remaining:</div>
                  <div className="font-bold">
                    {predictionResult.daysRemaining} days
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Current Predictions */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <span className="mr-2">📈</span>
                Current Predictions
              </h2>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                AI Updated
              </span>
            </div>

            <div className="space-y-4">
              {predictions.map((prediction, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="text-2xl">{prediction.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">
                          {prediction.crop}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {prediction.field}
                        </p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                          prediction.status
                        )}`}
                      >
                        {prediction.status}
                      </span>
                      <button
                        onClick={() => sharePrediction(prediction.crop)}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                        title="Share Prediction"
                      >
                        📤
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm mb-3">
                    <div className="text-gray-600">Harvest Date:</div>
                    <div className="font-bold text-green-600">
                      {prediction.harvest}
                    </div>

                    <div className="text-gray-600">Expected Yield:</div>
                    <div className="font-bold text-orange-600">
                      {prediction.yield}
                    </div>

                    <div className="text-gray-600">Revenue:</div>
                    <div className="font-bold text-purple-600">
                      {prediction.priceProjection}
                    </div>

                    <div className="text-gray-600">Risk Level:</div>
                    <div
                      className={`px-2 py-1 rounded text-xs font-medium ${getRiskColor(
                        prediction.risk
                      )}`}
                    >
                      {prediction.risk}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        AI Confidence: {prediction.confidence}
                      </span>
                      <span className="font-medium">
                        {prediction.progress}% Complete
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${prediction.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Market Insights */}
        <div className="mt-6 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
            <span className="mr-2">💹</span>
            Market Insights & Recommendations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-blue-800 mb-2">
                📈 Price Trends
              </h3>
              <p className="text-sm text-blue-700">
                Tomato prices expected to rise 15% in coming weeks
              </p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h3 className="font-semibold text-green-800 mb-2">
                🌱 Best Practices
              </h3>
              <p className="text-sm text-green-700">
                Optimize irrigation for corn in Field B
              </p>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
              <h3 className="font-semibold text-orange-800 mb-2">
                ⚠️ Risk Alerts
              </h3>
              <p className="text-sm text-orange-700">
                Monitor rice field for potential flooding risk
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarvestPredictions;
