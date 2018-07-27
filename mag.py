try:
  str = input('enter an integer in comma separated format')
except ValueError:
  print('that is not an int!')

chunks = str.split(',')
# ex: ['123', '456', '789']

magnitudes = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'pentillion?']
digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
tens = {
  2: 'twenty',
  3: 'thirty',
  4: 'fourty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
}

out = ""
for i in range(0, len(chunks)):
  '''
  c current chunk
  l length
  m magnitude
  '''
  c = chunks[i]
  l = len(c)
  m = len(chunks) - i - 1

  if l < 3 and i > 0:
    out = ''
    print('invalid number!')
    break

  if m < 0: m = 0

  if len(c) < 3:
    c = '0'*(3 - len(c))+c

  if c[0] != '0':
    out += digits[int(c[0])] + ' hundred '
  if c[1] == '0' and c[2] != '0':
    out += digits[int(c[2])] + ' ' + magnitudes[m] + ' '
  elif c[1] == '1':
    out += digits[int(c[1:])] + ' ' + magnitudes[m] + ' '
  elif int(c[1]) >= 2:
    out += tens[int(c[1])] + ' '
    if c[2] != '0':
      out += digits[int(c[2])] + ' '
    out += magnitudes[m] + ' '

print(out)