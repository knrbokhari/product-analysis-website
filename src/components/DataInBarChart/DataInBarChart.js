import React from "react";
import {
  BarChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Bar,
} from "recharts";
import useData from "../../hooks/useData";

const DataInBarChart = () => {
  // custom hooks for setdata
  const [data, setdata] = useData();
  return (
    <div>
      <BarChart width={400} height={300} data={data} className="mx-auto">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" stackId="a" fill="#8884d8" />
        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};

export default DataInBarChart;
