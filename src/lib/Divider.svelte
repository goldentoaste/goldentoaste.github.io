<script lang="ts">
    export let usePadding = true;
    export let style: string = "";
    export let useDecoration = true;
    export let vertical = false;
</script>

<div class="divider" class:usePadding {style} class:vertical>
    {#if useDecoration}
        <div class="dot" />
    {/if}

    <div class="bar" />

    {#if useDecoration}
        <div class="dot" />
    {/if}
</div>

<style>
    .vertical > .bar {
        width: 2px;
        height: 100%;
    }

    .bar {
        height: 2px;
        width: 100%;
        background: var(--bg-alt3);
        flex: auto;
    }

    .dot {
        width: 6px;
        height: 6px;
        background-color: var(--bg-alt3);
        border-radius: 50%;
        display: inline-block;
    }

    .vertical.divider {
        flex-direction: column;
    }

    .divider {
        width: auto;
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .usePadding {
        margin: 0.5rem 0.5rem;
    }
</style>
