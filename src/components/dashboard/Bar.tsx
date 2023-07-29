import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
    },
  },
};

const labels = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

const randomNum = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const data = {
  labels,
  datasets: [
    {
      label: "Customer 1",
      data: labels.map(() => randomNum(5, 200)),
      backgroundColor: "rgba(80, 99, 192, 0.8)",
    },
    {
      label: "Customer 2",
      data: labels.map(() => randomNum(1, 1000)),
      backgroundColor: "rgba(163, 62, 90, 0.8)",
    },
  ],
};

const BarChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarChart;
