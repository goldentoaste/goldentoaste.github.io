<script>
    import { createEventDispatcher, onMount } from "svelte";
    /** @type {{content?: any, children?: import('svelte').Snippet}} */
    let { content = $bindable(undefined), children } = $props();

    const dispatch = createEventDispatcher();

    onMount(() => {
        dispatch("mounted", {});
    });
</script>

<div class="content" bind:this={content}>
    {@render children?.()}
</div>

<style>
    .content {
        padding: 0.5rem 1rem;
    }
</style>
