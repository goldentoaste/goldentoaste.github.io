<script lang="ts">
    import Intro from "./Intro.svelte";
    import Section from "$lib/Section.svelte";
    import InfoBox from "$lib/InfoBox.svelte";
    import IconListItem from "$lib/IconListItem.svelte";
    import { fade } from "svelte/transition";
    import { PageState, finishOutro, pageState } from "$lib/stores/pageUpdates";
    import { onMount } from "svelte";
    interface SkillItem {
        url?: string;
        name: string;
        svgPath?: string;
    }
    interface SkillGroup {
        title: string;
        items: SkillItem[];
    }

    let javaIconPath: string =
        "M0.363185 0.773129C0.363185 0.773129 0.324747 0.796504 0.389904 0.803191C0.468341 0.813191 0.510122 0.811535 0.596935 0.794847C0.614383 0.805532 0.632835 0.814481 0.652029 0.821566C0.456716 0.905066 0.20956 0.816566 0.363185 0.773129ZM0.338185 0.664597C0.338185 0.664597 0.296435 0.696316 0.36156 0.703035C0.446716 0.711379 0.513498 0.713035 0.628748 0.689691C0.639956 0.701058 0.653679 0.709633 0.66881 0.714722C0.433373 0.784847 0.16956 0.721379 0.338185 0.664597ZM0.799029 0.85491C0.799029 0.85491 0.827404 0.878285 0.76731 0.89666C0.655435 0.930097 0.298122 0.940097 0.197935 0.89666C0.162872 0.88166 0.229654 0.859941 0.25106 0.856597C0.272779 0.851597 0.284497 0.851597 0.284497 0.851597C0.24606 0.824879 0.0290287 0.906691 0.17431 0.930035C0.573372 0.99516 0.90231 0.90166 0.798779 0.85491H0.799029ZM0.381247 0.551035C0.381247 0.551035 0.199247 0.594472 0.316122 0.609472C0.366216 0.61616 0.464716 0.614472 0.55656 0.607816C0.631685 0.601129 0.706873 0.587816 0.706873 0.587816C0.706873 0.587816 0.680154 0.599504 0.661779 0.611191C0.476466 0.659629 0.120779 0.63791 0.222654 0.587816C0.309466 0.546066 0.381279 0.551097 0.381279 0.551097L0.381247 0.551035ZM0.706873 0.733035C0.893873 0.63616 0.80706 0.542722 0.746935 0.554379C0.731935 0.557722 0.725216 0.561066 0.725216 0.561066C0.725216 0.561066 0.730216 0.551066 0.741904 0.547722C0.860466 0.505972 0.953966 0.672941 0.703466 0.738035C0.703466 0.738035 0.705122 0.736379 0.70681 0.733035H0.706873ZM0.399685 0.996847C0.579997 1.00853 0.855529 0.99016 0.862185 0.904972C0.862185 0.904972 0.848841 0.93841 0.713591 0.96341C0.559966 0.991785 0.369622 0.98841 0.257747 0.970097C0.257747 0.970097 0.281122 0.990129 0.399685 0.996847Z M0.593637 3.05176e-05C0.593637 3.05176e-05 0.697168 0.105218 0.495137 0.263843C0.333168 0.392405 0.458418 0.465874 0.495137 0.549374C0.39995 0.464218 0.331512 0.389062 0.378262 0.318968C0.4467 0.215406 0.635387 0.165624 0.593637 3.05176e-05ZM0.540512 0.479249C0.58895 0.534343 0.527168 0.584437 0.527168 0.584437C0.527168 0.584437 0.650731 0.520999 0.59395 0.442499C0.5422 0.367374 0.502075 0.330624 0.719168 0.205406C0.719168 0.205406 0.376887 0.290562 0.540512 0.479249Z";

    let WSPath =
        "M0.751719 0.749425H0.875859V0.354106L0.735996 0.168616L0.648215 0.285037L0.751719 0.42231V0.74942V0.749425ZM0.876188 0.831959H0.443172L0.339664 0.694691L0.383559 0.63648L0.469047 0.74986H0.644938L0.471668 0.519625L0.515887 0.460979L0.689156 0.690785V0.457498L0.603996 0.344553L0.647559 0.286773L0.432363 6.21684e-05H0L0.123812 0.16427V0.164705H0.380609L0.47134 0.285037L0.338684 0.460974L0.247953 0.340642V0.247244H0.123812V0.408846L0.338684 0.69382L0.251227 0.809806L0.39109 0.995301H1L0.876188 0.831959Z";

    let GH =
        "M.499 0A.505.505 0 000 .513C0 .739.143.93.34.999c.026.005.035-.011.035-.025L.374.88C.235.91.206.82.206.82.184.758.151.743.151.743.106.712.154.712.154.712c.05.004.077.053.077.053.045.078.116.056.145.042A.11.11 0 01.408.738C.298.727.18.682.18.486.18.429.2.384.23.348A.19.19 0 01.238.212S.279.2.374.265a.47.47 0 01.25 0C.717.199.76.212.76.212a.19.19 0 01.005.136.2.2 0 01.051.138C.816.682.7.726.588.738c.019.017.034.047.034.096v.14c0 .014.009.03.033.025A.512.512 0 00.996.513.505.505 0 00.5 0z";
    let AWS = `M.945.645C.93.628.853.637.818.64.808.64.806.633.815.626.877.583.98.596.991.61 1.003.625.988.726.93.775.92.783.912.779.916.769.93.736.96.663.945.645zM.9.697A.724.724 0 01.01.633C0 .623.009.61.02.617A.975.975 0 00.883.67C.902.663.917.683.9.697zM.284.442a.1.1 0 00.004.03.177.177 0 00.01.023.014.014 0 01.003.008C.3.506.299.509.294.513l-.02.013a.016.016 0 01-.009.003C.262.529.26.528.255.525A.102.102 0 01.243.509a.255.255 0 01-.01-.02.121.121 0 01-.096.046A.09.09 0 01.07.51.085.085 0 01.046.448c0-.028.01-.05.03-.068a.12.12 0 01.08-.025.26.26 0 01.074.01V.339C.23.315.224.298.214.288.204.278.186.272.161.272a.15.15 0 00-.036.005.262.262 0 00-.047.015.02.02 0 01-.005 0C.068.293.066.29.066.283V.268c0-.005 0-.01.002-.012a.025.025 0 01.01-.007A.199.199 0 01.17.227c.038 0 .067.01.085.027.018.018.028.045.028.08v.109zm-.133.05A.116.116 0 00.185.486a.073.073 0 00.03-.021.052.052 0 00.012-.021.119.119 0 00.003-.03V.402A.274.274 0 00.17.394C.146.393.13.398.12.407a.048.048 0 00-.016.038c0 .015.004.027.012.035.008.008.02.012.035.012zm.264.036C.409.528.405.527.402.523.4.523.397.518.395.51L.318.257A.058.058 0 01.315.243c0-.005.003-.008.008-.008h.032c.007 0 .01 0 .013.003C.371.24.373.245.375.25L.43.47.48.25C.483.246.485.24.488.239A.023.023 0 01.5.235h.026c.006 0 .01 0 .013.003C.542.24.544.245.545.25l.053.222.057-.22A.028.028 0 01.662.237.021.021 0 01.675.235h.03c.006 0 .008.003.008.008v.006A.047.047 0 01.71.257L.63.512c0 .006-.003.01-.006.013a.021.021 0 01-.012.003H.584C.577.528.573.527.57.525.568.522.565.518.564.51L.514.299.462.51C.46.518.459.523.456.524.454.527.45.528.443.528zm.423.009a.217.217 0 01-.089-.02C.744.514.74.51.739.507a.023.023 0 01-.002-.01V.484c0-.007.002-.01.007-.01H.75a.179.179 0 00.084.019c.02 0 .037-.003.048-.01A.036.036 0 00.899.449.032.032 0 00.89.426.082.082 0 00.857.409L.809.394A.1.1 0 01.757.36.079.079 0 01.773.249.104.104 0 01.807.233.143.143 0 01.87.228a.36.36 0 01.04.009l.015.006a.028.028 0 01.01.008.018.018 0 01.003.01v.016C.937.284.935.287.93.287A.034.034 0 01.917.285.15.15 0 00.854.27.085.085 0 00.81.28C.8.286.795.295.795.309c0 .009.003.017.01.023A.098.098 0 00.84.35l.047.015a.1.1 0 01.05.032c.01.013.016.029.016.046a.085.085 0 01-.009.038.089.089 0 01-.024.03.106.106 0 01-.036.018.156.156 0 01-.047.007z`;

    let heroku =
        "M.864 0h-.72a.09.09 0 00-.09.09v.82c0 .05.04.09.09.09h.72c.05 0 .09-.04.09-.09V.09A.09.09 0 00.865 0zm.04.91a.04.04 0 01-.04.04h-.72a.04.04 0 01-.04-.04V.09a.04.04 0 01.04-.04h.72a.04.04 0 01.04.04zM.28.85l.113-.1L.28.65zM.686.445A.164.164 0 00.566.4a.6.6 0 00-.188.035V.15h-.1v.432L.348.55S.463.498.564.498c.05 0 .062.027.062.052v.3h.1v-.3a.134.134 0 00-.04-.105zM.554.312h.1A.301.301 0 00.729.15h-.1a.369.369 0 01-.075.163z";

    let groups: SkillGroup[] = [
        {
            title: "Languages",
            items: [
                {
                    name: "Python",
                    url: "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png",
                },
                {
                    name: "Javascript",
                    url: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png",
                },
                {
                    name: "TypeScript",
                    url: "https://user-images.githubusercontent.com/25181517/183890598-19a0ac2d-e88a-4005-a8df-1ee36782fde1.png",
                },
                {
                    name: "Java",
                    svgPath: javaIconPath,
                },
                {
                    name: "C",
                    url: "https://user-images.githubusercontent.com/25181517/192106070-46255bcf-65e6-4c6b-a296-bf8d0d8fb2a7.png",
                },
                {
                    name: "C++",
                    url: "https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png",
                },
                {
                    name: "C#",
                    url: "https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png",
                },
                {
                    name: "Lisp",
                    url: "https://upload.wikimedia.org/wikipedia/commons/4/48/Lisp_logo.svg",
                },
            ],
        },
        {
            title: "Front End",
            items: [
                {
                    name: "Svelte",
                    url: "https://raw.githubusercontent.com/sveltejs/branding/master/svelte-logo.svg",
                },
                {
                    name: "React",
                    url: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png",
                },
                {
                    name: "HTML",
                    url: "https://www.w3.org/html/logo/downloads/HTML5_Badge.svg",
                },
                {
                    name: "CSS",
                    url: "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
                },
                {
                    name: "Material UI",
                    url: "https://user-images.githubusercontent.com/25181517/189716630-fe6c084c-6c66-43af-aa49-64c8aea4a5c2.png",
                },
                {
                    name: "Django",
                    url: "https://www.svgrepo.com/show/353657/django-icon.svg",
                },
            ],
        },
        {
            title: "Back End",
            items: [
                {
                    name: "Django REST",
                    url: "https://www.svgrepo.com/show/353657/django-icon.svg",
                },
                {
                    name: "Flask",
                    url: "https://github.com/twitter/twemoji/raw/master/assets/svg/2697.svg",
                },
                {
                    name: "REST API",
                    url: "https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png",
                },
                {
                    name: "FireBase",
                    url: "https://user-images.githubusercontent.com/25181517/189716855-2c69ca7a-5149-4647-936d-780610911353.png",
                },
                {
                    name: "Swagger",
                    url: "https://user-images.githubusercontent.com/25181517/186711335-a3729606-5a78-4496-9a36-06efcc74f800.png",
                },
                {
                    name: "GraphQL",
                    url: "https://user-images.githubusercontent.com/25181517/192107856-aa92c8b1-b615-47c3-9141-ed0d29a90239.png",
                },
            ],
        },
        {
            title: "Server/Networking",
            items: [
                {
                    name: "HTTP",
                    url: "https://user-images.githubusercontent.com/25181517/192107854-765620d7-f909-4953-a6da-36e1ef69eea6.png",
                },
                {
                    name: "WebSocket",
                    svgPath: WSPath,
                },
                {
                    name: "Nginx",
                    url: "https://user-images.githubusercontent.com/25181517/183345125-9a7cd2e6-6ad6-436f-8490-44c903bef84c.png",
                },
                {
                    name: "PostgresSQL",
                    url: "https://wiki.postgresql.org/images/a/a4/PostgreSQL_logo.3colors.svg",
                },
                {
                    name: "Redis",
                    url: "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
                },
            ],
        },
        {
            title: "DevOps",
            items: [
                { name: "GitHub", svgPath: GH },
                {
                    name: "BitBucket",
                    url: "https://user-images.githubusercontent.com/25181517/192108375-268c35e6-ab26-44b2-88bf-e3121a4e5083.png",
                },
                {
                    name: "Jira",
                    url: "https://user-images.githubusercontent.com/25181517/183912952-83784e94-629d-4c34-a961-ae2ae795b662.png",
                },
                {
                    name: "Git",
                    url: "https://user-images.githubusercontent.com/25181517/192108372-f71d70ac-7ae6-4c0d-8395-51d8870c2ef0.png",
                },
                {
                    name: "Dockers",
                    url: "https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png",
                },
                {
                    name: "Bash",
                    url: "https://user-images.githubusercontent.com/25181517/192158606-7c2ef6bd-6e04-47cf-b5bc-da2797cb5bda.png",
                },
            ],
        },
        {
            title: "Cloud",
            items: [
                {
                    name: "AWS",
                    svgPath: AWS,
                },
                {
                    name: "Google Cloud",
                    url: "https://user-images.githubusercontent.com/25181517/183911547-990692bc-8411-4878-99a0-43506cdb69cf.png",
                },
                {
                    name: "Heroku",
                    svgPath: heroku,
                },
            ],
        },
        {
            title: "Mobile",
            items: [
                {
                    name: "Android",
                    url: "https://user-images.githubusercontent.com/25181517/117269608-b7dcfb80-ae58-11eb-8e66-6cc8753553f0.png",
                },
                {
                    name: "Flutter",
                    url: "https://user-images.githubusercontent.com/25181517/186150365-da1eccce-6201-487c-8649-45e9e99435fd.png",
                },
                {
                    name: "Dart",
                    url: "https://user-images.githubusercontent.com/25181517/186150304-1568ffdf-4c62-4bdc-9cf1-8d8efcea7c5b.png",
                },
                {
                    name: "Android Studio",
                    url: "https://upload.wikimedia.org/wikipedia/commons/9/95/Android_Studio_Icon_3.6.svg",
                },
            ],
        },
        {
            title: "Tools/Others",
            items: [
                {
                    name: "VsCode",
                    url: "https://user-images.githubusercontent.com/25181517/192108891-d86b6220-e232-423a-bf5f-90903e6887c3.png",
                },
                {
                    name: "PostMan",
                    url: "https://user-images.githubusercontent.com/25181517/192109061-e138ca71-337c-4019-8d42-4792fdaa7128.png",
                },
                {
                    name: "npm",
                    url: "https://user-images.githubusercontent.com/25181517/121401671-49102800-c959-11eb-9f6f-74d49a5e1774.png",
                },
                {
                    name: "Figma",
                    url: "https://user-images.githubusercontent.com/25181517/189715289-df3ee512-6eca-463f-a0f4-c10d94a06b2f.png",
                },
                {
                    name: "Unity",
                    url: "https://user-images.githubusercontent.com/25181517/193427941-9437dbbe-376f-40dc-9573-0ef5c02a26a7.png",
                },
            ],
        },
        {
            title: "Desktop Application",
            items: [
                {
                    name: "Qt",
                    url: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg",
                },
                {
                    name: "Electron",
                    url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Electron_Software_Framework_Logo.svg",
                },
                {
                    name: "Tkinter",
                    url: "https://raw.githubusercontent.com/twitter/twemoji/master/assets/svg/1fab6.svg",
                },
                {
                    name: "Win32 API",
                    url: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Windows_logo_-_2012.svg",
                },
            ],
        },
    ];

    onMount(()=>{
        $pageState = PageState.NeedTransition;
    })

</script>

<div id="outer" transition:fade|global={{duration:150}} onoutroend={finishOutro}>
    <div id="inner">
        <Intro />
        <Section title="Languages, Technologies and Tools">
            {#each groups as group}
                <InfoBox title={group.title}>
                    {#each group.items as item}
                        <IconListItem
                            src={item.url}
                            path={item.svgPath}
                            key={item.name}>{item.name}</IconListItem
                        >
                    {/each}
                </InfoBox>
            {/each}
        </Section>
    </div>
</div>


<style>
    div#outer {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    div#inner {
        display: flex;
        gap: 4rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
