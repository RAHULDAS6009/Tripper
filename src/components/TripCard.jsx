import React from "react";
import TrendingUp from "../assets/arrowTrendingUp.svg";
import TrendingDown from "../assets/arrowTrendingDown.svg";

const TripCard = ({ label, number, decreasingNumber, increasingNumber }) => {
  return (
    <div className="p-4 shadow-xl w-52 h-48 rounded-2xl flex flex-col justify-between">
      <div>
        <div className="font-bold text-xl">{label}</div>
        <div className="text-[14px] text-slate-400">over the last year</div>
      </div>
      <div className="text-5xl flex justify-between gap-5 items-center font-medium">
        {/* numbers logic */}
        {number >= 1000 ? number.toString().slice(0, 1) + "K" : number}
        <div
          className={`gap-2 rounded-3xl text-sm font-bold w-20   h-10 flex items-center justify-center ${
            decreasingNumber
              ? "border-2 border-pink-600 bg-pink-200 bg-opacity-50 text-pink-400 "
              : "border-2 border-green-600 bg-green-200 bg-opacity-50 text-green-400 "
          } `}
        >
          {/* svg */}
          <img
            src={decreasingNumber ? TrendingDown : TrendingUp}
            width={18}
            height={18}
            alt=""
            srcset=""
          />
          {decreasingNumber ? decreasingNumber.toFixed(2) : "+" + increasingNumber.toFixed(2)}
          {"%"}
        </div>
      </div>
    </div>
  );
};

export default TripCard;
