import json
import sys

# hi = {"v": 'hi', "c": 'hello'}



# js = json.dumps(hi, indent=2)


# def f ():
#     return js


te = json.loads(sys.argv[1])

js = json.dumps(te, indent=2)

print(js)