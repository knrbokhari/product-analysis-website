import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import useData from "../../hooks/useData";

const MonthWiseSell = () => {
  // custom hooks for useData
  const [data, setdata] = useData();
  return (
    <div>
      <LineChart width={400} height={300} data={data} className="mx-auto">
        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </div>
  );
};

export default MonthWiseSell;
