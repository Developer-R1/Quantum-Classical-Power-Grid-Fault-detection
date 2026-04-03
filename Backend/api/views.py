from rest_framework.decorators import api_view
from rest_framework.response import Response
import pandas as pd
import joblib
import numpy as np


@api_view(['POST'])

def predict(request):
    file = request.FILES['file']
    # model_type = request.data.get('model')
    
    data = pd.read_csv(file)

    scaler = joblib.load("models/scaler.pkl")

    x = data.drop("fault_label", axis=1, errors='ignore').values
    x = scaler.transform(x)
    
    # if model_type == "quantum":
    #     model = joblib.load("models/quantum_trained_model.pkl")
    # else:
    #     model = joblib.load("models/fault_model.pkl")

    # predictions = model.predict(x)

    # return Response({
    #     "predictions" : predictions.tolist()
    # })

    classical_model = joblib.load("models/fault_model.pkl")
    quantum_model = joblib.load("models/quantum_trained_model.pkl")

    y_classical = classical_model.predict(x)
    y_quantum = quantum_model.predict(x)

    try:
        classical_conf = np.max(classical_model.predict_proba(x), axis = 1)
    except:
        classical_conf = None

    matching = np.mean(y_classical == y_quantum) * 100

    current_values = data.iloc[:, 0].values.tolist()

    return Response({
        "current_values": current_values,
        "classical_predictions": y_classical.tolist(),
        "quantum_predictions": y_quantum.tolist(),
        "agreement_percentage": matching,
        "classical_confidence": classical_conf.tolist() if classical_conf is not None else None
    })