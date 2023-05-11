<script lang="ts">
    import { fade, fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    import Divider from "./Divider.svelte";
    import DropDownContent from "./_DropDownContent.svelte";
    export let title: string;
    export let style: string = "";
    export let expanded: boolean = false;

    let focused = false;

    let content: HTMLDivElement;
    let body: HTMLDivElement;

    function contentLoad() {
        body.style.setProperty(
            "max-height",
            content.getBoundingClientRect().height + "px"
        );
    }

    $: if (!expanded && body) {
        body.style.setProperty("max-height", 0 + "px");
    }
</script>

{#if expanded}
    <div
        class="backdrop"
        transition:fade={{
            duration: 200,
            easing: cubicOut,
        }}
        on:click={() => {
            expanded = false;
        }}
        on:keypress={() => {
            expanded = false;
        }}
    />
{/if}

<div class="parent">
    <div
        class="dropDownTitle"
        {style}
        on:click={() => {
            expanded = !expanded;
        }}
        on:keypress={() => {
            expanded = !expanded;
        }}
        on:mouseenter={() => {
            focused = true;
        }}
        on:mouseleave={() => {
            focused = false;
        }}
    >
        <div class="arrow">
            {#if !expanded}
                <div
                    class:focused
                    class="right"
                    transition:fly={{
                        x: -10,
                        duration: 400,
                    }}
                />
            {/if}
            {#if expanded}
                <div
                    class:focused
                    class="down"
                    transition:fly={{
                        y: -10,
                        duration: 400,
                    }}
                />
            {/if}
        </div>

        {title}
    </div>

    <div style="height:0; overflow:visible;">
        {#if expanded}
            <div bind:this={body} class="dropDownBody">
                <DropDownContent bind:content on:mounted={contentLoad}>
                    <Divider />

                    <div style="padding-left:1rem;"><slot /></div>

                    <Divider />
                </DropDownContent>
            </div>
        {/if}
    </div>
</div>

<style>
    .arrow {
        position: relative;
        width: 1rem;
        height: 1rem;
        display: inline-block;
        margin-right: 1rem;
        background-color: var(--bg-alt);

        transform: rotate(45deg);
    }

    .focused {
        background-color: var(--fg-alt) !important;
    }

    .right {
        position: absolute;
        width: 1rem;
        height: 1rem;
        transform: translate(-40%, 40%) scale(1.1);

        background-color: var(--fg);

        transition: background-color 0.2s ease-out;
    }

    .down {
        position: absolute;
        width: 1rem;
        height: 1rem;
        background-color: var(--fg);
        transform: translate(-40%, -40%) scale(1.1);

        transition: background-color 0.2s ease-out;
    }

    .backdrop {
        position: fixed;
        z-index: 50;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: black;
        filter: opacity(50%);
    }

    .dropDownTitle {
  
        background-color: var(--fg);
        color: var(--bg-alt);
        padding: 1rem;

        transition: background-color 0.2s ease-out;
        font-size: larger;

        display: flex;
        align-items: center;
        justify-content: left;
 
    }

    .dropDownTitle:hover {
        background-color: var(--fg-alt);
    }

    .dropDownBody {
        border: 2px solid var(--fg-alt);
    
        height: fit-content;
    
        background-color: var(--bg);
        max-height: 0;

        transition: max-height 0.2s ease-out;
        overflow: hidden;
    }

    .parent {
        display: flex;
        flex-direction: column;
  position: relative;
  z-index: 50;
    }
</style>
