<script>
    import { fly } from 'svelte/transition';
    import { quartOut } from 'svelte/easing';

    export let index = 0;
</script>

<div
    id="buttonHolder"
    in:fly={{
        delay: 100 * index,
        duration: 200,
        easing: quartOut,
        x: -40,
    }}
>
    <slot />
</div>

<style>
    #buttonHolder {
        align-items: stretch;
        display: flex;
        background: var(--bg-alt);

    }
</style>
