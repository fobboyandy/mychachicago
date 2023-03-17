import json

hi = {"v": 'hi', "c": 'hello'}

js = json.dumps(hi, indent=2)

def f ():
    return js

print(f())