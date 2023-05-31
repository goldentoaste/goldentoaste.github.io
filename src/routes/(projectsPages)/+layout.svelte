<script>
    import { fade } from "svelte/transition";
    import "./projects.css";
</script>

<div
    transition:fade|global={{
        duration: 150,
    }}
>
    <slot />
</div>
