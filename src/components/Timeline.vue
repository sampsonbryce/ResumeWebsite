<template>
<div class='container section' id="dev-timeline">
        <span id='visibility-pixel' v-observe-visibility="showChart"></span>
        <h1 class='large'>DEVELOPMENT TIMELINE</h1>
        <v-chart 
            class='chart'
            :options="bar"
        />
</div>
</template>

<script>
import ECharts from 'vue-echarts';

const logo_icons = {
    DBH: "src/assets/images/dbh_logo.jpg",
    WDAY: "src/assets/images/wday_logo.png",
    SHR: "src/assets/images/shr_logo.jpg",
    LLNL: "src/assets/images/llnl_logo.jpg",
    CHICO: "src/assets/images/chico_state_logo.png",
    LINNAEUS: "src/assets/images/linnaeus_logo.png",
}

const full_name = {
    DBH: "DesignByHumans",
    WDAY: "Workday",
    SHR: "SocialHighRise",
    LLNL: "Lawrence Livermore National Laboratory",
    CHICO: "Chico State",
    LINNAEUS: "Linnaeus University",
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

const itemStyleSchool = {
    ...itemStyle,
    color:'rgba(10,10,50,1)'
}

export default {
    name: "timeline-component",
    components: {
        'v-chart': ECharts
    },
    data(){
        return {
           bar: null,
           series: null
        }
    },
    methods:{
        showChart(isVisible, entry){
            if(isVisible){
                this.bar.series = this.series;
                this.bar = {...this.bar}; //  to trigger update
            }
        },
        barDateFormatter(params){
            if(!params.data.months){
                return "";
            }
            let { data: { months }} = params;
            let time = "";
            let value = months;
            if(value >= 12){
                value /= 12;
                time = "Year";
                if(value> 1){
                    time += "s";
                }
            }else{
                if(window.innerWidth > 768 && value > 3){

                    time = "Month";
                    if(value > 1){
                        time += "s";
                    }
                }else{
                    time = "M";
                    if(window.innerWidth <= 768 && value < 5){
                        time = "";
                    }
                }
            }

            return `${value} ${time}`;
        },
        generateBar(){
            this.bar = {
                color: ["#de4f4f"],
                // title: {
                //     text: "DEVELOPMENT TIMELINE",
                //     left: 'center',
                //     textStyle: titleTextStyle
                // },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {          
                        type : 'shadow'       
                    },
                    formatter: function (params) {
                        var tar;
                        if(params[1].data != '-'){
                            tar = params[1];
                        }else{
                            tar = params[2];
                        }
                        return full_name[tar.name] + '<br/>' + tar.seriesName + ' : ' + tar.value;
                    }
                },
                legend: {
                    left:'70px',
                    top:'0px',
                    data: ['School', 'Work']
                },
                grid: {
                    left: '40px',
                    right: '30px',
                    bottom: '40px',
                    top:'0px',
                    height:'400px',
                    containLabel: true
                },
                yAxis: {
                    type : 'category',
                    splitLine: {show:false},
                    data : ['DBH','WDAY','SHR','LLNL','CHICO','LINNAEUS'],
                    axisLabel: {
                        formatter: function (value) {
                            return '{' + value + '| }';
                        },
                        margin: 20,
                        rich: {
                            value: {
                                lineHeight: 30,
                                align: 'center'
                            },
                            DBH: {
                                height: 40,
                                align: 'center',
                                backgroundColor: {
                                    image: logo_icons.DBH
                                }
                            },
                            WDAY: {
                                height: 40,
                                align: 'center',
                                backgroundColor: {
                                    image: logo_icons.WDAY
                                }
                            },
                            SHR: {
                                height: 40,
                                align: 'center',
                                backgroundColor: {
                                    image: logo_icons.SHR
                                }
                            },
                            LLNL: {
                                height: 40,
                                align: 'center',
                                backgroundColor: {
                                    image: logo_icons.LLNL
                                }
                            },
                            CHICO: {
                                height: 40,
                                align: 'center',
                                backgroundColor: {
                                    image: logo_icons.CHICO
                                }
                            },
                            LINNAEUS: {
                                height: 40,
                                align: 'center',
                                backgroundColor: {
                                    image: logo_icons.LINNAEUS
                                }
                            }
                        },
                    }
                },
                xAxis: {
                    type : 'value',
                    min: 2014,
                    max: 2019,
                    axisLabel:{
                        rotate: -45,
                        formatter(value, index){
                            return value; // to remove the default formatter that added commas
                        }
                    }
                }
            };
            this.series = [
                    {
                        name: 'invisible',
                        type: 'bar',
                        stack:  'a',
                        itemStyle: {
                            normal: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            },
                            emphasis: {
                                barBorderColor: 'rgba(0,0,0,0)',
                                color: 'rgba(0,0,0,0)'
                            }
                        },
                        data: [2018, 2016.8, 2016, 2015.5, 2014, 2017]
                    },
                    {
                        name: 'School',
                        type: 'bar',
                        barwidth:'80%',
                        stack: 'a',
                        itemStyle: itemStyleSchool,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                formatter: (params) => {return this.barDateFormatter(params); }
                            },
                            
                        },
                        data:[
                            '-',
                            '-',
                            '-',
                            '-',
                            {value: 4.8, months: 60},
                            {value: 1, months: 12},
                        ]
                    },
                    {
                        name: 'Work',
                        type: 'bar',
                        barWidth:'80%',
                        stack: 'a',
                        itemStyle,
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                formatter: (params) => {return this.barDateFormatter(params); }
                            },
                            
                        },
                        data:[
                            {value: .8, months: 9},
                            {value: .2, months: 3},
                            {value: .8, months: 9},
                            {value: .5, months: 6},
                        ]
                    }
                ]
        }
    },
    created(){
        // set graph styles on mobile
        if(window.innerWidth <= 768){
            titleTextStyle.fontSize = 30;
        }
        this.generateBar();
    }
}
</script>

<style lang="scss" scoped>
.container{
    display:grid;
    grid-template-rows: 100px 1fr;
    position:relative;
    height:700px;

    @media (max-width: $phone){
        padding:0 10px;
    }
}
h1{
    color:$secondary;
    margin:40px 0;
}
.chart{
    width:100%;
    height:500px;
    margin: 50px 0;
}
#visibility-pixel{
    position:absolute;
    top: 40px;
}
</style>