import { getGanttChartData, getProcessTableData, getComparisonData } from "../../api/api";

const fetchGanttChartData = async (inputs, setInputs, setGanttChartData) => {
  if (!inputs || inputs === "err"){
    return;
  }
  try {
    const ganttChartData = await getGanttChartData(inputs.algorithm, {
      processes: inputs.processes,
    });
    setGanttChartData(ganttChartData);
  } catch (err) {
    console.log("Error fetching gantt chart data: ", err);
    setGanttChartData("err");
    setInputs(null);
  }
};

const fetchProcessTableData = async (inputs, setInputs, setProcessTableData, setProcessChartData) => {
  if (!inputs || inputs === "err"){
    return;
  }
  try {
    const processTableData = await getProcessTableData(inputs.algorithm, {
      processes: inputs.processes,
    })
    setProcessChartData(processTableData.property.averages || "err");
    const headers = [
      { text: "Process Id", smText: "PID" },
      { text: "Arrival time", smText: "AT" },
      { text: "Burst time", smText: "BT" },
      { text: "Completion time", smText: "CT" },
      { text: "Turnaround time", smText: "TAT" },
      { text: "Waiting time", smText: "WT" }
    ];
    processTableData.property.processes.unshift(headers, {}); // second entry is extra to match processTable for comparing algorithms as process table and comparing algorithm are using same processTable template
    setProcessTableData(processTableData.property.processes);
  } catch (err) {
    console.log("Error fetching process chart data: ", err);
    setProcessTableData("err");
    setProcessChartData("err");
    setInputs(null);
  }
}

const fetchComparisonData = async (inputs, setInputs, setComparisonData) => {
  if (!inputs || inputs === "err"){
    return;
  }
  try {
    const comparisonData = await getComparisonData({
      processes: inputs.processes,
    });

    const headers = [
      { text: "Algorithm" },
      { text: "Averages" },
    ];
    // setComparisonData([headers, {algorithm: "RR", averages: ["turnaroundtime: 3", "omething: 2"]}, {algorithm: "RR", averages: ["turnaroundtime: 3", "omething: 2"]}]);
    setComparisonData([headers, ...comparisonData]);
  } catch (err) {
    console.log("Error fetching gantt chart data: ", err);
    setComparisonData("err");
    setInputs(null);
  }
};

export { fetchGanttChartData, fetchProcessTableData, fetchComparisonData };