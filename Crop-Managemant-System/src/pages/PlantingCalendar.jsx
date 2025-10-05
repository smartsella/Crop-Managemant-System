const PlantingCalendar = () => {
  const crops = [
    { name: "Tomatoes", plant: "Jan", harvest: "Apr" },
    { name: "Corn", plant: "Mar", harvest: "Aug" },
    { name: "Wheat", plant: "Nov", harvest: "May" },
    { name: "Rice", plant: "Jun", harvest: "Oct" },
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

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Planting Calendar
        </h1>
        <p className="text-gray-600 mb-6">
          Plan your crop planting and harvesting schedule
        </p>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Crop Schedule
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left">Crop</th>
                  <th className="p-3 text-left">Planting</th>
                  <th className="p-3 text-left">Harvesting</th>
                  <th className="p-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {crops.map((crop, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3 font-medium">{crop.name}</td>
                    <td className="p-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {crop.plant}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                        {crop.harvest}
                      </span>
                    </td>
                    <td className="p-3">
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                        Planned
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Add New Crop</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Crop Name"
              className="p-3 border rounded"
            />
            <select className="p-3 border rounded">
              <option>Planting Month</option>
              {months.map((month) => (
                <option key={month}>{month}</option>
              ))}
            </select>
            <button className="bg-green-600 text-white p-3 rounded hover:bg-green-700">
              Add Crop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantingCalendar;
