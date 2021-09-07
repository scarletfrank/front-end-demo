import faker
import pandas as pd
from faker import Faker
import csv

# -- 
fake = Faker()
Faker.seed(0)
nodes = []
edges = []
# Node 


for _ in range(20000):
    nodes.append([fake.bban(), fake.ssn(), fake.first_name(), fake.ascii_company_email()])

df_nodes = pd.DataFrame(nodes, columns=['acc', 'id', 'name', 'company'])
# print(df_nodes)

# Transaction

for _ in range(20):
    a, b = df_nodes.sample(n=1), df_nodes.sample(n=1)
    edges.append([a.values[0][0], '存', b.values[0][0], fake.pricetag(), fake.ean(length=13)])

df_edges = pd.DataFrame(edges, columns=['acc_a', 'tx_direction', 'acc_b', 'amt', 'seq'])
# print(df_edges)

# ouput
df_nodes.to_csv('faker/nodes.csv', index=False, quoting=csv.QUOTE_ALL)
df_edges.to_csv('faker/edges.csv', index=False, quoting=csv.QUOTE_ALL)