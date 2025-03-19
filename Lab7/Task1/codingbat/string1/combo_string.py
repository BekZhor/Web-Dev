def combo_string(a, b):
  if len(a)<len(b):
    shorter=a
    longer=b
  else:
    shorter=b
    longer=a
  return shorter+longer+shorter