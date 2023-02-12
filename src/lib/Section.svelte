<script>
    export let title = "";
</script>

<div class="parent">
    <div class="title">
        <div class="decor" />
        <h2>{title}</h2>
    </div>

    <div class="content">
        <slot />
    </div>
</div>

<style>
    h2 {
        font-size: 3vw;
        margin-bottom: 0.3rem;
        margin-top: 0.3rem;
        line-height: 1.42rem;
        overflow-wrap: break-word;
    }
    @media screen and (min-width: 800px) {
        h2 {
            font-size: 1.5rem;
        }
    }

    @media screen and (max-width: 450px) {
        h2 {
            font-size: 1rem;
        }
    }

    .parent {
        display: flex;
        width: 100%;
        flex-direction: column;
    }

    .title {
        border-top: 0.2rem solid var(--fg);
        border-bottom: 0.2rem solid var(--fg);
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
        align-self: center;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(15rem, max-content));
        justify-content: center;
        /* display: flex;
        flex-wrap: wrap;   */

        
        border-bottom: 0.2rem solid var(--fg);
    }

    @media screen and (max-width: 560px) {
        
        .content {
            width: 75%;
            grid-template-columns: repeat(auto-fit, minmax(100%, max-content));
        }

        :global(.content > *) {
            width: 100% !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
        }
    }
</style>
