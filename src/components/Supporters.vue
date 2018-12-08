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
                    <h3>Junior Front-End Engineer | v4 | August 2018 - Current</h3>
                    <ul>
                        <li>- Develop web pages based on designer mockups, refactor backend code, and implement new features both customer facing and internal</li>
                    </ul>
                </div>
                <div id="WDAY" class="tab" :class="{show: isCurrent('WDAY')}">
                    <h2>Workday</h2>
                    <h3>Environment Engineer Intern | v3 | May - August 2017</h3>
                    <ul>
                        <li>- Developed python and bash program for automated client sftp site management(creation/removal/user provisioning)</li>
                        <li>- Supported Sales team with environment cloning and provisioning</li>
                        <li>- Shadowed Automation Team, DB Administrators, Performance Team and Network Operations Center</li>
                    </ul>
                </div>
                <div id="SHR" class="tab" :class="{show: isCurrent('SHR')}">
                    <h2>SocialHighRise</h2>
                    <h3>Software Developer Intern | v2 | August 2016 - May 2017</h3>
                    <ul>
                        <li>- Developed in-house account management tool to aggregate social media client data</li>
                        <li>- Handled development and maintenance of company website</li>
                    </ul>
                </div>
                <div id="LLNL" class="tab" :class="{show: isCurrent('LLNL')}">
                    <h2>Lawrence Livermore National Laboratory</h2>
                    <h3>Computation Intern | v1 | January 2016 - August 2016</h3>
                    <ul>
                        <li>- Developed User Interface in PyQt for the labs large scale climate data processing library</li>
                        <li>- Rebuilt the User Interface in React/Redux (JavaScript provided significantly faster graphics)</li>
                    </ul>
                </div>
            </div>
        </div>
        <div id='confused'>
            <div id='version-question'>
                <div>
                    <h3>Confused by the versions?</h3>
                    <a><icon name='question-circle' scale='2' v-tooltip="{ trigger: 'hover', content: confused}"/></a>
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
            confused: "Verisons are just a fun way to indicate what I learned and when. For example v0.1 is starting college where we were taught C and C++ while v1 was my first internship (Lawrence Livermore) where I learned most of my python knowledge. v2 indicates my second job (SocialHighRise) and v3 inidcates my 3rd (Workday). v4 indicates what version I am currently."
        }
    },
    methods:{
        showSupporter(supporter){
            this.current_supporter = supporter;
        },
        isCurrent(supporter){
            return this.current_supporter === supporter;
        }
    }
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

    @media(max-width:$phone){
        grid-template-columns: 100px 1fr;
        height:800px;
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
        }
        & h2{
            margin:60px 10px; 
            font-size:2.5em;
            text-align:center;
        }
        & h3{
            color: $secondary;
            font-weight:400;
            margin:0 10px;
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
        & img{
            height: 100px;
            
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

.slide-enter-active, .slide-leave-active{
    transition: flex 25s ease;
}
.slide-enter, .slide-leave-to{
    flex: 1;
}
.slide-enter-to, .slide-leave{
    flex:0;
}
</style>