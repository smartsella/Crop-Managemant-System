const PestDatabase = () => {
  const pests = [
    {
      id: 1,
      name: "Aphids",
      crop: "Tomatoes",
      severity: "Medium",
      treatment: "Neem Oil",
      icon: "🦟",
      type: "Insect",
      symptoms: "Curled leaves, sticky residue, stunted growth",
      prevention: "Ladybugs, reflective mulch, companion planting",
      organic: true,
      chemical: "Imidacloprid",
      lastReported: "2024-04-15",
      status: "active",
    },
    {
      id: 2,
      name: "Corn Borer",
      crop: "Corn",
      severity: "High",
      treatment: "Bt Spray",
      icon: "🐛",
      type: "Insect",
      symptoms: "Tunneled stalks, broken tassels, reduced yield",
      prevention: "Crop rotation, early planting, resistant varieties",
      organic: true,
      chemical: "Chlorantraniliprole",
      lastReported: "2024-04-10",
      status: "active",
    },
    {
      id: 3,
      name: "Powdery Mildew",
      crop: "Wheat",
      severity: "Medium",
      treatment: "Sulfur Spray",
      icon: "🍄",
      type: "Fungus",
      symptoms: "White powdery spots on leaves and stems",
      prevention: "Proper spacing, morning watering, good air circulation",
      organic: true,
      chemical: "Myclobutanil",
      lastReported: "2024-04-05",
      status: "controlled",
    },
    {
      id: 4,
      name: "Tomato Hornworm",
      crop: "Tomatoes",
      severity: "High",
      treatment: "Hand Picking",
      icon: "🐛",
      type: "Insect",
      symptoms: "Defoliation, fruit damage, black droppings",
      prevention: "Crop rotation, till soil, attract beneficial insects",
      organic: true,
      chemical: "Spinosad",
      lastReported: "2024-04-12",
      status: "active",
    },
    {
      id: 5,
      name: "Rice Blast",
      crop: "Rice",
      severity: "High",
      treatment: "Tricyclazole",
      icon: "🍄",
      type: "Fungus",
      symptoms: "Diamond-shaped lesions on leaves, node rot",
      prevention: "Balanced fertilization, resistant varieties",
      organic: false,
      chemical: "Tricyclazole",
      lastReported: "2024-03-28",
      status: "monitoring",
    },
    {
      id: 6,
      name: "Spider Mites",
      crop: "Multiple",
      severity: "Medium",
      treatment: "Water Spray",
      icon: "🕷️",
      type: "Mite",
      symptoms: "Fine webbing, yellow stippling on leaves",
      prevention: "Increase humidity, avoid water stress",
      organic: true,
      chemical: "Abamectin",
      lastReported: "2024-04-08",
      status: "controlled",
    },
  ];

  const crops = ["Tomatoes", "Corn", "Wheat", "Rice", "Multiple"];
  const severityLevels = ["Low", "Medium", "High", "Critical"];
  const pestTypes = [
    "Insect",
    "Fungus",
    "Bacteria",
    "Virus",
    "Mite",
    "Nematode",
  ];
  const statusTypes = ["active", "controlled", "monitoring", "eradicated"];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "Low":
        return "bg-green-100 text-green-800 border-green-200";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "High":
        return "bg-orange-100 text-orange-800 border-orange-200";
      case "Critical":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "active":
        return "bg-red-100 text-red-800";
      case "controlled":
        return "bg-green-100 text-green-800";
      case "monitoring":
        return "bg-blue-100 text-blue-800";
      case "eradicated":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-red-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center">
              <span className="mr-3">🐛</span>
              Pest & Disease Database
            </h1>
            <p className="text-gray-600 text-lg">
              Identify, manage, and prevent crop pests and diseases
            </p>
          </div>
          <div className="flex space-x-3 mt-4 md:mt-0">
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center">
              <span className="mr-2">📊</span>
              Pest Report
            </button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
              <span className="mr-2">📚</span>
              Prevention Guide
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Total Pests</p>
                <p className="text-2xl font-bold text-gray-800">6</p>
              </div>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🐛</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Active Threats</p>
                <p className="text-2xl font-bold text-gray-800">3</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚠️</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Organic Solutions</p>
                <p className="text-2xl font-bold text-gray-800">5</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🌿</span>
              </div>
            </div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm">Affected Crops</p>
                <p className="text-2xl font-bold text-gray-800">4</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                <span className="text-xl">🌾</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Pest Database */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center mb-4 md:mb-0">
                <span className="mr-2">📋</span>
                Pest Database
              </h2>
              <div className="flex space-x-2 w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search pests, symptoms, treatments..."
                  className="flex-1 md:w-64 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
                <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                  🔍
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All Crops</option>
                {crops.map((crop) => (
                  <option key={crop}>{crop}</option>
                ))}
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All Types</option>
                {pestTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All Severity</option>
                {severityLevels.map((level) => (
                  <option key={level}>{level}</option>
                ))}
              </select>
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>All Status</option>
                {statusTypes.map((status) => (
                  <option key={status}>{status}</option>
                ))}
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                  <tr>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Pest/Disease
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Crop
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Severity
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Status
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Treatment
                    </th>
                    <th className="p-4 text-left font-semibold text-gray-700">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {pests.map((pest) => (
                    <tr
                      key={pest.id}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{pest.icon}</div>
                          <div>
                            <p className="font-semibold text-gray-800">
                              {pest.name}
                            </p>
                            <p className="text-sm text-gray-500">{pest.type}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <span className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {pest.crop}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${getSeverityColor(
                            pest.severity
                          )}`}
                        >
                          {pest.severity}
                        </span>
                      </td>
                      <td className="p-4">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                            pest.status
                          )}`}
                        >
                          {pest.status.charAt(0).toUpperCase() +
                            pest.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div>
                          <p className="font-medium text-gray-800">
                            {pest.treatment}
                          </p>
                          <p className="text-sm text-gray-500">
                            {pest.organic ? "🌿 Organic" : "🧪 Chemical"}
                          </p>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex space-x-2">
                          <button
                            className="text-blue-600 hover:text-blue-800 p-1"
                            title="View Details"
                          >
                            <span className="text-lg">👁️</span>
                          </button>
                          <button
                            className="text-green-600 hover:text-green-800 p-1"
                            title="Edit"
                          >
                            <span className="text-lg">✏️</span>
                          </button>
                          <button
                            className="text-red-600 hover:text-red-800 p-1"
                            title="Delete"
                          >
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Report New Pest */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="mr-2">🚨</span>
                Report New Pest
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Pest or Disease Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />

                <div className="grid grid-cols-2 gap-3">
                  <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Affected Crop</option>
                    {crops.map((crop) => (
                      <option key={crop}>{crop}</option>
                    ))}
                  </select>
                  <select className="p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>Severity</option>
                    {severityLevels.map((level) => (
                      <option key={level}>{level}</option>
                    ))}
                  </select>
                </div>

                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                  <option>Pest Type</option>
                  {pestTypes.map((type) => (
                    <option key={type}>{type}</option>
                  ))}
                </select>

                <textarea
                  placeholder="Describe symptoms and affected areas..."
                  rows="3"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                ></textarea>

                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="urgent" className="rounded" />
                  <label htmlFor="urgent" className="text-sm text-gray-700">
                    Mark as urgent
                  </label>
                </div>

                <button className="w-full bg-red-600 text-white p-3 rounded-lg hover:bg-red-700 transition-colors font-semibold">
                  Report Pest Incident
                </button>
              </div>
            </div>

            {/* Prevention Tips */}
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <h3 className="font-semibold text-gray-800 mb-3 flex items-center">
                <span className="mr-2">🛡️</span>
                Prevention Tips
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Practice crop rotation regularly</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Use resistant varieties when available</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Maintain proper plant spacing</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Monitor crops weekly for early signs</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="text-green-600">✓</span>
                  <span>Use companion planting strategies</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="font-semibold text-gray-800 mb-3">
                Recent Reports
              </h3>
              <div className="space-y-3">
                {pests.slice(0, 3).map((pest) => (
                  <div
                    key={pest.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                  >
                    <div>
                      <p className="font-medium text-sm">{pest.name}</p>
                      <p className="text-xs text-gray-500">
                        {pest.crop} • {pest.lastReported}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded text-xs ${getSeverityColor(
                        pest.severity
                      )}`}
                    >
                      {pest.severity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PestDatabase;
