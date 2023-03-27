<div class="divider">
    <div class="dot" />
    <div class="bar" />
    <div class="dot" />
</div>

<style>
    .bar {
        content: "";
        height: 2px;
        width: ex;
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
        display: flex;
        gap: 1rem;
        padding-left: 2rem;
        padding-right: 2rem;
        align-items: center;
    }
</style>
