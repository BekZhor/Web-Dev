year = int(input())

def leap(y):
    if (year%4==0 and year%100!=0) or (year%400==0):
        return True
    else:
        return False
    
print(leap(year))