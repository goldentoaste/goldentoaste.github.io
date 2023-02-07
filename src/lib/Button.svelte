<script lang="ts">
    import { goto } from "$app/navigation";
    import { createEventDispatcher } from "svelte";
    import '/bread.svg'

    export let href: string = "";
    export let src: string = "";
    export let color: string = "#666666";
    export let selected: boolean = false;

    const dispatch = createEventDispatcher();

    function onclick(e: MouseEvent) {
        if (href) {
            goto(href);
        }

        dispatch("click", e.detail);
    }
</script>

<button on:click={onclick} class:selected>

    <div></div>
    <slot />
</button>



<style>
    div {
        width: 10rem;
        height: 10rem;
        
        background-color: red !important;
            
        clip-path: url('#clip');
    }

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
        top: -0.43rem;
        left: 0;
        height: calc(100% + 0.6rem);
        width: 100%;
        z-index: -1;
        border-top: var(--fg-alt) 0.12rem solid;
        border-bottom: var(--fg-alt) 0.12rem solid;
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

        margin: 0.5rem;
        cursor: pointer;
        padding: 0.5rem;
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

    button > img {
        height: 1.2rem;
        width: 1.2rem;
        margin-left: 0.2rem;
        margin-right: 0.5rem;
        vertical-align: middle;

        color: #d3869b;
    }
</style>
