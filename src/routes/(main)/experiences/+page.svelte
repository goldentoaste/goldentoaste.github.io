<script>
    import { fade } from "svelte/transition";
    import { PageState, finishOutro, pageState } from "$lib/stores/pageUpdates";
    import { onMount } from "svelte";


    onMount(()=>{
        $pageState = PageState.NeedTransition;
    })
</script>

<h1
    transition:fade={{
        duration: 1000,
    }}
    on:outroend={finishOutro}
>
    Coming soon!
</h1>
