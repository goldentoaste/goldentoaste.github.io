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



    .container:hover{
        transform: scale(1.05);
        /* filter: brightness(1.05); */
        box-shadow: 0.5rem 0.5rem 1rem var(--bg-alt3);
        
        
    }

    .container {
        
        box-sizing: border-box;

        flex-direction: column;
        display: flex;
        margin: 1rem;

        height: fit-content;
        width: fit-content;
        min-width:12rem;
        

        
        transition-property: box-shadow transform filter;
        transition-duration: 0.4s;
        transition-timing-function: ease;
    
    }

    .title {
        color: var(--fg);
        background-color: var(--bg-alt2);
        white-space: nowrap;
        padding: 0.5rem;
        font-size: larger;
        /* display: inline-block; */
    }

    .body {
        background-color: var(--bg-alt);
        padding: 1rem;
        display: flex;
        flex-direction: column;
        
        gap: 0.2rem;
    }

   
</style>
