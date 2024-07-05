import { useEffect, useState } from "react";

const GanttChart = ({ ganttChartData }) => {
  return (
    <div className="ganttChart w-full">
      <div className="text-base md:text-md my-1">Gantt chart</div>
      <div className="cells flex flex-wrap justify-center max-h-[400px] overflow-auto">
        {ganttChartData === "err" ? (
          <div className="err">Error fetching gantt chart data. Please retry.</div>
        ) : !ganttChartData || !ganttChartData.length ? (
          <div className="text-center text-xs md:text-sm">
            Provide inputs to see gantt chart here.
          </div>
        ) : (
          ganttChartData.map((process, idx) => {
            return (
              <div key={idx} className="cell flex flex-col my-2">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 border bg-black">
                  <div className="text-white text-xs md:text-sm">P{process.processId}</div>
                </div>
                <div
                  className={`flex text-xs md:text-sm ${
                    idx === 0 ? "justify-between" : "justify-end"
                  }`}
                >
                  {idx === 0 && (
                    <div className="startTime">{process.startTime}</div>
                  )}
                  <div className="endTime">{process.endTime}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default GanttChart;
