<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { afterNavigate } from '$app/navigation';
    import Button from '$lib/Button.svelte';
    import Toggle from '$lib/Toggle.svelte';
    type NavItem = {
        name: string;
        dest: string;
        iconPath: string;
    };
    export let items: NavItem[] = [];

    // state management for which button is currently selected
    let selects: boolean[] = [];

    // dynamically change navbar format if window width is too small/mobile sized
    let innerWidth = 0;
    let useMobile = false;
    let navExtended = false;

    $: useMobile = innerWidth < 1000;

    function updateButtons() {
        items.forEach((item, index) => {
            selects[index] = $page.url.pathname === item.dest;
        });
    }

    afterNavigate(updateButtons);
    onMount(() => {
        selects = Array(items.length).fill(false);
    });
</script>

<svelte:window bind:innerWidth />

<div id="root">

    <div id="top">
        <nav id="navBar" class={useMobile ? 'mobile ' : '' + navExtended ? 'extended' : ''}>
            {#each items as item, i}
                {#if !useMobile || selects[i]}
                    <Button
                        on:click={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: 'smooth',
                            });
                        }}
                        selected={selects[i]}
                        path={item.iconPath}
                        href={item.dest}
                    >
                        {item.name}</Button
                    >
                {/if}
            {/each}
    
            {#if useMobile}
                    <Toggle />
            {/if}
        </nav>
    </div>
        

   


    <svg id="top" width="100%" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <pattern
                id="border"
                x="0"
                y="0"
                width="48"
                height="16"
                patternUnits="userSpaceOnUse"
                patternTransform="scale(0.7)"
            >
                <rect width="8" height="4" fill="currentColor" />
                <circle cx="22" cy="8" r="2" fill="currentColor" />
                <circle cx="34" cy="8" r="2" fill="currentColor" />
                <circle cx="28" cy="14" r="2" fill="currentColor" />
            </pattern>
        </defs>
        <rect id="rect" x="0" y="0" width="100%" height="11" fill="url(#border)" />
    </svg>
</div>

<div id="botBar">
    <nav id="botNav" />
    <svg id="bottom" width="100%">
        <use xlink:href="#rect" />
    </svg>
</div>

<style>
    div#root, div#botBar {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        z-index: 100;
    }

    div#top{
        background-color: var(--bg-alt);
    }

    nav {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: var(--fg) 0.2rem solid;

        overflow: hidden;
    }

    nav.mobile {
        padding-left: 2rem;
        padding-right: 2rem;

    }

    svg#top {
        color: var(--fg);
        pointer-events: none;
        touch-action: none;
    }

    svg#bottom {
        position: absolute;
        top: 0.2rem;
    }

    div#botBar {
        top: auto;
        bottom: 0;
        left: 0;
    }

    nav#botNav {
        height: 3rem;
        border: none;
        border-top: var(--fg) 0.2rem solid;
    }
</style>
