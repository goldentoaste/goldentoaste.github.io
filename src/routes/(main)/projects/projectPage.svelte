<script lang="ts" module>
    export interface Content {
        text: string;
        title: string;
        path?: string;
        page: string;
    }
</script>

<script lang="ts">
    import { onMount } from "svelte";
    import { pageState, PageState } from "$lib/stores/pageUpdates";

    import List from "$lib/List.svelte";
    import ListItem from "$lib/ListItem.svelte";
    import Button from "$lib/Button.svelte";
    import InfoBox from "$lib/InfoBox.svelte";
    import Divider from "$lib/Divider.svelte";
    import DropDown from "$lib/DropDown.svelte";


    interface Props {
        contents?: Content[];
    }

    let { contents = [] }: Props = $props();

    let selection = $state(0);
    let content: Content = $derived(contents[selection]);

    let iframe = $state<HTMLIFrameElement>();

    let listHolder = $state<HTMLDivElement>();

    let innerWidth = $state<number>(0);

    let expanded = $state(false);

    function resizeIframe() {
        if (!iframe) {
            return;
        }
        iframe.style.height = iframe.contentWindow?.document.body.scrollHeight! + 40 + "px";
    }

    onMount(() => {
        $pageState = PageState.NeedTransition;
    });
</script>

<svelte:window
onmessage={(e)=>{
    if("pageHeight" in e.data) {
        resizeIframe();
    }
    
}}
    onresize={() => {
        console.log("in resize");
        
        resizeIframe();
    }}
    bind:innerWidth
/>

<h1>My Projects 🔨</h1>
<p>
    A list of notable projects I have worked on. More detailed descriptions and interactive demos
    coming soon!
</p>
<div class="root" style={innerWidth < 850 ? "flex-direction:column" : ""}>
    <div
        class="listHolder"
        bind:this={listHolder}
        style={innerWidth < 850 ? "max-width:none; width:100%;" : ""}
    >
        {#if innerWidth > 850}
            <List>
                {#each contents as button, index}
                    <ListItem {index} style="width:100%;">
                        <Button
                            selected={selection == index}
                            selectExpands={false}
                            path={button.path}
                            upper={false}
                            style="width:100%; margin:0;"
                            onclick={() => {
                                scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                });

                                setTimeout(() => {
                                    selection = index;
                                    expanded = false;
                                }, 500);
                            }}
                        >
                            {button.text}
                        </Button>
                    </ListItem>
                {/each}
            </List>
        {:else}
            <DropDown title={contents[selection].text} bind:expanded>
                <List style="padding-right:2rem;">
                    {#each contents as button, index}
                        <ListItem {index} style="width:100%;">
                            <Button
                                selected={selection == index}
                                selectExpands={false}
                                path={button.path}
                                upper={false}
                                style="width:100%; margin:0;"
                                onclick={() => {
                                    scrollTo({
                                        top: 0,
                                        behavior: "smooth",
                                    });

                                    setTimeout(() => {
                                        selection = index;
                                        expanded = false;
                                    }, 500);
                                }}
                            >
                                {button.text}
                            </Button>
                        </ListItem>
                    {/each}</List
                >
            </DropDown>
        {/if}

        <Divider />
    </div>

    <div class="content" style={innerWidth < 850 ? " width:100%;" : ""}>
        <InfoBox title={content.title} hovering={false} style="width:auto; height:100%; margin:0;">
            <Divider usePadding={true} />
                <iframe
                    bind:this={iframe}
                    title={content.title}
                    src={`./${content.page}`}
                    scrolling="no">Content loading...</iframe
                >
            <Divider usePadding={true} />
        </InfoBox>
    </div>
</div>

<style>
    .root {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    .listHolder {
        width: 30%;
        /* min-width: 300px; */
        max-width: 450px;

        margin-top: 1rem;
        padding-right: 2rem;
        height: fit-content;

        position: sticky;
        top: 6rem;

        z-index: 2;
    }
    .content {
        position: relative;
        width: 100%;
    }

    .content > *::selection {
        background-color: var(--bg-alt2);
    }

    iframe {
        width: 100%;
        height: 0;
        transition: height 0.4s ease-out;
    }
</style>
