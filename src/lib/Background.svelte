<script>
    import { fade } from 'svelte/transition';

    import { onMount } from 'svelte';

    const linePos = 200 + Math.floor(Math.random() * 100 - 50);
</script>

<div
    class="parent"
    transition:fade={{
        duration: 300,
    }}
>
    {#each [...Array(4).keys()] as index}
    <svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMin meet" style="--baseX: {index * 50 + linePos}; --baseY: {index * 50 + linePos};transform: translate(calc(var(--baseX)px + var(--offsetX)px) calc(var(--baseY)px + var(--offsetY)px));" width="100" height="100" viewBox="0 0 100 100">
        <path d="M 0 0 L 100 100" stroke="var(--fg)" stroke-width="1"/>
    </svg>
    {/each}
</div>

<style>
    .parent {
        filter: drop-shadow(0 0 2px var(--fg));
    }

    svg > path {
        stroke: var(--fg-alt);
        stroke-width: 1.5;
    }

    svg {
        top:100px;
        width: 10%;
        height: fit-content;

        position: absolute;
        background-color: transparent;
        color: transparent;

        --offsetX: 1000;
        --offsetY: 0;

        
    }
</style>
