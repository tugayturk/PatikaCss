import Dashboard from "./Components/Dashboard";
import "./App.css";
import Navbar from "./Components/Navbar";
import CalorieCalculator from "./Components/CalorieCalculator";
import Weekly from "./Components/Weekly";
import PersonMeasure from "./Components/PersonMeasure";
import PieChart from "./Components/PieChart";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <Navbar />
      <Banner/>
      <CalorieCalculator />
      <Weekly />
      <PersonMeasure/>
      <PieChart/>
      <Footer/>
    </div>
  );
}

export default App;
