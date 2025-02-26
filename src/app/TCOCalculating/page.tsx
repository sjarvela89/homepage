"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './TCOCalculating.module.css';
import { images } from '../tables/ImageData';
import BackgroundImage from '../../../public/images/background.jpg';
import Background from '../Components/Background';
import Link from 'next/link';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { chartConfig } from '../Components/ChartConfig';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TCOCalculating: React.FC = () => {
  const [serverAmount, setServerAmount] = useState<number>(0);
  const [costPerServer, setCostPerServer] = useState<number>(0);
  const [otherCosts, setOtherCosts] = useState<number>(0);
  const [annualExpences, setAnnualExpences] = useState<number>(0);
  const [intangibleCosts, setIntangibleCosts] = useState<number>(0);
  const [migrationCosts, setMigrationCosts] = useState<number>(0);
  const [cloudAnnualCosts, setCloudAnnualCosts] = useState<number>(0);
  const [showRotateMessage, setShowRotateMessage] = useState(false);


  useEffect(() => {
    const isMobileDevice = () => {
      return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    };

    const handleOrientationChange = () => {
      const isPortrait = window.innerHeight > window.innerWidth;
      setShowRotateMessage(isMobileDevice() && isPortrait);
    };

    handleOrientationChange(); // Run on component mount
    window.addEventListener("resize", handleOrientationChange);
    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);


  const handleNumberInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<number>>
  ) => {
    let value = e.target.value;
    if (/^\d*[.,]?\d{0,2}$/.test(value) || value === '') {
      value = value.replace(',', '.');
      setter(value === '' || value === '.' ? 0 : parseFloat(value));
    }
  };
  
  const generateFiveYearOnPremisesTable = () => {
    const firstValue = serverAmount * costPerServer + otherCosts;
    const monthlyIncrease = annualExpences / 12 + intangibleCosts;
    const months = 5*12; // 5 years in months
    const results = [];

    for (let i = 0; i <= months; i++) {
      const value = firstValue + monthlyIncrease * i;
      results.push({
        month: i,
        value: parseFloat(value.toFixed(2))
      });
    }

    return results;
  };

  const generateFiveYearCloudTable = () => {
    const firstValue = migrationCosts+serverAmount*costPerServer+otherCosts;
    const monthlyIncrease = cloudAnnualCosts;
    const months = 5*12; // 5 years in months
    const results = [];

    for (let i = 0; i <= months; i++) {
      const value = firstValue + monthlyIncrease * i;
      results.push({
        month: i,
        value: parseFloat(value.toFixed(2))
      });
    }

    return results;
  };

  // Chart configuration
  const chartData = {
    labels: generateFiveYearOnPremisesTable().map(item => `Month ${item.month}`),
    datasets: [
      {
        label: 'Total Cost Over Time With On Premises Server',
        data: generateFiveYearOnPremisesTable().map(item => item.value),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        tension: 0.1
      },
      {
        label: 'Total Cloud Expenses',
        data: generateFiveYearCloudTable().map(item => item.value),
        borderColor: 'rgb(192, 135, 75)',
        backgroundColor: 'rgba(232, 200, 95, 0.5)',
        tension: 0.1
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: 'white'
        }
      },
      title: {
        display: true,
        text: '5-Year Cost Projection',
        color: 'white',
        font: {
          size: 16
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)'
        },
        ticks: {
          color: 'white'
        }
      }
    }
  };

  return (
    <div className={styles.backgroundContainer}>
      {showRotateMessage && (
        <div className={styles.rotateMessage}>
          <p>Please rotate your device to landscape mode.</p>
        </div>
      )}
      <div className={styles.backgroundImage}>
        <Image
          src={BackgroundImage}
          alt="Background"
          fill
          style={{ objectFit: 'cover' }}
        />
        <div className={styles.overlay} />
      </div>
      <Background></Background>
      <div className={styles.container}>
        <h1 className={styles.title}>TCO Calculating</h1>
        <p className={styles.paragraph}>
          This example TCO calculation focuses on an example in{' '}
          <a className={styles.link} href="https://www.anodot.com/learning-center/what-is-cloud-computing-tco-total-cost-of-ownership/">
            What Is Cloud Computing TCO (Total Cost of Ownership)? by Perry Tapiero
          </a>
        </p>

        <div className={styles.gallery}>
        <table className={styles.costTable}>
      <thead>
        <tr>
          <th className={styles.costHeader} colSpan={2}>On-Premises Costs</th>
          <th className={styles.costHeader}>Cloud Costs</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={styles.costCell}>Servers Amount 
            <input type="number" placeholder="Enter amount of servers"  value={serverAmount || ''} onChange={(e) => setServerAmount(Number(e.target.value))} className={styles.fullWidth} />
          </td>
          <td className={styles.costCell}>Annual Expenses 
            <input type="number" placeholder="Enter annual expenses"  value={annualExpences || ''} onChange={(e) => setAnnualExpences(Number(e.target.value))} className={styles.fullWidth} />
          </td>
          <td className={styles.costCell}>Migration Costs 
            <input type="number" placeholder="Enter migration costs" value={migrationCosts || ''} onChange={(e) => setMigrationCosts(Number(e.target.value))} className={styles.fullWidth} />
          </td>
        </tr>
        <tr>
          <td className={styles.costCell}>Cost per Server 
            <input type="number"  placeholder="Enter average cost/server"  value={costPerServer || ''} onChange={(e) => setCostPerServer(Number(e.target.value))} className={styles.fullWidth} />
          </td>
          <td className={styles.costCell}>Intangible Costs 
            <input type="number" placeholder="Enter intangible costs"  value={intangibleCosts || ''} onChange={(e) => setIntangibleCosts(Number(e.target.value))} className={styles.fullWidth} />
          </td>
          <td className={styles.costCell}>Cloud Monthly Costs 
            <input type="number" placeholder="Enter Cloud Monthly Costs"  value={cloudAnnualCosts || ''} onChange={(e) => setCloudAnnualCosts(Number(e.target.value))} className={styles.fullWidth} />
          </td>
        </tr>
        <tr>
          <td className={styles.costCell}>Other Costs 
            <input type="number" placeholder="Enter other costs" value={otherCosts || ''} onChange={(e) => setOtherCosts(Number(e.target.value))} className={styles.fullWidth} />
          </td>
          <td className={styles.costCell}></td>
          <td className={styles.costCell}></td>
        </tr>
        <tr>
          <td className={styles.costCell}><p className={styles.calculationResult}>
              Capital expenses: {(serverAmount * costPerServer + otherCosts).toLocaleString()}€
            </p></td>
          <td className={styles.costCell}><p className={styles.calculationResult}>
              Monthly expenses: {(intangibleCosts+annualExpences/12).toLocaleString()}€
            </p></td>
          <td className={styles.costCell}></td>
        </tr>
      </tbody>
    </table>
          <div className={styles.chartContainer}>
            <h2 className={styles.titletwo}>Chart</h2>
            <Line data={chartData} options={chartOptions} className={styles.chart}></Line>
          </div>
        </div>
      </div>

      <div className={styles.homeButtonContainer}>
        <Link href="/" className="inline-block bg-[#3182ce] text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
          Home
        </Link>
      </div>
    </div>
  );
};

export default TCOCalculating;