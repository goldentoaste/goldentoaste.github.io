

<script>
    
    export let path = "";

</script>

<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id="clip" clipPathUnits="objectBoundingBox">
            <path d={path} fill="black" />
        </clipPath>
    </defs>
</svg>


<div>
    {#if path}
        <div class="imgDiv" style="clip-path: url('#clip');"/>
    {/if}
    <slot/>
</div>


<style>

    .imgDiv {
        background-color: var(--fg-alt);
        width: 1rem;
        height: 1rem;

        margin: 0.25rem;
        margin-right: 0.5rem;
        vertical-align: middle;
    }
</style>


