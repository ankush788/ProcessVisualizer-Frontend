import { useEffect, useState } from "react";

import "./Inputbox.css";
import parseInputs from "./parseInputs";
import { fetchComparisonData } from "../App/fetchDataFunctions";
import { LabelAndInput, CustomDropdown, Modal } from "../../sharedComponents/exports";

const options = [
  { value: "fcfs", label: "First Come First Serve, FCFS" },
  { value: "sjf", label: "Shortest Job First, SJF" },
  { value: "priority", label: "Priority Scheduling" },
  { value: "rr", label: "Round Robin, RR" },
];

const Inputbox = ({ inputs, setInputs, loading, setLoading, buttonText, setButtonText, comparisonData, setComparisonData }) => {
  const [algorithm, setAlgorithm] = useState(options[0]);
  const [arrivalTimes, setArrivalTimes] = useState("");
  const [burstTimes, setBurstTimes] = useState("");
  const [priorities, setPriorities] = useState("");
  const [timeQuantum, setTimeQuantum] = useState("");
  const [inputErr, setInputErr] = useState(false);

  const handleSubmit = async (e) => {
    if (e.target.textContent === "Compare" && !inputErr && inputs){
      setLoading(true);
      await fetchComparisonData(inputs, setInputs, setComparisonData);
      setTimeout(() => {
        if (comparisonData && comparisonData !== "err"){
          setInputs("err");
        }
        setLoading(false);
      }, 500)
    }
    else {
      const inputData = parseInputs(algorithm.value, arrivalTimes, burstTimes, priorities, timeQuantum, inputErr, setInputErr);
      if (inputErr !== false && (inputData === null || inputData.processes.length === 0)){
        setInputs("err");
      }
      else {
        setInputs(inputErr || !inputData ? "err" : inputData);
      }
    }
  };

  useEffect(() => {
    if (loading){
      if (!inputs){
        setButtonText("Loading...");
      }
      else {
        if (buttonText === "Compare"){
          setButtonText("Comparing...");
        }
        else {
          setButtonText("Solving...");
        }
      }
    }
    else {
      if (inputs && inputs !== "err" && !inputErr){
        setButtonText("Compare");
      }
      else {
        setButtonText("Submit");
      }
    }
    // setButtonText(loading ? (!inputs ? "Loading..." : (buttonText === "Compare" ? "Comparing..." : "Solving...")) : ((inputs && inputs !== "err" && !inputErr) ? "Compare" : "Submit"))
  }, [loading])

  return (
    <div className="inputbox sticky left-2 top-16 bg-white rounded-lg p-4 w-full shadow">
      <h1 className="text-xl md:text-2xl font-heading font-medium shadow-text text-center mt-1 mb-2 md:mt-2 md:mb-4">
        Input
      </h1>
      <div className="flex flex-col md:flex-row lg:flex-col mx-auto p-1 text-base md:text-md">
        <div className="flex-1 items-center p-2">
          <details className="rounded-lg cursor-pointer">
            <summary>
              <span className="text-sm md:text-base">Algorithm</span>
            </summary>
            <div className="mt-1 text-sm">
              <p>A predefined set of rules for determining the order of executing processes on a computer's CPU.</p>
            </div>
          </details>
        </div>
        <div className="flex-1 p-1">
          <CustomDropdown options={options} algorithm={algorithm} setAlgorithm={setAlgorithm} setInputErr={setInputErr} setButtonText={setButtonText} />
        </div>
      </div>
      <LabelAndInput
        label="Arrival Times"
        description="The instance when a process enters the ready queue and is available for CPU execution."
        placeholder="eg. 3 5 11 2 4"
        value={arrivalTimes}
        showErr={inputErr && inputErr.fieldNo.includes(1)}
        onChange={(e) => {setArrivalTimes(e.target.value); setInputErr(false); setButtonText("Submit");}}
      />
      <LabelAndInput
        label="Burst Times"
        description="The amount of CPU time required for a process to complete its execution."
        placeholder="eg. 2 6 8 13 7"
        value={burstTimes}
        showErr={inputErr && inputErr.fieldNo.includes(2)}
        onChange={(e) => {setBurstTimes(e.target.value); setInputErr(false); setButtonText("Submit");}}
      />
      {algorithm.value === "priority" && (
        <LabelAndInput
          label="Priorities"
          description="Values assigned to processes to determine their relative importance or order of execution."
          placeholder="eg. 1 2 3 4 5"
          value={priorities}
          showErr={inputErr && inputErr.fieldNo.includes(3)}
          onChange={(e) => {setPriorities(e.target.value); setInputErr(false); setButtonText("Submit");}}
        />
      )}
      {algorithm.value === "rr" && (
        <LabelAndInput
          label="Time Quantum"
          description="A fixed unit of time allocated to each process for uninterrupted execution on the CPU before potentially being preempted or switched."
          placeholder="eg. 8"
          inputType="number"
          value={timeQuantum}
          showErr={inputErr && inputErr.fieldNo.includes(4)}
          onChange={(e) => {setTimeQuantum(e.target.value); setInputErr(false); setButtonText("Submit");}}
        />
      )}
      <div className="flex flex-wrap">
        <button onClick={handleSubmit} className="flex items-center justify-center md:w-full mt-4 bg-black hover:bg-white text-sm md:text-base text-white hover:text-black active:text-white border border-black active:bg-black active:border rounded-md px-3 py-1 md:p-2">
          <svg className={`${loading ? "inline-block animate-spin h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" : "hidden"}`} viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>{buttonText}</span>
        </button>
        {inputErr && (
          <div className="err text-left md:text-center lg:text-left mt-2 ms-1 w-full">{inputErr.description}</div>
        )}
      </div>
      {/* {inputErr && (
        <Modal heading={"Inputs error"} description={inputErr} buttonText="Okay" setInputErr={setInputErr}
        />
      )} */}
    </div>
  );
};

export default Inputbox;
