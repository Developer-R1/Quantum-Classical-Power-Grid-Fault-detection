import { useState } from "react";
import InputPanel from "./components/InputPanel";
import ResultPanel from "./components/ResultPanel";
import GraphModal from "./components/Graphpanel";
import QuantumBackground from "./components/QuantumScene";

function App() {
  const [result, set_result] = useState(null);
  const [showGraph, setShowGraph] = useState(false);

  return (
    <>

      <QuantumBackground/>

      <InputPanel set_result={set_result} />
      <ResultPanel result={result} />

      {result && (
        <button onClick={() => setShowGraph(true)}>
           Show Graph
        </button>
      )}

      {showGraph && (
        <GraphModal result={result} onClose={() => setShowGraph(false)} />
      )}
    </>
  );
}

export default App;