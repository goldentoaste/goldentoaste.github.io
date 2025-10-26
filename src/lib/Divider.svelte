<script lang="ts">
    interface Props {
        usePadding?: boolean;
        style?: string;
        useDecoration?: boolean;
        vertical?: boolean;
    }

    let {
        usePadding = true,
        style = "",
        useDecoration = true,
        vertical = false
    }: Props = $props();
</script>

<div class="divider" class:usePadding {style} class:vertical>
    {#if useDecoration}
        <div class="dot"></div>
    {/if}

    <div class="bar"></div>

    {#if useDecoration}
        <div class="dot"></div>
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
