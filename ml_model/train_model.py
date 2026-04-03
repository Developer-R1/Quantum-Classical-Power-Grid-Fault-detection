import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score, classification_report, confusion_matrix

df = pd.read_csv("data/power_grid_data_3.csv")

x = df.drop("fault_label", axis = 1)
y = df["fault_label"]

x_train, x_test, y_train, y_test = train_test_split(x,y, test_size=0.2, random_state=42) 

scaler = StandardScaler()
x_train = scaler.fit_transform(x_train)
x_test = scaler.transform(x_test)

model = SVC(kernel="rbf")
model.fit(x_train, y_train)

y_pred = model.predict(x_test)

accuracy = accuracy_score(y_test, y_pred)

print("Model Accuracy:", accuracy)

print("\nConfusion Matrix:")
print(confusion_matrix(y_test, y_pred))

print("\nClassification Report:")
print(classification_report(y_test, y_pred))

print(df["fault_label"].value_counts())

import joblib

joblib.dump(model, "ml_model/fault_model.pkl")