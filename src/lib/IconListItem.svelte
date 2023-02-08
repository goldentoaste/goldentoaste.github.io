

<script>
    
    export let path = "";
    export let key = '';
</script>

<svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <clipPath id={key} clipPathUnits="objectBoundingBox">
            <path d={path} fill="black" />
        </clipPath>
    </defs>
</svg>


<div>
    {#if path}
        <div class="imgDiv" style="clip-path: url('#{key}');"/>
    {/if}
    <slot/>
</div>


<style>
    div {
        display: inline-block;
        margin-right: 0.25rem;
    }
    .imgDiv {
        background-color: var(--fg-alt);
        width: 1.2rem;
        height: 1.2rem; 
        vertical-align: middle;
    }
</style>


