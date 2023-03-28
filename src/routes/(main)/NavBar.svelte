<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';
    import { afterNavigate } from '$app/navigation';
    import Button from '$lib/Button.svelte';
    import Toggle from '$lib/Toggle.svelte';

    import Divider from '$lib/Divider.svelte';
    import List from '$lib/List.svelte';
    import ListItem from '$lib/ListItem.svelte';
    import { fade } from 'svelte/transition';
    import { browser } from '$app/environment';

    type NavItem = {
        name: string;
        dest: string;
        iconPath: string;
    };
    export let items: NavItem[] = [];

    // state management for which button is currently selected
    let selects: boolean[] = [];

    // dynamically change navbar format if window width is too small/mobile sized
    let innerWidth: number;
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

{#if navExtended}
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
        id="cover"
        transition:fade={{
            duration: 200,
        }}
        on:click={() => {
            navExtended = false;
        }}
    />
{/if}

<div id="root">
    <div id="top">
        <nav id="navBar" class:mobile={useMobile}>
            {#if innerWidth !== undefined}
                {#each items as item, i}
                    {#if !useMobile || selects[i]}
                        <Button
                            on:click={() => {
                       
                                window.scrollTo({
                                    top: 0,
                                    behavior: 'smooth',
                                });
                            }}
                            selected={selects[i] && !navExtended}
                            path={item.iconPath}
                            href={item.dest}
                        >
                            {item.name}</Button
                        >
                    {/if}
                {/each}

                {#if useMobile}
                    <Toggle bind:toggled={navExtended} />
                {/if}
            {:else}
                <div style="content:''; height:4rem;" />
            {/if}
        </nav>
        <div id="optionContianer" style={navExtended ? 'max-height:350px;' : 'max-height:0;'}>
            {#if navExtended}
                <Divider />

                <List style="margin:1rem;margin-left:2rem;">
                    {#each items as item, i}
                        {#if !selects[i]}
                            <ListItem index={i}>
                                <Button
                                    href={item.dest}
                                    path={item.iconPath}
                                    style="margin:0;"
                                    on:click={() => {
                                        navExtended = false;
                                    }}
                                >
                                    {item.name}
                                </Button>
                            </ListItem>
                        {/if}
                    {/each}
                </List>
            {/if}
        </div>
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
    /* for the darkened background */
    div#cover {
        position: fixed;
        left: 0;
        top: 0;

        width: 100%;
        height: 100%;

        background: var(--bg);
        filter: opacity(0.8);

        z-index: 99;
    }

    div#root,
    div#botBar {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        z-index: 100;
    }

    div#optionContianer {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.2s ease-out;
    }

    div#botBar {
        background: var(--bg-alt);
    }

    div#top {
        background: var(--bg-alt);

        height: fit-content;
        border-bottom: var(--fg) 0.2rem solid;
    }

    nav {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }

    nav.mobile {
        padding-left: 2rem;
        padding-right: 2rem;

        justify-content: space-between;
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
