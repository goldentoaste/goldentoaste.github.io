<script lang="ts">
    import { page } from "$app/state";
    import Button from "$lib/Button.svelte";
    import "../global.css";

</script>

<h1>Error! {page.state} {page.error?.message}</h1>

<Button href="/">
    Go Back Home
</Button>

<style>
    /* CSS */
</style>