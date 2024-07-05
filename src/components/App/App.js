import "./App.css";
import { useEffect, useState } from "react";

import { Header, Footer, Inputbox, Outputbox, ProcessChart, Comparebox } from "../exports";
import { fetchGanttChartData, fetchProcessTableData } from "./fetchDataFunctions";

const App = () => {
  const [ganttChartData, setGanttChartData] = useState(null);
  const [processTableData, setProcessTableData] = useState(null);
  const [processChartData, setProcessChartData] = useState(null);
  const [comparisonData, setComparisonData] = useState(null);
  const [buttonText, setButtonText] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputs, setInputs] = useState(null);

  useEffect(() => {
    if (inputs !== "err"){
      setLoading(true);
    }
    setTimeout(() => {
      const fetchData = async () => {
        await Promise.all([
          fetchGanttChartData(inputs, setInputs, setGanttChartData),
          fetchProcessTableData(inputs, setInputs, setProcessTableData, setProcessChartData),
        ]);
        setLoading(false);
      };
      fetchData();
    }, 500)
  }, [inputs]); 

  return (
    <div className="app w-full min-h-screen bg-white">
      <Header />
      <div className="flex flex-col justify-between lg:flex-row">
        <div className="lg:w-[30%] ms-2 mt-2 mr-2 lg:mr-0">
          <Inputbox inputs={inputs} setInputs={setInputs} loading={loading} setLoading={setLoading} buttonText={buttonText} setButtonText={setButtonText} comparisonData={comparisonData} setComparisonData={setComparisonData} />
        </div>
        <div className="flex flex-col items-center lg:w-[70%] m-2">
          <div className="mb-2 w-full">
            <Outputbox ganttChartData={ganttChartData} processTableData={processTableData} />
          </div>
          <div className="mb-2 w-full">
            <ProcessChart processChartData={processChartData} />
          </div>
          <div className="mb-2 w-full">
            <Comparebox buttonText={buttonText} comparisonData={comparisonData} />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
