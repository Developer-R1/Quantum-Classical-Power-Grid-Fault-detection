import { useState } from "react";
import GraphModal from "./Graphpanel";

export default function ResultPanel({ result }) {

  const [showGraph, setShowGraph] = useState(false);

  if (!result) return null;

  const getLabel = (val) => (val === 1 ? "Fault" : "Normal");

  return (
    <div className="panel">
      <h2> Fault Analysis Summary</h2>

      <p>Total Samples: {result.classical_predictions.length}</p>

      <p>
         Classical Faults:{" "}
        {result.classical_predictions.filter(x => x === 1).length}
      </p>

      <p>
         Quantum Faults:{" "}
        {result.quantum_predictions.filter(x => x === 1).length}
      </p>

      <h3> Agreement: {result.agreement_percentage.toFixed(2)}%</h3>

      {/* ROW-WISE TABLE */}
      <h3 style={{ marginTop: "20px" }}>📋 Detailed Results</h3>

      <div style={{ maxHeight: "300px", overflowY: "scroll" }}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Classical</th>
              <th>Quantum</th>
            </tr>
          </thead>

          <tbody>
            {result.classical_predictions.map((val, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{getLabel(val)}</td>
                <td>{getLabel(result.quantum_predictions[i])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     

        <button onClick={() => setShowGraph(true)}>
         Show Graph
        </button>

        {showGraph && <GraphModal result={result} onClose={() => setShowGraph(false)} />}

    </div>
  );
}