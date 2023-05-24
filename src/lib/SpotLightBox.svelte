<script lang="ts">


    let item: HTMLDivElement;

    function move(e:MouseEvent){
        let box = item.getBoundingClientRect()
        item.style.setProperty("--X", (e.clientX - box.left) + "px")
        item.style.setProperty("--Y", (e.clientY - box.top) + "px")
    }
</script>

<div on:mousemove={move} bind:this={item} class="box" style="">
    <h1>Content Here</h1>

    <p>Body here</p>

    <p>More text</p>

    <p>Even more text here, just as placeholder, to take up extra space.</p>
</div>

<style>
    .box:hover::before {
        /* background-color: red; */
        background: radial-gradient(
            circle at var(--X) var(--Y),
            var(--bg-alt) 0px,
            var(--bg) 150px
        );
    }

    .box::before {
        content: "";
        position: absolute;
        left: 3px;
        top: 3px;

        width: calc(100% - 6px);
        height: calc(100% - 6px);

        background-color: var(--bg);
        z-index: -1;

        filter: opacity(0.99);
    }
    .box {
        --X: 0px;
        --Y: 0px;

        z-index: 1;
        position: relative;

        width: 300px;
        height: 300px;

        background-color: var(--bg-alt2);

        padding: 2rem;

        transition-property: transform box-shadow filter;
        transition-duration: 0.3s;
        transition-timing-function: ease-out;
    }

    /* .box:hover {
        transform: scale(1.05);
        box-shadow: 5px 5px 35px 10px var(--bg);
        filter: brightness(1.05);

        background: radial-gradient(
            circle at var(--X) var(--Y),
            var(--bg-alt4) 0px,
            var(--bg) 150px
        );
    } */
</style>
