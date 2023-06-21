<script lang="ts">
    import Divider from "$lib/Divider.svelte";
    import IconListItem from "$lib/IconListItem.svelte";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import TechUsed from "$lib/TechUsed.svelte";
    import { svgs } from "$lib/stores/svgs";

    import "svelte-highlight/styles/gruvbox-dark-medium.css";
</script>

<h1>Turn timer</h1>
<p>
    This app was (inspired by?) made in response to slow playing in my Magic the Gathering EDH
    group. The timer app connects any number of players together and tracks remaining time for each player. 
    Information is shared and kept in sync for each client to simplify communication and speed up games.
</p>

<Divider />
<div class="points">


    <IconListItem path={svgs.github} key="github">
        <a target="_blank" href="https://github.com/goldentoaste/turn_timer"
            >Github Repo</a
        ></IconListItem
    >
  
    
    <IconListItem path={svgs.link} key="link">
        <a target="_blank" href="https://turn-timer.vercel.app/"
            >Try it here!</a
        ></IconListItem
    >
</div>
<Divider />
<div class="top">
    <ImageFrame
        containerStyle="flex-basis:500px;"
        maxWidth={500}
        height={300}
        title="Timer demos"
        items={[
            {
                desc: "Ui of the timer when the game has started",
                src: "timer/timerPage.png",
            },
            {
                desc: "Host's options for setting up lobby",
                src: "timer/rules.png",
            },
            {
                desc: "A player taking priority on another player's turn",
                src: "timer/prio.png",
            },
       
        ]}
    />

    <TechUsed
        input={[
            {
                name: "Front End",
                items: [
                    {
                        name: "SvelteKit",
                        src: "icons/svelte.svg",
                    },
                
                ],
            },
            {
                name: "Deployment",
                items: [
                    {
                        name: "Vercel",
                        path: svgs.vercel,
                    },
                ],
            },
            {
                name: "Network",
                items: [
                    {
                        name: "FireBase",
                        src: "icons/firebase.png"
                    },
                    {
                        name:"WebRtc",
                        src:"icons/webrtc.svg"
                    }
            
                ],
            },
        ]}
    />
</div>
<p>
    Current the program uses WebRTC to connect the host to players and eachother, the players sends 
    message to all the other clients in order to update game state. Firebase is used as the match making server
    to establish the WebRTC connections, as an intermediary for clients to exchange connection offers, anwsers, and ICE candidates.
    <br/>
    This network arrangement is chosen for the following reasons:
</p>
<ul>
    <li>Lower server cost. Since the clients are sending messages to others directly, there's no need to call a server api excessively, or 
        to keep multiple websocket connections alive for server to proxy messages.
    </li>
    <li>Lower latency. This peer to peer arrangement makes it so that data does not need take an extra trip to a server before reaching
        destination.
    </li>
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
