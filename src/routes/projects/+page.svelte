<script>
    import ButtonList from "$lib/ButtonList.svelte";
    import { onMount } from "svelte";
    import { pageState, PageState } from "$lib/stores/pageUpdates";

    onMount(() => {
        $pageState = PageState.NeedTransition;
    });
</script>

<h1>Projects page not done yet! 🔨</h1>
<div>
    <ButtonList
        on:outroend={() => {
            if ($pageState === PageState.Transitioning) {
                $pageState = PageState.ReadyToNav;
            }
        }}
        style="width:30%;"
        buttons={[
            {
                text: "TEst",
                path: "M 0,0 L 1,0 L 1,1 L 0,1 Z",
                upper: false,
            },
            {
                text: "TEst",
                path: "M 0,0 L 1,0 L 1,1 L 0,1 Z",
            },
            {
                text: "TEst",
                path: "M 0,0 L 1,0 L 1,1 L 0,1 Z",
            },
            {
                text: "TEst",
                path: "M 0,0 L 1,0 L 1,1 L 0,1 Z",
            },
            {
                text: "TEst",
                path: "M 0,0 L 1,0 L 1,1 L 0,1 Z",
            },
            {
                text: "TEst",
                path: "M 0,0 L 1,0 L 1,1 L 0,1 Z",
            },
        ]}
    />
</div>
