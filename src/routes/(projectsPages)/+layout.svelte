<script>
    import { fade } from "svelte/transition";
    import "./projects.css";
    /** @type {{children?: import('svelte').Snippet}} */
    let { children } = $props();
</script>

<div
style="padding: 0.75rem;"
    transition:fade|global={{
        duration: 150,
    }}
>
    {@render children?.()}
</div>
