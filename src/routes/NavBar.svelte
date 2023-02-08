<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/stores';


    import Button from '$lib/Button.svelte';
    type NavItem = {
        name: string;
        dest: string;
        iconPath: string;
    };

    export let items: NavItem[] = [];

    onMount(() => {});
</script>

<div>
    <nav>
        {#each items as item}
            <Button selected={$page.url.pathname === item.dest} on:click={(e) => console.log($page.url.pathname , item.dest)} path={item.iconPath} href={item.dest}>
                {item.name}</Button
            >
        {/each}
    </nav>

    <svg width="100%" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <rect x="0" y="0" width="100%" height="11" fill="url(#border)" />
    </svg>
</div>

<style>
    div {
        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: transparent;
        display: flex;
        flex-direction: column;
    }
    nav {
        display: flex;
        align-items: center;
        width: 100%;

        padding-left: 5rem;
        padding-right: 5rem;

        gap: 1rem;

        border-bottom: var(--fg) 0.2rem solid;
        background-color: var(--bg-alt);
        z-index: -10;
        overflow: hidden;
    }

    svg {
        color: var(--fg);
        pointer-events: none;
        touch-action: none;
    }
</style>
