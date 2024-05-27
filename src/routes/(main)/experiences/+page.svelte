<script lang="ts">
    import { fade } from "svelte/transition";
    import ExpPage from "./ExpPage.svelte";
    import type { ExperienceInput } from "./ExpPage.svelte";
    import { finishOutro } from "$lib/stores/pageUpdates";

    let pageInput: ExperienceInput[] = [
        {
            year: "2025",
            items: [
                {
                    title: "BSC of CS at University of Alberta",
                    duration: "May 2025",
                    details: [
                        "Expecting to Graduate by May of 2025",
                        "With courses taken focusing on Software Dev and Mathematics",
                    ],
                    description: `Currently expecting to graduate by May of 2025, or 1 semester
                    later if a internship oppontunity if available for me this year. In my last year of study
                    I would like to focus on software quality, software design, and computer networks. The following is a list of relavent
                    courses.
                    `,
                    logoSrc: "experience/ualberta.svg",
                    moreDetails: [
                        "Software Engineering",
                        "Software Process & Product Management",
                        "Web Architecture",
                        "Database Design",
                        "Functional Programming",
                        "GPU Programming",
                    ],
                },
            ],
        },
        {
            year: "2024",
            items: [
                {
                    title: "Workshop/Mentor at Stormhacks 2024",
                    duration: "May 2024",
                    details: [
                        "Hosted Svelte Workshop",
                        "Provided various NextJs help to various hackers",
                    ],
                    description: `I was invited to host a Svelte workshop for 2024, in which I prepared quite a high effort :P
                    The workshop covered the basics of Svelte, what it is, how its different, and why its a good choice, some common pattern
                    done in svelte (like conditional rendering, components, lists, etc), and then wrapped it up by using all the points covered 
                    to make a todo app. 
                    <br>
                    <br>

                    The workshop's turn out wasn't great, partly because my marketing could've been better, on the other hand it could be
                    hard for a hackathon audience to try to pick a new framework during the event, plus Svelte is very much unknown for new
                    web dev that has just started with React considering its the only one talked about. Maybe I should properly learn some NextJs :?

                    <br>
                    <br>


                    I also provided plenty of React/NextJs help to the attendees. Oh, how I wish they used any other frameworks instead.
                    `,
                    moreDetails: [
                        "<a href='https://svelte101.vercel.app/'>Check out this workshop page here</a>",
                        "<a href='https://stormhacks-2024.vercel.app/'>The todo app in question is here.</a>"
                    ],
                    logoSrc:"/icons/questionsparky.png"
                },
                {
                    title: "Intern at Blackberry",
                    duration: "Jan 2024",
                    details: [
                        "4 months internship at Blackberry",
                        "Java fullstack development position",
                    ],
                    logoSrc: "/icons/blackberry.svg",
                    description: `During my internship at Blackberry, I was working on a update for one of their legacy webapp
                    into a more modern Java fullstack webframeworks called Vaadins. It was definitely strange to use java for web development,
                    but after working with it for a while, it is surprisingly usable. The experience was very similar to desktop development, the
                    framework maintains a active websocket connection with the page in browser, so that logics can be controlled in backend with Java.
                    <br> <br>
                    It was also very fun to work the helpful team and my mentor, and it was also interesting to experience how a dev team in a 
                    established company operates.
                    `,
                },
            ],
        },
        {
            year: "2023",
            items: [
                {
                    title: "Cmput 455 - Class Ai tournament 1st place",
                    duration: "Dec 2023",
                    details: ["Fist place in class's ai player tourney"],
                    description: `Cmput 455 is a course on algorithms used for search and planning, mostly in the context of 
                    computer game solving. In particular, for the final project, we used techniques learnt over the semester to build
                    the best Ai player for the game of <a href='https://en.wikipedia.org/wiki/Pente'>Pente</a>. I lead the team to implement 
                    the Monte Carlo tree search for the game, and won first place out of 73 teams, winning the final match with 8 wins to 5 losses.
                    `,
                    moreDetails: [
                        "Machine learning",
                        "Monte Carlo tree search",
                    ],
                    logoSrc: "experience/ualberta.svg",
                },
                {
                    title: "Stormhacks 2023 - Watchdog",
                    duration: "May 2023",
                    details: [
                        "2nd Place + Best UI design award",
                        "Near 200 attendees",
                    ],
                    description: `An in-person hackathon event host on Sfu burnaby campus, with nearly 200 paticipants.
                    I worked with a team of 4 to create an web app called "Watchdogs", a online scam and fraud detecting tool.

                    <br/>
                    <br/>
                    <i>For more information, see</i> <a href="https://devpost.com/software/watchdog-exrdgn" target="_blank">here.</a>
                    `,
                    logoSrc: "experience/stormhacks.png",
                    moreDetails: [
                        "Tech stack: OpenAi Api, GPT3, SvelteKit, Chrome Extension Api, Vercel",
                        "Awards: 2nd Place Overall, best Ui/Ux",
                    ],
                },
                {
                    title: "RootHacks 2023 - Misfortune Cookies",
                    duration: "Mar 2023",
                    details: ["Judges's Choice Award", "Made in under 12 hrs"],
                    description: `A web app I made with another full stack designer in during this 12 hours hackathon,
                    hosted in the SFU surrey campus. While the theme of the app is light-hearted in nature, most
                    attendees of the event enjoyed playing with, and was impressed by its well designed and reactive ui.

                    <br/>
                    <br/>
                    <i>For more information, see</i> <a href="https://devpost.com/software/misfortune-cookie" target="_blank">here.</a>
                    `,
                    logoSrc:
                        "https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/403/808/datas/medium.png",
                    moreDetails: ["Tech Stack: just SvelteKit :<"],
                },
                {
                    title: "Software Developer Intern",
                    duration: "May 2022 - Jan 2023",
                    details: [
                        "8 Month of experience working with real products",
                        "Contributed to software used by multiple companies",
                    ],
                    description: `For this internship I worked at <a href="https://www.interfacefluidics.com/" target="_blank">Interface Fluidics,</a>
                    a startup based in Edmonton, who specialize in hardware and software for analysing high pressure and tempurature fluids, 
                    which is often needed in the oil and gas industry. 
                    
                    <br/>
                    <br/>

                    I was primarily involved with development of their desktop software,
                    which was used to run image/data processing recipes, analyse such data collected from lab equipments,
                    and then reporting the results back to operator and database. In the process of implementing new features,
                    I have also updated a large portion of the software's legacy code base, improving efficiency for
                    both the developers and end users.
                    `,
                    moreDetails: [
                        "Building desktop gui program with Qt and Python",
                        "Performing and building image/data anaylsis tool using Numpy, SciPy and OpenCv",
                        "Interacting with database via GraphQl and PhpMyAdmin",
                        "Refactoring and updating legacy database",
                        "Interviewing end users and customers for feedback and feature requests.",
                    ],
                    logoSrc: "experience/gear.svg",
                },
                {
                    title: "HackED 2023 - Toneteller",
                    duration: "Jan 2023",
                    details: [
                        "2nd Place at HackEd 2023, Edmonton",
                        "Fullstack & ML webapp and chrome extension",
                    ],
                    logoSrc: "experience/toneteller.svg",
                    description: `
                    Toneteller is a app for users who(for various reasons) have difficaulties in telling the emotions
                    underlying a text message. Toneteller uses ML sentiment analysis tools to detect the tone of the message
                    and display it to the user. The analysis results are injected into the webpage the user is currently viewing
                    via the accompanying chrome extension.
                    <br/>
                    <br/>
                    Toneteller won second place at HackEd 2023, hosted at the University of Alberta. The hackathon had roughly 300 total 
                    hackers, with 70 submitted projects. Toneteller was received well amongst the event participants, as we saw over 200 unique visitors
                    to our website, and over 1500 api calls according to our Google Cloud analytics.
                    <br/>
                    <br/>
                    Devpost: <a href="https://devpost.com/software/toneteller" target="_blank"> here</a> <br/>
                    Try it now: <a href="https://hackathon-hacked2023.github.io/DivineInspiration/" target="_blank">here</a>
                    `,
                    moreDetails: [
                        "Winning second place out of 70 projects",
                        "Frontend: React, Chrome Extension Api",
                        "Backend: Python, Django, Hugging Face",
                        "Deployment: Google Cloud Run",
                    ],
                },
            ],
        },
        {
            year: "2022",
            items: [
                {
                    title: "Place holder",
                    duration: "place holding",
                    details: ["*To make the page slightly longer*"],
                },
            ],
        },
    ];
</script>

<div transition:fade|global={{ duration: 150 }} on:outroend={finishOutro}>
    <ExpPage {pageInput} />
</div>
