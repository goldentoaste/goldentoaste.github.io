<script lang="ts">
    import { quartOut } from "svelte/easing";
    import { fade, fly } from "svelte/transition";
    import Button from "./Button.svelte";
    import type { ButtonParam } from "./Button.svelte";

    export let buttons: ButtonParam[] = [];
    export let style = "";

    function expandVert(
        node: HTMLElement,
        { delay = 0, duration = 500, easing = (t: number) => t }
    ) {
        return {
            delay,
            duration,
            css: (t: number) => {
                const eased = easing(t);
                return `transform: scale(1, ${eased})`;
            },
        };
    }

    function popText(input: ButtonParam) {
        const { text, ...rest } = input;
        return {
            ...rest,
        };
    }
</script>

<div id="parent" out:fade|local={{duration:100}} on:outroend>
    <div id="decor" in:expandVert={{ duration: 300, easing: quartOut }} />
    <div id="listContainer" {style}>
        {#each buttons as button, index}
            <div
                id="buttonHolder"
                in:fly={{
                    delay: 40 * index,
                    duration: 70,
                    easing: quartOut,
                    x: -40,
                }}>
                <!-- fallback to nullop -->
                <Button
                    {...popText(button)}
                    key={button.text}
                    on:click={button.onClick || (() => {})}
                    style="margin:0; flex:1;"
                >
                    {button.text}
                </Button>
            </div>
        {/each}
    </div>
</div>

<style>
    #parent {
        display: flex;
        flex-direction: row;
        align-items: stretch;
    }
    #decor {
        content: "";
        position: relative;
        width: 0.4rem;

        background-color: transparent;
        border-left: 0.4rem solid;
        border-right: 0.2rem solid;
        border-color: var(--fg-alt);
        margin-right: 1rem;
        opacity: 30%;
    }

    #listContainer {
        width: fit-content;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    #buttonHolder {
        align-items: stretch;
        display: flex;
    }
</style>
