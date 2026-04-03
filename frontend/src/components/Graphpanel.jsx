import { Bar } from "react-chartjs-2";

export default function GraphPanel({ result }) {
  if (!result) return null;

  const data = {
    labels: ["Confidence", "Accuracy"],
    datasets: [{
      label: "Model Performance",
      data: [
        result.classical_confidence?.[0] * 100 || 0,
        result.agreement_percentage
      ],
    }]
  };

  return <Bar data={data} />;
}