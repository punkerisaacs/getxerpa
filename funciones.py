def zero(operation = None):
    return operation(0) if operation else 0

def one(operation = None):
    return operation(1) if operation else 1

def two(operation = None):
    return operation(2) if operation else 2

def three(operation = None):
    return operation(3) if operation else 3

def four(operation = None):
    return operation(4) if operation else 4

def five(operation = None):
    return operation(5) if operation else 5

def six(operation = None):
    return operation(6) if operation else 6

def seven(operation = None):
    return operation(7) if operation else 7

def eight(operation = None):
    return operation(8) if operation else 8

def nine(operation = None):
    return operation(9) if operation else 9

def plus(number):
    return lambda other_number: other_number + number
def minus(number):
   return lambda other_number: other_number - number
def times(number):
    return lambda other_number: other_number * number
def divided_by(number):
    return lambda other_number: other_number // number

print(four(times(five()))) # imprime 20
print(one(plus(eight()))) # imprime 9
print(seven(minus(three()))) # imprime 4
print(nine(divided_by(three()))) # imprime 3
