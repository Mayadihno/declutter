import React, { useState } from "react";
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
import { UserData } from "./dashboardData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ChartJs = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Sales per Month",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#901E78"],
        borderColor: "#901E78",
        borderWidth: 1,
      },
    ],
  });
  return (
    <React.Fragment>
      <div>
        <Bar data={userData} />
      </div>
    </React.Fragment>
  );
};

export default ChartJs;
