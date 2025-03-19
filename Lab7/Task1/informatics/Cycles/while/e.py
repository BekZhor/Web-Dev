x = int(input())
power = 1
count = 0
while power:
    if power>=x:
        print(count)
        break
    power*=2
    count+=1