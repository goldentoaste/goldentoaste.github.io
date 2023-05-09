<script lang="ts">
    import { fade } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    export let title: string;
    export let style: string = "";
   export let expanded: boolean = false;

    let content: HTMLDivElement;
</script>

{#if expanded}
    <div
        class="backdrop"
        transition:fade={{
            duration: 200,
            easing: cubicOut,
        }}
        on:click={() => {
            expanded = false;
        }}
        on:keypress={() => {
            expanded = false;
        }}
    />
{/if}
<div class="dropDownParent" {style}>
    <div
        class="dropDownTitle"
        on:click={() => {
            expanded = !expanded;
        }}
        on:keypress={() => {
            expanded = !expanded;
        }}
    >
        {title}
    </div>

    {#if expanded}
        <div class="dropDownBody">
            <div class="content" bind:this={content}>
                <slot />
            </div>
        </div>
    {/if}
</div>

<style>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: black;
        filter: opacity(50%);
    }

    .dropDownParent {
        display: flex;
        flex-direction: column;

        position: relative;
        z-index: 10;
    }

    .dropDownTitle {
        background-color: var(--fg);
        color: var(--bg-alt);
        padding: 1rem;
        border: 2px solid var(--bg-alt2);

        transition: background-color 0.2s ease-out;
    }

    .dropDownTitle:hover {
        background-color: var(--fg-alt);
    }
</style>
