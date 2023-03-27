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

    let selects = Array(buttons.length).fill(false);
    selects[0] = true;

</script>

<h1>My Projects 🔨</h1>
<p> A list of notable projects I have worked on. More detailed descriptions and interactive demos coming soon!</p>
<div>
    <List style="width:30%;min-width:300px; max-width:450px; ">
        {#each buttons as button, index}
            <ListItem {index}>
                <Button horizontal={true} selected={selects[index]} path={button.path} upper={false} style="width:100%; margin:0;" on:click={()=>{
                    selects.fill(false);
                    selects[index] = true;
                }}>
                    {button.text}
                </Button>
            </ListItem>
        {/each}
    </List>
</div>
