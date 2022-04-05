import React from "react";
import useData from "../../hooks/useData";
import { PieChart, Pie, Tooltip } from "recharts";

const DataInPieChart = () => {
  // custom hooks for setdata
  const [data, setdata] = useData();
  return (
    <div className="mx-auto">
      <PieChart width={400} height={300} className="mx-auto">
        <Tooltip />
        <Pie
          data={data}
          dataKey="investment"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data}
          dataKey="revenue"
          cx="50%"
          cy="50%"
          innerRadius={70}
          outerRadius={90}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default DataInPieChart;
