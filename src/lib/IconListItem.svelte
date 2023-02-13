<script>
    export let src = "";
    export let path = "";
    export let key = "";
</script>

<div class="parent">
    {#if src}
        <img width="32" height="32" {src} alt="" loading="lazy" />
    {/if}

    {#if path}
        <!-- define a invisible svg, to be used as a clip path for the recolorable svg icon later. -->
        <!-- this svg is only used if a 'path' variable is provided. -->
        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id={key} clipPathUnits="objectBoundingBox">
                    <path d={path} fill="black" />
                </clipPath>
            </defs>
        </svg>

        <!-- the displayed 'icon' is actually a solid div, but using the svg as a clip path. -->
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
        transition: background-color 5s ease;
        background-color: var(--fg-alt);
    }
</style>
