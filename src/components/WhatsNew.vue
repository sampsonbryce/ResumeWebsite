<template>
<div id='whatsnew'>
    <h1>WHAT'S NEW?</h1>
    <div id='item-container'>
        <div class="new-item">
        <p>Building on eleven months of on the job python experience and numerouse occasions where quick scripting was effectively applied, v2.0 includes new and improved python language skills for speedy development. 
        You might wonder "Why Python?". The simple answer is it gets the job done is the shortest amount of time possible.</p>
        </div>
        <div class="new-item">
            <p></p>
        </div>
        <div class="new-item">
            <p>More Stuff!</p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "whatsnew-component",
    data(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
#whatsnew{
    background: #40e5d4;
    color: black;
    height:100vh;
}

#item-container {
    display:flex;
    justify-content: space-around;
}

.new-item{
    flex:1;
    border:1px solid black;
    border-radius: 5px;
    margin: 0 10px 0 10px;
    padding:10px;
}
</style>