def string_times(a,n):
    s=''
    for i in range(n):
        s+=a.upper()
    return s

print(string_times("hi",3))