<template>
    <div id='header'>
        <div id='info-container'>
            <h1 class='large'>BRYCE SAMPSON</h1>
            <p>The New v4.0</p>
            <p>The ultimate build tool! Why? Because it builds stuff. 'Nuff said!</p>
        </div>
        <a @click="(showNav ? showNav = false : showNav = true)" id='nav-toggle' v-bind:class='{ extendtoggle: showNav }'><icon name='bars' /></a>
        <div id='navigation-container' v-bind:class='{ showsidebar : showNav }'>
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
            showNav: false
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
    width:100%;
    background: $secondary;
    min-height: 100vh;
    display: grid;
    grid-template-columns: 200px auto 200px;
    grid-template-rows: 100%;
    @media (max-width: $phone){
        position:relative;
        grid-template-columns: 0px auto 0px;
    }

    & .showsidebar{
        @media (max-width: $phone){
            right: 0;
        }
    }
}

#info-container {
    grid-area: "info";
    grid-column: 2 / 3;
    align-self: center;
}

#nav-toggle{
    display:none;
    position:fixed;
    top: 0px;
    right: 0px;
    background: $secondary;
    padding: 10px;
    transition: right .5 ease;
    @media (max-width: $phone){
        display:block;
    }
}

#navigation-container{
    grid-area: "nav";
    grid-column: 3 / 4;
    align-self: center;
    @media (max-width: $phone){
        & > ul {
            margin-left: 1em;
        }
        height:auto;
        background:$secondary;
        position:fixed;
        top:40px;
        right: -200px;
        z-index: 1;
        width: 170px;
        overflow-x:hidden;
        transition: right .5s ease;
    }
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
    background:white;
    color:$secondary;
    margin-left:50px;
    padding: 10px 10px 10px 0;
    border-right: none;
    transition: all .4s ease 0s;
    cursor: pointer;
    &:hover{
        margin-left: 0;
        background: $primary;
    }

    @media (max-width: $phone){
        margin-left: 0;
    }

}


</style>