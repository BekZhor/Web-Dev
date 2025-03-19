x = input()
a=0
b=len(x)-1
for i in x:
    a+=(int(i)*(2**b))
    b-=1
print(a)