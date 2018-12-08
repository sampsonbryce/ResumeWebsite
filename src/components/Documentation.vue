<template>

<div class='container'>
    <div id='documentation' class='section'>
        <div>
            <h1 class='large'>DOCUMENTATION</h1>
        </div>
        <div id='getting-started'>
            <h3>Getting Started</h3>
            <div class="content">
                <p>If you are interested in adding Bryce to your stack then just use this command and it will handle everything for you!</p>
                <span class='code'>$> ./contact-bryce.sh --priority=high</span>
                <a id='go-button' class="button" @click='$scrollTo("#contact", 1000)'>Try It!</a>
            </div>
        </div>
        <div id='examples'>
            <h3>Examples</h3>
            <div id='example-container'>
                <div class='example-item'>
                    <h2>HeroHome</h2>
                    <p>Charitable Chrome Extension and Home Page</p>
                    <a class='example-more-button button with-icon' @click="changeExample(1)" :class="{active: example == 1}">
                        <span v-if="example == 1"><icon name="chevron-up" /></span>
                        <span v-else><icon name="chevron-down" /></span>
                    </a>

                    <!-- Duplicate selected item for mobile -->
                    <div class="selected-example-item mobile" :class="{show: example == 1}">
                        <a class='button with-icon $white' href="https://home.heroinc.io" target="_blank"><icon name="external-link" class="icon"/> home.heroinc.io</a>
                        <p>A very recent example of software built with v4.0, HeroHome is a webpage and Chrome extension intended to be used as a replacement for your New Tab. The page will display ads while you open new tabs and search, all proceeds of which 
                            will be directed to charity. This particular implementation uses Node.js and Express as well as the new Vue.js features implemented in v4.0!
                        </p>
                    </div>
                </div>
                <div class='example-item '>
                    <h2>DayInTheLife Blog</h2>
                    <p>Personal blog with article management tools</p>
                    <a class='example-more-button button with-icon' @click="changeExample(2)" :class="{active: example == 2}">
                        <span v-if="example == 2"><icon name="chevron-up" /></span>
                        <span v-else><icon name="chevron-down" /></span>
                    </a>
                    <!-- Duplicate selected item for mobile -->

                    <div class="selected-example-item mobile"  :class="{show: example == 2}">
                        <a class='button with-icon $white' href="https://github.com/sampsonbryce/DayInTheLife" target="_blank"><icon name="github" class="icon"/></a>
                        <p>Another more recent expedition into the v4.0 Vue.js feature, DayInTheLife was intended as a blog for the Bryce project. It was built using Node.js and Vue.js, resulting in the features now included in v4.0. Unfortunately the site 
                            had very little popularity and was taken down for cost reasons.
                        </p>
                    </div>
                </div>
                <div class='example-item'>
                    <h2>DataSift Visualization</h2>
                    <p>Visualization of national sentiment towards selected topics</p>
                    <a class='example-more-button button with-icon' @click="changeExample(3)" :class="{active: example == 3}">
                        <span v-if="example == 3"><icon name="chevron-up" /></span>
                        <span v-else><icon name="chevron-down" /></span>
                    </a>
                    <!-- Duplicate selected item for mobile -->

                    <div class="selected-example-item mobile"  :class="{show: example == 3}">
                        <a class='button with-icon $white' href="https://github.com/sampsonbryce/datasift-visualization" target="_blank"><icon name="github"  class="icon"/></a>
                        <p> Another JavaScript project, DataSift was intended as a prototype for an idea that relied on the DataSift API. It was rather simple but used D3 for the visualization which was new ground for the Bryce build tool.  
                        </p>
                    </div>
                </div>
            </div>

            <!-- Desktop selected items -->
                <div id='selected-example' class='desktop'>
                    <transition name="uncover">
                        <div class="selected-example-item " :class="{show: example == 1}">
                            <a class='button with-icon $white' href="https://home.heroinc.io" target="_blank"><icon name="external-link" /></a>
                            <p>A very recent example of software built with v4.0, HeroHome is a webpage and Chrome extension intended to be used as a replacement for your New Tab. The page will display ads while you open new tabs and search, all proceeds of which 
                                will be directed to charity. This particular implementation uses Node.js and Express as well as the new Vue.js features implemented in v4.0!
                            </p>
                        </div>
            </transition>

                    <transition name="uncover">
                    <div class="selected-example-item"  :class="{show: example == 2}">
                        <a class='button with-icon $white' href="https://github.com/sampsonbryce/DayInTheLife" target="_blank"><icon name="github" /></a>
                        <p>Another more recent expedition into the v4.0 Vue.js feature, DayInTheLife was intended as a blog for the Bryce project. It was built using Node.js and Vue.js, resulting in the features now included in v4.0. Unfortunately the site 
                            had very little popularity and was taken down for cost reasons.
                        </p>
                    </div>
            </transition>

                    <transition name="uncover">
                    <div class="selected-example-item" :class="{show: example == 3}">
                        <a class='button with-icon $white' href="https://github.com/sampsonbryce/datasift-visualization" target="_blank"><icon name="github" /></a>
                        <p> Another JavaScript project, DataSift was intended as a prototype for an idea that relied on the DataSift API. It was rather simple but used D3 for the visualization which was new ground for the Bryce build tool.  
                        </p>
                    </div>
            </transition>
                </div>

            <div id='more-examples'>
                <h4>Find more examples and usable code here <a class='button with-icon $white' href="https://github.com/sampsonbryce" target="_blank"><icon name="github" /></a></h4>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "documentation-component",
    data(){
        return {
            example: 0,
            show: false
        }
    },
    methods: {
        changeExample: function changeExample(number){
            let old_example = this.example;
            if(number != 0 && old_example == 0){
                this.example = number;
            }
            else{
                this.example = 0;
            }
            if (old_example != 0 && number != old_example){
                setTimeout(() => {
                    this.example = number;
                }, 300)
            }
        },
    }
}
</script> 
<style lang="scss" scoped>

.container{
    background:$secondary;
}

h3{
    color:$primary;
    font-weight: 200;
    font-size: 2em;
}


#documentation{
    color:$white;
    min-height:100vh;
    display:grid;
    justify-items:center;
    align-content:center;
    @media (max-width: $phone){
        height: auto;
    }
    padding:10px;
}
#getting-started{
    display: flex;
    flex-direction: column;
    align-items: center;
    width:600px;

    & .content{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color:$white;
        color:$secondary;
        padding:20px 0 40px 0;
    }

    @media (max-width: $phone){
        width:100%;
    }
}

.code{
    color:$secondary;
    display:inline-block;
    width:350px;
    margin-bottom:10px;
    background:rgb(223, 223, 223);
    border-radius: 2px;
    padding:4px 20px 4px 20px;
}

#go-button{
    padding: 10px;
    width:350px;

    @media (max-width: $phone){
        margin: 10px;
        display:block;
    }
}

#examples{
    display: flex;
    flex-direction:column;
}

#example-container{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 100%;
    grid-gap:10px;
    flex:1;
    & .example-item{
        background-color:$white;
        color:$secondary;
        padding-bottom:20px;
        display:flex;
        flex-direction: column;
        align-items:center;
        justify-content:space-between;
        & .active{
            color:$white;
            background-color:$secondary;
        }
    }

    @media (max-width: $phone){
        grid-template-columns: 100%;
        grid-template-rows: auto;
    }
}

#selected-example{
    margin-top: 20px;
    flex:1;
    overflow:hidden;
}

.selected-example-item{
    display:flex;
    height:0px;
    justify-content:space-around;
    align-items:center;
    flex-direction:column;
    overflow:hidden;
    transition: all .3s ease;
    background-color:$white;
    color:$secondary;

    & .button{
        margin:10px;
        padding-bottom: 10px;
        & .icon{
            margin-right: 10px;
            vertical-align:middle;
        }
    }
    & p{
        width:700px;
        @media(max-width: $phone){
            width: 100%;
            padding:10px;
        }
    }
    &.show{
        height:200px;
    }
    &.mobile.show{
        height:300px;
    }
}

.example-more-button{
    display:inline-block;
    width:50%;
    
}

#more-examples{
    flex:1;
    & .button{
        display:inline-block;
    }
}

.mobile{
    display: none;
    @media(max-width: $phone){
        display: grid;
    }
}

.desktop{
    display: block;
    @media(max-width: $phone){
        display: none;
    }
}
</style>