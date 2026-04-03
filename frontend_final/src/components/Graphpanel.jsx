import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

import { useState } from "react";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function GraphModal({ result, onClose }) {
  const current = result.current_values;
  const classical = result.classical_predictions;
  const quantum = result.quantum_predictions;

  const labels = current.map((_, i) => i + 1);

  const classicalColors = classical.map(val =>
    val === 1 ? "red" : "green"
  );

  const quantumColors = quantum.map(val =>
    val === 1 ? "red" : "green"
  );

  const classicalData = {
    labels,
    datasets: [
      {
        label: "Classical Model Current",
        data: current,
        backgroundColor: classicalColors
      }
    ]
  };

  const quantumData = {
    labels,
    datasets: [
      {
        label: "Quantum Model Current",
        data: current,
        backgroundColor: quantumColors
      }
    ]
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: "Sample Number"
        }
      },
      y: {
        title: {
          display: true,
          text: "Current Value"
        }
      }
    }
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={onClose}>❌ Close</button>

        <h2>
           Agreement: {result.agreement_percentage.toFixed(2)}%
        </h2>

        <h3> Classical Model</h3>
        <Bar data={classicalData} options={options} />

        <h3> Quantum Model</h3>
        <Bar data={quantumData} options={options} />
      </div>
    </div>
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.9)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    width: "95%",
    height: "95%",
    background: "white",
    padding: "20px",
    overflowY: "scroll",
    borderRadius: "10px"
  }
};