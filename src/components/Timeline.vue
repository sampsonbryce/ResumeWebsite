<template>
<div class='container'>
    <span id='visibility-pixel' v-observe-visibility="showChart"></span>
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
        generateBar(){
            this.bar = {
                color: ["#de4f4f"],
                title: {
                    text: "DEVELOPMENT TIMELINE",
                    left: 'center',
                    textStyle: titleTextStyle
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {          
                        type : 'shadow'       
                    },
                    formatter: function (params) {
                        var tar = params[1];
                        return full_name[tar.name] + '<br/>' + tar.seriesName + ' : ' + tar.value;
                    }
                },
                grid: {
                    left: '40px',
                    right: '30px',
                    bottom: '3%',
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
                        barwidth:'100%',
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
                        data: [2018, 2017, 2016, 2015.5, 2014, 2017]
                    },
                    {
                        name: 'Years',
                        type: 'bar',
                        barwidth:'100%',
                        stack: 'a',
                        label: {
                            normal: {
                                show: true,
                                position: 'inside',
                                formatter(params){
                                    let { data: value } = params;
                                    let time = "";
                                    if(value >= 1){
                                        time = "Year";
                                        if(value > 1){
                                            time += "s";
                                        }
                                    }else{
                                        value *= 10;
                                        if(window.innerWidth > 768){

                                            time = "Month";
                                            if(value > 1){
                                                time += "s";
                                            }
                                        }else{
                                            time = "M";
                                            if(value < 5){
                                                time = "";
                                            }
                                        }
                                    }

                                    return `${value} ${time}`;
                                }
                            },
                            
                        },
                        data:[.9, .3, .9, .5, 5, 1]
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
    position:relative;
    @media (max-width: $phone){
        padding:0 10px;
    }
}
.chart{
    width:100%;
    margin: 50px 0;
}
#visibility-pixel{
    position:absolute;
    top: 40px;
}
</style>