import pandas as pd

df = pd.read_csv("data/Power_grid_data_3.csv")

print(df.head())
print("\n Dataset Shape : ", df.shape)
print("\n Dataset Info : \n")
print(df.describe())

