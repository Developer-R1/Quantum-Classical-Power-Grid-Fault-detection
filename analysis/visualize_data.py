import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv("data/power_grid_data_3.csv")

sns.histplot(df["voltage"], kde=True)
plt.title("Voltage Distribution")
plt.show()

sns.scatterplot(x="voltage", y="current", hue="fault_label", data=df)
plt.title("Voltage vs Current Fault Visualization")
plt.show()

corr = df.corr()

sns.heatmap(corr, annot=True, cmap="coolwarm")
plt.title("Feature Correlation")
plt.show()
