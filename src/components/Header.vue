<template>
    <div id='header'>
        <div id='info-container'>
            <h1 class='large'>BRYCE SAMPSON</h1>
            <p>The New v4.0</p>
            <p>The ultimate build tool! Why? Because it builds stuff. 'Nuff said!</p>
        </div>
        <div id='navigation-container'>
            <ul>
                <li class="nav-list-item"><a class='nav-link' @click="scrollTo('#qualifications')">Qualifications</a></li>
                <li class="nav-list-item"><a class='nav-link' @click="scrollTo('#whatsnew')">What's New?</a></li>
                <li class="nav-list-item"><a class='nav-link' @click="scrollTo('#documentation')">Documentation</a></li>
                <li class="nav-list-item"><a class='nav-link' @click="scrollTo('#supporters')">Supporters</a></li>
                <li class="nav-list-item"><a class='nav-link' @click="scrollTo('#contact')">Contact</a></li>
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
    },
    methods: {
        scrollTo: function scrollTo(element){
            this.$scrollTo(element, 1000, { easing: 'ease' });
        }
    },
}
</script>

<style lang="scss">
#header {
    height: 100vh;
    background: $secondary;
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
        color: $primary;
    }
}
</style>