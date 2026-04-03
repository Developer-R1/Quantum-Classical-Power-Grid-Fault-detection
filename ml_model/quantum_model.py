import numpy as np
import pandas as pd

from qiskit.circuit.library import ZZFeatureMap
from qiskit.circuit.library import RealAmplitudes


from qiskit_machine_learning.algorithms import VQC
from qiskit_machine_learning.optimizers import COBYLA

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import accuracy_score

df = pd.read_csv("data/power_grid_data_3.csv")

x = df.drop("fault_label", axis = 1).values
y = df["fault_label"].values

x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42, stratify = y)

scaler = StandardScaler()
x_train = scaler.fit_transform(x_train)
x_test = scaler.transform(x_test)

num_features = x.shape[1]

feature_map = ZZFeatureMap(feature_dimension = num_features, reps = 2)

ansatz = RealAmplitudes(num_qubits = num_features, reps = 2)

optimizer = COBYLA(maxiter = 100)

vqc = VQC(feature_map = feature_map, ansatz = ansatz, optimizer = optimizer)

vqc.fit(x_train, y_train)

y_pred = vqc.predict(x_test)

accuracy = accuracy_score(y_test, y_pred)

print("Quantum Model Accuracy:", accuracy)

import joblib

joblib.dump(vqc,"ml_model/quantum_trained_model.pkl")
joblib.dump(scaler,"ml_model/scaler.pkl")


