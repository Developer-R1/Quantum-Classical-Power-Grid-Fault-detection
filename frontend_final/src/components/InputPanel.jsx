import { useState } from "react";
import axios from "axios";

export default function InputPanel({ set_result }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    if (!file) {
      setMessage("Please upload a CSV file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      setMessage("Processing please wait...");

      const res = await axios.post(
        "http://127.0.0.1:8000/api/predict/",
        formData
      );

      console.log("API RESPONSE:", res.data);

      set_result(res.data);
      setMessage("Analysis complete!");
    } catch (err) {
      console.error(err);
      setMessage("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="panel">
      <h2> Upload Grid Data</h2>

      <input
        type="file"
        accept=".csv"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>

      <p>{message}</p>
    </div>
  );
}