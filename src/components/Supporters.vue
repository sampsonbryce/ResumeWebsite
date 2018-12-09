<template>
<div class='container'>
    <div id='supporters' class='section'>
        <div>
            <h1 class='large'>SUPPORTERS</h1>
        </div>
        <div id="tabs-container">
            <div id='tabs'>
                <div class='supporter' @mouseover="showSupporter('DBH')" :class="{current: isCurrent('DBH')}">
                    <img src="~images/dbh_logo.svg" />
                </div>
                <div class='supporter' @mouseover="showSupporter('WDAY')" :class="{current: isCurrent('WDAY')}">
                    <img src="~images/wday_logo.png" />
                </div>
                <div class='supporter' @mouseover="showSupporter('SHR')" :class="{current: isCurrent('SHR')}">
                    <img src="~images/shr_logo.jpg" />
                        </div>
                <div class='supporter' @mouseover="showSupporter('LLNL')" :class="{current: isCurrent('LLNL')}">
                    <img src="~images/llnl_logo.jpg" />
            </div>
            </div>
            <div id="tabs-content">
                <div id="DBH" class="tab" :class="{show: isCurrent('DBH')}" >
                    <h2>Design By Humans</h2>
                    <div class="supporter-details shadow-2">
                        <h3>Junior Front-End Engineer</h3>
                        <h3>v4</h3>
                        <h3>August 2018 - Current</h3>
                    </div>
                    <ul>
                        <li>- Develop web pages based on designer mockups</li>
                        <li>- Debug and refactor backend code to increase documentation, modularity, and separation of concerns</li>
                    </ul>
                    <div class="languages">
                        <div class="shadow-2">PHP</div>
                        <div class="shadow-2">Smarty</div>
                        <div class="shadow-2">JavaScript</div>
                        <div class="shadow-2">HTML/SCSS</div>
                        <div class="shadow-2">jQuery</div>
                    </div>
                </div>
                <div id="WDAY" class="tab" :class="{show: isCurrent('WDAY')}">
                    <h2>Workday</h2>
                    <div class="supporter-details shadow-2">
                        <h3>Environment Engineer Intern</h3>
                        <h3>v3</h3>
                        <h3>May - August 2017</h3>
                    </div>
                    <ul>
                        <li>- Automated a provisioning process using Python and Bash resulting in an estimated $100,000 savings per year in man hours</li>
                        <li>- Supported Sales team with environment cloning and provisioning</li>
                        <li>- Shadowed Automation Team, DB Administrators, Performance Team and Network Operations Center</li>
                    </ul>
                    <div class="languages">
                        <div class="shadow-2">Python</div>
                        <div class="shadow-2">Bash</div>
                    </div>
                </div>
                <div id="SHR" class="tab" :class="{show: isCurrent('SHR')}">
                    <h2>SocialHighRise</h2>
                    <div class="supporter-details shadow-2">
                        <h3>Software Developer Intern </h3>
                        <h3>v2</h3>
                        <h3>August 2016 - May 2017</h3>
                    </div>
                    <ul>
                        <li>- Developed an in-house account management tool to aggregate social media client data such as reviews, addresses, contacts, profiles, etc</li>
                        <li>- Handled development and maintenance of company WordPress website</li>
                    </ul>
                    <div class="languages">
                        <div class="shadow-2">ASP.NET MVC</div>
                        <div class="shadow-2">C#</div>
                        <div class="shadow-2">Razor</div>
                        <div class="shadow-2">JavaScript</div>
                        <div class="shadow-2">HTML/CSS</div>
                        <div class="shadow-2">jQuery</div>
                        <div class="shadow-2">WordPress</div>
                    </div>
                </div>
                <div id="LLNL" class="tab" :class="{show: isCurrent('LLNL')}">
                    <h2>Lawrence Livermore National Laboratory</h2>
                    <div class="supporter-details shadow-2">
                        <h3>Computation Intern </h3>
                        <h3>v1</h3>
                        <h3>January 2016 - August 2016</h3>
                    </div>
                    <ul>
                        <li>- Took over development of a User Interface in PySide Qt for the labs large scale climate data processing and visualization library</li>
                        <li>- Rebuilt the User Interface in React/Redux resulting in radically improved rendering times and implementation of complex features such as undo/redo</li>
                    </ul>
                    <div class="languages">
                        <div class="shadow-2">React</div>
                        <div class="shadow-2">Redux</div>
                        <div class="shadow-2">PySide Qt</div>
                        <div class="shadow-2">Python</div>
                        <div class="shadow-2">HTML/CSS</div>
                        <div class="shadow-2">JavaScript</div>
                        <div class="shadow-2">jQuery</div>
                    </div>
                </div>
            </div>
        </div>
        <div id='confused'>
            <div id='version-question'>
                <div>
                    <h3>Confused by the versions?</h3>
                    <a><icon name='question-circle' scale='2' v-tooltip="{ trigger: 'click hover', content: confused}"/></a>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "supporters-component",
    data(){
        return {
            current_supporter: "DBH",
            confused: "Verisons are just a fun way to indicate what I learned and when. For example v0.1 is starting college where we were taught C and C++ while v1 was my first internship (Lawrence Livermore) where I learned most of my python knowledge. v2 indicates my second job (SocialHighRise) and v3 inidcates my 3rd (Workday). v4 indicates what version I am currently.",
        }
    },
    methods:{
        showSupporter(supporter){
            this.current_supporter = supporter;
        },
        isCurrent(supporter){
            return this.current_supporter === supporter;
        }
    },
}
</script> 

<style lang="scss" scoped>
.container{
    background: $secondary;
}

#supporters{
    min-height: 100vh;
    background: $secondary;
    display:grid;
    align-items:center;
}

#supporters-container{
    display:flex;
    flex-wrap:wrap; 
    justify-content: center;
}

#tabs-container{
    display:flex;
    max-width:800px;
    height:100%;
    min-height:800px;

    @media(max-width:$phone){
        grid-template-columns: 100px 1fr;
        height:1000px;
    }
}

#tabs {
    display:grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-gap: 10px 10px;
    height:100%;
    & .current {
        background-color: $primary
    }
    & .supporter{
        padding:30px;
        border-radius: 20% 0 0 20%;
        display:grid;
        align-items:center;

        & img{
            height:150px;
            width:150px;
            @media(max-width:$phone){
                height:50px;
                width:50px;
            }
        }
        @media(max-width:$phone){
            padding:20px;
            border-radius: 0 0 0 0;
        }
    }
    @media (max-width: $phone){
        height:1000px;
    }
}

#tabs-content{
    background-color: $primary;
    max-width:700px;
    text-align: left;
    height:100%;
    flex:1;
    & .tab{
        height:0;
        overflow:hidden;
        transition:height .3s ease;

        &.show {
            height:800px;
            @media (max-width: $phone){
                height:1000px;
            }
        }
        & h2{
            margin:60px 10px; 
            font-size:2.5em;
            text-align:center;
        }
        &#LLNL h2{
            font-size:2em;
            margin:30px 10px; 
        }
        & .supporter-details{
            display:flex;
            flex-direction: column;
            justify-content:center;
            align-items:center;
            font-size:1em;
            line-height:2em;
            background-color:$secondary;
            margin: 0 20px;
            padding:10px 0;
            color:$white;
            & h3{
                text-align:center;
                font-weight:600;
                margin:0 10px;
            }
            & h3:not(:first-of-type){
                font-weight:400;
            }
        }
        & ul{
            margin-right:10px;
            padding-left:1em;
            text-indent: -1em;
        }
        & li{
            display:list-item;
            margin: 20px;
            font-size:1.2em;
        }
        & .languages{
            font-weight:400;
            color:$secondary;
            display:flex;
            flex-wrap:wrap;
            padding-left:15px;
            & > div{
                margin:10px;
                padding:20px;
                background-color:white;
            }
        }
        @media(max-width: $phone){
            width:auto;
        }
    }
}

#confused{
    display:flex;
    flex-direction:column;
    & h3{
    } 
    & a{
        margin-left: 15px;
        cursor: pointer;
        &:hover{
            color: $primary;
        }
    }
}

#version-question{
    flex: 1;
    display: grid;
    align-items:center;
    & div *{
        vertical-align: middle;
        display: inline-block;
    }
}

#version-explanation{
    flex:1;
    overflow: hidden;
    margin:0 40px;
    @media (max-width: $phone){
        width: 100%;
        margin: 0;
        & > p{
            padding: 0 20px 0 20px;
        }
    }

}
</style>