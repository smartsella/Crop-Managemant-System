const PestDatabase = () => {
  const pests = [
    {
      name: "Aphids",
      crop: "Tomatoes",
      severity: "Medium",
      treatment: "Neem Oil",
    },
    {
      name: "Corn Borer",
      crop: "Corn",
      severity: "High",
      treatment: "Bt Spray",
    },
    {
      name: "Powdery Mildew",
      crop: "Wheat",
      severity: "Medium",
      treatment: "Sulfur Spray",
    },
    {
      name: "Tomato Hornworm",
      crop: "Tomatoes",
      severity: "High",
      treatment: "Hand Picking",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Pest Database</h1>
        <p className="text-gray-600 mb-6">
          Identify and manage crop pests and diseases
        </p>

        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search pests or diseases..."
              className="w-full p-3 border rounded"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="p-3 text-left">Pest/Disease</th>
                  <th className="p-3 text-left">Affected Crop</th>
                  <th className="p-3 text-left">Severity</th>
                  <th className="p-3 text-left">Treatment</th>
                </tr>
              </thead>
              <tbody>
                {pests.map((pest, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3 font-medium">{pest.name}</td>
                    <td className="p-3">{pest.crop}</td>
                    <td className="p-3">
                      <span
                        className={`px-2 py-1 rounded text-sm ${
                          pest.severity === "High"
                            ? "bg-red-100 text-red-800"
                            : "bg-yellow-100 text-yellow-800"
                        }`}
                      >
                        {pest.severity}
                      </span>
                    </td>
                    <td className="p-3">{pest.treatment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Report New Pest
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Pest Name"
              className="p-3 border rounded"
            />
            <input
              type="text"
              placeholder="Affected Crop"
              className="p-3 border rounded"
            />
            <textarea
              placeholder="Symptoms"
              rows="3"
              className="p-3 border rounded md:col-span-2"
            ></textarea>
            <button className="bg-green-600 text-white p-3 rounded hover:bg-green-700 md:col-span-2">
              Report Pest
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PestDatabase;
