export interface Item {
    name: string;
    description: string;
    color: string;
}


// palette colors provided by user
const palette = [
    { hex: '#ea6962', hue: 0 },
    { hex: '#e78a4e', hue: 30 },
    { hex: '#d8a657', hue: 60 },
    { hex: '#a9b665', hue: 120 },
    { hex: '#7daea3', hue: 180 },
    { hex: '#d3869b', hue: 300 }
];

function nearestColor(hsl: string): string {
    // copilot slop xd
    const m = /hsl\((\d+),/.exec(hsl);
    if (!m) return hsl;
    const hue = parseInt(m[1], 10);
    let best = palette[0];
    let bestDist = 360;
    for (const p of palette) {
        const d = Math.min(Math.abs(hue - p.hue), 360 - Math.abs(hue - p.hue));
        if (d < bestDist) { bestDist = d; best = p; }
    }
    return best.hex;
}

const _rawStaticFoodGrid: Item[][] = [

    // ROW 0: Spinach, Broccoli, Chicken, Pork
    [
        { name: "Spinach", description: "Veg", color: "hsl(100,60%,40%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,42%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,44%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,46%)" },
        { name: "Broccoli", description: "Veg", color: "hsl(120,60%,40%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,42%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,44%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,46%)" },
        { name: "Chicken", description: "Meat", color: "hsl(10,60%,40%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,42%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,44%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,46%)" },
        { name: "Pork", description: "Meat", color: "hsl(0,60%,40%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,42%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,44%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,46%)" }
    ],
    // ROW 1
    [
        { name: "Spinach", description: "Veg", color: "hsl(100,60%,42%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,44%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,46%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,48%)" },
        { name: "Broccoli", description: "Veg", color: "hsl(120,60%,42%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,44%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,46%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,48%)" },
        { name: "Chicken", description: "Meat", color: "hsl(10,60%,42%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,44%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,46%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,48%)" },
        { name: "Pork", description: "Meat", color: "hsl(0,60%,42%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,44%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,46%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,48%)" }
    ],
    // ROW 2
    [
        { name: "Spinach", description: "Veg", color: "hsl(100,60%,44%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,46%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,48%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,50%)" },
        { name: "Broccoli", description: "Veg", color: "hsl(120,60%,44%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,46%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,48%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,50%)" },
        { name: "Chicken", description: "Meat", color: "hsl(10,60%,44%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,46%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,48%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,50%)" },
        { name: "Pork", description: "Meat", color: "hsl(0,60%,44%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,46%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,48%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,50%)" }
    ],
    // ROW 3
    [
        { name: "Spinach", description: "Veg", color: "hsl(100,60%,46%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,48%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,50%)" }, { name: "Spinach", description: "Veg", color: "hsl(100,60%,52%)" },
        { name: "Broccoli", description: "Veg", color: "hsl(120,60%,46%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,48%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,50%)" }, { name: "Broccoli", description: "Veg", color: "hsl(120,60%,52%)" },
        { name: "Chicken", description: "Meat", color: "hsl(10,60%,46%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,48%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,50%)" }, { name: "Chicken", description: "Meat", color: "hsl(10,60%,52%)" },
        { name: "Pork", description: "Meat", color: "hsl(0,60%,46%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,48%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,50%)" }, { name: "Pork", description: "Meat", color: "hsl(0,60%,52%)" }
    ],
    // ROW 4: Cabbage, Zucchini, Beef, Venison
    [
        { name: "Cabbage", description: "Veg", color: "hsl(110,60%,40%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,42%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,44%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,46%)" },
        { name: "Zucchini", description: "Veg", color: "hsl(130,60%,40%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,42%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,44%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,46%)" },
        { name: "Beef", description: "Meat", color: "hsl(350,60%,40%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,42%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,44%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,46%)" },
        { name: "Venison", description: "Meat", color: "hsl(340,60%,40%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,42%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,44%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,46%)" }
    ],
    // ROW 5
    [
        { name: "Cabbage", description: "Veg", color: "hsl(110,60%,42%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,44%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,46%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,48%)" },
        { name: "Zucchini", description: "Veg", color: "hsl(130,60%,42%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,44%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,46%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,48%)" },
        { name: "Beef", description: "Meat", color: "hsl(350,60%,42%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,44%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,46%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,48%)" },
        { name: "Venison", description: "Meat", color: "hsl(340,60%,42%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,44%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,46%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,48%)" }
    ],
    // ROW 6
    [
        { name: "Cabbage", description: "Veg", color: "hsl(110,60%,44%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,46%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,48%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,50%)" },
        { name: "Zucchini", description: "Veg", color: "hsl(130,60%,44%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,46%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,48%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,50%)" },
        { name: "Beef", description: "Meat", color: "hsl(350,60%,44%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,46%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,48%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,50%)" },
        { name: "Venison", description: "Meat", color: "hsl(340,60%,44%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,46%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,48%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,50%)" }
    ],
    // ROW 7
    [
        { name: "Cabbage", description: "Veg", color: "hsl(110,60%,46%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,48%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,50%)" }, { name: "Cabbage", description: "Veg", color: "hsl(110,60%,52%)" },
        { name: "Zucchini", description: "Veg", color: "hsl(130,60%,46%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,48%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,50%)" }, { name: "Zucchini", description: "Veg", color: "hsl(130,60%,52%)" },
        { name: "Beef", description: "Meat", color: "hsl(350,60%,46%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,48%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,50%)" }, { name: "Beef", description: "Meat", color: "hsl(350,60%,52%)" },
        { name: "Venison", description: "Meat", color: "hsl(340,60%,46%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,48%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,50%)" }, { name: "Venison", description: "Meat", color: "hsl(340,60%,52%)" }
    ],
    // ROW 8: Blueberry, Grape, Baguette, Croissant
    [
        { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,40%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,42%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,44%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,46%)" },
        { name: "Grape", description: "Fruit", color: "hsl(270,60%,40%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,42%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,44%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,46%)" },
        { name: "Baguette", description: "Carb", color: "hsl(40,60%,40%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,42%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,44%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,46%)" },
        { name: "Croissant", description: "Carb", color: "hsl(35,60%,40%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,42%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,44%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,46%)" }
    ],
    // ROW 9
    [
        { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,42%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,44%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,46%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,48%)" },
        { name: "Grape", description: "Fruit", color: "hsl(270,60%,42%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,44%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,46%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,48%)" },
        { name: "Baguette", description: "Carb", color: "hsl(40,60%,42%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,44%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,46%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,48%)" },
        { name: "Croissant", description: "Carb", color: "hsl(35,60%,42%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,44%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,46%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,48%)" }
    ],
    // ROW 10
    [
        { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,44%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,46%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,48%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,50%)" },
        { name: "Grape", description: "Fruit", color: "hsl(270,60%,44%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,46%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,48%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,50%)" },
        { name: "Baguette", description: "Carb", color: "hsl(40,60%,44%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,46%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,48%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,50%)" },
        { name: "Croissant", description: "Carb", color: "hsl(35,60%,44%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,46%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,48%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,50%)" }
    ],
    // ROW 11
    [
        { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,46%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,48%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,50%)" }, { name: "Blueberry", description: "Fruit", color: "hsl(240,60%,52%)" },
        { name: "Grape", description: "Fruit", color: "hsl(270,60%,46%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,48%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,50%)" }, { name: "Grape", description: "Fruit", color: "hsl(270,60%,52%)" },
        { name: "Baguette", description: "Carb", color: "hsl(40,60%,46%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,48%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,50%)" }, { name: "Baguette", description: "Carb", color: "hsl(40,60%,52%)" },
        { name: "Croissant", description: "Carb", color: "hsl(35,60%,46%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,48%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,50%)" }, { name: "Croissant", description: "Carb", color: "hsl(35,60%,52%)" }
    ],
    // ROW 12: Plum, Cherry, Spaghetti, Macaroni
    [
        { name: "Plum", description: "Fruit", color: "hsl(280,60%,40%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,42%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,44%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,46%)" },
        { name: "Cherry", description: "Fruit", color: "hsl(300,60%,40%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,42%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,44%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,46%)" },
        { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,40%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,42%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,44%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,46%)" },
        { name: "Macaroni", description: "Carb", color: "hsl(45,60%,40%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,42%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,44%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,46%)" }
    ],
    // ROW 13
    [
        { name: "Plum", description: "Fruit", color: "hsl(280,60%,42%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,44%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,46%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,48%)" },
        { name: "Cherry", description: "Fruit", color: "hsl(300,60%,42%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,44%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,46%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,48%)" },
        { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,42%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,44%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,46%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,48%)" },
        { name: "Macaroni", description: "Carb", color: "hsl(45,60%,42%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,44%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,46%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,48%)" }
    ],
    // ROW 14
    [
        { name: "Plum", description: "Fruit", color: "hsl(280,60%,44%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,46%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,48%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,50%)" },
        { name: "Cherry", description: "Fruit", color: "hsl(300,60%,44%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,46%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,48%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,50%)" },
        { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,44%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,46%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,48%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,50%)" },
        { name: "Macaroni", description: "Carb", color: "hsl(45,60%,44%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,46%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,48%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,50%)" }
    ],
    // ROW 15
    [
        { name: "Plum", description: "Fruit", color: "hsl(280,60%,46%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,48%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,50%)" }, { name: "Plum", description: "Fruit", color: "hsl(280,60%,52%)" },
        { name: "Cherry", description: "Fruit", color: "hsl(300,60%,46%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,48%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,50%)" }, { name: "Cherry", description: "Fruit", color: "hsl(300,60%,52%)" },
        { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,46%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,48%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,50%)" }, { name: "Spaghetti", description: "Carb", color: "hsl(50,60%,52%)" },
        { name: "Macaroni", description: "Carb", color: "hsl(45,60%,46%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,48%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,50%)" }, { name: "Macaroni", description: "Carb", color: "hsl(45,60%,52%)" }
    ]
];

export const staticFoodGrid: Item[][] = _rawStaticFoodGrid.map(row =>
    row.map(item => ({ ...item, color: nearestColor(item.color) }))
);
