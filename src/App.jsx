import "./App.css";
import LineChart from "./components/LineChart/LineChart";
import Navbar from "./components/Navbar/Navbar";
import Phones from "./components/Phones/Phones";
import PriceOptions from "./components/PriceOptions/PriceOptions";
// import DaisyNav from "./components/DaisyNav/DaisyNav";

function App() {
  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <PriceOptions></PriceOptions>
        <LineChart></LineChart>
        <Phones></Phones>
      </div>
    </>
  );
}

export default App;
