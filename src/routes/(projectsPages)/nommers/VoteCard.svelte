<script lang="ts">
    import { spring } from "svelte/motion";
    import { fly, fade } from "svelte/transition";
    const xSize = 400;
    const ySize = 400;

    const xMax = 132;
    const tMax = 10;

    let targets = { x: 0, y: 0, rot: 0 };
    let coords = spring(
        { x: 0, y: 0, rot: 0 },
        {
            stiffness: 0.1,
            damping: 0.7,
        }
    );
    let dragging = false;
    let sign: number;
    $: sign = $coords.rot > 0 ? 1 : -1;
    $: console.log(sign);

    const drag = (e: MouseEvent) => {
        if (e.buttons !== 1 || !dragging) {
            return;
        }
        let x = targets.x + e.movementX;
        let y = targets.y + e.movementY;
        targets = { x: clamp(x, -xMax, xMax), y: y, rot: targets.rot };

        let signX = Math.sign(x);

        let magX = Math.min(xMax, Math.max(0, Math.abs(x))) / xMax;

        let ex = signX * ease(magX) * xMax;
        let er = signX * magX * tMax;
        let ey = 0.1 * y;

        let rotated = rotAround(
            ex + xSize / 2,
            ey + ySize / 2,
            ex + xSize / 2,
            ey + ySize,
            er
        );

        coords.set({
            x: rotated.x - xSize / 2,
            y: rotated.y - ySize / 2,
            rot: er,
        });
    };

    const clamp = (val: number, min: number, max: number) => {
        return Math.max(min, Math.min(max, val));
    };
    const ease = (x: number) => {
        return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
    };

    const rotAround = (
        vx: number,
        vy: number,
        px: number,
        py: number,
        angle: number
    ) => {
        let r = d2r(angle);

        let x = vx - px;
        let y = vy - py;

        let cos = Math.cos(r);
        let sin = Math.sin(r);

        return {
            x: px + (x * cos - y * sin),
            y: py + (x * sin + y * cos),
        };
    };

    const d2r = (d: number) => {
        return d * (Math.PI / 180);
    };
</script>

<div
    in:fly={{
        y: -30,
        duration: 500,
    }}
    out:fade={{ duration: 500 }}
    id="container"
    style="transform: translate({$coords.x + 250}px,{$coords.y +
        20}px) rotate({$coords.rot}deg) ;"
    on:mousedown={() => {
        dragging = true;
    }}
    on:mouseup={() => {
        dragging = false;
    }}
>
    <div
        style="clip-path: path('
        M0, 15
        q0,-15,15,-15
        h370
        q15,0,15, 15
        v200
        h-400
        z
        ')"
    >
        <div
            style="transform: translate({170 * sign}px , {10 *
                sign}px)  rotate({-$coords.rot}deg) translate({-170 *
                sign}px , {-10 * sign}px);"
        >
            {#if Math.abs($coords.rot) > 5}
                <div
                    id="label"
                    style=" justify-content: {$coords.rot > 0
                        ? 'end'
                        : 'start'};"
                    transition:fly={{ y: -50, duration: 300 }}
                >
                    <!--top label-->
                    <p>stuff</p>
                </div>
            {/if}
        </div>
    </div>
    <slot/>
</div>

<svelte:window
    on:mousemove={drag}
    on:mouseup={() => {
        targets.x = 0;
        targets.y = 0;
        coords.set(targets);
        console.log(targets);
    }}
/>

<style>

    p {
        color: black;
    }

    #label > p {
        padding-left: 130px;
        padding-right: 130px;
        padding-bottom: 10px;
        align-self: flex-end;
    }

    #label {
        background: #aaaaaaaa;
        position: absolute;
        width: 600px;
        height: 150px;
        top: -70px;
        left: -100px;

        display: flex;
    }

    #container {
        user-select: none;
        cursor: move;
        background: #dddddd;
        border: 1px black solid;
        width: 400px;
        height: 400px;
        position: absolute;
        border-radius: 15px;
    }
</style>
