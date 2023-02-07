<script lang="ts">
    import { goto } from "$app/navigation";
    import { createEventDispatcher } from "svelte";

    export let href: string = "";
    export let path: string = "";
    export let selected: boolean = false;

    const dispatch = createEventDispatcher();

    function onclick(e: MouseEvent) {
        if (href) {
            goto(href);
        }

        dispatch("click", e.detail);
    }
</script>

<svg width=0 height=0 xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id="clip"  clipPathUnits="objectBoundingBox">
               <path 
            d={path}
            fill="black" />
        </clipPath>
    </defs>
</svg>

<button on:click={onclick} class:selected>

    {#if path}
    <div
    style="clip-path: url('#clip');"
    ></div>
    {/if}
  
    <slot />
</button>


<style>


    button:not(:disabled)::before {
        content: "";
        background-color: var(--bg-alt2);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;

        transition-property: top, height, border;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
    }

    button:not(:disabled):hover::before {
        content: "";
        position: absolute;
        top: -0.45rem;
        left: 0;
        height: calc(100% + 0.6rem);
        width: 100%;
        z-index: -1;
        border-top: var(--fg-alt) 0.15rem solid;
        border-bottom: var(--fg-alt) 0.15rem solid;
    }

    button:not(:disabled)::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        transition: all 0.2s;
        z-index: -1;
        background-color: var(--fg);
    }

    button:not(:disabled):hover::after {
        content: "";
        width: 100%;
        height: 100%;
        transition: all 0.2s;
    }

    button:not(:disabled):hover:active:after {
        content: "";
        background-color: var(--fg-alt);
    }

    button {
        display: flex;
        align-items: center;

        margin: 1rem;
        cursor: pointer;
        padding: 0.5rem 2rem 0.5rem 0.5rem;
       
        font-size: 1rem;
        border: none;
        appearance: none;
        position: relative;
        text-decoration: none;

        background-color: transparent;
        color: var(--fg);

        transition-property: color;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
    }

    button:not(:disabled):hover {
        color: var(--bg-alt);
    }

    .selected::before {
        padding-bottom: 10rem;
        background-color: var(--bg-alt3) !important;
    }
    .selected::after {
        padding-bottom: 10rem;
    }

    button > div {
        height: 1.2rem;
        width: 1.2rem;
        margin-left: 0.2rem;
        margin-right: 0.5rem;
        vertical-align: middle;
        
        object-fit: cover;
        background-color: var(--fg);

        transition: background-color 0.2s ease-out;
    }

    button:hover > div {


        background-color: var(--bg-alt);
    }
</style>
