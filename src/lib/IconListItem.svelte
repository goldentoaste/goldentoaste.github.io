<script>
    export let src = "";
    export let path = "";
    export let key = "";

</script>

<div class="parent">
    {#if src}
        <img {src} alt="" />
    {/if}

    {#if path}
        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id={key} clipPathUnits="objectBoundingBox">
                    <path d={path} fill="black" />
                </clipPath>
            </defs>
        </svg>

        <div class="imgDiv" style="clip-path: url('#{key}');" />
    {/if}
    <slot />
</div>

<style>

    
    .parent {
        display: flex;
        margin-right: 0.25rem;
        font-size: 1.1rem;
        margin-top: 0.15rem;
        margin-bottom: 0.15rem;
    }

    img,
    .imgDiv {
        width: 1.5rem;
        height: 1.5rem;
        min-width: 1.5rem;
        min-height: 1.5rem;
        vertical-align: middle;
        margin-right: 0.5rem;
    }
    .imgDiv {
        background-color: var(--fg-alt);
    }
</style>
