import math as m
a = int(input())
b= int(input())

for  i in range(a,b):
    if(m.sqrt(i)%1==0):
        print(i,end=" ")