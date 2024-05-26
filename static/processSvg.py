import sys
from svg.path import parse_path # pip install svg.path

p = sys.argv[1]
maxSize = float(sys.argv[2])
offset = float(sys.argv[3])
# normalize a given svg path

path = parse_path(p).d().split()
if path[0] == "m":
    path[0] = "M"

# print(parse_path(p))
out = f""



last : str = False
index = 0
for item in path:
    parts = item.split(",")
    temp = []
    
    for p in parts:
        try:
            
            if last in ('a', 'A') and index in (3, 4):
                print("in last", last, index, p)
                if index == 3:
                    temp.append(f",{p},")
                if index == 4:
                    temp.append(f"{p},")
                index += 1
                continue
                
               
            
            num = float(p)
            if  last.isupper():
                if index == 0 and last == "V":
                    num -= offset
                if index == 1:
                    num -= offset   
                   
            result = f"{num/(maxSize):.4f}"
            if result[0] == '0':
                result = result[1:]
            if result[0] =='-':
                result = '-'+result[2:]
            temp.append(result)
            index += 1
        except ValueError:
            out += f"{p}"
        
    if len(parts) == 1 and not parts[0].isnumeric():
        last = parts[0].strip()
        index = 0

    out += f" {''.join(temp)}"
    
print(out.replace(" ", ""))