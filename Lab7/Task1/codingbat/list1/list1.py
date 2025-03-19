def first_last6(nums):
  return (nums[0]==6) or (nums[len(nums)-1]==6)

def same_first_last(nums):
  return (len(nums)>=1) and (nums[0]==nums[len(nums)-1])

def make_pi():
  return [3,1,4]

def common_end(a, b):
  return (a[0]==b[0]) or (a[len(a)-1]==b[len(b)-1])

def sum3(a):
  return a[0]+a[1]+a[2]

def rotate_left3(a):
  return [a[1],a[2],a[0]]

def reverse3(nums):
  nums.reverse()
  return nums

def max_end3(nums):
  a=max(nums[0],nums[2])
  return [a,a,a]

def sum2(nums):
  if len(nums)==0:
    return 0
  elif len(nums)==1:
    return nums[0]
  else:
    return nums[0]+nums[1]
  
def middle_way(a, b):
  return [a[1],b[1]]

def make_ends(nums):
  return [nums[0],nums[len(nums)-1]]

def has23(a):
  return (a[0]==2 or a[0]==3) or (a[1]==2 or a[1]==3)

