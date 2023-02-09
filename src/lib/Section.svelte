<script>
    export let title = '';
</script>

<div class="parent">
    <div class="title">
        <div class="decor"/> 
        <h2>{title}</h2>
    </div>
    <div class='content'>
        <slot/>
    </div>
</div>


<style>

    h2 {
        margin: 0;
        line-height: 1.42rem;
        overflow-wrap: break-word;
    }

    .parent {
        flex-direction: column;
    }

    .title {
        border-top: 0.2rem solid var(--fg);
        display: flex;
        flex-direction: row;
        align-items: center;

    }

    .decor {
        position: relative;
        width: 1rem;
        height: 1rem;
        background-color: var(--fg-alt);
        transform: rotate(45deg);
        margin: 1rem;
        flex-shrink: 0;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        border-top: 0.2rem solid var(--fg);
        border-bottom: 0.2rem solid var(--fg);
        
    }


</style>