from qiskit.circuit.library import ZZFeatureMap, real_amplitudes
from qiskit.visualization import circuit_drawer
import matplotlib.pyplot as plt

num_features = 4

feature_map = ZZFeatureMap(feature_dimension = num_features, reps = 2)

ansatz = real_amplitudes(num_qubits = num_features, reps = 2)

circuit = feature_map.compose(ansatz)

print(circuit)

circuit.draw("mpl")
plt.show()