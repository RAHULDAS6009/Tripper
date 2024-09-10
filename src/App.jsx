import { useState } from "react";
import NavBar from "./components/NavBar";
import TripCard from "./components/TripCard";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="bg-slate-200/30 h-screen p-2">
      <NavBar />
      {/* main content */}
      <div className="grid grid-cols-6">
        <div className="col-span-4 flex gap-2 ">
          {/* Main Area */}
          <TripCard label={"Done Trip"} number={24} decreasingNumber={-8.10} />
          <TripCard label={"Cancelled Trip"} number={11} increasingNumber={+2.08587} />
          <TripCard label={"Spending Money"} number={10000} decreasingNumber={-3.4854555} />

        </div>
        <div className="col-span-2">
          {/* Status area */}
        </div>
      </div>
    </div>
  );
}

export default App;
