// fieldNo: 1-ArrivalTimes, 2-BurstTimes, 3-Priorities, 4-TimeQuantum
const parseInputString = (inputString, setInputErr, fieldNo) => {
  if (typeof inputString !== "string") {
    setInputErr({description: "Please enter integers only.", fieldNo: fieldNo});
    return null;
  }

  const values = inputString.trim().split(/\s+/);
  const integers = values.map((val) => parseInt(val));

  inputString = inputString.trim();
  if (inputString.length !== 0 && integers.some((val) => isNaN(val))) {
    setInputErr({description: "Please enter integers only.", fieldNo: [fieldNo]});
    return null;
  }

  const containsNegative = (array) => {
    return array.some((value) => value < 0);
  };
  if (containsNegative(integers)){
    setInputErr({description: "Values should not be negative.", fieldNo: [fieldNo]});
    return null;
  }
  return integers;
};

const parseInputs = (algorithm, arrivalTimes, burstTimes, priorities, timeQuantum, inputErr, setInputErr) => {
  const trimmedArrivalTime = arrivalTimes.trim();
  const trimmedBurstTime = burstTimes.trim();
  const trimmedPriorities = priorities.trim();
  const trimmedTimeQuantum = timeQuantum.trim();
  if (trimmedArrivalTime === ""){ 
    setInputErr({description: "Please enter all the required fields.", fieldNo: [1]});
    return null;
  }
  else if (trimmedBurstTime === ""){
    setInputErr({description: "Please enter all the required fields.", fieldNo: [2]});
    return null;
  }
  else if (algorithm === "priority" && trimmedPriorities === ""){
    setInputErr({description: "Please enter all the required fields.", fieldNo: [3]});
    return null;
  }
  else if (algorithm === "rr" && trimmedTimeQuantum === ""){
    setInputErr({description: "Please enter all the required fields.", fieldNo: [4]});
    return null;
  }

  const parsedArrivalTimes = parseInputString(arrivalTimes, setInputErr, 1);
  const parsedBurstTimes = parseInputString(burstTimes, setInputErr, 2);
  const parsedPriorities = parseInputString(priorities, setInputErr, 3);
  const parsedTimeQuantum = parseInputString(timeQuantum, setInputErr, 4);
  if (inputErr || !parsedArrivalTimes || !parsedBurstTimes || !parsedPriorities || !parsedTimeQuantum) {
    return null;
  }

  if (parsedArrivalTimes.length !== parsedBurstTimes.length) {
    setInputErr({description: "Arrival times & Burst times should have equal number of processes.", fieldNo: [1, 2] });
    return null;
  }

  if (algorithm === "priority" && parsedArrivalTimes.length !== parsedPriorities.length) {
    setInputErr({description: "Arrival times, Burst times & Priorities should have equal number of processes.", fieldNo: [1, 3] });
    return null;
  }

  if (algorithm === "rr" && parsedTimeQuantum === 0){
    setInputErr({description: "Time quantum should be greater than 0", fieldNo: [4] });
    return null;
  }

  if (inputErr) {
    return null;
  } else {
    const processes = parsedArrivalTimes.map((arrivalTime, index) => ({
      id: index,
      arrivalTime: arrivalTime,
      burstTime: parsedBurstTimes[index],
      priority: algorithm === "priority" ? parsedPriorities[index] : null,
      timeQuantum: algorithm === "rr" ? parsedTimeQuantum : null,
    }));

    return {
      algorithm: algorithm,
      processes: processes,
    };
  }
};

module.exports = parseInputs;