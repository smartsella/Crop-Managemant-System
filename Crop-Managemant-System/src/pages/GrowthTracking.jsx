const GrowthTracking = () => {
  const crops = [
    { name: "Tomatoes", progress: 65, stage: "Flowering" },
    { name: "Corn", progress: 40, stage: "Vegetative" },
    { name: "Wheat", progress: 85, stage: "Ripening" },
    { name: "Rice", progress: 20, stage: "Seedling" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Growth Tracking
        </h1>
        <p className="text-gray-600 mb-6">Monitor your crop growth progress</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {crops.map((crop, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {crop.name}
              </h3>

              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Progress</span>
                  <span className="font-bold text-green-600">
                    {crop.progress}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-green-500 h-4 rounded-full"
                    style={{ width: `${crop.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-600">Current Stage:</span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded">
                  {crop.stage}
                </span>
              </div>

              <button className="w-full mt-4 bg-green-600 text-white p-3 rounded hover:bg-green-700">
                Update Growth
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white p-6 rounded-lg shadow mt-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Update Growth Stage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select className="p-3 border rounded">
              <option>Select Crop</option>
              {crops.map((crop) => (
                <option key={crop.name}>{crop.name}</option>
              ))}
            </select>
            <select className="p-3 border rounded">
              <option>Select Stage</option>
              <option>Planting</option>
              <option>Germination</option>
              <option>Vegetative</option>
              <option>Flowering</option>
              <option>Harvest</option>
            </select>
            <button className="bg-green-600 text-white p-3 rounded hover:bg-green-700">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrowthTracking;
