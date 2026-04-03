export default function resultPanel ({ result }){
    if (!result) return null;

    return (
        <div className="panel">
            <h2>🧠 Quantum vs Classical</h2>

            <p>⚡ Classical Prediction: {result.classical_predictions[0]}</p>
            <p>🧠 Quantum Prediction: {result.quantum_predictions[0]}</p>

            <p>🤝 Agreement: {result.agreement_percentage.toFixed(2)}%</p>

            {result.classical_confidence && (
                <p>📊 Confidence: {(result.classical_confidence[0] * 100).toFixed(2)}%</p>
            )}
        </div>
    );

}

