import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import PlantingCalendar from "./pages/PlantingCalendar";
import GrowthTracking from "./pages/GrowthTracking";
import PestDatabase from "./pages/PestDatabase";
import HarvestPredictions from "./pages/HarvestPredictions";
import WeatherIntegration from "./pages/WeatherIntegration";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/planting-calendar" element={<PlantingCalendar />} />
          <Route path="/growth-tracking" element={<GrowthTracking />} />
          <Route path="/pest-database" element={<PestDatabase />} />
          <Route path="/harvest-predictions" element={<HarvestPredictions />} />
          <Route path="/weather-integration" element={<WeatherIntegration />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
