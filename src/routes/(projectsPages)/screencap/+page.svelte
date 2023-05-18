<script>
    import IconListItem from "$lib/IconListItem.svelte";
    import { svgs } from "$lib/stores/svgs";
    import ImageFrame from "$lib/ImageFrame.svelte";
    import TechUsed from "$lib/TechUsed.svelte";
</script>




<IconListItem path={svgs.github} key="github"
    ><a target="_blank" href="https://github.com/goldentoaste/screenCap"
        >Github repo</a
    >
</IconListItem>

<p>
    A cross platform desktop app(windows only currently) that handles all your
    screen capturing needs! Designed to be efficient and customizable, through
    the extensive use of rebindable hotkeys.
</p>

<div class="top">
    <ImageFrame
        height={600}
        maxWidth={800}
        title="Demo Images"
        items={[
            {
                desc: "Images pinned in front of other programs",
                src: "screencap/pinned.png",
            },
            {
                desc: "Right click menu showcasing the various features the program has at the moment",
                src: "screencap/menu.png",
            },
        ]}
    />
    <TechUsed
        input={[
            {
                name: "Gui",
                items: [
                    {
                        name: "Python",
                        src: "icons/python.svg",
                    },
                    {
                        name: "tkinter",
                        src: "icons/tkinter.svg",
                    },
                    {
                        name: "Qt",
                        src: "icons/Qt.svg",
                    },
                ],
            },
            {
                name: "Others",
                items: [
                    { name: "🛏 Pillow" },
                    {
                        name: "Win32 api",
                        src: "icons/windows.svg",
                    },
                    {
                        name: "Nuitka",
                        src: "icons/nuitka.svg",
                    },
                ],
            },
        ]}
    />
</div>

Some notable features:

<ul>
    <li>Screen shot anything, anywhere</li>
    <li>Crop captures</li>
    <li>Pin image on top as a window, for reference</li>
    <li>Copy and paste the image to easily share it</li>
    <li>Save the captured image as multiple formats</li>
    <li>Paint and sketch on images</li>
    <li>Tracks previously closed images in a "Recycle Bin" for future use</li>
    <li>Rebindable hotkeys for most actions</li>
    <li>Native global hotkeys for each OS</li>
    <li>Record a short .gif of region of screen (work in progress)</li>
    <li>Supports Windows, Linux(soon), and MacOs(soon)</li>
</ul>

<p>
    A demo built using Tkinter is currently available <a
        href="https://github.com/goldentoaste/screenCap">Here</a
    >, currently I'm working to rebuild the program in Qt for better performance
    and cross platform compatibility.
</p>

<style>
    .top {
        display: flex;
        flex-direction: row;
        flex-flow: wrap;
    }
</style>
