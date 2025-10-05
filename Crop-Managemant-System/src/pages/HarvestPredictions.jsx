const HarvestPredictions = () => {
  const predictions = [
    {
      crop: "Tomatoes",
      harvest: "Apr 20, 2024",
      yield: "4500 kg",
      confidence: "85%",
    },
    {
      crop: "Corn",
      harvest: "Jul 15, 2024",
      yield: "3200 kg",
      confidence: "78%",
    },
    {
      crop: "Wheat",
      harvest: "May 10, 2024",
      yield: "2800 kg",
      confidence: "92%",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Harvest Predictions
        </h1>
        <p className="text-gray-600 mb-6">
          AI-powered harvest and yield predictions
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Prediction Calculator
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Crop Type</label>
                <select className="w-full p-3 border rounded">
                  <option>Tomatoes</option>
                  <option>Corn</option>
                  <option>Wheat</option>
                  <option>Rice</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Planted Date</label>
                <input type="date" className="w-full p-3 border rounded" />
              </div>

              <div>
                <label className="block text-gray-700 mb-2">Area (acres)</label>
                <input
                  type="number"
                  className="w-full p-3 border rounded"
                  placeholder="Enter area"
                />
              </div>

              <button className="w-full bg-green-600 text-white p-3 rounded hover:bg-green-700">
                Calculate Prediction
              </button>
            </div>

            <div className="mt-6 p-4 bg-green-50 rounded">
              <h3 className="font-bold text-green-800 mb-2">
                Prediction Result
              </h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div>Expected Harvest:</div>
                <div className="font-bold">April 20, 2024</div>

                <div>Estimated Yield:</div>
                <div className="font-bold">4,500 kg</div>

                <div>Confidence:</div>
                <div className="font-bold">85%</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Current Predictions
            </h2>

            <div className="space-y-4">
              {predictions.map((prediction, index) => (
                <div key={index} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{prediction.crop}</h3>
                    <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                      {prediction.confidence}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Harvest Date:</div>
                    <div className="font-bold text-green-600">
                      {prediction.harvest}
                    </div>

                    <div>Expected Yield:</div>
                    <div className="font-bold text-orange-600">
                      {prediction.yield}
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarvestPredictions;
