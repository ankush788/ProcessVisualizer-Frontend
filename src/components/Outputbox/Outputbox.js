import { useEffect } from "react";

import { GanttChart, ProcessTable } from "../exports";

const Outputbox = ({ ganttChartData, processTableData }) => {
  return (
    <div className="outputbox bg-white rounded-lg p-4 w-full shadow">
      <h1 className="text-xl md:text-2xl font-heading font-medium shadow-text text-center mt-1 mb-2 md:mt-2 md:mb-4">
        Output
      </h1>
      <div className="w-full">
        <div className="p-2">
          <GanttChart ganttChartData={ganttChartData} />
        </div>
        <div className="p-2">
          <ProcessTable processTableData={processTableData} heading={"Process table"} />
        </div>
      </div>
    </div>
  );
};

export default Outputbox;
