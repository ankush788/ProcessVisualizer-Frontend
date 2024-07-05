import apiClient from "./apiClient";

export const getGanttChartData = async (algorithm, processes) => {
  try {
    console.log("getGanttChartData request - algorithm:", algorithm, processes);
    const response = await apiClient.post(`${algorithm}/ganttChart`, processes);
    console.log("getGanttChartData response - ", response.data);
    return response.data.GanttChart;
  } 
  catch (err){
    console.log("Error fetching gantt chart data: ", err);
    throw err;
  }
}

export const getProcessTableData = async (algorithm, processes) => {
  try {
    console.log("getProcessTableData request - algorithm:", algorithm, processes);
    const response = await apiClient.post(`${algorithm}/property`, processes);
    console.log("getProcessTableData response - ", response.data);
    return response.data;
  } 
  catch (err){
    console.log("Error fetching process table data: ", err);
    throw err;
  }
}

export const getComparisonData = async (processes) => {
  try {
    console.log("getComparisonData request - algorithm", processes);
    const response = await apiClient.post(`/compare/compareAlgo`, processes);
    console.log("getComparisonData response - ", response.data);
    return response.data.property;
  }
  catch (err){
    console.log("Error fetching comparison data: ", err);
    throw err;
  }
}