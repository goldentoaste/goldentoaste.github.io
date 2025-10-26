<script lang="ts" module>
    export interface TechItem {
        name: string;
        src?: string;
        path?: string;
    }

    export interface TechGroup {
        name: string;
        items: TechItem[];
    }
</script>

<script lang="ts">
    import InfoBox from "./InfoBox.svelte";
    import IconListItem from "./IconListItem.svelte";
    import Divider from "./Divider.svelte";

    interface Props {
        input?: TechGroup[];
        style?: string;
    }

    let { input = [], style = "" }: Props = $props();
</script>

<InfoBox title="Tech used" outline={true} {style}> 
    <div class="techUsed">
        {#each input as group}
            <div class="techGroup">
                <p>
                    {group.name}
                </p>
                <Divider useDecoration={false} usePadding={false} />
                <div class="items">
                    {#each group.items as item}
                        <IconListItem src={item.src} path={item.path} key={item.name}
                            >{item.name}</IconListItem>
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</InfoBox>

<style>
    .techUsed{
        display: flex;
        flex-direction: row;
        gap: 2rem;
        flex-flow: wrap;
    }
    .techGroup {
        display: flex;
        flex-direction: column;
    }

    p {
        font-size: large;
        color: var(--fg);
        margin: 0.5rem 0;
    }

    .items{
        margin: 0.5rem 0;
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
    }
</style>
