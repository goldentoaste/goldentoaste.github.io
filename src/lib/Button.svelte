<script lang="ts" context="module">
    import { page } from '$app/stores';
    export type ButtonParam = {
        href?: string;
        path?: string;
        selected?: boolean;
        upper?: boolean;
        text: string;
    };
</script>

<script lang="ts">
    import { goto } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';
    export let href: string = '';
    export let path: string = '';
    export let selected: boolean = false;
    export let selectExpands = true;
    export let horizontal: boolean = false;
    export let upper: boolean = true;
    export let key = 'clip';
    export let style = '';

    const dispatch = createEventDispatcher();

    function onclick(e: MouseEvent) {
        if (href && href !== ($page.route?.id?.replace(/\/?\(\w+\)/g, "") || '/')) {
            goto(href, {
                noScroll: true,
            });
        }
        dispatch('click', e.detail);
    }
</script>

<button
    on:click={onclick}
    class:selected
    class:horizontal
    class:selectExpands
    style={`${upper ? 'text-transform: uppercase;' : ''}${style}`}
>
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <clipPath id={key} clipPathUnits="objectBoundingBox">
                <path d={path} fill="black" />
            </clipPath>
        </defs>
    </svg>
    {#if path}
        <div class="icon" style="clip-path: url('#{key}');" />
    {/if}

    <div class="inner"><slot /></div>
</button>

<style>
    button:not(:disabled)::before {
        content: '';
        background-color: var(--bg-alt2);
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;

        transition-property: all;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;
    }

    button:not(:disabled):hover::before, .selected:not(.selectExpands)::before {
        content: '';
        position: absolute;
        top: -0.45rem;
        left: 0;
        height: calc(100% + 0.6rem);
        width: 100%;

        border-top: var(--fg-alt) 0.15rem solid;
        border-bottom: var(--fg-alt) 0.15rem solid;
    }

    button:not(:disabled)::after  {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 100%;
        transition: all 0.5s;
        transition-timing-function: cubic-bezier(0.25, 1, 0.5, 1);
        box-shadow: 0.2rem 0.2rem 1rem var(--fg-alt);

        background-color: var(--fg);
    }

    button:not(:disabled):hover::after , .selected:not(.selectExpands)::after{
        content: '';
        width: 100%;
        height: 100%;
    }

    button:not(:disabled):hover:active::after {
        content: '';
        background-color: var(--fg-alt);
    }

    button {
        display: flex;
        align-items: center;

        margin: 1rem;
        cursor: pointer;
        padding: 0.5rem 2rem 0.5rem 0.5rem;

        font-size: 1.2rem;
        border: none;
        appearance: none;
        position: relative;
        text-decoration: none;

        background-color: transparent;
        color: var(--fg);

        transition-property: color;
        transition-duration: 0.2s;
        transition-timing-function: ease-out;

        z-index: 1;
    }
    button > .inner {
        z-index: 555 !important;
    }

    button:not(:disabled):hover , .selected:not(.selectExpands) {
        color: var(--bg-alt);
    }

    .selected.selectExpands::before {
        padding-bottom: 2rem;
        background-color: var(--bg-alt3) !important;
 
    }
    .selected.selectExpands::after {
        padding-bottom: 2rem;
    }

    .selected.horizontal::before {
        padding-bottom: 0;
        padding-right: 4rem;
        border-top: var(--fg-alt) 0.15rem solid;
        border-bottom: var(--fg-alt) 0.15rem solid;
      

    }
    .selected.horizontal::after {
        padding-bottom: 0;
    }

    .selected.horizontal:hover::after{
        padding-right: 4rem;
    }

    button > div.icon {
        height: 1.2rem;
        width: 1.2rem;
        margin-left: 0.2rem;
        margin-right: 0.5rem;
        vertical-align: middle;
        background-color: var(--fg);

        transition: background-color 0.2s ease-out;
    }

    button:hover > div.icon {
        background-color: var(--bg-alt);
        z-index: 1;
    }
</style>
