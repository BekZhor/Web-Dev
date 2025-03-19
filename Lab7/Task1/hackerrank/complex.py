import cmath as cm

z = complex(input())

r = cm.sqrt((z.real**2)+(z.imag**2))
print(r,end=" ")
print(cm.phase(z))