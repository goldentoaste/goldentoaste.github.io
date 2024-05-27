<script>
    import { fade } from "svelte/transition";
    import "./projects.css";
</script>

<div
style="padding: 0.75rem;"
    transition:fade|global={{
        duration: 150,
    }}
>
    <slot />
</div>
