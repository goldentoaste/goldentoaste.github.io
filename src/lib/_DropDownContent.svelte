<script>
    export let content = undefined;
    import { createEventDispatcher, onMount } from "svelte";

    const dispatch = createEventDispatcher();

    onMount(() => {
        dispatch("mounted", {});
    });
</script>

<div class="content" bind:this={content}>
    <slot />
</div>

<style>
    .content {
        padding: 0.5rem 1rem;
    }
</style>
