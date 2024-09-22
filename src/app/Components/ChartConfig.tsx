import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { weights, averageLine } from '../tables/DogWeightData';

// Register the necessary chart components for react-chartjs-2
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Chart Data and Configuration for react-chartjs-2
export const chartData = {
  labels: Array.from({ length: weights.length }, (_, i) => (i + 1).toString()), // Example labels (weeks)
  datasets: [
    {
      label: 'Weight',
      data: weights,
      borderColor: 'rgba(0, 0, 0, 1)',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 3,
      pointRadius: 0, // Disable dots on the line
    },
    {
      label: 'Average',
      data: averageLine,
      borderColor: 'rgba(255, 0, 0, 1)',
      backgroundColor: 'rgba(255, 0, 0, 0.1)',
      borderWidth: 2,
      pointRadius: 0, // Disable dots on the line
    },
  ],
};

export const chartConfig: ChartOptions<'line'> = {
  responsive: true, // Ensure the chart resizes with the screen
  maintainAspectRatio: false, // Allow dynamic sizing
  plugins: {
    legend: {
      display: true,
      position: 'bottom', // Adjust legend position
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Week',
      },
    },
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Weight (kg)',
      },
      ticks: {
        precision: 2, // Decimal places
      },
    },
  },
};