<script>
    import { fly } from 'svelte/transition';
    import { quartOut } from 'svelte/easing';

    export let index = 0;

    let hover = false;
</script>

<div id="listItemRoot">
    <div
        id="buttonHolder"
        on:mouseenter={() => {
            hover = true;
        }}
        on:mouseleave={() => {
            hover = false;
        }}
        in:fly={{
            delay: 80 * index,
            duration: 200,
            easing: quartOut,
            x: -40,
        }}
    >
        <slot />
    </div>

    {#if hover}
        <svg
            transition:fly={{
                x: -30,
                duration: 200,
            }}
            viewBox="0 0 18 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            ><g clip-path="url(#prefix__clip0_402_2)" fill="var(--fg-alt)"
                ><circle cx="1" cy="1" r="1" /><circle cx="1" cy="7" r="1" /><path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 4l4-3 11 3L6 7 2 4zm4 1.75a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z"
                /><path
                    d="M6 1l.158-.579A.6.6 0 005.64.52L6 1zM2 4l-.36-.48a.6.6 0 000 .96L2 4zm15 0l.158.579a.6.6 0 000-1.158L17 4zM6 7l-.36.48a.6.6 0 00.518.099L6 7zM5.64.52l-4 3 .72.96 4-3-.72-.96zm11.518 2.901l-11-3-.316 1.158 11 3 .316-1.158zm-11 4.158l11-3-.316-1.158-11 3 .316 1.158zM1.64 4.48l4 3 .72-.96-4-3-.72.96zM7.15 4A1.15 1.15 0 016 5.15v1.2A2.35 2.35 0 008.35 4h-1.2zM6 2.85c.635 0 1.15.515 1.15 1.15h1.2A2.35 2.35 0 006 1.65v1.2zM4.85 4c0-.635.515-1.15 1.15-1.15v-1.2A2.35 2.35 0 003.65 4h1.2zM6 5.15A1.15 1.15 0 014.85 4h-1.2A2.35 2.35 0 006 6.35v-1.2z"
                /></g
            ><defs><clipPath id="prefix__clip0_402_2"><path fill="#fff" d="M0 0h18v8H0z" /></clipPath></defs>
        </svg>
    {/if}
</div>

<style>
    #listItemRoot {
        position: relative;
    }

    #buttonHolder {
        align-items: stretch;
        display: flex;
        background: var(--bg-alt);
        width: fit-content;
    }

    svg {
        height: 1rem;
        width: auto;
        position: absolute;
        z-index: 10;

        left: -2.6rem;

        top: 50%;
        transform: translate(0, -50%);
    }
</style>
