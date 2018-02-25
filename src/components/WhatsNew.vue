<template>
<div id='whatsnew'>
    <div>
        <h1 class='large'>WHAT'S NEW?</h1>
        <h3>In v4.0</h3>
    </div>
    <div id='item-container'>
        <div class="new-item">
            <img src="~images/python.png" />
        <p>Building on eleven months of on the job python experience and numerouse occasions where quick scripting was effectively applied, v4.0 includes new and improved python language skills for speedy development. 
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
    background: $primary;
    color: black;
    height:100vh;
    & h1{
        display: inline-block;
    }
    display:grid;
    align-items:center; 

    @media (max-width: $phone){
        height: auto;
    }
}

#item-container {
    display:flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 25% 0 25%;
    @media (max-width: $phone){
        flex-direction:column;
        flex-wrap: none;
        padding: 0;
    }
}

.new-item{
    width: 500px;
    box-shadow: 5px 5px $secondary;
    margin: 10px;
    padding:10px;
    background: white;
    display:grid;
    justify-items:center;
    align-items:center; 

    & img{
        height: 100px;;
    }

    @media (max-width: $phone){
        width: 90%;
    }
}
</style>