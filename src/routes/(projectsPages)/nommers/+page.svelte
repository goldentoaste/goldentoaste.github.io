<script lang="ts">
    // @ts-nocheck
    import Divider from '$lib/Divider.svelte';
    import ImageFrame from '$lib/ImageFrame.svelte';
    import { pan } from 'svelte-gestures';
    function handler(event:PointerEvent) {
console.log(event)
    }
</script>

<!-- <div
    use:pan
    on:pan={handler}
    style="width:500px;height:500px;border:1px solid black;"
/> -->

<h1>Nommers!</h1>

<p>
    Can't decide where to eat with your friends? Too many good options nearby but don't which one to go with? Simple
    solution: enforce democracy with Nommers! (and nom the process)
</p>

<ImageFrame
    width={200}
    maxHeight={400}
    title="Test"
    items={[
        { desc: 'now this is one big bread image. Truely one of the bread images of our time.', src: 'bigBread.svg' },

        {
            desc: 'This is my favorite language of all time.',
            src: 'java-icon.svg',
        },
    ]}
/>

<style>
    div {
        display: flex;
        flex-direction: horizontal;
    }
</style>
