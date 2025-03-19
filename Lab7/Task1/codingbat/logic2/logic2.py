def make_bricks(small, big, goal):
  max_big_bricks = goal // 5  
  used_big_bricks = min(big, max_big_bricks)  
  remaining_length = goal - (used_big_bricks * 5) 
  return remaining_length <= small  

def lone_sum(a, b, c):
  result = (a if a != b and a != c else 0) + \
             (b if b != a and b != c else 0) + \
             (c if c != a and c != b else 0)
  return result

def lucky_sum(a, b, c):
  if a == 13:
    return 0
  if b == 13:
    return a
  if c == 13:
    return a + b
  return a + b + c

def round10(num):
    return (num + 5) // 10 * 10

def round_sum(a, b, c):
    return round10(a) + round10(b) + round10(c)

def close_far(a, b, c):
    close = abs(a - b) <= 1 or abs(a - c) <= 1  
    far = abs(b - c) >= 2 and (abs(a - b) >= 2 or abs(a - c) >= 2)  

    return close and far

def make_chocolate(small, big, goal):
    max_big_bars = goal // 5  
    used_big_bars = min(big, max_big_bars) 
    remaining_weight = goal - (used_big_bars * 5)  

    if remaining_weight <= small: 
        return remaining_weight
    return -1  