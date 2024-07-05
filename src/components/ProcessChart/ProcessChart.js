import React, { useContext, useEffect, useState } from "react";
import Chart from "react-apexcharts";

import { useScreenSize } from "../../contexts/ScreenSizeContext";
const chartOptions = require("./chartOptions");

const ProcessChart = ({ processChartData }) => {
  const { sm, md, lg } = useScreenSize();
  let chartWidth = sm ? 300 : md ? 400 : lg ? 450 : 450;

  const [series, setSeries] = useState();
  useEffect(() => {
    if (processChartData !== "err"){
      const roundedValues = Object.values(processChartData || {}).map(value => parseFloat(value.toFixed(2)));
      setSeries(roundedValues);
    }
  }, [processChartData])

  return (
    <div className="processChart bg-white rounded-lg p-4 w-full shadow z-40">
      <h1 className="text-xl md:text-2xl font-heading font-medium shadow-text text-center mt-1 mb-2 md:mt-2 md:mb-4">
        Process chart
      </h1>
      <div className="w-full">
        <div className="flex justify-center p-2 overflow-auto">
          {processChartData === "err" ? (
            <div className="err">Error fetching process chart data. Please retry.</div>
          ) : !series || !series.length ? (
            <div className="text-center text-xs md:text-sm">
              Provide inputs to see process chart here.
            </div>
          ) : ( 
            <Chart options={chartOptions} series={series} type={chartOptions.chart.type} width={chartWidth} />
          )} 
        </div>
      </div>
    </div>
  );
};

export default ProcessChart;