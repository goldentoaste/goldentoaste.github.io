<script>
    import IconListItem from "$lib/IconListItem.svelte";
    import { svgs } from "$lib/stores/svgs";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import TechUsed from "$lib/TechUsed.svelte";
</script>

<IconListItem path={svgs.github} key="github">
    <a target="_blank" href="https://github.com/goldentoaste/gadget-lang">Github repo</a>
    <a target="_blank" href="https://gadget-lang.vercel.app/">Deployed demo</a>
</IconListItem>

<p>
    A custom interpreted programming language implemented in python. The general architecture is
    mostly borrowed from <a href="https://craftinginterpreters.com/" target="_blank"
        >Crafting Interpreter</a
    >, but I put fair amount of my own spin on it. The language supports basic programming features,
    functional programming, and basic OOP, with a syntax similar to javascript, and a few ideas
    borrowed from
    <a href="https://github.com/TodePond/DreamBerd" target="_blank" rel="noopener noreferrer"
        >Dreamberd</a
    >. Please see demo site or github repo for more some documentation.
</p>

<div class="top">
    <ImageFrame
        height={600}
        maxWidth={800}
        title="Demo Images"
        items={[
            {
                desc: "Example of bubble sort and result from running it.",
                src: "gadget/1.png",
            },
        ]}
    />
    <TechUsed
        input={[
            {
                name: "Frontend",
                items: [
                    {
                        name: "Sveltekit",
                        src: "icons/svelte.svg",
                    },
                ],
            },
            {
                name: "Interpreter",
                items: [
                    {
                        name: "Python",
                        src: "icons/python.svg",
                    },
                ],
            },
        ]}
    />
</div>

Some features:

<ul>
    <li>Dynamically typed</li>
    <li>Functional programming, pass function as variables</li>
    <li>Functional closure</li>
    <li>Function overloading</li>
    <li>Chained comparison</li>
    <li>C-style variable closure</li>
</ul>

<style>
    .top {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
    }
</style>
