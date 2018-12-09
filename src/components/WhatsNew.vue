<template>
<div class='container'>
    <div id='whatsnew' class='section'>
        <span id='visibility-pixel' v-observe-visibility="showChart"></span>
        <!-- <div>
            <h1 class='large'>WHAT'S NEW?</h1>
            <h3>In v4.0</h3>
        </div>
        <div id='item-container'>
            <div class="new-item">
                <img src="~images/python.png" />
            <p>Building on eleven months of on the job python experience and numerous occasions where quick scripting was effectively applied, v4.0 includes new and improved python language skills for speedy development. 
            You might wonder "Why Python?". The simple answer is it gets the job done in the shortest amount of time possible!</p>
            </div>
            <div class="new-item">
                <img src="~images/javascript.png" />
                <p>JavaScript has been the main focus of v4.0 since the beginning with a major emphasis on Node.js and Vue.js. In fact, this website was built with Vue.js features now included with v4.0! v1.0 came stock with React.js support which
                    allowed those utilizing v1.0 to drastically improve performance due to the native speed of JavaScript versus previous attempts at using python. v2.0 resulted in a drastic addition of jQuery capabilites for those not so bleeding edge
                    projects that still like to do it old school style. Now with Vue.js and continued support for Node.js, anything is possible!
                </p>
            </div>
            <div class="new-item">
                <img src="~images/cc++.png" />
                <p>Althought not necessarily new, C and C++ have been a core principal since v0.1, we wanted to solidify our commitment to C and C++. Although it is has been sitting on the sidelines in favor of Python and JavaScript as of late, 
                    C and C++ remain a vital part of v4.0!</p>
            </div>
        </div> -->
        <v-chart 
            class='chart'
            :options="bar"
        />

    </div>
</div>
</template>

<script>
// import ECharts from 'vue-echarts';

let languageLabelStyle = {
    fontSize: 20,
    fontWeight:200,
}

let bigoLabelStyle = {
    fontSize: 20,
    rotate: -45,
    fontWeight:200,
}

let tooltipSettings = {
    textStyle: {
        fontSize: 15,
        width:20
    },
    extraCssText: 'width:400px;white-space:normal;',
}

let titleTextStyle = {
    fontWeight:200,
    fontSize: 40,
}

const itemStyle = {
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowBlur: 10,
    shadowOffsetX: 2,
    shadowOffsetY: 5,
}

export default {
    name: "whatsnew-component",
    // components:{
    //     'v-chart': ECharts
    // },
    data(){
        return {
            bar: null,
            series: null,
        }
    },
    methods:{
        showChart(isVisible, entry){
            if(isVisible){
                this.bar.series = this.series;
            }
        },
        generateBar(){
            this.bar = {
                color: ["#de4f4f"],
                title: {
                    text: "LANGUAGE SUPPORT",
                    left:'center',
                    textStyle: titleTextStyle, 
                },
                tooltip:{
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow',
                    },
                },
                grid:{
                    left:"0px",
                    right: "30px",
                    containLabel: true,
                },
                yAxis: {
                    type: "category",
                    data: ["Java", "C#", "C++", "Vue.js", "React Native", "JavaScript", "Python"],
                    axisLabel: {
                        ...languageLabelStyle,
                        fontWeight:500,
                    }
                },
                xAxis: {
                    type: "value",
                    axisLabel: {
                        formatter: (value) => {
                            if(value === 0){
                                return "O(n!)";
                            }
                            if(value === 20){
                                return "O(n^2)";
                            }
                            if(value === 40){
                                return "O(nlog(n))";
                            }
                            if(value === 60){
                                return "O(n)";
                            }
                            if(value === 80){
                                return "O(log(n))";
                            }
                            if(value === 100){
                                return "O(1)";
                            }
                        },
                        ...bigoLabelStyle,
                    },
                },
                series: []
            },

            this.series = [{
                    name: "Languages",
                    type: "bar",
                    barWidth: "60%",
                    data: [
                        {value: 40, itemStyle, tooltip: {
                            ...tooltipSettings,
                            formatter: () => {
                                return "From Android development to class projects, I just can't seem to escape it!";
                            }}},
                        {value: 40, itemStyle, tooltip: {
                            ...tooltipSettings,
                            formatter: () => {
                                return "Mostly gained from the ASP.Net project at SocialHighRise";
                            }}},
                        {value: 55, itemStyle, tooltip: {
                            ...tooltipSettings,
                            formatter: () => {
                                return "The core language taught at Chico State. From if statements to algorithms, its all been C++";
                            }}},
                        {value: 60, itemStyle, tooltip: {
                            ...tooltipSettings,
                            formatter: () => {
                                return "One of my favorite frameworks. This website is written in it!";
                            }}},
                        {value: 80, itemStyle, tooltip: {
                            ...tooltipSettings,
                            formatter: () => {
                                return "My preferred mobile development choice";
                            }}},
                        {value: 90, itemStyle, tooltip: {
                            ...tooltipSettings,
                            formatter: () => {
                                return "Most of my coding outside of class has been JavaScript and its associated frameworks for web and mobile. I'm familiar with ES6/ES7 syntax as well.";
                            }}},
                        {value: 90, itemStyle, tooltip: {
                            ...tooltipSettings,
                            formatter: () => {
                                return "My go to language for anything and everything. From the quick and dirty script to algorithm practice and anything in between."
                            }}
                        }
                        ]
                }]
        }
        
    },
    created(){
        // set graph styles on mobile
        if(window.innerWidth <= 768){
            bigoLabelStyle.fontSize = 15;
            languageLabelStyle.fontSize = 15;
            titleTextStyle.fontSize = 30;
            tooltipSettings.textStyle.fontSize = 10;
            tooltipSettings.extraCssText = 'width:200px;white-space:normal;';
        }

        this.generateBar();
    }
}
</script>

<style lang="scss" scoped>
.container{
    background:$white;
}
#visibility-pixel{
    position:absolute;
    top: 40px;
}
#whatsnew{
    position:relative;
    color: black;
    width:100%;
    min-height:100vh;
    & h1{
        display: inline-block;
    }
    display:grid;
    align-items:center; 
    padding:10px;
}

#item-container {
    display:flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    @media (max-width: $phone){
        flex-direction:column;
        flex-wrap: nowrap;
        padding: 10px;
    }
}

.new-item{
    max-width:400px;
    margin: 10px;
    padding:10px;
    background: $secondary;
    color: $white;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;

    & img{
        max-height:90px;
    }

    @media (max-width: $phone){
        width: auto;
        margin:10px 0;
    }
}

.chart {
    width:100%;
    height:100%;
    min-height:700px;
}
</style>