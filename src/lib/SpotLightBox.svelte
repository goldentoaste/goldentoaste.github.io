<script lang="ts">
    //  TODO improve this in the future, maybe just rewrite it
    //  make ::before the spotlight over lay
    //  make ::after the highlighted border
    //  the real div should be the normal content.

    interface Props {
        style?: string;
        children?: import('svelte').Snippet;
    }

    let { style = "", children }: Props = $props();

    let item: HTMLDivElement = $state();

    function move(e: MouseEvent | Touch) {
        let box = item.getBoundingClientRect();
        item.style.setProperty("--X", e.clientX - box.left + "px");
        item.style.setProperty("--Y", e.clientY - box.top + "px");
    }
</script>

<div onmousemove={move} ontouchmove={(e)=>{move(e.touches[0])}} bind:this={item} class="box" {style}>
    {@render children?.()}
</div>

<style>
    .box:hover::before {
        /* background-color: red; */
        background: radial-gradient(
            circle at var(--X) var(--Y),
            var(--bg-alt2) 0px,
            transparent 150px
        );
        background-color: var(--bg-alt);
    }

    .box::before {
        content: "";
        position: absolute;
        left: 3px;
        top: 3px;

        width: calc(100% - 6px);
        height: calc(100% - 6px);

        background-color: var(--bg-alt);
        z-index: -1;

        filter: opacity(0.99);
    }
    .box {
        --X: 0px;
        --Y: 0px;

        z-index: 1;
        position: relative;

        background-color: var(--bg-alt2);

        padding: 1rem;

        transition-property: transform box-shadow filter;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;

        width: fit-content;
        height: fit-content;
    }

    .box:hover {
        transform: scale(1.05);
        box-shadow: 5px 5px 35px 10px var(--bg);
        filter: brightness(1.05);

        background-image: radial-gradient(
            circle at var(--X) var(--Y),
            var(--fg-alt) 0px,
            transparent 150px
        );

        background-color: var(--bg-alt2);
    }
</style>
