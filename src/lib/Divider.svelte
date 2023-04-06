<script lang='ts'>
    export let usePadding = true;
    export let style :string = "";
</script>

<div class="divider" class:usePadding {style}>
    <div class="dot" />
    <div class="bar" />
    <div class="dot" />
</div>

<style>
    .bar {
        content: "";
        height: 2px;
        width: 100%;
        background: var(--bg-alt3);
       flex: auto;
    }

    .dot{
        width:6px;
        height: 6px;
        background-color: var(--bg-alt3);
        border-radius: 50%;
        display: inline-block;
    }

    .divider{
        width: 100%;
        display: flex;
        gap: 1rem;
        align-items: center;
    }

    .usePadding{
        padding-left: 2rem;
        padding-right: 2rem;
    }
</style>
