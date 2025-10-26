<!-- TODO make this look good later -->
<script lang="ts">
    import { run } from 'svelte/legacy';

    import { createEventDispatcher } from 'svelte';

    interface Props {
        toggled?: boolean;
    }

    let { toggled = $bindable(false) }: Props = $props();
    let icon: HTMLElement = $state();

    let dispatch = createEventDispatcher();

    run(() => {
        if (icon) {
            if (toggled) {
                icon.classList.add('toggled');
            } else {
                icon.classList.remove('toggled');
            }
        }
    });

    function handleClick() {
        toggled = !toggled;

        dispatch('toggle', {
            val: toggled,
        });
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<div class="root" onclick={handleClick}>
    <div bind:this={icon} class="icon"></div>
</div>

<!-- svelte-ignore css_unused_selector -->
<style>
    .icon {
        position:relative;
        background: var(--fg-alt);
        width: 1.75rem;
        height: 1.75rem;
        transition: all 0.2s ease-in-out;

        border: transparent 10% solid;
    }

    .icon::before{
        height: 100%;
        top: 0;
        width: 15%;
        left: 42.5%;
    }

    .icon::after{
        width: 100%;
        left: 0;
        height: 15%;
        top: 42.5%;
    }

    .icon::before, .icon::after{
        position: absolute;
        content:"";
        z-index: 2;
        background: var(--bg-alt);
        transition: background 0.2s ease-out;
    }

    :global(.icon.toggled::before, .icon.toggled::after){
        background: var(--fg-alt);
    }


    :global(.icon.toggled) {
        background: var(--bg-alt2);
        border: var(--fg-alt) 3px solid;
        transform: rotate(45deg) scale(0.9);
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
