<template>
    <div id='header'>
        <div id='info-container'>
            <h1>BRYCE SAMPSON</h1>
        </div>
        <div id='navigation-container'>
            <ul>
                <li>Projects</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: 'header-component',
    data(){
        return {
        }
    }
}
</script>

<style lang="scss">
#header {
    height: 100vh;
    background: black;
    display: grid;
    grid-template-columns: 200px auto 200px;
    grid-template-rows: 100%;
    // grid-template-areas:
        // ". info nav";
}

#info-container {
    grid-area: "info";
    grid-column: 2 / 3;
    align-self: center;

}

#navigation-container{
    grid-area: "nav";
    grid-column: 3 / 4;
    align-self: center;
}
</style>