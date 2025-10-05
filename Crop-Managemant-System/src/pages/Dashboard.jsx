const Dashboard = () => {
  const stats = [
    { title: "Active Crops", value: "8", color: "bg-green-500" },
    { title: "Pending Tasks", value: "3", color: "bg-yellow-500" },
    { title: "Harvest Ready", value: "2", color: "bg-orange-500" },
    { title: "Alerts", value: "1", color: "bg-red-500" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Farm Dashboard
        </h1>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div
                className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white text-xl mb-2`}
              >
                {stat.value}
              </div>
              <h3 className="text-gray-600">{stat.title}</h3>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow mb-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Quick Actions
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <button className="bg-blue-500 text-white p-4 rounded-lg hover:bg-blue-600">
              Add New Crop
            </button>
            <button className="bg-green-500 text-white p-4 rounded-lg hover:bg-green-600">
              Update Growth
            </button>
            <button className="bg-red-500 text-white p-4 rounded-lg hover:bg-red-600">
              Report Pest
            </button>
            <button className="bg-sky-500 text-white p-4 rounded-lg hover:bg-sky-600">
              Check Weather
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Recent Activity
            </h2>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 p-2 border-b">
                <span>🌱</span>
                <div>
                  <p className="font-medium">Tomatoes planted</p>
                  <p className="text-sm text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-2 border-b">
                <span>📊</span>
                <div>
                  <p className="font-medium">Growth updated for Corn</p>
                  <p className="text-sm text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-2 border-b">
                <span>🐛</span>
                <div>
                  <p className="font-medium">Pest alert: Aphids detected</p>
                  <p className="text-sm text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Upcoming Tasks
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center p-2 border-b">
                <div>
                  <p className="font-medium">Water Wheat field</p>
                  <p className="text-sm text-gray-500">Today</p>
                </div>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                  High
                </span>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <div>
                  <p className="font-medium">Fertilize Corn</p>
                  <p className="text-sm text-gray-500">Tomorrow</p>
                </div>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                  Medium
                </span>
              </div>
              <div className="flex justify-between items-center p-2 border-b">
                <div>
                  <p className="font-medium">Harvest Tomatoes</p>
                  <p className="text-sm text-gray-500">In 3 days</p>
                </div>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  Low
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
