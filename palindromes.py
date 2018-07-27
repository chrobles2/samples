string = 'pop this tacocat seems nice at noon'

palindromes = {}
pal = dict()

for i in range(len(string)):
	for j in range(i+2, len(string)+1):
		substr = string[i:j]
		print(substr)
		mid = int(len(substr)/2)
		if len(substr)%2 == 0:
			if substr[:mid] == substr[mid:][::-1]:
				pal[i,j] = substr
		else:
			if substr[:mid] == substr[mid+1:][::-1]:
				pal[i,j] = substr

print(pal)
