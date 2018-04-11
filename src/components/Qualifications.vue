<template>
<div id='content'>
<div id='qualifications'>
    <div>
        <h1 class='large'>QUALIFICATIONS</h1>
        <h3>Built to be fast</h3>
        <p id="about">Since its conception in small town in northern California, Mount Shasta, the goal has always been to build anything and everything with the hopes that one day something would stick and impact the world at large.
            Recently that goal has changed slightly. We have shifted towards impacting the world through more noble causes from charitable work to dreams of being part of a space exploration team to benefitting the scientific community through
            global warming work such as with v1.0. We want to not only change the world but strive to improve the human race while we are at it!
            </p>
    </div>
    <div id='university-container'>
        <div> 
            <div id='chico-image'>
                <img  src="~images/chico.png" />
            </div>
            <h1>California State University, Chico California</h1>
            <h3>Bachelors - Computer Science - Expected June 2019</h3>
        </div>
        <div> 
            <div id='linnaeus-image'>
                <img src="~images/linnaeus-resize.png" />
            </div>
            <h1>Linnaeus University, Vaxjo Sweden </h1>
            <h3>2017-2018 Academeic Year Abroad</h3>
        </div>
    </div>
    <div id='benchmarks'>
        <h3>Destroying the Benchmarks!</h3>
        <p>Major GPA: 3.95</p>
        <p>Cummulative GPA: 3.77</p>
    </div>
</div>
</div>
</template>

<script>
export default {
    name: "qualifications-component",
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>

#qualifications{
    background: white;
    color: $secondary;
    min-height:100vh;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 1fr 2fr 1fr;
    justify-items: center;
    align-items: center;
    & h1{
        display: inline-block;
        margin-bottom:0px;
        color: $primary;
        font-weight: 200;
    }
    & h3{
        margin-top:5px;
    }
    &>div{
        display: grid;
        justify-items: center;
    }
    
    @media (max-width: $phone){
        height: auto;
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
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 100%;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
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
    & h3{
        font-size: 1.7rem;
    }
    & p{
        margin: 5px 0 0 0;
    }
}
</style>