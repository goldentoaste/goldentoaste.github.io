import sys
from svg.path import parse_path

p = sys.argv[1]
maxSize = float(sys.argv[2])
offset = float(sys.argv[3])
# normalize a given svg path

path = parse_path(p).d().split()
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

            print(last)
            if last and last.isupper():
                if index == 0 and last == "V":
                    num -= offset
                if index == 1:
                    num -= offset   
         
            if last and ( last in ('v', 'V') or (last.isupper() and index == 1)):
                temp.append(f"{num/(maxSize - offset):.4f}")
            else:
                temp.append(f"{num/(maxSize):.4f}")
        except ValueError:
            out += f" {p}"
            
    if len(parts) == 1:
        last = parts[0].strip()

    out += f" {','.join(temp)}"
    
print(out.replace("  ", " "))