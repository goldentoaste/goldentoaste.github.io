<script>
    // Code

    import Divider from "$lib/Divider.svelte";
    import IconListItem from "$lib/IconListItem.svelte";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import TechUsed from "$lib/TechUsed.svelte";
    import { svgs } from "$lib/stores/svgs";
</script>

<h1>Honey pot</h1>
<p>
    Honey pot / Sticky markdown down, was originally started because I wanted a
    better sticknote program for windows, but I wanted to write markdown
    instead. Eventually the program was discountinued due to feature creep,
    python's low performance, and Qt's restrictions. Maybe it just a skill diff.

    <br /><br />
    Some feature included are:
</p>

<ul>
    <li>Markdown syntax highlighting</li>
    <li>Live markdown preview</li>
    <li>Markdown code block syntax highlight for Js and Python</li>
    <li>Extendable framework for adding additional language support</li>
    <li>Rebinable keyboard short cuts for editing quick actions</li>
    <li>Image caching system to paste image directly into document</li>
    <li>Cache for web image links</li>
</ul>

<p>
    Some of these features requires the markdown to be preprocessed before that
    being passed to Qt to be rendered, and also Qt requires the entire document
    to be reloaded so it's not hard to be see that performance is bad for larger
    documents. So ultimately at some point I felt like I was trying to make a
    proper markdown editor instead of a simple sticky note and so it wasn't
    worth it anymore.
</p>

<Divider />

<div class="points">
    <IconListItem path={svgs.github} key="git">
        <a href="https://github.com/goldentoaste/honey-pot">
            See the source code (and more details) here.
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
                desc: "Editor page",
                src: "/honeypot/main.png",
            },
        ]}
    />

    <TechUsed
        input={[
            {
                name: "Python",
                items: [
                    {
                        name: "Python",
                        src: "/icons/python.svg",
                    },
                    {
                        name: "PyQt6",
                        src: "/icons/Qt.svg",
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
    <br />
    <br />
    Pente's rules are sort of similar to Gomoku, where the player can win instantly
    if they connected 5 pieces in a row. But it also has a capture rule, where if
    a player "sandwich" 2 opponent pieces, those 2 inner ones are captured. The capture
    mechanic makes the game significantly more interesting by making the win condition
    less obvious for casual players, and makes the game more complex for advance
    players.

    <br /><br />
    I think I've made one of the better ways to play this game online, with features
    such as:
</p>
<ul>
    <li>Online peer to peer multiplayer</li>
    <li>Local single player</li>
    <li>Spectators</li>
    <li>History of game players, both players can rewind to any past plays</li>
    <li>Chat room for both players and spectators</li>
    <li>Export games and load previous games</li>
    <li>Resizable board.</li>
    <li>Maybe ai opponent in the future :?</li>
</ul>

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
