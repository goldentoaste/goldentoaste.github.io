
<script>
    export let title = "";
    export let style = "";
</script>

<div class="container" {style}>
    {#if title}
        <div class="title">
            {title}
        </div>
    {/if}

    <div class="body">
        <slot />
    </div>
</div>

<style>
    .container {
   
       width: fit-content;
       height: fit-content;
    }

    .title {
        color: var(--fg);
        background-color: var(--bg-alt2);
        white-space: nowrap;
        padding: 0.5rem;
        /* display: inline-block; */
    }

    .body{
        background-color: var(--bg-alt);
        padding: 0.5rem;
    }
</style>
