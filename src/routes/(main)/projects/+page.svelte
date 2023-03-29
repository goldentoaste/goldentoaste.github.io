<script lang="ts">
    import { onMount } from 'svelte';
    import { pageState, PageState } from '$lib/stores/pageUpdates';
    import List from '$lib/List.svelte';
    import ListItem from '$lib/ListItem.svelte';
    import Button from '$lib/Button.svelte';
    import InfoBox from '$lib/InfoBox.svelte';
    import Divider from '$lib/Divider.svelte';
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/types/runtime/animate';

    onMount(() => {
        $pageState = PageState.NeedTransition;
    });

    interface Content {
        text: string;
        title: string;
        path: string;
        page: string
    }

    let contents : Content[] = [
        {
            text: '🍔 Nommers',
            title: 'Nommers : Svelte web app',
            path: '',
            page: 'debug1',
        },
        {
            text: 'Test page 1',
            title: 'ASDASD',
            path: '',
            page: 'debug2',
        },
        {
            text: 'page 2',
            title: 'XYZ',
            path: '',
            page: 'debug1',
        },
        {
            text: 'page 3',
            title: 'ABC',
            path: '',
            page: 'debug2',
        },
    ];

    let selection = 0;
    let content : Content;

    $: {
        content = contents[selection];
        }

    let iframe: HTMLIFrameElement;
    
    function resizeIframe(){
        iframe.style.height=iframe.contentWindow?.document.body.scrollHeight!+40+"px";
    }
</script>


<h1>My Projects 🔨</h1>
<p>A list of notable projects I have worked on. More detailed descriptions and interactive demos coming soon!</p>
<div class="root">
    <div class="listHolder">
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
                        }}>
                        {button.text}
                    </Button>
                </ListItem>
            {/each}
        </List>
    </div>

    <div class="content"  >
        <InfoBox title={content.title} hovering={false} style="width:100%; height:100%;">
            <Divider usePadding={false}/>
            <iframe bind:this={iframe}  on:load={resizeIframe}  loading="lazy" title={content.title} src={`./${content.page}`} scrolling="no" >Content loading...</iframe>
            <Divider usePadding={false}/>
        </InfoBox>
    </div>
</div>
<svelte:window on:resize={resizeIframe}/>
<style>
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
        position: relative;
        z-index: 40;

        margin-top: 1rem;
        padding-right: 2rem;
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
        height: fit-content;

        object-fit: contain;
    }
</style>
