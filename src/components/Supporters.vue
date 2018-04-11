<template>
<div id="supporters">
    <div>
        <h1 class='large'>SUPPORTERS</h1>
    </div>
    <div id='supporters-container'>
        <div class='supporter'>
            <img src="~images/wday_logo.png" />
            <h2>Workday</h2>
            <h3>Environment Engineer Intern | v3 | May - August 2017</h3>
            <p>- Developed python and bash program for automated client sftp site management(creation/removal/user provisioning)</p>
            <p>- Supported Sales team with environment cloning and provisioning</p>
            <p>- Shadowed Automation Team, DB Administrators, Performance Team and Network Operations Center</p>
        </div>
        <div class='supporter'>
            <img src="~images/shr_logo.jpg" />
            <h2>SocialHighRise</h2>
            <h3>Software Developer Intern | v2 | August 2016 - May 2017</h3>
            <p>- Developed in-house account management tool to aggregate social media client data</p>
            <p>- Handled development and maintenance of company website</p>
        </div>
        <div class='supporter'>
            <img src="~images/llnl_logo.jpg" />
            <h2>Lawrence Livermore National Laboratory</h2>
            <h3>Computation Intern | v1 | January 2016 - August 2016</h3>
            <p>- Developed User Interface in PyQt for the labs large scale climate data processing library</p>
            <p>- Rebuilt the User Interface in React/Redux (JavaScript provided significantly faster graphics)</p>
        </div>
    </div>
    <div id='confused'>
        <div id='version-question'>
            <div>
                <h3>Confused by the versions?</h3>
                <a @click='(confused ? confused = false : confused = true)'><icon name='question-circle' scale='2'/></a>
            </div>
        </div>
        <div v-if='confused' id='version-explanation'>
            <p>Verison are just a fun way to indicate what I learned and when. For example v0.1 is starting college where we were taught C and C++ while v1 was my first internship (Lawrence Livermore) where I learned most of my python knowledge. v2
                indicates my second job (SocialHighRise) and v3 inidcates my 3rd (Workday). v4 indicates what version I am currently.
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "supporters-component",
    data(){
        return {
            confused: false
        }
    }
}
</script> <style lang="scss" scoped>
#supporters{
    min-height: 100vh;
    background: $secondary;
    display:grid;
    grid-template-rows: 30% 40% 30%;
    align-items:center;
    @media (max-width: $phone){
        height: auto;
    }
}
#supporters-container{
    display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: $phone){
        grid-template-rows: 1fr 1fr 1fr;
        grid-template-columns: 100%;
    }
}

.supporter{
    margin: 10px;
    & h3{
        color: $primary;
    }
    & p{
        margin: 5px 0 5px 0;
    }
    & img{
        height: 100px;
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
    width: 50%;
    margin-left:25%;
    overflow: hidden;
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