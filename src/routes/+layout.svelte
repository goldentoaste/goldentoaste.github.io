
<script>
    import NavBar from "./NavBar.svelte";
    import '../global.css';

    let items = [
        {
            name: "Home",
            dest:"/"
        },
        {
            name:"Projects",
            dest:"/projects"
        },
        {
            name:"Others",
            dest:"Others"
        }
    ]
</script>


<NavBar {items}></NavBar>

<slot/>

<style>

</style>