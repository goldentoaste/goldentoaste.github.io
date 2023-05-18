<script>
    import { fade } from "svelte/transition";
    import { PageState, finishOutro, pageState } from "$lib/stores/pageUpdates";
    import { onMount } from "svelte";
    import YearIndicator from "./yearIndicator.svelte";

    onMount(() => {
        $pageState = PageState.NeedTransition;
    });
</script>

<h1>Past Experiences and Achievement</h1>
<div class="timeline">

</div>

<YearIndicator year={'2037'}></YearIndicator>



<style>





    .timeline {

        width:auto;
        max-width: 400px;
        height: 2px;

        background-color: var(--fg-alt) ;
    }
</style>