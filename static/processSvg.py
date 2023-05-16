import sys
from svg.path import parse_path

p = sys.argv[1]
maxSize = float(sys.argv[2])
offset = float(sys.argv[3])
# normalize a given svg path

path = parse_path(p).d().split()
if path[0] == "m":
    path[0] = "M"

print(path)
# print(parse_path(p))
out = f""



last : str = False
for item in path:
    
    parts = item.split(",")
    
    temp = []
    
    for index, p in enumerate(parts) :
        
        try:
            num = float(p)
            if  last.isupper():
                if index == 0 and last == "V":
                    num -= offset
                if index == 1:
                    num -= offset   
                   
            result = f"{num/(maxSize):.3f}"
            if result[0] == '0':
                result = result[1:]
            if result[0] =='-':
                result = '-'+result[2:]
            temp.append(result)
        except ValueError:
            out += f"{p}"
            
    if len(parts) == 1:
        last = parts[0].strip()

    out += f" {''.join(temp)}"
    
print(out.replace(" ", ""))