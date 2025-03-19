n = int(input())
arr = input().split(sep=" ")

m=len(arr)-1
l=0
while l<len(arr)/2:
    temp=arr[l]
    arr[l]=arr[m]
    arr[m]=temp
    l+=1
    m-=1
        

print(arr)