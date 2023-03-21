<!-- TODO make this look good later -->
<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    export let toggled = false;
    let icon: HTMLElement;

    let dispatch = createEventDispatcher();

    function handleClick() {
        toggled = !toggled;
     
        if (toggled) {
            icon.classList.add('toggled');
        } else {
            icon.classList.remove('toggled');
        }

        dispatch('toggle', {
            val: toggled,
        });
    }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="root" on:click={handleClick}>
    <div bind:this={icon} class="icon" />
</div>

<!-- svelte-ignore css-unused-selector -->
<style>
    .icon {
        background: var(--fg-alt);
        width: 1.5rem;
        height: 1.5rem;
        transition: background 0.3s ease-in-out;
    }

    :global(.icon.toggled){
        background: var(--bg-alt2);
    }

    .root {
        width: 3rem;
        height: 3rem;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: border 0.2s ease-in-out;

        border: 1px solid transparent;
    }

    .root:hover {
        border: 1px solid var(--fg-alt);
    }
</style>
