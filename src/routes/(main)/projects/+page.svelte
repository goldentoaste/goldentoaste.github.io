<script lang="ts">
    import { onMount } from 'svelte';
    import { pageState, PageState } from '$lib/stores/pageUpdates';
    import List from '$lib/List.svelte';
    import ListItem from '$lib/ListItem.svelte';
    import Button from '$lib/Button.svelte';
    import InfoBox from '$lib/InfoBox.svelte';
    import Divider from '$lib/Divider.svelte';

    interface Content {
        text: string;
        title: string;
        path: string;
        page: string;
    }

    let contents: Content[] = [
        {
            text: '🍔 Nommers',
            title: 'Nommers : Svelte web app',
            path: '',
            page: 'nommers',
        },
        {
            text: 'Test page 1',
            title: 'ASDASD',
            path: '',
            page: 'debug2',
        },
    
        {
            text: 'page 3',
            title: 'ABC',
            path: '',
            page: 'debug2',
        },
    ];

    let selection = 0;
    let content: Content;
    $: {
        content = contents[selection];
    }

    let iframe: HTMLIFrameElement;

    let listHolder: HTMLDivElement;

    function resizeIframe() {
        if (iframe.contentWindow?.document.body.scrollHeight + 'px' !== iframe.style.height)
            iframe.style.height = iframe.contentWindow?.document.body.scrollHeight! + 40 + 'px';
    }

    onMount(() => {
        $pageState = PageState.NeedTransition;
    });
</script>

<svelte:window on:resize|passive={resizeIframe} />

<h1>My Projects 🔨</h1>
<p>A list of notable projects I have worked on. More detailed descriptions and interactive demos coming soon!</p>
<div class="root">
    <div class="listHolder" bind:this={listHolder}>
        <List>
            {#each contents as button, index}
                <ListItem {index}>
                    <Button
                        selected={selection == index}
                        selectExpands={false}
                        path={button.path}
                        upper={false}
                        style="width:100%; margin:0;"
                        on:click={() => {
                            selection = index;
                        }}
                    >
                        {button.text}
                    </Button>
                </ListItem>
            {/each}
        </List>

        <Divider />
    </div>

    <div class="content">
        <InfoBox title={content.title} hovering={false} style="width:100%; height:100%;">
            <Divider usePadding={false} />
            <iframe
                bind:this={iframe}
                on:load={resizeIframe}
                loading="lazy"
                title={content.title}
                src={`./${content.page}`}
                scrolling="no">Content loading...</iframe
            >
            <Divider usePadding={false} />
        </InfoBox>
    </div>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .root {
        display: flex;
        flex-direction: row;
        justify-content: center;
        width: 100%;
    }

    .listHolder {
        width: 30%;
        min-width: 300px;
        max-width: 450px;

        margin-top: 1rem;
        padding-right: 2rem;
        height: fit-content;

        position: sticky;
        top: 6rem;
    }
    .content {
        z-index: 50;
        position: relative;
        width: 70%;
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
