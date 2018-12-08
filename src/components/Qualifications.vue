<template>
<div class='container'>
    <div id='qualifications' class='section'>
        <div id="title">
            <h1 class='large'>BENCHMARKS</h1>
            <h3>Built to be fast</h3>
            <!-- <p id="about">Since its conception in small town in northern California, Mount Shasta, the goal has always been to build anything and everything with the hopes that one day something would stick and impact the world at large.
                Recently that goal has changed slightly. We have shifted towards impacting the world through more noble causes from charitable work to dreams of being part of a space exploration team to benefitting the scientific community through
                global warming work such as with v1.0. We want to not only change the world but strive to improve the human race while we are at it!
                </p> -->
        </div>
        <div id="content">
            <div id='university-container'>
                <div class="shadow-3"> 
                    <div id='chico-image'>
                        <img  src="~images/chico.png" />
                    </div>
                    <h1>California State University, Chico California</h1>
                    <h3>Bachelors - Computer Science - Expected June 2019</h3>
                </div>
                <div class="shadow-3"> 
                    <div id='linnaeus-image'>
                        <img src="~images/linnaeus-resize.png" />
                    </div>
                    <h1>Linnaeus University, Vaxjo Sweden </h1>
                    <h3>2017-2018 Academic Year Abroad</h3>
                </div>
            </div>
            <div id='benchmarks' v-observe-visibility="benchmarksVisible">
                <div>
                    <IOdometer class="gpa" :value="gpa.major.value" />
                    <p class="gpa-title">Major GPA</p>
                </div>
                <div>
                    <IOdometer class="gpa" :value="gpa.cummulative.value" />
                    <p class="gpa-title">Cummulative GPA</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
// import odometer for spinning numbers
import IOdometer from 'vue-odometer';
import 'odometer/themes/odometer-theme-default.css';

export default {
    name: "qualifications-component",
    components: {
        IOdometer,
    },
    data(){
        return {
            gpa: {
                major: {
                    limit: 3.95,
                    value: 0.01
                },
                cummulative: {
                    limit: 3.77,
                    value: 0.01
                }
            },
        }
    },
    methods:{
        benchmarksVisible(isVisible, entry){
            if(isVisible){
                const {major, cummulative} = this.gpa;
                major.value = major.limit;
                cummulative.value = cummulative.limit;
            }
        },
    } 
}
</script>

<style lang="scss" scoped>

.container{
    background: $primary;
}

#qualifications{
    color: $secondary;
    min-height:100vh;
    display: grid;
    grid-template-rows: 200px 1fr;
    grid-template-columns: 100%;
    padding:10px;

    & h1{
        display: inline-block;
        margin-bottom:0px;
        color: $white;
        font-weight: 200;
    }
    & h3{
        margin-top:5px;
    }
    
    
    @media (max-width: $phone){
        height: auto;
    }
}

#content{
    display:grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows: 100%;
    justify-items: center;
    align-items: center;
    &>div{
        display: grid;
        justify-items: center;
    }
    @media (max-width: $phone){
        grid-template-columns:100%;
        grid-template-rows: 1fr 1fr;
    }
}

#about{
    width:60%;
    @media (max-width: $phone){
        width:90%;
    }
}
#university-container{
    height: 100%;
    display: grid;
    align-items: center;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 1fr;

    & h1{
        color:$primary;
    }
    & > div {
        width:100%;
        background-color:$white;
    }
    @media (max-width: $phone){
        grid-template-columns: 100%;
        grid-template-rows: 1fr 1fr;
    }
}

#chico-image{
    & img{
        height:200px;
    }
}

#linnaeus-image {
    height:200px;
    display: grid;
    align-items: center;
    justify-items:center;
    @media (max-width: $phone){
        height:150px;
        & img{
            height:100px;
        }
    }
}
#benchmarks {
    height:100%;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 100%;
    & h3{
        font-size: 1.7rem;
    }
    & div{
        display:grid;
        & .gpa{
            align-self:end;
            font-size: 10em;
            font-weight:200;
        }
        & .gpa-title{
            color:$white;
            align-self:start;
        }
    }
    

}
</style>