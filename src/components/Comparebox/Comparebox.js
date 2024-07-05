import { useEffect } from "react";

import { ProcessTable } from "../exports";

const Comparebox = ({ comparisonData, buttonText }) => {
  const bestAlgorithm = comparisonData && comparisonData[1] && comparisonData[1].averages;
  return (
    <div className="comparebox bg-white rounded-lg p-4 w-full shadow">
      <h1 className="text-xl md:text-2xl font-heading font-medium shadow-text text-center mt-1 mb-2 md:mt-2 md:mb-4">
        Algorithms comparison
      </h1>
      <div className="w-full">
        {comparisonData === "err" ? (
          <div className="err">Error fetching comparison data. Please retry.</div>
        ) : (!comparisonData || comparisonData.length <= 1) ? (
          <div className="text-center text-xs md:text-sm">
            {(buttonText === "Compare" || buttonText === "Comparing...") ? "Click compare button." : "Try submitting first." }
          </div>
        ) : (
          <div>
            <div className="w-full text-center sm:text-left m-0 sm:m-2 text-sm md:text-base">
              Best algorithm: <span className="font-bold">{bestAlgorithm}</span>
            </div>
            <ProcessTable processTableData={comparisonData} />
          </div>
        )}
      </div>
    </div>
  )
}

export default Comparebox;
