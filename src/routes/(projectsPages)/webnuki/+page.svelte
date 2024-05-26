<script>
    // Code

    import Divider from "$lib/Divider.svelte";
    import IconListItem from "$lib/IconListItem.svelte";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import TechUsed from "$lib/TechUsed.svelte";
    import { svgs } from "$lib/stores/svgs";
</script>

<h1>Webnuki</h1>
<p>
    Webnuki, is <em>imo</em> a very good implementation of the game
    <a href="https://en.wikipedia.org/wiki/Pente">Pente</a>. Now, it's called
    Webnuki because during my games ai course, my prof always referred to it as
    "Ninuki", although Ninuki is a slightly different rule set.
</p>

<Divider />

<div class="points">
    <IconListItem path={svgs.link} key="link">
        <a href="https://webnuki.vercel.app">Try it here!</a>
    </IconListItem>

    <IconListItem path={svgs.github} key="git">
        <a href="https://github.com/goldentoaste/webnuki">
            See the source code here.
        </a>
    </IconListItem>
</div>

<Divider />

<div class="top">
    <ImageFrame
        maxWidth={500}
        height={500}
        title="Webnuki page parts"
        items={[
            {
                desc: "Game board and a demo game",
                src: "/webnuki/board.png",
            },
            {
                desc: "History and scoreboard, player can rewind to any past move.",
                src: "/webnuki/history.png",
            },
            {
                desc: "Game options, multi/single player, export/load game",
                src: "/webnuki/game_options.png",
            },
            {
                desc: "Chat box.",
                src: "/webnuki/chat.png",
            },
        ]}
    />

    <TechUsed
        input={[
            {
                name: "GUI",
                items: [
                    {
                        name: "Svelte",
                        src: "/icons/svelte.svg",
                    },
                ],
            },
            {
                name: "Logics",
                items: [
                    {
                        name: "Lots of javascript :v",
                        src: "/icons/js.svg",
                    },
                ],
            },
            {
                name: "Web",
                items: [
                    {
                        name: "PeerJs",
                        src: "/icons/js.svg",
                    },
                    {
                        name: "WebRTC",

                        path: svgs.websocket,
                    },
                ],
            },
        ]}
    />
</div>

<p>
    This project was initially started as a quick n dirty interface to play the
    game for my game in the games Ai course. But the game turned out t be really
    fun and so I decided to make the multiplayer work and made it look nice.
</p>

<style>
    .top {
        display: flex;
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
