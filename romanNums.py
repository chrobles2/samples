try:
  input = int(input('Enter a number: '))
except ValueError:
  print('That is not a number')

romanNumerals = ['I', 'V', 'X', 'L', 'C', 'D', 'M', 'A', 'B', 'C']

# observations: odd indices are orders of magnitude
# number length 
# n = 0,1,2,3,4,5
# m = 0,1,3,5,7,9
# m = n * 2 - 1

# 1's are I -> X
# 10's are X -> C
# 100's are C -> M

# in general, on a range from a to c where c = a * 10
# a, aa, aaa, ab, ba, baa, baaa, bc, c

# 123
# s[0] = 1
# length - 0 = 3
# s[1] = 2
# length - 1 = 2

inputstr = str(input)
outputstr = ""

for i in range(0, len(inputstr)):
  mag = len(inputstr) - i
  print(mag)
  dig = int(inputstr[i])
  a = romanNumerals[mag * 2 - 2]
  b = romanNumerals[mag * 2 - 1]
  c = romanNumerals[mag * 2]
  if dig <= 3:
    outputstr += a*dig
  elif dig == 4:
    outputstr += a+b
  elif dig <= 8:
    outputstr += b+a*(dig - 5) 
  elif dig == 9:
    outputstr += a+c

print(outputstr)