<script>
    import { onMount } from 'svelte';
    import { pageState, PageState } from '$lib/stores/pageUpdates';
    import List from '$lib/List.svelte';
    import ListItem from '$lib/ListItem.svelte';
    import Button from '$lib/Button.svelte';

    onMount(() => {
        $pageState = PageState.NeedTransition;
    });

    let buttons = [
        {
            text: 'Project number 1',
            path: 'M 0,0 L 1,0 L 1,1 L 0,1 Z',
            upper: false,
        },
        {
            text: 'Project number 2',
            path: 'M 0,0 L 1,0 L 1,1 L 0,1 Z',
            upper: false,
        },
        {
            text: 'The other project',
            path: 'M 0,0 L 1,0 L 1,1 L 0,1 Z',
            upper: false,
        },
        {
            text: 'Much better project',
            path: 'M 0,0 L 1,0 L 1,1 L 0,1 Z',
            upper: false,
        },
        {
            text: 'Average project',
            path: 'M 0,0 L 1,0 L 1,1 L 0,1 Z',
            upper: false,
        },
        {
            text: 'A total disaster :^(',
            path: 'M 0,0 L 1,0 L 1,1 L 0,1 Z',
            upper: false,
        },
    ];
</script>

<h1>Projects page not done yet! 🔨</h1>
<p>
    This page will later have a this list(with animated intro of course) that each is one of my past projects, when
    clicked on, more info should display on a big window on the side.
</p>
<p>
    If the project selected is runs on the web, maybe a interactive demo could be shown in the right side group?<br />
    This could be platform dependent, so for example big/resource intensive projects, like a unity game probably shouldnt
    load on mobile.
</p>
<p>
    Speaking of mobile, making this particular page mobile friendly could be difficult because they will look very
    different.
</p>
<div>
    <List style="width:30%;">
        {#each buttons as button, index}
            <ListItem {index}>
                <Button path={button.path} upper={false} style="width:100%; margin:0;">
                    {button.text}
                </Button>
            </ListItem>
        {/each}
    </List>
</div>
