<script lang="ts">
    import Divider from "$lib/Divider.svelte";
    import IconListItem from "$lib/IconListItem.svelte";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import TechUsed from "$lib/TechUsed.svelte";
    import { svgs } from "$lib/stores/svgs";

    import "svelte-highlight/styles/gruvbox-dark-medium.css";
</script>

<h1>Toneteller!</h1>
<p>
    Toneteller is an Ai powered tool to analyse any text on the browser to
    detect the emotion behind any sentence. This web app features a well
    designed main webpage, and also a chrome extension so the detection can work
    on any webpage.
</p>

<Divider />
<div class="points">
    <IconListItem path={svgs.star} key="star">
        Winner of HackED 2023 at Edmonton - 2nd Place
    </IconListItem>

    <IconListItem path={svgs.github} key="github">
        <a target="_blank" href="https://github.com/iAniket23/tone-teller"
            >Github Repo</a
        ></IconListItem
    >
    <IconListItem path={svgs.link} key="link">
        <a
            target="_blank"
            href="https://hackathon-hacked2023.github.io/DivineInspiration/"
            >Try it out here!</a
        >
    </IconListItem>

    <IconListItem path={svgs.puzzle} key="puzzle">
        <a
            target="_blank"
            href="https://github.com/Hackathon-Hacked2023/DivineInspiration/releases/tag/v1"
            >Download the Chrome extension here!</a
        >
    </IconListItem>

    <IconListItem path={svgs.link} key="link">
        <a target="_blank" href="https://devpost.com/software/misfortune-cookie"
            >DevPost Page</a
        >
    </IconListItem>
</div>
<Divider />
<div class="top">
   
        <ImageFrame

            maxWidth={600}
            height={300}
            title="Toneteller demos"
            items={[
                {
                    desc: "Promo image of Toneteller",
                    src: "toneteller/promo.jpg",
                },
                {
                    desc: "This page lets the user type in their input directly and get the analysis results here.",
                    src: "toneteller/input.jpg",
                },
                {
                    desc: "Toneteller's Chrome extension lets you use the Ai analysis anywhere.",
                    src: "toneteller/extension.jpg",
                },
                {
                    desc: "The extension can also anaylse content in any webpage.",
                    src: "toneteller/webpage.jpg",
                },
            ]}
        />
   

    
        <TechUsed
            input={[
                {
                    name: "Front End",
                    items: [
                        {
                            name: "React",
                            src: "icons/svelte.svg",
                        },
                        {
                            name: "Lots of Custom Css",
                            src: "icons/css.svg",
                        },
                        {
                            name: "Chrome Extension Api",
                            src: "icons/chrome.svg",
                        },
                    ],
                },
                {
                    name: "Server",
                    items: [
                        {
                            name: "Python",
                            src: "icons/python.svg",
                        },
                        {
                            name: "Flask",
                            src: "icons/flask.svg",
                        },
                    ],
                },

                {
                    name: "Deployment",
                    items: [
                        {
                            name: "Google Cloud Run",
                            src: "icons/gcloud.svg",
                        },
                        {
                            name: "Docker",
                            src: "icons/docker.svg",
                        },
                    ],
                },
                {
                    name: "Machine Learning",
                    items: [
                        {
                            name: "Hugging Face",
                            src: "icons/huggingface.svg",
                        },
                        {
                            name: "🤖 RoBERTa (language model)",
                            src: "",
                        },
                    ],
                },
            ]}
        />
   
</div>

<style>
    .top {
        display: flex;

        gap: 1rem;
        flex-direction: row;
        flex-flow: wrap;

    }

    .points {
        display: flex;
        flex-flow: wrap;
        gap: 0.5rem;
        flex-direction: column;
        padding-left: 1rem;
    }
</style>
