counts = [0] * (2**10)
m = [4,7,9,2,3,4,5,10,11,22,33,4,9,7,2,3,9,11,10, 1023]
print(m)

for i in m:
  counts[i] += 1

mi = 0
for i in range(0, len(counts)):
  for j in range(0, counts[i]):
    m[mi] = i
    mi+=1

print(m)