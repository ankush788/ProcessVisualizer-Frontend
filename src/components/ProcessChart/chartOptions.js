const chartOptions = {
  labels: ["Average completion time", "Average turnaround time", "Average waiting time", "Average response time"],
  chart: {
    type: "pie",
  },
  colors: ["#FFA07A", "#FFD700", "#87CEFA", "#20B2AA", "#9370DB", "#32CD32", "#FF69B4"],
  legend: {
    show: false,
  },
  plotOptions: {
    pie: {
      expandOnClick: false
    }
  },
  dataLabels: {
    enabled: true,
    style: {
        fontFamily: "Montserrat",
    },
    dropShadow: {
        enabled: false,
    }
  },
  dropShadow: {
    enabled: true,
    top: 0,
    left: 0,
    blur: 3,
    color: "#000",
    opacity: 0.35
  }
  // labels: ["Apple", "Mango", "Orange", "Watermelon"],
  // chart: {
  //   type: "pie",
  //   dropShadow: {
  //     enabled: true,
  //     colors: "#f3f4f6",
  //     top: 18,
  //     left: 7,
  //     blur: 10,
  //     opacity: 0.2,
  //   },
  //   zoom: {
  //     enabled: false,
  //   },
  //   toolbar: {
  //     show: false,
  //   },
  // },
  // dataLabels: {
  //   enabled: true,
  // },
  // colors: ["#2E93fA", "#66DA26", "#546E7A", "#E91E63", "#FF9800"],
  // grid: {
  //   show: true,
  //   row: {
  //     colors: ["#f3f4f6", "transparent"],
  //     opacity: 0.25,
  //   },
    // column: {
    //   colors: ["#f3f4f5", "transparent"],
    //   opacity: 0.5
    // }
  // },
  // stroke: {
  //   curve: "smooth",
  // },
  // legend: {
  //   position: "top",
  //   horizontalAlign: "right",
  //   floating: true,
  //   offsetY: -25,
  //   offsetX: -5,
  // },
};

module.exports = chartOptions;