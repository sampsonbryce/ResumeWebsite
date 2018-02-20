<template>
    <div id='header'>
        <div id='info-container'>
            <h1>BRYCE SAMPSON</h1>
            <p>The New v2.0</p>
        </div>
        <div id='navigation-container'>
            <ul>
                <li class="nav-list-item"><a class='nav-link'>What's New?</a></li>
                <li class="nav-list-item"><a class='nav-link'>Documentation</a></li>
                <li class="nav-list-item"><a class='nav-link'>Use Cases</a></li>
                <li class="nav-list-item"><a class='nav-link'>Supporters</a></li>
                <li class="nav-list-item"><a class='nav-link'>Contact</a></li>
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

.nav-list-item{
    display:flex;
    justify-content: flex-end;
    width:100%;
    margin: 10px 0 0 0;
    
}

.nav-link{
    flex:1;
    text-align:right;
    margin-left:50px;
    padding: 10px 10px 10px 0;
    border: 1px solid white;
    border-right: none;
    transition: margin-left .7s ease 0s;
    cursor: pointer;
    &:hover{
        margin-left: 0;
    }
}
</style>