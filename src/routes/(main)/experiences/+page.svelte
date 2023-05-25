<script lang="ts">
    import ExpPage from "./ExpPage.svelte";
    import type { ExperienceInput } from "./ExpPage.svelte";

    let pageInput: ExperienceInput[] = [
        {
            year: "2023",
            items: [
                {
                    title: "Stormhacks 2023",
                    duration: "May 2023",
                    details: [
                        "2nd Place + Best UI design award",
                        "Near 200 attendees"
                    ],
                    description: `An in-person hackathon event host on Sfu burnaby camppus, with nearly 200 paticipants.
                    I worked with a team of 4 to create an web app called "Watchdogs", a online scam and fraud detecting tool.
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
                    title: "Presen1t Day",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA2*"
                    ],
                },
                {
                    title: "Present Da2y",
                    duration: "Present Time",
                    details: [
                        "*HAHAHAHA3*"
                    ],
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
