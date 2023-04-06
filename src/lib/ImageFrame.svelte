<script lang="ts" context="module">
    export interface ImgItem {
        src: string;
        desc: string;
    }
</script>

<script lang="ts">
    import { fade } from 'svelte/transition';

    import Divider from './Divider.svelte';
    import InfoBox from './InfoBox.svelte';
    import { onMount } from 'svelte';

    export let title: string = ''; // a title to describe all this collectin of images
    export let items: ImgItem[] = [];
    export let containerStyle: string = '';
    export let imgStyle = '';

    export let width = 200;
    export let maxHeight = 200;

    let index = 0;

    let showArrows = false;
    let currentImg: HTMLDivElement;
</script>

{#if items.length === 0}
    <InfoBox {title}>
        <p>Image frame no content. (zero images provided)</p>
    </InfoBox>
{/if}

{#if items.length > 0}
    <InfoBox style={containerStyle + 'border:solid 2px var(--bg-alt2);'} {title}>
        <div
            class="imgHolder"
            on:mouseenter={() => {
                showArrows = true;
            }}
            on:mouseleave={() => {
                showArrows = false;
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" display="none">
                <defs>
                    <symbol fill="none" viewBox="0 0 6 6" id="arrow">
                        <clipPath id="clip0_413_3">
                            <rect width="6" height="6" fill="white" />
                        </clipPath>
                        <g clip-path="url(#clip0_413_3)">
                            <rect
                                x="1"
                                y="3"
                                width="1.5"
                                height="1.5"
                                transform="rotate(-45 1 3)"
                                stroke="var(--fg-alt)"
                                stroke-width="0.5"
                            />
                            <path d="M3 1L5 3L3 5" stroke="var(--fg-alt)" stroke-width="0.5" />
                        </g>
                    </symbol>
                </defs>
            </svg>

            <!-- <div id="decor">
                <div id="star" />
            </div>

            {#if items.length > 1}
                <div id="counter">
                    {index}/{items.length}
                </div>
            {/if} -->

            <!-- {#if showArrows}
                {#if index !== 0}
                    <div class="arrow" id="left" transition:fade={{ duration: 200 }}>
                        <svg viewBox="0 0 6 6">
                            <use href="#arrow" />
                        </svg>
                    </div>
                {/if}

                {#if index !== items.length - 1}
                    <div class="arrow" id="right" transition:fade={{ duration: 200 }}>
                        <svg viewBox="0 0 6 6">
                            <use href="#arrow" />
                        </svg>
                    </div>
                {/if}
            {/if} -->

            <div class="imagewrapper">
                {#if index !== 0}
                    <img
                        id="prev"
                        draggable="false"
                        alt=""
                        src={items[index].src}
                        style="width:{width}px; max-height:{maxHeight}px;"
                    />
                {/if}

                <img
                    id="current"
                    draggable="false"
                    alt=""
                    src={items[index].src}
                    style="width:{width}px; max-height:{maxHeight}px;"
                />

                {#if index !== items.length - 1}
                    <img
                        id="next"
                        draggable="false"
                        alt=""
                        src={items[index + 1].src}
                        style="width:{width}px; max-height:{maxHeight}px;"
                    />
                {/if}
            </div>
            <Divider usePadding={false} style="margin-top: 0.7rem; margin-bottom:0.7rem;" />

            <p >
                {items[index].desc}
            </p>
        </div>

       
    </InfoBox>
{/if}

<style>

    p{
        width: 100%;

    }

    .imgHolder {
        position: relative;
        width: min-content;
        height: fit-content;
        overflow: hidden;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;
    }

    .imagewrapper {
        position: relative;

        border: var(--fg-alt) 2px solid;

        width: fit-content;
        height: fit-content;

        overflow: hidden;
    }

    #current {
        position: relative;
        z-index: 2;
    }

    #prev {
        position: absolute;
        top: 0;
        z-index: 1;
    }

    #next {
        position: absolute;
        top: 0;
        z-index: 1;
    }

    img {
        background-color: var(--bg-alt);
        display: block;
        pointer-events: none;

        border: none;
        transition: border 0.2s;

        user-select: none;
        padding: 1rem;
    }



    .arrow {
        position: absolute;
        width: fit-content;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 0.2s ease-out;
    }

    .arrow:active {
        scale: 1;
        filter: brightness(0.8);
    }

    .arrow::before {
        z-index: 1;
        position: absolute;
        content: '';
        background: linear-gradient(to right, transparent, var(--bg));
        width: 300%;
        height: 100%;

        opacity: 0.6;
        transition: opacity 0.2s ease-out;
    }

    .arrow:hover::before {
        opacity: 1;
    }

    .arrow#left::before {
        left: -200%;
    }
    .arrow#right::before {
        left: -200%;
    }
    .arrow#left {
        transform: scale(-1, 1);
        left: 0;
    }
    .arrow#right {
        right: 0;
    }

    .arrow:hover {
        scale: 1.2;
        filter: brightness(1.1);
    }

    .arrow > svg {
        width: 2rem;
        height: auto;
        position: relative;
        z-index: 2;
    }
</style>
