def cigar_party(a, is_weekend):
  if is_weekend:
    return (a>=40)
  else:
    return (a>=40) and (a<=60)
  
def date_fashion(you, date):
  if (you>=8 or date>=8) and (you>2 and date>2):
    return 2
  elif you<=2 or date<=2:
    return 0
  else:
    return 1
  
def squirrel_play(a, is_summer):
  if is_summer:
    return (a>=60 and a <=100)
  else:
    return (a>=60 and a<=90)

def caught_speeding(s, is_birthday):
  if is_birthday:
    if s<=65:
      return 0
    elif s>=66 and s<=85:
      return 1
    else:
      return 2
  else:
    if s<=60:
      return 0
    elif s>=61 and s<=80:
      return 1
    else:
      return 2

def sorta_sum(a, b):
  if (a+b)<10 or (a+b)>19:
    return a+b
  else:
    return 20

def love6(a, b):
  return (a==6 or b==6) or (abs(a-b)==6 or (a+b)==6)

def near_ten(num):
  return (num%10<=2 or num%10>=8 )