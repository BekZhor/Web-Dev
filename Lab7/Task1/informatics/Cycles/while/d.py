x = int(input())
power = 1
while power<=x:
    if power == x:
        print("Yes")
        exit(1)
    power*=2
print("No")