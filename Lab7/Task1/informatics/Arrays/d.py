n = int(input())
arr = input().split(sep=" ")
count = 0 
for i in range(1,len(arr)):
    if int(arr[i])>int(arr[i-1]):
        count+=1
print(count)