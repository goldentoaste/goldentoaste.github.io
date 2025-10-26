<script>
    import { fade } from 'svelte/transition';
    import { setRandomInterval } from '$lib/scripts/randomInterval';
    
    let lineOrigin = $state(0);
    /** @type {{flip?: boolean}} */
    let { flip = false } = $props();

    setRandomInterval(
        () => {
            lineOrigin = Math.random();
        },
        2000,
        9000
    );
</script>

<div
    class="parent"
    style={flip? "transform: scale(-1, -1);bottom:0;right:0;":""}
    transition:fade|global={{
        duration: 300,
    }}
>
    {#each [...Array(4).keys()] as index}
        <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMin meet"
            style="
            transition: all ease {10 + 0.6 * index}s;
            --baseX: {index * 5 * Math.random() + lineOrigin}px; --baseY: {index * 50 + 25 * Math.random()+lineOrigin}px;"
            viewBox="0 0 1920 1080 "
        >
            <path d="M 2 2 L 1400 1000" stroke="var(--fg)" stroke-width="1" />
        </svg>
    {/each}

    <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMin meet"
        style="
    transition: all ease 10s;
    --baseX: {Math.random() * 25 + lineOrigin}px; --baseY:{Math.random() * 30 + lineOrigin}px;"
        viewBox="0 0 1920 1080 "
    >
        <circle cx="{200}px" cy="{200}px" r="400" fill="none" stroke-width="1" stroke="var(--fg)" />
        
        <circle cx="{200}px" cy="{200}px" r="410" fill="none" stroke-width="1" stroke="var(--fg)" />
    </svg>
</div>

<style>
    .parent {
        filter:  opacity(0.2) drop-shadow(0 0 4px var(--fg)) blur(0.4px);
        position: fixed;
        z-index: -100;
        width: 100%;
        min-width: 1000px;

    }

    svg {
        position: fixed;
        display: inline-block;

        background-color: transparent;
        color: transparent;

        --offsetX: 0px;
        --offsetY: 0px;

        transform: translate(calc(var(--baseX) + var(--offsetX)), calc(var(--baseY) + var(--offsetY)));
    }
</style>
