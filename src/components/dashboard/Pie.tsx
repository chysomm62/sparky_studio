import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 13],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(75, 192, 92, 0.6)",
        "rgba(153, 102, 55, 0.6)",
        "rgba(25, 159, 64, 0.6)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const PieChart = () => {
  return <Pie data={data} />;
};

export default PieChart;
