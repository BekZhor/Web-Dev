n = int(input())
arr = input().split(sep=" ")

for i in range(len(arr)):
    if i%2==0:
        print(arr[i],end=" ")
