<script lang="ts">
    import { onMount } from "svelte";
    export let year: string;
    import { cubicOut } from "svelte/easing";
    import { fade } from "svelte/transition";

    let mounted = false;
    onMount(() => {
        mounted = true;
    });

    interface RevealParam {
        duration?: number;
        maxWidth?: number;
    }

    function reveal(
        node: Element,
        { duration = 500, maxWidth = 500 }: RevealParam
    ) {
        return {
            duration: duration,
            css: (t: number) => {
                const e = cubicOut(t);
                return `
                width: ${e * maxWidth}px;`;
            },
        };
    }
</script>

{#if mounted}
    <yearIndicator transition:fade|local >
        <h1>
            {year}
        </h1>

        <div class="lineDecor" in:reveal|local={{}}>
            <div
                class="dot x1"
                style="right:0; top:0; transform:translate(150%, -150%);"
            />
            <div
                class="dot x2"
                style="right:0; top:0; transform:translate(150%, 150%);"
            />
            <div class="dot x3"  style="left:0; top:0; transform:translate(300%, 150%);"/>
           
            <div class="diamond" />
        </div>
    </yearIndicator>
{/if}

<style>
    yearIndicator {
        position: relative;

        display: flex;
        flex-direction: column;
    }

    h1 {
        font-size: larger;
        margin: 0.4rem;
        margin-left: 0.75rem;
    }

    .lineDecor {
        max-width: 500px;
        width: auto;
        height: 2px;

        background: var(--fg-alt);

        position: relative;
    }

    .dot {
        position: absolute;
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 100%;
        background-color: var(--fg-alt);
        display: inline-block;
    }

    .diamond {
        position: absolute;

        width: 1rem;
        height: 1rem;

        left: 0;
        top: 0;

        transform: translate(-50%, calc(-50% + 1px))  rotate(45deg);

        background: var(--fg-alt);
    }
</style>
