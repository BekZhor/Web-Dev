n = int(input())  
students = [[input().strip(), float(input())] for _ in range(n)]  

grades = sorted(set(grade for _, grade in students))  
second_lowest = grades[1] 

second_lowest_students = sorted([name for name, grade in students if grade == second_lowest])

print(second_lowest_students)
