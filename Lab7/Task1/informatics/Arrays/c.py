n = int(input())
arr = input().split(sep=" ")
count = 0
for i in range(len(arr)):
    if int(arr[i])>0:
        count+=1
print(count)