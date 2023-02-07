import sys
from svg.path import parse_path

p = sys.argv[1]


# normalize a given svg path
path = parse_path(p).d().split()

m = 0

for item in path:
    
    parts = item.split(",")
    
    p:str
    for p in parts:
        if p.replace('.','').isdigit():
            num = float(p)
            if num > m:
                m = num
                

out = ""


for item in path:
    
    parts = item.split(",")
    
    temp = []
    for p in parts:
        if p.replace('.','').isdigit():
            num = float(p)
            temp.append(f"{num/m:.4f}")
        else:
            out += f" {p}"
    out += f" {','.join(temp)}"
    
print(out)