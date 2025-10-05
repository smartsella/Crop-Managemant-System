const Dashboard = () => {
  const stats = [
    {
      title: "Active Crops",
      value: "8",
      color: "bg-green-500",
      icon: "🌱",
      description: "Across 3 fields",
    },
    {
      title: "Pending Tasks",
      value: "3",
      color: "bg-yellow-500",
      icon: "📋",
      description: "2 overdue",
    },
    {
      title: "Harvest Ready",
      value: "2",
      color: "bg-orange-500",
      icon: "🪴",
      description: "This week",
    },
    {
      title: "Alerts",
      value: "1",
      color: "bg-red-500",
      icon: "⚠️",
      description: "Needs attention",
    },
    {
      title: "Soil Health",
      value: "92%",
      color: "bg-emerald-500",
      icon: "🌿",
      description: "Optimal",
    },
    {
      title: "Water Level",
      value: "78%",
      color: "bg-blue-500",
      icon: "💧",
      description: "Adequate",
    },
  ];

  const quickActions = [
    {
      title: "Add New Crop",
      icon: "➕",
      color: "bg-blue-500 hover:bg-blue-600",
      description: "Plant new crops",
    },
    {
      title: "Update Growth",
      icon: "📊",
      color: "bg-green-500 hover:bg-green-600",
      description: "Log progress",
    },
    {
      title: "Report Pest",
      icon: "🐛",
      color: "bg-red-500 hover:bg-red-600",
      description: "Issue alert",
    },
    {
      title: "Check Weather",
      icon: "🌤️",
      color: "bg-sky-500 hover:bg-sky-600",
      description: "7-day forecast",
    },
    {
      title: "Irrigation",
      icon: "💦",
      color: "bg-cyan-500 hover:bg-cyan-600",
      description: "Water management",
    },
    {
      title: "Soil Test",
      icon: "🧪",
      color: "bg-amber-500 hover:bg-amber-600",
      description: "Check nutrients",
    },
  ];

  const recentActivities = [
    {
      icon: "🌱",
      title: "Tomatoes planted",
      time: "2 hours ago",
      type: "planting",
      field: "Field A",
    },
    {
      icon: "📊",
      title: "Growth updated for Corn",
      time: "1 day ago",
      type: "growth",
      field: "Field B",
    },
    {
      icon: "🐛",
      title: "Pest alert: Aphids detected",
      time: "2 days ago",
      type: "alert",
      field: "Field C",
    },
    {
      icon: "💧",
      title: "Irrigation system activated",
      time: "3 days ago",
      type: "irrigation",
      field: "All fields",
    },
    {
      icon: "🌿",
      title: "Fertilizer applied",
      time: "4 days ago",
      type: "maintenance",
      field: "Field A & B",
    },
  ];

  const upcomingTasks = [
    {
      title: "Water Wheat field",
      time: "Today, 2:00 PM",
      priority: "High",
      priorityColor: "bg-red-100 text-red-800",
      assigned: "John",
      type: "watering",
    },
    {
      title: "Fertilize Corn",
      time: "Tomorrow, 9:00 AM",
      priority: "Medium",
      priorityColor: "bg-yellow-100 text-yellow-800",
      assigned: "Sarah",
      type: "fertilizing",
    },
    {
      title: "Harvest Tomatoes",
      time: "In 3 days",
      priority: "Low",
      priorityColor: "bg-green-100 text-green-800",
      assigned: "Team",
      type: "harvesting",
    },
    {
      title: "Soil Testing",
      time: "This weekend",
      priority: "Medium",
      priorityColor: "bg-yellow-100 text-yellow-800",
      assigned: "Mike",
      type: "testing",
    },
  ];

  const weatherData = {
    today: { temp: "28°C", condition: "Sunny", icon: "☀️" },
    forecast: [
      { day: "Mon", temp: "27°C", icon: "⛅" },
      { day: "Tue", temp: "26°C", icon: "🌧️" },
      { day: "Wed", temp: "25°C", icon: "🌧️" },
      { day: "Thu", temp: "29°C", icon: "☀️" },
      { day: "Fri", temp: "30°C", icon: "☀️" },
    ],
  };

  return (
    <div className="p-6 bg-gradient-to-br from-green-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              Farm Dashboard
            </h1>
            <p className="text-gray-600">
              Welcome back! Here's your farm overview for today.
            </p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm mt-4 md:mt-0">
            <div className="flex items-center space-x-3">
              <div className="text-3xl">{weatherData.today.icon}</div>
              <div>
                <p className="font-semibold text-gray-800">
                  {weatherData.today.temp}
                </p>
                <p className="text-sm text-gray-600">
                  {weatherData.today.condition}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center text-white text-lg`}
                >
                  {stat.icon}
                </div>
                <span className="text-2xl font-bold text-gray-800">
                  {stat.value}
                </span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-1">{stat.title}</h3>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions & Weather */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              <span className="mr-2">⚡</span>
              Quick Actions
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  className={`${action.color} text-white p-4 rounded-xl transition-all transform hover:scale-105 flex flex-col items-center justify-center h-24`}
                >
                  <span className="text-2xl mb-2">{action.icon}</span>
                  <span className="font-medium text-sm">{action.title}</span>
                  <span className="text-xs opacity-90 mt-1">
                    {action.description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Weather Forecast */}
          <div className="bg-gradient-to-br from-blue-500 to-sky-600 p-6 rounded-xl shadow-sm text-white">
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <span className="mr-2">🌤️</span>
              Weather Forecast
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-3 border-b border-blue-400">
                <span className="font-medium">Today</span>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">{weatherData.today.icon}</span>
                  <span className="font-bold text-xl">
                    {weatherData.today.temp}
                  </span>
                </div>
              </div>
              {weatherData.forecast.map((day, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="font-medium">{day.day}</span>
                  <div className="flex items-center space-x-2">
                    <span>{day.icon}</span>
                    <span className="font-semibold">{day.temp}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activity & Upcoming Tasks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <span className="mr-2">📈</span>
                Recent Activity
              </h2>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                View All
              </button>
            </div>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">
                      {activity.title}
                    </p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <span>{activity.time}</span>
                      <span>•</span>
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {activity.field}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800 flex items-center">
                <span className="mr-2">📅</span>
                Upcoming Tasks
              </h2>
              <button className="text-blue-600 text-sm font-medium hover:text-blue-800">
                View Calendar
              </button>
            </div>
            <div className="space-y-4">
              {upcomingTasks.map((task, index) => (
                <div
                  key={index}
                  className="p-4 border border-gray-200 rounded-lg hover:border-blue-200 transition-colors"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-gray-800">
                        {task.title}
                      </p>
                      <p className="text-sm text-gray-500 flex items-center mt-1">
                        <span className="mr-2">🕒</span>
                        {task.time}
                      </p>
                    </div>
                    <span
                      className={`${task.priorityColor} px-2 py-1 rounded text-xs font-medium`}
                    >
                      {task.priority}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-600">
                    <span>Assigned to: {task.assigned}</span>
                    <button className="text-blue-600 hover:text-blue-800 font-medium">
                      Mark Done
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Last updated: Today at 10:30 AM • Farm Status: Operational</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
