<script lang="ts">
    // @ts-nocheck
    import Divider from "$lib/Divider.svelte";
    import IconListItem from "$lib/IconListItem.svelte";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import InfoBox from "$lib/InfoBox.svelte";

    function handler(event: PointerEvent) {
        console.log(event);
    }
</script>

<!-- <div
    use:pan
    on:pan={handler}
    style="width:500px;height:500px;border:1px solid black;"
/> -->

<h1>Nommers!</h1>

<p>
    Can't decide where to eat with your friends? Too many good options nearby
    but don't which one to go with? Simple solution: enforce democracy with
    Nommers! (and nom the process)
</p>

<div class="top">
    <ImageFrame
        width={400}
        height={400}
        title="Project show case"
        items={[
            {
                src: "heroku.svg",
                desc: "Memories from a better time.",
            },
        ]}
    />

  
</div>

<style>
    div.top {
        display: flex;
        flex-direction: horizontal;
    }
</style>
