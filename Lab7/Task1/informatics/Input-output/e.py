
v = int(input())
t = int(input())
s = v*t

S = 109
if s>0:
    print(abs(S-s))
elif s<0:
    print(S+s)
else:
    print(0)