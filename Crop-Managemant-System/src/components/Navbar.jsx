import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", name: "Dashboard", icon: "🏠" },
    { path: "/planting-calendar", name: "Calendar", icon: "📅" },
    { path: "/growth-tracking", name: "Growth", icon: "📊" },
    { path: "/pest-database", name: "Pests", icon: "🐛" },
    { path: "/harvest-predictions", name: "Harvest", icon: "🌾" },
    { path: "/weather-integration", name: "Weather", icon: "🌤️" },
  ];

  return (
    <nav className="bg-green-600 text-white p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌱</span>
            <h1 className="text-xl font-bold">Crop Management System</h1>
          </div>

          <div className="flex space-x-1">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg flex items-center space-x-1 ${
                  location.pathname === item.path
                    ? "bg-green-700"
                    : "hover:bg-green-500"
                }`}
              >
                <span>{item.icon}</span>
                <span className="hidden sm:block">{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
