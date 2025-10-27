<script lang="ts" module>
    export interface ImgItem {
        src: string;
        desc: string;
    }
</script>

<script lang="ts">
    import { run } from "svelte/legacy";

    import { fade } from "svelte/transition";

    import Divider from "./Divider.svelte";
    import InfoBox from "./InfoBox.svelte";
    import { Spring, spring } from "svelte/motion";

    interface Props {
        title?: string;
        items?: ImgItem[];
        containerStyle?: string;
        width?: number;
        height?: number;
        maxWidth?: number;
    }

    let {
        title = "",
        items = [],
        containerStyle = "",
        width = 200,
        height = 200,
        maxWidth = 200,
    }: Props = $props();

    let clientWidth = $state(0);
    let _width = $derived(Math.min(clientWidth, maxWidth));

    const epsilon = 1;

    let scrollVal = new Spring(0, {
        stiffness: 0.2,
        damping: 1,
    });

    let abs = $derived(Math.abs(scrollVal.current));

    let box = $state<HTMLElement>();
    let index = $state(0);
    let mouseDown = $state(false);
    let iniX = 0;
    let lastPos = 0;
    let iniTime = 0;

    let showArrows = $state(false);

    function clamp(min: number, val: number, max: number) {
        return Math.min(Math.max(min, val), max);
    }

    function down(e: MouseEvent | Touch) {
        mouseDown = true;
        iniX = e.clientX - scrollVal.current;
        iniTime = Date.now();
    }

    function up(e: MouseEvent | Touch) {
        mouseDown = false;
        // condition to check if going to next image to occur

        // user swipe far enough within the image
        let farSwipe = abs > 0.45 * _width || abs > 500;

        // user swiped so that cursor leaves image
        const offset = lastPos - (box?.getBoundingClientRect().left ?? 0);

        let exitSwipe = offset > _width || offset < 0;

        // user swiped fast enough
        let fastSwipe = Math.abs((lastPos - iniX) / (Date.now() - iniTime + 0.1)) > 0.5; // 500 pixels per second speed required

        if (farSwipe || exitSwipe || fastSwipe) {
            scrollVal.target = Math.sign(scrollVal.current) * _width;
        } else {
            scrollVal.set(0);
        }
    }

    function move(e: MouseEvent | Touch) {
        if (mouseDown) {
            scrollVal.target = clamp(
                index === items.length - 1 ? 0 : -_width,
                e.clientX - iniX,
                index === 0 ? 0 : _width,
            );

            lastPos = e.clientX;
        }
    }

    // check if scrolling finished
    $effect(() => {
        if (!mouseDown && Math.abs(Math.abs(scrollVal.current) - _width) < epsilon) {
            index = clamp(0, index - Math.sign(scrollVal.current), items.length - 1);
            scrollVal.set(0);
        }
    });
</script>

{#if items.length === 0}
    <InfoBox {title} outline={true}>
        <p>Image frame no content. (zero images provided)</p>
    </InfoBox>
{/if}

{#if items.length > 0}
    <InfoBox
        outline={true}
        style={containerStyle + "border:solid 2px var(--bg-alt2); width:min-content;"}
        {title}
    >
        <div
            bind:clientWidth
            class="imgHolder"
            style="width:{maxWidth}px; height:{height}px;"
            onmouseenter={() => {
                showArrows = true;
            }}
            onmouseleave={() => {
                showArrows = false;
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" display="none">
                <defs>
                    <symbol fill="none" viewBox="0 0 6 6" id="arrow">
                        <clipPath id="clip0_413_3">
                            <rect width="6" height="6" fill="white"></rect>
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
                            ></rect>
                            <path d="M3 1L5 3L3 5" stroke="var(--fg-alt)" stroke-width="0.5"></path>
                        </g>
                    </symbol>
                </defs>
            </svg>

            <!-- width:{width}px; height:{height}px; -->
            <div
                class="imagewrapper"
                bind:this={box}
                onmousedown={down}
                onmouseup={up}
                onmouseleave={up}
                onmousemove={move}
                ontouchstart={(e) => {
                    down(e.touches[0]);
                }}
                ontouchend={(e) => {
                    up(e.touches[0]);
                }}
                ontouchcancel={(e) => {
                    up(e.touches[0]);
                }}
                ontouchmove={(e) => {
                    move(e.touches[0]);
                }}
            >
                <!-- this goes behind original -->
                <!-- shrink original if so  && $scrollVal < 0 && $scrollVal > 0-->
                {#if index !== items.length - 1}
                    <div id={index + 1 + ""} class="imageItem" style="z-index:1">
                        <img
                            src={items[index + 1].src}
                            alt="item"
                            style="min-width: calc({_width}px - 2rem);max-height: calc({height}px - 2rem);"
                            loading="lazy"
                        />
                    </div>
                {/if}

                <div
                    id={index + ""}
                    class="imageItem"
                    style={(scrollVal.current < 0 && index != items.length - 1
                        ? `border-right: 2px solid var(--fg); width:${clamp(
                              0,
                              _width - abs,
                              _width,
                          )}px; box-shadow:0 0 2rem var(--bg-alt3);`
                        : "") + "z-index:2;"}
                >
                    <img
                        src={items[index].src}
                        alt="item"
                        style="min-width: calc({_width}px - 2rem); max-height: calc({height}px - 2rem); filter:opacity(1);"
                    />
                </div>

                <!-- this goes over original -->
                {#if index !== 0}
                    <div
                        id={index - 1 + ""}
                        class="imageItem"
                        style={(scrollVal.current > 0
                            ? `border-right: 2px solid var(--fg); width:${clamp(
                                  0,
                                  abs,
                                  _width,
                              )}px; box-shadow: 1rem 0 2rem var(--bg-alt3);`
                            : "width:0;") + "z-index:3;"}
                    >
                        <img
                            src={items[index - 1].src}
                            alt="item"
                            style="min-width: calc({_width}px - 2rem); max-height: calc({height}px - 2rem);"
                            loading="lazy"
                        />
                    </div>
                {/if}

                {#if showArrows}
                    {#if index !== 0}
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <div
                            transition:fade={{ duration: 200 }}
                            class="arrow"
                            id="left"
                            onclick={() => {
                                scrollVal.target = _width;
                            }}
                        >
                            <!-- svelte-ignore missing_declaration -->

                            <svg viewBox="0 0 6 6">
                                <use href="#arrow"></use>
                            </svg>
                        </div>
                    {/if}

                    {#if index !== items.length - 1}
                        <!-- svelte-ignore a11y_click_events_have_key_events -->
                        <div
                            transition:fade={{ duration: 200 }}
                            class="arrow"
                            id="right"
                            onclick={() => {
                                scrollVal.target = -_width;
                            }}
                        >
                            <svg viewBox="0 0 6 6">
                                <use href="#arrow"></use>
                            </svg>
                        </div>
                    {/if}
                {/if}
            </div>

            <!-- decorations -->
            {#if items.length > 1}
                <div id="counter">
                    {index + 1}/{items.length}
                </div>
            {/if}

            <div id="starWrap">
                <div id="star"></div>
            </div>
        </div>
        <Divider usePadding={false} style="margin-top: 0.7rem; margin-bottom:0.7rem;" />

        <p>
            {items[index].desc}
        </p>
    </InfoBox>
{/if}

<style>
    p {
        width: 100%;
    }

    .imgHolder {
        position: relative;

        max-width: 100%;
        max-height: 100%;

        display: flex;
        align-items: center;
        justify-content: center;

        flex-direction: column;

        user-select: none;
    }

    .imagewrapper {
        width: 100%;
        height: 100%;
        position: relative;
        border: var(--fg-alt) 2px solid;
        overflow: hidden;
        touch-action: none;
    }

    .imageItem {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        pointer-events: none;
        user-select: none;
        overflow: hidden;

        display: flex;
        /* justify-content: center; */
        align-items: center;

        transition-property: border-color, box-shadow;
        transition-timing-function: ease-out;
        transition-duration: 0.5s;
        background: var(--bg);
        background-size: 100% 100%;
    }

    img {
        display: block;
        object-fit: contain;
        /* display: block; */
        pointer-events: none;

        user-select: none;
        padding: 1rem;

        transition: filter 0.25s ease-out;
    }

    p {
        margin: 0.25rem;
    }

    #counter {
        position: absolute;
        bottom: 0;
        right: -1px;
        padding: 0 0.5rem;
        background-color: var(--bg-alt);
        color: var(--fg);

        border: 2px solid var(--fg-alt);
        z-index: 50;
    }

    #starWrap {
        position: absolute;
        top: 0;
        left: 0;

        transform: translate(-17%, -17%);

        display: flex;

        padding-right: 1rem;
        padding-bottom: 1rem;
        background-color: var(--bg-alt);
    }

    #star {
        width: 0.3rem;
        height: 0.3rem;
        border-radius: 50%;
        background-color: var(--fg-alt);

        display: inline-block;
    }

    .arrow {
        position: absolute;
        width: fit-content;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        transition: all 0.2s ease-out;
        margin: 0 0.5rem;
        z-index: 6;
    }

    .arrow:active {
        scale: 1;
        filter: brightness(0.8);
    }

    .arrow::before {
        z-index: 1;
        position: absolute;
        content: "";
        background: linear-gradient(to right, transparent, var(--bg));
        width: 300%;
        height: 100%;

        opacity: 0.6;
        transition: opacity 0.2s ease-out;
        pointer-events: none;
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
