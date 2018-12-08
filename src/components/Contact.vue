<template>
<div id="contact">
    <div>
        <h1 class='large'>WANT TO KNOW MORE?</h1>
    </div>
    <div id='button-container'>
        <a class='button' @click='copyEmail'>
            <icon name='envelope' scale='1.5'/>
            <span class='text' id='email'>sampson.bryce@yahoo.com</span>
        </a>
        <a class='button' target='_blank' href='https://github.com/sampsonbryce'>
            <icon name='github-square' scale='1.5' />
            <span class='text'>sampsonbryce</span>
        </a>
        <a class='button' target='_blank' href='https://github.com/sampsonbryce/LatexResume/blob/master/Resume_Bryce_Sampson_Technical.pdf'>
            <icon name='file' scale='1.5'/>
            <span class='text'>Resume</span>
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
    width:100%;
    height:500px;
    background: $primary;
    color:$white;
    display: grid;
    align-items:center;
    padding:10px;
}

#button-container{
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    align-items:center;
    @media(max-width: $phone){
        flex-direction:column;
    }
}

.button {
    display:flex;
    justify-content:space-between;
    width: 300px;
    margin: 5px;
    border: 1px solid $secondary;
    background: $secondary;
    color:$white; 
    &:hover{
        background: $primary;
        color:$secondary;
    }
}

</style>