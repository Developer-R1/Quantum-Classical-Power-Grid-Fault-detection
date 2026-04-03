import { useState } from "react";
import  axios  from "axios";

export default function InputPanel ({ set_result }){
    const [data,setData] = useState ({
        voltage: "",
        current: "",
        frequency: ""
    });

    const handleSubmit = async() => {
        const res = await axios.post("http://127.0.0.1:8000/api/predict/", data);
        set_result(res.data);
    };

    return (
        <div className="panel">
            <h2> Power Input </h2>
            <input placeholder="Voltage"
                onChange={(e) => setData({...data, voltage: e.target.value})} />

            <input placeholder="Current"
                onChange={(e) => setData({...data, current: e.target.value})} />

            <input placeholder="Frequency"
                onChange={(e) => setData({...data, frequency: e.target.value})} />

            <button onClick={handleSubmit}>Analyze</button>
        </div>
    );
}