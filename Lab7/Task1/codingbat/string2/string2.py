def double_char(str):
  result = ''
  for i in str:
    result+=i*2
  return result

def count_hi(str):
  return str.count("hi")

def cat_dog(s):
    return s.count("cat") == s.count("dog")

def end_other(a, b):
    a, b = a.lower(), b.lower()  
    return a.endswith(b) or b.endswith(a)  

def xyz_there(s):
    return "xyz" in s.replace(".xyz", "")
