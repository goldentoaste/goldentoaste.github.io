<script lang="ts">
    import { quartOut } from "svelte/easing";
    import { fade } from "svelte/transition";

  
    export let style = "";

    function expandVert(
        node: HTMLElement,
        { delay = 0, duration = 500, easing = (t: number) => t }
    ) {
        return {
            delay,
            duration,
            css: (t: number) => {
                const eased = easing(t);
                return `transform: scale(1, ${eased})`;
            },
        };
    }

</script>

<div id="parent" out:fade|local={{duration:200}} on:outroend {style}>
    <div id="decor" in:expandVert|global={{ duration: 500, easing: quartOut }} />
    <div id="listContainer" >
        <slot></slot>
    </div>
</div>

<style>
    #parent {
        height: fit-content ;
        display: flex;
        flex-direction: row;
        align-items: stretch;
    }
    #decor {
        content: "";
        position: relative;
        width: 0.4rem;

        background-color: transparent;
        border-left: 0.4rem solid;
        border-right: 0.2rem solid;
        border-color: var(--fg-alt);
        margin-right: 1rem;
        opacity: 30%;
    }

    #listContainer {
        width: 100%;
        height: fit-content;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }


</style>
