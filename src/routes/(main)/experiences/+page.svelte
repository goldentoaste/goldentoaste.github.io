<script lang="ts">
    import ExpPage from "./ExpPage.svelte";
    import type { ExperienceInput } from "./ExpPage.svelte";

    let pageInput: ExperienceInput[] = [

        {
            year: "2024",
            items: [
                {
                    title: "BSC of CS at University of Alberta",
                    duration: "May 2024",
                    details:[
                        "Expecting to Graduate by May of 2024",
                        "With courses taken focusing on Software Dev and Mathematics"
                    ],
                    description: `Currently expecting to graduate by May of 2024, or 1 semester
                    later if a internship oppontunity if available for me this year. In my last year of study
                    I would like to focus on software quality, software design, and computer networks. The following is a list of relavent
                    courses.
                    `,
                    logoSrc: "experience/ualberta.svg"
                }
            ]
        },
        {
            year: "2023",
            items: [
                {
                    title: "Stormhacks 2023 - Watchdog",
                    duration: "May 2023",
                    details: [
                        "2nd Place + Best UI design award",
                        "Near 200 attendees"
                    ],
                    description: `An in-person hackathon event host on Sfu burnaby campus, with nearly 200 paticipants.
                    I worked with a team of 4 to create an web app called "Watchdogs", a online scam and fraud detecting tool.

                    <br/>
                    <br/>
                    <i>For more information, see</i> <a href="https://devpost.com/software/watchdog-exrdgn" target="_blank">here.</a>
                    `,
                    logoSrc:"experience/stormhacks.png",
                    moreDetails:[
                        "Tech stack: OpenAi Api, GPT3, SvelteKit, Chrome Extension Api, Vercel",
                        "Awards: 2nd Place Overall, best Ui/Ux"
                    ]
                },
                {
                    title: "RootHacks 2023 - Misfortune Cookies",
                    duration: "Mar 2023",
                    details: [
                        "Judges's Choice Award",
                        "Made in under 12 hrs"
                    ],
                    description: `A web app I made with another full stack designer in during this 12 hours hackathon,
                    hosted in the SFU surrey campus. While the theme of the app is light-hearted in nature, most
                    attendees of the event enjoyed playing with, and was impressed by its well designed and reactive ui.

                    <br/>
                    <br/>
                    <i>For more information, see</i> <a href="https://devpost.com/software/misfortune-cookie" target="_blank">here.</a>
                    `,
                    logoSrc:"https://d112y698adiu2z.cloudfront.net/photos/production/challenge_thumbnails/002/403/808/datas/medium.png"
                },
             
            ],
        },
        {
            year: "22222",
            items: [
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
            ],
        },
        {
            year: "2078",
            items: [
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
                {
                    title: "Present Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA*"
                    ],
                },
            ],
        },
    ];
</script>

<ExpPage {pageInput} />
