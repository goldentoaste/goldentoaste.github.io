<script>
    import { fade } from "svelte/transition";
    import { PageState, finishOutro, pageState } from "$lib/stores/pageUpdates";
    import { afterUpdate, onMount } from "svelte";
    import YearIndicator from "./yearIndicator.svelte";


    let mounted = false;
    onMount(() => {
        $pageState = PageState.NeedTransition;


        setTimeout(() => {
            mounted = true;
        }, 100);
   
    });

    
</script>

<h1>Past Experiences and Achievement</h1>

<div class="timelineParent">
    <div class="hline" style={mounted?"max-width:800px;":""} ><div class="decor" /></div>

    <div class="vline" style={mounted?"height:100vh;":""} />
</div>

<div style="margin-left: 2.5rem;">
    <YearIndicator year={"2037"} />
</div>

<style>
    .timelineParent {
        width: auto;
        position: relative;
    }

    .hline {
        position: relative;
        width: auto;
        height: fit-content;
        max-width: 0;

        overflow: hidden;
        border-top: 2px solid var(--fg-alt);

        transition: max-width 0.2s ease-out;
    }

    .decor {
        position: relative;
        background: var(--fg-alt);
        width: 1rem;
        height: 1rem;

        transform: translate(0, -50%) rotate(45deg);
        top: 0rem;
        left: 2rem;
    }

    .vline {
        position: absolute;
        width: 2px;
        height: 0;
        background-color: var(--fg-alt);

        top: 0;
        left: calc(2.5rem - 1px);


        transition: height 0.2s ease-out;
    }
</style>
