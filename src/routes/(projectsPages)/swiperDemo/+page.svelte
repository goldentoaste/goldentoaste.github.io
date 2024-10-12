<script>
    import IconListItem from "$lib/IconListItem.svelte";
    import { svgs } from "$lib/stores/svgs";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import TechUsed from "$lib/TechUsed.svelte";
</script>

<IconListItem path={svgs.github} key="github">
    <a target="_blank" href="https://github.com/goldentoaste/swiperDemo">Github repo</a>
    <a target="_blank" href="https://swiper-demo-phi.vercel.app/">Deployed demo</a>
</IconListItem>

<p>
    A demo for a Svelte component I made, its meant to be a infinite scroller to browse various items.
    User can swipe up and down like its Tictok, and swipe left or right to accept or reject like Tinder. 
    It's made to be compatible with both web browser and mobile, and can display any content inside.
    The current implementation is a lil buggy for now, so its only good for browsing cat pictures.
</p>

<div class="top">
    <ImageFrame
        height={600}
        maxWidth={800}
        title="Demo Images"
        items={[
          
            {
                desc: "Swiper ui, with some debug info on the bottom",
                src: "swiperDemo/1.png",
            },
        ]}
    />
    <TechUsed
        input={[
            {
                name: "Stuff",
                items: [
                    {
                        name: "Svelte",
                        src: "icons/svelte.svg",
                    },
                    {
                        name: "The cat api",
            
                    },
                  
                ],
            },
          
        ]}
    />
</div>




<style>
    .top {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
    }
</style>
