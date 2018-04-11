<template>
<div id="contact">
    <div>
        <h1 class='large'>WANT TO KNOW MORE?</h1>
    </div>
    <div>
        <a class='button' @click='copyEmail'>
            <icon name='envelope' scale='1.5'/>
            <span class='text' id='email'>sampson.bryce@yahoo.com</span>
        </a>
        <a class='button' target='_blank' href='https://github.com/sampsonbryce'>
            <icon name='github-square' scale='1.5' />
            <span class='text'>sampsonbryce</span>
        </a>
        <a class='button' target='_blank' href='https://facebook.com/bryce.sampson.3'>
            <icon name='facebook-official' scale='1.5'/>
            <span class='text'>bryce.sampson.3</span>
        </a>
        <a class='button' target='_blank' href='https://www.linkedin.com/in/bryce-sampson-a497a5b1/'>
            <icon name='linkedin-square' scale='1.5'/>
            <span class='text'>Bryce Sampson</span>
        </a>
    </div>
</div>
</template>

<script>
const copy = require('copy-text-to-clipboard')
export default {
    name: "contact-component",
    data(){
        return {

        }
    },
    methods: {
        copyEmail: function copyEmail(e){
            copy('sampson.bryce@yahoo.com')
            this.$toast('Copied!');
        }
    }
}
</script>

<style lang="scss" scoped>
#contact{
    height:500px;
    background: $primary;
    color:white;
    display: grid;
    align-items:center;
}
.button {
    cursor: pointer;
    width: 300px;
    margin-top: 5px;
    display: inline-block;
    padding: 15px;
    border: 1px solid $secondary;
    background: $secondary;
    color: white;
    transition: all .5s ease;
    & span{
        display: inline-block;
    }
    & .text{
        vertical-align: top;
        margin-top:3px;
    }
    &:hover{
        background: $primary;
        color:$secondary;
    }
}

</style>