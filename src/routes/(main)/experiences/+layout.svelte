<script>

    import { fade } from "svelte/transition";
    import { pageState, PageState } from "$lib/stores/pageUpdates";
</script>





<div transition:fade|global={{duration:150}} on:outroend={()=>{
    $pageState = PageState.ReadyToNav;
}}>
    <slot/>
</div>