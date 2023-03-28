<script lang="ts">
    import { onMount } from 'svelte';
    import { pageState, PageState } from '$lib/stores/pageUpdates';
    import List from '$lib/List.svelte';
    import ListItem from '$lib/ListItem.svelte';
    import Button from '$lib/Button.svelte';

    onMount(() => {
        $pageState = PageState.NeedTransition;
    });

    let contents = [
        {
            text: '🍔 Nommers',
            path: '',
            upper: false,
            content:'debug1'
        },
        {
            text: 'Test page 1',
            path: '',
            upper: false,
            content:'debug2'
        },
        {
            text: 'page 2',
            path: '',
            upper: false,
            content:'debug1'
        },
        {
            text: 'page 3',
            path: '',
            upper: false,
            content:'debug2'
        },
    ];

    let selection = 0;

</script>

<h1>My Projects 🔨</h1>
<p>A list of notable projects I have worked on. More detailed descriptions and interactive demos coming soon!</p>
<div class="root">
    <div class="listHolder">
        <List>
            {#each contents as button, index}
                <ListItem {index}>
                    <Button
                        horizontal={true}
                        selected={selection == index}
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
    </div>

    <div class="content">
        <iframe
        title={contents[selection].text}
        src={`./${contents[selection].content}`}
        scrolling="no"
        />
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

        background-color: var(--bg-alt3);

        padding: 2rem;
        width: 70%;
    }

    .content > *::selection {
        background-color: var(--bg-alt2);
    }

    iframe{
        width: 100%;
        height: 100%;
    }
</style>
