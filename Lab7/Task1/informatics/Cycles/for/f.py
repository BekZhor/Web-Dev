x = input()
a= ""
for i in range(len(x)-1,-1,-1):
    a+=x[i]
    
print(int(a))