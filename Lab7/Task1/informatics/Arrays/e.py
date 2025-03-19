n = int(input())
arr = input().split(sep=" ")

for i in range(1,len(arr)):
    if int(arr[i])==int(arr[i-1]):
        print("Yes")
        exit(1)
print("No")