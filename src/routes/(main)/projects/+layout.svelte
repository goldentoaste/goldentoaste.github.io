<script>

    import {fade} from 'svelte/transition'
    import { finishOutro } from '$lib/stores/pageUpdates'
</script>


<div transition:fade={{duration:100}} on:outroend={finishOutro}>
    <slot/>
</div>