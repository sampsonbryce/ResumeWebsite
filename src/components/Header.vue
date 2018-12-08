<template>
    <div id='header'>
        <div id='info-container'>
            <h1 class='large'>BRYCE SAMPSON</h1>
            <p>The New v4.0</p>
            <p>The ultimate build tool! Why? Because it builds stuff. 'Nuff said!</p>
        </div>
        <div id="mobile-nav-bar" :class="{showname: showName}" class="shadow-2">
            <h2 id="name" @click='$scrollTo("#header")'>Bryce The Builder</h2>
            <a @click='$scrollTo("#contact", 1000)' class="button">Contact</a>
            <a @click="(showNav ? showNav = false : showNav = true)" id='nav-toggle'><icon name='bars' /></a>
        </div>
        <div id='navigation-container' :class='{ showsidebar : showNav }'>
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
            showNav: false,
            showName: false
        }
    },
    methods: {
        scrollTo: function scrollTo(element){
            let offset = -60;
            this.$scrollTo(element, 1000, { easing: 'ease', offset });
        },
        handleScroll(){
            let scrollHeight = window.scrollY;
            // console.log(scrollHeight);
            if(scrollHeight > 300){
                this.showName = true;
            }else{
                this.showName = false;
            }
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
    } 
}
</script>

<style lang="scss">
#header {
    width:100%;
    background: $secondary;
    min-height: 100vh;
    display: grid;
    align-items: center;
    grid-template-columns:200px 1fr 200px;

    & .showsidebar{
        @media (max-width: $phone){
            right: 0;
            height:100%;
            border-left:1px solid $white;
        }
    }
    @media (max-width: $phone){
        grid-template-columns:0 1fr 0;
    }
}

#info-container {
    grid-area: "info";
    grid-column: 2 / 3;
    align-self: center;
}

#mobile-nav-bar{
    display:flex;
    position: fixed;
    align-items:center;
    z-index:1;
    width: 100%;
    height:60px;
    background-color:$secondary;
    border-bottom:1px solid $white;
    transition: all .3s ease;    

    &.showname{
        & #name{
            width:300px;
        }
        & .button{
            border-left: 1px solid $white;
        }
    }

    & #name{
        width:0;
        overflow:hidden;
        font-weight:300;
        white-space:nowrap;
        transition: all .3s ease;    
        cursor:pointer;
    }

    & .button{
        flex:1;
        height:100%;
        color:$white;
        transition: all .3s ease;    
    }
}

#nav-toggle{
    display:none;
    transition: right .5 ease;
    border-left:1px solid $white;
    height: 100%;
    width: 60px;
    align-items: center;
    justify-content: center;
    &:active{
        background-color:$white;
        color:black;
    }
    @media (max-width: $phone){
        display: flex;
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
        height:100%;
        background:$secondary;
        position:fixed;
        top:60px;
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
    background:$white;
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