<script>
    import { fade } from "svelte/transition";
    import "./projects.css";
</script>

<div
    transition:fade={{
        duration: 150,
    }}
>
    <slot />
</div>
