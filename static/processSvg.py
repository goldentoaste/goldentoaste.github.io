import sys
from svg.path import parse_path

p = sys.argv[1]
maxSize = float(sys.argv[2])

# normalize a given svg path
path = parse_path(p).d().split()

out = ""




for item in path:
    
    parts = item.split(",")
    
    temp = []
    for p in parts:
      
        try:
            num = float(p)
            temp.append(f"{num/maxSize:.4f}")
        except ValueError:
            out += f" {p}"
    out += f" {','.join(temp)}"
    
print(out.replace("  ", " "))