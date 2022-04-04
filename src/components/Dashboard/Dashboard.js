import React from "react";
import DataInAreaChart from "../DataInAreaChart/DataInAreaChart";
import DataInBarChart from "../DataInBarChart/DataInBarChart";
import DataInPieChart from "../DataInPieChart/DataInPieChart";
import MonthWiseSell from "../MonthWiseSell/MonthWiseSell";

const Dashboard = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-6">
          <h3>Month Wise Sell</h3>
          <MonthWiseSell></MonthWiseSell>
        </div>
        <div className="col-lg-6">
          <h3>Investmebt VS Revenue</h3>
          <DataInBarChart></DataInBarChart>
        </div>
        <div className="col-lg-6">
          <h3>Investmebt VS Revenue vs Sell</h3>
          <DataInAreaChart></DataInAreaChart>
        </div>
        <div className="col-lg-6">
          <h3>Investmebt VS Revenue</h3>
          <DataInPieChart></DataInPieChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
