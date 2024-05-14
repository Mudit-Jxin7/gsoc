"use client";
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Graph = ({ organization }: any) => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  let chartInstance: Chart | null = null;

  useEffect(() => {
    if (!organization.years) return;

    const years = Object.keys(organization.years);
    const data = years.map((year) => organization.years[year].num_projects);
    const labels = years.map((year) => parseInt(year));

    const ctx = chartRef.current?.getContext("2d");
    if (ctx) {
      if (chartInstance) {
        chartInstance.destroy();
      }

      chartInstance = new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Number of Projects",
              data: data,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              title: {
                display: true,
                text: "Year",
              },
            },
            y: {
              title: {
                display: true,
                text: "Number of Projects",
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [organization]);

  return (
    <div className="w-1/2">
      <canvas ref={chartRef} />
    </div>
  );
};

export default Graph;
