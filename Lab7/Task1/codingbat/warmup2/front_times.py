def front_times(a,n):
    s='' 
    for i in range(n):
        s+=a[:3]
    return s

print(front_times("Ch0000",3))