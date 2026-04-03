import pandas as pd
import numpy as np

num_samples=2000

data = []

for i in range(num_samples):
    voltage = np.random.uniform(210,240)
    current = np.random.uniform(0,20)
    frequency = np.random.uniform(49,51)
    active_power = np.random.uniform(0,5000)
    reactive_power = np.random.uniform(0,2000)
    power_factor = np.random.uniform(0.6,1)

    label = 0

    if current > 15 and voltage < 220:
        label = 1   # line-ground fault
    elif current > 18 and voltage < 215:
        label = 2   # line-line fault
    elif current > 12 and voltage < 225:
        label = 3   # overload

    data.append([voltage,current,frequency,active_power,reactive_power,power_factor,label])

columns = [
"voltage",
"current",
"frequency",
"active_power",
"reactive_power",
"power_factor",
"fault_label"
]

# df = pd.DataFrame(columns = columns)
df = pd.DataFrame(data, columns=columns)

print(df.head())
print("Total rows:", len(df))

df.to_csv("data/power_grid_data_3.csv", index=False)

print("Dataset generated successfully....")


