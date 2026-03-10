<script lang="ts">
    import { untrack } from "svelte";
    import { staticFoodGrid } from "./shared.svelte";

    // optimization opportunity
    // make the offsets a static typed array for offsets
    // then use svelte's createSubscriber pattern to force updates
    interface Offset {
        x: number;
        y: number;
        size: number;
    }

    const gap = 20; // 20px gap between items
    const itemSize = 100; // each circle item is 100px

    let selectionIdx = $state({ col: -1, row: -1 });

    let offsets: Offset[][] = $state([]);
    let rows = $derived(offsets.length);
    let cols = $derived(offsets[0]?.length ?? 0);

    for (const row of staticFoodGrid) {
        const _row: Offset[] = [];
        for (const item of row) {
            _row.push({
                x: 0,
                y: 0,
                size: 0,
            });
        }
        offsets.push(_row);
    }

    function reset() {
        for (const row of offsets) {
            for (const item of row) {
                item.size = 0;
                item.x = 0;
                item.y = 0;
            }
        }
    }

    const hoverScale = 2;
    const distributeScale = hoverScale - 1;

    function _focusHelper(
        row: number,
        col: number,
        rowOffset: number,
        colOffset: number,
        rowRef: number,
        colRef: number,
        count: number,
    ) {
        for (let i = 1; i < count; i++) {
            const _row = row + i * rowOffset;
            const _col = col + i * colOffset;

            if (_row < 0 || _col < 0 || _row >= rows || _col >= cols) {
                return;
            }
            const offset = offsets[_row][_col];
            offset.size = distributeScale * itemSize * ((1 / (i + 1)) * (1 / (i + 1)));

            if (colRef != 0) {
                const prev = offsets[_row][_col + colRef];
                offset.x += -colRef * (prev.size / 2 + Math.abs(prev.x) + offset.size / 2);
            }

            if (rowRef != 0) {
                const prev = offsets[_row + rowRef][_col];
                offset.y += -rowRef * (prev.size / 2 + Math.abs(prev.y) + offset.size / 2);
            }
        }
    }

    function focusItem(row: number, col: number) {
        if (row < 0 || col < 0 || row >= rows || col >= cols) {
            return;
        }

        const center = offsets[row][col];
        center.size = itemSize * (hoverScale - 1);

        // right
        _focusHelper(row, col, 0, +1, 0, -1, 10);
        // down
        _focusHelper(row, col, +1, 0, -1, 0, 10);

        // // up
        _focusHelper(row, col, -1, 0, +1, 0, 10);

        // // left
        _focusHelper(row, col, 0, -1, 0, +1, 10);

        // bot right quad
        for (let r = row + 1; r < row + 10; r++) {
            _focusHelper(r, col, 0, +1, -1, -1, 10);
        }

        // bot left quad
        for (let r = row + 1; r < row + 10; r++) {
            _focusHelper(r, col, 0, -1, -1, +1, 10);
        }

        // top right quad
        for (let r = row - 1; r > row - 10; r--) {
            _focusHelper(r, col, 0, +1, +1, -1, 10);
        }

        // top left quad
        for (let r = row - 1; r > row - 10; r--) {
            _focusHelper(r, col, 0, -1, +1, +1, 10);
        }
    }

    $effect(() => {
        selectionIdx;
        untrack(() => {
            reset();
            focusItem(selectionIdx.row, selectionIdx.col);
        });
    });

    let cameraPos = $state({ x: 0, y: 0 });
    function pan(e: MouseEvent) {
        if (e.buttons != 1) {
            return;
        }

        cameraPos.x += e.movementX;
        cameraPos.y += e.movementY;
    }
</script>

<div class="wrapper" onmousemove={pan}>
    <div class="container" style="transform: translate({cameraPos.x}px, {cameraPos.y}px);">
        {#each staticFoodGrid as row, index (index)}
            <div class="row">
                {#each row as item, _index (index * staticFoodGrid.length + _index)}
                    {@const offset = offsets[index][_index]}
                    {@const scale = ((offset.size + itemSize) / itemSize).toFixed(3)}
                    <div
                        class="item"
                        style="--color: {item.color}; transform: translate3d({offset.x}px, {offset.y}px, 0.1px) scale({scale});"
                        onmouseenter={() => {
                            selectionIdx = {
                                col: _index,
                                row: index,
                            };
                        }}
                    >
                        {item.name}
                    </div>
                {/each}
            </div>
        {/each}
    </div>
</div>

<style>
    div {
        color: var(--bg);
    }

    .wrapper {
        max-width: 1200px;
        max-height: 800px;

        border: 2px solid var(--fg);
        overflow: hidden;
    }

    .container {
        display: flex;
        flex-direction: column;
        gap: 5px;

        position: relative;

        width: fit-content;
        height: fit-content;
    }

    .row {
        display: flex;
        flex-direction: row;
        gap: 5px;

        position: relative;

        width: fit-content;
        height: fit-content;
    }

    .item {
        position: relative;

        border-radius: 50%;
        background-color: var(--color);

        width: 100px;
        height: 100px;

        display: flex;
        justify-content: center;
        align-items: center;

        transform-origin: 50% 50%;

        transition-duration: 200ms;
        transition-timing-function: ease-out;
        transition-property: transform, border-color;

        border: 2px solid transparent;
    }

    .item:hover {
        border-color: var(--fg);
    }
</style>
