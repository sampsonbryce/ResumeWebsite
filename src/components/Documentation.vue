<template>
<div id='documentation'>
    <div>
        <h1 class='large'>DOCUMENTATION</h1>
    </div>
    <div id='getting-started'>
        <h3>Getting Started</h3>
        <p>If you are interested in adding Bryce to your stack then just use this command and it will handle everything for you!</p>
        <span class='code'>$> ./contact-bryce.sh --priority=high</span>
        <a id='go-button' class="button" @click='$scrollTo("#contact", 1000)'>Try It!</a>
    </div>
    <div id='examples'>
        <h3>Examples</h3>
        <div id='example-container'>
            <div class='example-item'>
                <h2>HeroHome</h2>
                <p>Charitable Chrome Extension and Home Page</p>
                <a class='example-more-button button with-icon' @click="changeExample(1)">
                    <span v-if="example == 1"><icon name="chevron-up" /></span>
                    <span v-else><icon name="chevron-down" /></span>
                </a>

                <!-- Duplicate selected item for mobile -->
                <div v-if="example == 1" class="selected-example-item mobile">
                    <a class='button with-icon white' href="https://home.heroinc.io" target="_blank"><icon name="external-link" /></a>
                    <p>A very recent example of software built with v4.0, HeroHome is a webpage and Chrome extension intended to be used as a replacement for your New Tab. The page will display ads while you open new tabs and search, all proceeds of which 
                        will be directed to charity. This particular implementation uses Node.js and Express as well as the new Vue.js features implemented in v4.0!
                    </p>
                </div>
            </div>
            <div class='example-item '>
                <h2>DayInTheLife Blog</h2>
                <p>Personal blog with article management tools</p>
                <a class='example-more-button button with-icon' @click="changeExample(2)">
                    <span v-if="example == 2"><icon name="chevron-up" /></span>
                    <span v-else><icon name="chevron-down" /></span>
                </a>
                <!-- Duplicate selected item for mobile -->

                <div v-if="example == 2" class="selected-example-item mobile">
                    <a class='button with-icon white' href="https://github.com/sampsonbryce/DayInTheLife" target="_blank"><icon name="github" /></a>
                    <p>Another more recent expedition into the v4.0 Vue.js feature, DayInTheLife was intended as a blog for the Bryce project. It was built using Node.js and Vue.js, resulting in the features now included in v4.0. Unfortunately the site 
                        had very little popularity and was taken down for cost reasons.
                    </p>
                </div>
            </div>
            <div class='example-item'>
                <h2>DataSift Visualization</h2>
                <p>Visualization of national sentiment towards selected topics</p>
                <a class='example-more-button button with-icon' @click="changeExample(3)">
                    <span v-if="example == 3"><icon name="chevron-up" /></span>
                    <span v-else><icon name="chevron-down" /></span>
                </a>
                <!-- Duplicate selected item for mobile -->

                <div v-if="example == 3" class="selected-example-item mobile">
                    <a class='button with-icon white' href="https://github.com/sampsonbryce/datasift-visualization" target="_blank"><icon name="github" /></a>
                    <p> Another JavaScript project, DataSift was intended as a prototype for an idea that relied on the DataSift API. It was rather simple but used D3 for the visualization which was new ground for the Bryce build tool.  
                    </p>
                </div>
            </div>
        </div>

        <!-- Desktop selected items -->
            <div id='selected-example' class='desktop'>
                <transition name="uncover">
                    <div v-if="example == 1" class="selected-example-item ">
                        <a class='button with-icon white' href="https://home.heroinc.io" target="_blank"><icon name="external-link" /></a>
                        <p>A very recent example of software built with v4.0, HeroHome is a webpage and Chrome extension intended to be used as a replacement for your New Tab. The page will display ads while you open new tabs and search, all proceeds of which 
                            will be directed to charity. This particular implementation uses Node.js and Express as well as the new Vue.js features implemented in v4.0!
                        </p>
                    </div>
        </transition>

                <transition name="uncover">
                <div v-if="example == 2" class="selected-example-item">
                    <a class='button with-icon white' href="https://github.com/sampsonbryce/DayInTheLife" target="_blank"><icon name="github" /></a>
                    <p>Another more recent expedition into the v4.0 Vue.js feature, DayInTheLife was intended as a blog for the Bryce project. It was built using Node.js and Vue.js, resulting in the features now included in v4.0. Unfortunately the site 
                        had very little popularity and was taken down for cost reasons.
                    </p>
                </div>
        </transition>

                <transition name="uncover">
                <div v-if="example == 3" class="selected-example-item">
                    <a class='button with-icon white' href="https://github.com/sampsonbryce/datasift-visualization" target="_blank"><icon name="github" /></a>
                    <p> Another JavaScript project, DataSift was intended as a prototype for an idea that relied on the DataSift API. It was rather simple but used D3 for the visualization which was new ground for the Bryce build tool.  
                    </p>
                </div>
        </transition>
            </div>

        <div id='more-examples'>
            <h3>Find more examples and usable code here <a class='button with-icon white' href="https://github.com/sampsonbryce" target="_blank"><icon name="github" /></a></h3>
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
                }, 500)
            }
        },
    }
}
</script> 
<style lang="scss" scoped>

.slide-enter-active, .slide-enter-leave{
    transition: all 5s ease;
}
.slide-enter, .slide-leave-to{
    height: 0px;
}
.slide-enter-to, .slide-leave{
    height: 200px;
}

.uncover-enter-active, .uncover-leave-active{
    transition: all .5s ease;
}
.uncover-enter, .uncover-leave-to{
    opacity: 0;
}
.uncover-enter-to, .uncover-leave{
    opacity: 1;
}

#documentation{
    color:black;
    min-height:100vh;
    display:grid;
    align-items:center;
    grid-template-rows: 30% 70%;
    @media (max-width: $phone){
        height: auto;
    }
    padding:10px;
}

.code{
    background:rgb(223, 223, 223);
    border-radius: 2px;
    padding:4px 20px 4px 20px;
}

#go-button{
    padding: 10px;

    @media (max-width: $phone){
        margin: 10px;
        // width:90%;
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
    flex:1;

    @media (max-width: $phone){
        grid-template-columns: 100%;
        grid-template-rows: auto;
    }
}

.button{
    display:inline-block;
    border-radius:1px;
    color:black;
    background:$primary;
    cursor: pointer;
    transition: background .3s ease, color .3s ease;

    &.with-icon{
        padding:10px 10px 5px 10px;
    }

    &:hover{
        background: $secondary;
        color:white;
    }
    &.white{
        background: $secondary;
        color:white;
        border: 1px solid $secondary;
        &:hover{
            background: white;
            color:$secondary;
        }
    }
}

#selected-example{
    margin-top: 20px;
    flex:1;
    overflow:hidden;
}

.selected-example-item{
    display:grid;
    justify-items: center;
    overflow:hidden;
    padding: 10px 0 10px 0;
    height:auto;

    & p{
        width:50%;
        @media(max-width: $phone){
            width: 90%;
        }
    }
}

.example-more-button{
    display:inline-block;
    width:50%;
    
}

#more-examples{
    flex:1;
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