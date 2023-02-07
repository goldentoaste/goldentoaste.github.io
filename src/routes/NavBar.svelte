<script lang="ts">
    import { onMount } from "svelte";
    import Button from "$lib/Button.svelte";
    type NavItem = {
        name: string;
        dest: string;
    };

    export let items: NavItem[] = [];

    onMount(() => {});
</script>

<nav>
    {#each items as item}

    <Button src="/bread.svg" href={item.dest}> {item.name}</Button>

    {/each}

</nav>

<style>
    nav {
        display: flex;
        align-items: center;

        width: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background-color: var(--bg-alt);
        border-bottom: var(--fg-alt) 0.2rem solid;
        overflow: hidden;
        padding-left: 4rem;
        padding-right: 4rem;
    }

    .navitem {
        display: block;
    }
</style>
