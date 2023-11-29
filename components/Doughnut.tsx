import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [],
  datasets: [
    {
      label: "# of Votes",
      data: [25, 75],
      backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(255, 206, 86, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)", "rgba(255, 206, 86, 1)"],
      borderWidth: 1,
    },
  ],
};

const option = {
  plugins: {
    tooltip: {
      callbacks: {
        label: (data: any) => {
          switch (data?.dataIndex) {
            case 0:
              return "Rp 1000000";
            case 1:
              return "Rp 4000000";
          }
        },
      },
    },
  },
};

export const DoughnutChart = () => {
  return <Doughnut data={data} options={option} />;
};
